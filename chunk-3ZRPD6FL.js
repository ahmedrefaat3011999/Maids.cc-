import{Pa as Nt,V as fn,cb as cn,da as Pt,db as Tt,ea as ln,eb as un,hc as vn,ib as ft,jb as lt,kb as mn,ub as Mt,vb as dn}from"./chunk-FA33HSVI.js";function pn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(e),!0).forEach(function(a){y(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):pn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xt(t)}function pe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function hn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function he(t,n,e){return n&&hn(t.prototype,n),e&&hn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Xt(t,n){return be(t)||ke(t,n)||Yn(t,n)||we()}function it(t){return ge(t)||ye(t)||Yn(t)||xe()}function ge(t){if(Array.isArray(t))return Lt(t)}function be(t){if(Array.isArray(t))return t}function ye(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ke(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function Yn(t,n){if(t){if(typeof t=="string")return Lt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Lt(t,n)}}function Lt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gn=function(){},qt={},Wn={},Hn=null,Un={mark:gn,measure:gn};try{typeof window<"u"&&(qt=window),typeof document<"u"&&(Wn=document),typeof MutationObserver<"u"&&(Hn=MutationObserver),typeof performance<"u"&&(Un=performance)}catch{}var Ae=qt.navigator||{},bn=Ae.userAgent,yn=bn===void 0?"":bn,L=qt,g=Wn,kn=Hn,ct=Un,Qa=!!L.document,F=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Bn=~yn.indexOf("MSIE")||~yn.indexOf("Trident/"),ut,mt,dt,vt,pt,T="___FONT_AWESOME___",Rt=16,Vn="fa",Gn="svg-inline--fa",U="data-fa-i2svg",jt="data-fa-pseudo-element",Ie="data-fa-pseudo-element-pending",Kt="data-prefix",Jt="data-icon",xn="fontawesome-i2svg",Se="async",Ce=["HTML","HEAD","STYLE","SCRIPT"],Xn=function(){try{return!0}catch{return!1}}(),h="classic",b="sharp",Qt=[h,b];function ot(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var tt=ot((ut={},y(ut,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(ut,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ut)),nt=ot((mt={},y(mt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(mt,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),mt)),et=ot((dt={},y(dt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(dt,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),dt)),Oe=ot((vt={},y(vt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(vt,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vt)),Ee=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qn="fa-layers-text",Pe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ne=ot((pt={},y(pt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(pt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),pt)),Kn=[1,2,3,4,5,6,7,8,9,10],Te=Kn.concat([11,12,13,14,15,16,17,18,19,20]),Me=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},at=new Set;Object.keys(nt[h]).map(at.add.bind(at));Object.keys(nt[b]).map(at.add.bind(at));var ze=[].concat(Qt,it(at),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(Kn.map(function(t){return"".concat(t,"x")})).concat(Te.map(function(t){return"w-".concat(t)})),Q=L.FontAwesomeConfig||{};function Fe(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function De(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(wn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],wn.forEach(function(t){var n=Xt(t,2),e=n[0],a=n[1],r=De(Fe(e));r!=null&&(Q[a]=r)}));var wn,Jn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vn,replacementClass:Gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var q=c(c({},Jn),Q);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(Jn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){q[t]=e,Z.forEach(function(a){return a(m)})},get:function(){return q[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){q.cssPrefix=n,Z.forEach(function(e){return e(m)})},get:function(){return q.cssPrefix}});L.FontAwesomeConfig=m;var Z=[];function _e(t){return Z.push(t),function(){Z.splice(Z.indexOf(t),1)}}var _=Rt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Le(t){if(!(!t||!F)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(n,a),t}}var Re="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rt(){for(var t=12,n="";t-- >0;)n+=Re[Math.random()*62|0];return n}function K(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Zt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Qn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function je(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Qn(t[e]),'" ')},"").trim()}function It(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function tn(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function $e(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ye(t){var n=t.transform,e=t.width,a=e===void 0?Rt:e,r=t.height,o=r===void 0?Rt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Bn?f+="translate(".concat(n.x/_-a/2,"em, ").concat(n.y/_-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/_,"em), calc(-50% + ").concat(n.y/_,"em)) "):f+="translate(".concat(n.x/_,"em, ").concat(n.y/_,"em) "),f+="scale(".concat(n.size/_*(n.flipX?-1:1),", ").concat(n.size/_*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var We=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zn(){var t=Vn,n=Gn,e=m.cssPrefix,a=m.replacementClass,r=We;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var An=!1;function zt(){m.autoAddCss&&!An&&(Le(Zn()),An=!0)}var He={mixout:function(){return{dom:{css:Zn,insertCss:zt}}},hooks:function(){return{beforeDOMElementCreation:function(){zt()},beforeI2svg:function(){zt()}}}},M=L||{};M[T]||(M[T]={});M[T].styles||(M[T].styles={});M[T].hooks||(M[T].hooks={});M[T].shims||(M[T].shims=[]);var O=M[T],te=[],Ue=function t(){g.removeEventListener("DOMContentLoaded",t),wt=1,te.map(function(n){return n()})},wt=!1;F&&(wt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),wt||g.addEventListener("DOMContentLoaded",Ue));function Be(t){F&&(wt?setTimeout(t,0):te.push(t))}function st(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Qn(t):"<".concat(n," ").concat(je(a),">").concat(o.map(st).join(""),"</").concat(n,">")}function In(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ve=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},Ft=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Ve(e,r):e,f,u,l;for(a===void 0?(f=1,l=n[o[0]]):(f=0,l=a);f<i;f++)u=o[f],l=s(l,n[u],u,n);return l};function Ge(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function $t(t){var n=Ge(t);return n.length===1?n[0].toString(16):null}function Xe(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Sn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Yt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Sn(n);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(t,Sn(n)):O.styles[t]=c(c({},O.styles[t]||{}),o),t==="fas"&&Yt("fa",n)}var ht,gt,bt,V=O.styles,qe=O.shims,Ke=(ht={},y(ht,h,Object.values(et[h])),y(ht,b,Object.values(et[b])),ht),nn=null,ne={},ee={},ae={},re={},ie={},Je=(gt={},y(gt,h,Object.keys(tt[h])),y(gt,b,Object.keys(tt[b])),gt);function Qe(t){return~ze.indexOf(t)}function Ze(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Qe(r)?r:null}var oe=function(){var n=function(o){return Ft(V,function(i,s,f){return i[f]=Ft(s,o,{}),i},{})};ne=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),ee=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),ie=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in V||m.autoFetchSvg,a=Ft(qe,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ae=a.names,re=a.unicodes,nn=St(m.styleDefault,{family:m.familyDefault})};_e(function(t){nn=St(t.styleDefault,{family:m.familyDefault})});oe();function en(t,n){return(ne[t]||{})[n]}function ta(t,n){return(ee[t]||{})[n]}function H(t,n){return(ie[t]||{})[n]}function se(t){return ae[t]||{prefix:null,iconName:null}}function na(t){var n=re[t],e=en("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function R(){return nn}var an=function(){return{prefix:null,iconName:null,rest:[]}};function St(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=tt[a][t],o=nt[a][t]||nt[a][r],i=t in O.styles?t:null;return o||i||null}var Cn=(bt={},y(bt,h,Object.keys(et[h])),y(bt,b,Object.keys(et[b])),bt);function Ct(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,o=(n={},y(n,h,"".concat(m.cssPrefix,"-").concat(h)),y(n,b,"".concat(m.cssPrefix,"-").concat(b)),n),i=null,s=h;(t.includes(o[h])||t.some(function(u){return Cn[h].includes(u)}))&&(s=h),(t.includes(o[b])||t.some(function(u){return Cn[b].includes(u)}))&&(s=b);var f=t.reduce(function(u,l){var d=Ze(m.cssPrefix,l);if(V[l]?(l=Ke[s].includes(l)?Oe[s][l]:l,i=l,u.prefix=l):Je[s].indexOf(l)>-1?(i=l,u.prefix=St(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==o[h]&&l!==o[b]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var v=i==="fa"?se(u.iconName):{},p=H(u.prefix,u.iconName);v.prefix&&(i=null),u.iconName=v.iconName||p||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!V.far&&V.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},an());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===b&&(V.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=H(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=R()||"fas"),f}var ea=function(){function t(){pe(this,t),this.definitions={}}return he(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),i[s]),Yt(s,i[s]);var f=et[h][s];f&&Yt(f,i[s]),oe()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,l=u[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(e[s][d]=u)}),e[s][f]=u}),e}}]),t}(),On=[],G={},X={},aa=Object.keys(X);function ra(t,n){var e=n.mixoutsTo;return On=t,G={},Object.keys(X).forEach(function(a){aa.indexOf(a)===-1&&delete X[a]}),On.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),xt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){G[i]||(G[i]=[]),G[i].push(o[i])})}a.provides&&a.provides(X)}),e}function Wt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=G[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function B(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=G[t]||[];r.forEach(function(o){o.apply(null,e)})}function z(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,n):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||R();if(n)return n=H(e,n)||n,In(fe.definitions,e,n)||In(O.styles,e,n)}var fe=new ea,ia=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,B("noAuto")},oa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(B("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Be(function(){fa({autoReplaceSvgRoot:e}),B("watch",n)})}},sa={icon:function(n){if(n===null)return null;if(xt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:H(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=St(n[0]);return{prefix:a,iconName:H(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Ee))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:H(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=R();return{prefix:o,iconName:H(o,n)||n}}}},I={noAuto:ia,config:m,dom:oa,parse:sa,library:fe,findIconDefinition:Ht,toHtml:st},fa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(O.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&I.dom.i2svg({node:a})};function Ot(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return st(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function la(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(tn(i)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=It(c(c({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ca(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function rn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,v=t.watchable,p=v===void 0?!1:v,x=a.found?a:e,S=x.width,C=x.height,E=r==="fak",k=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),w={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(C)})},P=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/C*16*.0625,"em")}:{};p&&(w.attributes[U]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||rt())},children:[f]}),delete w.attributes.title);var A=c(c({},w),{},{prefix:r,iconName:o,main:e,mask:a,maskId:u,transform:i,symbol:s,styles:c(c({},P),d.styles)}),$=a.found&&e.found?z("generateAbstractMask",A)||{children:[],attributes:{}}:z("generateAbstractIcon",A)||{children:[],attributes:{}},Y=$.children,Et=$.attributes;return A.children=Y,A.attributes=Et,s?ca(A):la(A)}function En(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[U]="");var l=c({},i.styles);tn(r)&&(l.transform=Ye({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var d=It(l);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function ua(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=It(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var Dt=O.styles;function Ut(t){var n=t[0],e=t[1],a=t.slice(4),r=Xt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var ma={found:!1,width:512,height:512};function da(t,n){!Xn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Bt(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=R()),new Promise(function(a,r){var o={found:!1,width:512,height:512,icon:z("missingIconAbstract")||{}};if(e==="fa"){var i=se(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Dt[n]&&Dt[n][t]){var s=Dt[n][t];return a(Ut(s))}da(t,n),a(c(c({},ma),{},{icon:m.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Pn=function(){},Vt=m.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:Pn,measure:Pn},J='FA "6.5.1"',va=function(n){return Vt.mark("".concat(J," ").concat(n," begins")),function(){return le(n)}},le=function(n){Vt.mark("".concat(J," ").concat(n," ends")),Vt.measure("".concat(J," ").concat(n),"".concat(J," ").concat(n," begins"),"".concat(J," ").concat(n," ends"))},on={begin:va,end:le},yt=function(){};function Nn(t){var n=t.getAttribute?t.getAttribute(U):null;return typeof n=="string"}function pa(t){var n=t.getAttribute?t.getAttribute(Kt):null,e=t.getAttribute?t.getAttribute(Jt):null;return n&&e}function ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function ga(){if(m.autoReplaceSvg===!0)return kt.replace;var t=kt[m.autoReplaceSvg];return t||kt.replace}function ba(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ya(t){return g.createElement(t)}function ce(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?ba:ya:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(ce(i,{ceFn:a}))}),r}function ka(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var kt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ce(r),e)}),e.getAttribute(U)===null&&m.keepOriginalSource){var a=g.createComment(ka(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Zt(e).indexOf(m.replacementClass))return kt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return st(s)}).join(`
`);e.setAttribute(U,""),e.innerHTML=i}};function Tn(t){t()}function ue(t,n){var e=typeof n=="function"?n:yt;if(t.length===0)e();else{var a=Tn;m.mutateApproach===Se&&(a=L.requestAnimationFrame||Tn),a(function(){var r=ga(),o=on.begin("mutate");t.map(r),o(),e()})}}var sn=!1;function me(){sn=!0}function Gt(){sn=!1}var At=null;function Mn(t){if(kn&&m.observeMutations){var n=t.treeCallback,e=n===void 0?yt:n,a=t.nodeCallback,r=a===void 0?yt:a,o=t.pseudoElementsCallback,i=o===void 0?yt:o,s=t.observeMutationsRoot,f=s===void 0?g:s;At=new kn(function(u){if(!sn){var l=R();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Nn(d.addedNodes[0])&&(m.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&Nn(d.target)&&~Me.indexOf(d.attributeName))if(d.attributeName==="class"&&pa(d.target)){var v=Ct(Zt(d.target)),p=v.prefix,x=v.iconName;d.target.setAttribute(Kt,p||l),x&&d.target.setAttribute(Jt,x)}else ha(d.target)&&r(d.target)})}}),F&&At.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xa(){At&&At.disconnect()}function wa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function Aa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ct(Zt(t));return r.prefix||(r.prefix=R()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ta(r.prefix,t.innerText)||en(r.prefix,$t(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ia(t){var n=K(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||rt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Sa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Aa(t),a=e.iconName,r=e.prefix,o=e.rest,i=Ia(t),s=Wt("parseNodeAttributes",{},t),f=n.styleParser?wa(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Ca=O.styles;function de(t){var n=m.autoReplaceSvg==="nest"?zn(t,{styleParser:!1}):zn(t);return~n.extra.classes.indexOf(qn)?z("generateLayersText",t,n):z("generateSvgReplacementMutation",t,n)}var j=new Set;Qt.map(function(t){j.add("fa-".concat(t))});Object.keys(tt[h]).map(j.add.bind(j));Object.keys(tt[b]).map(j.add.bind(j));j=it(j);function Fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=g.documentElement.classList,a=function(d){return e.add("".concat(xn,"-").concat(d))},r=function(d){return e.remove("".concat(xn,"-").concat(d))},o=m.autoFetchSvg?j:Qt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ca));o.includes("fa")||o.push("fa");var i=[".".concat(qn,":not([").concat(U,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(U,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=K(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=on.begin("onTree"),u=s.reduce(function(l,d){try{var v=de(d);v&&l.push(v)}catch(p){Xn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(v){ue(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),d(v)})})}function Oa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;de(t).then(function(e){e&&ue([e],n)})}function Ea(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ht(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Ht(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Pa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?N:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,u=e.maskId,l=u===void 0?null:u,d=e.title,v=d===void 0?null:d,p=e.titleId,x=p===void 0?null:p,S=e.classes,C=S===void 0?[]:S,E=e.attributes,k=E===void 0?{}:E,w=e.styles,P=w===void 0?{}:w;if(n){var A=n.prefix,$=n.iconName,Y=n.icon;return Ot(c({type:"icon"},n),function(){return B("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||rt()):(k["aria-hidden"]="true",k.focusable="false")),rn({icons:{main:Ut(Y),mask:f?Ut(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:$,transform:c(c({},N),r),symbol:i,title:v,maskId:l,titleId:x,extra:{attributes:k,styles:P,classes:C}})})}},Na={mixout:function(){return{icon:Ea(Pa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Fn,e.nodeCallback=Oa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,o=e.callback,i=o===void 0?function(){}:o;return Fn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,v=a.extra;return new Promise(function(p,x){Promise.all([Bt(r,s),l.iconName?Bt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var C=Xt(S,2),E=C[0],k=C[1];p([e,rn({icons:{main:E,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:o,titleId:i,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=It(s);f.length>0&&(r.style=f);var u;return tn(i)&&(u=z("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Ta={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Ot({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(it(o)).join(" ")},children:i}]})}}}},Ma={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Ot({type:"counter",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:a}),ua({content:e.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(it(s))}})})}}}},za={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?N:r,i=a.title,s=i===void 0?null:i,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,v=a.styles,p=v===void 0?{}:v;return Ot({type:"text",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:a}),En({content:e,transform:c(c({},N),o),title:s,extra:{attributes:d,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(it(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(Bn){var u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,En({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Fa=new RegExp('"',"ug"),Dn=[1105920,1112319];function Da(t){var n=t.replace(Fa,""),e=Xe(n,0),a=e>=Dn[0]&&e<=Dn[1],r=n.length===2?n[0]===n[1]:!1;return{value:$t(r?n[0]:n),isSecondary:a||r}}function _n(t,n){var e="".concat(Ie).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=K(t.children),i=o.filter(function(Y){return Y.getAttribute(jt)===n})[0],s=L.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Pe),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?b:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?nt[v][f[2].toLowerCase()]:Ne[v][u],x=Da(d),S=x.value,C=x.isSecondary,E=f[0].startsWith("FontAwesome"),k=en(p,S),w=k;if(E){var P=na(S);P.iconName&&P.prefix&&(k=P.iconName,p=P.prefix)}if(k&&!C&&(!i||i.getAttribute(Kt)!==p||i.getAttribute(Jt)!==w)){t.setAttribute(e,w),i&&t.removeChild(i);var A=Sa(),$=A.extra;$.attributes[jt]=n,Bt(k,p).then(function(Y){var Et=rn(c(c({},A),{},{icons:{main:Y,mask:an()},prefix:p,iconName:w,extra:$,watchable:!0})),D=g.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Et.map(function(ve){return st(ve)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function _a(t){return Promise.all([_n(t,"::before"),_n(t,"::after")])}function La(t){return t.parentNode!==document.head&&!~Ce.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ln(t){if(F)return new Promise(function(n,e){var a=K(t.querySelectorAll("*")).filter(La).map(_a),r=on.begin("searchPseudoElements");me(),Promise.all(a).then(function(){r(),Gt(),n()}).catch(function(){r(),Gt(),e()})})}var Ra={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ln,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;m.searchPseudoElements&&Ln(r)}}},Rn=!1,ja={mixout:function(){return{dom:{unwatch:function(){me(),Rn=!0}}}},hooks:function(){return{bootstrap:function(){Mn(Wt("mutationObserverCallbacks",{}))},noAuto:function(){xa()},watch:function(e){var a=e.observeMutationsRoot;Rn?Gt():Mn(Wt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},jn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},$a={mixout:function(){return{parse:{transform:function(e){return jn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=jn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:d,path:v};return{tag:"g",attributes:c({},p.outer),children:[{tag:"g",attributes:c({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),p.path)}]}]}}}},_t={x:0,y:0,width:"100%",height:"100%"};function $n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ya(t){return t.tag==="g"?t.children:[t]}var Wa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?Ct(r.split(" ").map(function(i){return i.trim()})):an();return o.prefix||(o.prefix=R()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,u=o.width,l=o.icon,d=i.width,v=i.icon,p=$e({transform:f,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:c(c({},_t),{},{fill:"white"})},S=l.children?{children:l.children.map($n)}:{},C={tag:"g",attributes:c({},p.inner),children:[$n(c({tag:l.tag,attributes:c(c({},l.attributes),p.path)},S))]},E={tag:"g",attributes:c({},p.outer),children:[C]},k="mask-".concat(s||rt()),w="clip-".concat(s||rt()),P={tag:"mask",attributes:c(c({},_t),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,E]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ya(v)},P]};return a.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},_t)}),{children:a,attributes:r}}}},Ha={provides:function(n){var e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ua={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Ba=[He,Na,Ta,Ma,za,Ra,ja,$a,Wa,Ha,Ua];ra(Ba,{mixoutsTo:I});var Za=I.noAuto,tr=I.config,nr=I.library,er=I.dom,Va=I.parse,ar=I.findIconDefinition,rr=I.toHtml,Ga=I.icon,ir=I.layer,Xa=I.text,qa=I.counter;var wr=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=ln({type:n}),n.\u0275inj=fn({});let t=n;return t})();function Ja(t,n){if(t&1&&(ft(0,"li",4),Mt(1),mn(2,"span",5),lt()),t&2){let e=n.$implicit,a=n.index;Tt("data-aos","fade-up")("data-aos-easing","ease-in-out")("data-aos-duration","1000")("data-aos-delay",a*200+200),Nt(),dn(" ",e.description," ")}}var Sr=(()=>{let n=class n{constructor(){this.tasks=[{description:"The website responsive 100%"},{description:"Create a new Angular 7+ project using Angular CLI as the foundation."},{description:" Develop a page layout comprising a header and a horizontally centered, paginated users list."},{description:`Utilize the HTTP endpoints:

\u25CF Fetch user card data (including avatar image, first_name, last_name, and id) from https://reqres.in/api/users?page={page} for pagination.

\u25CF Fetch details for a single user via https://reqres.in/api/users/{id}.`},{description:`Navigation:
      \u25CF Enable click functionality on the user cards to navigate to a new page displaying
      detailed information about the selected user.`},{description:` Search Functionality:
      \u25CF Implement an instant search field within the header to search for users by ID without requiring a separate button. Display search results and allow navigation
      to the user details page if the user exists.`},{description:`User Details Page:
      \u25CF Include a back button on each individual user's page to navigate back to the main user list.
`},{description:`Caching Implementation:
      \u25CF Introduce caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.`},{description:`User Experience Enhancements:
      \u25CF Display a loading bar to indicate pending network requests, ensuring a smoother
      user experience during data retrieval.`},{description:`Additional Considerations:
      \u25CF Implement custom directives for improved UI interactions or functionalities.
      \u25CF Utilize observables from RxJS to manage asynchronous operations.
      \u25CF Apply proper styling and animations to enhance the user interface.
      \u25CF Ensure a well-documented and structured project codebase.
      Submission Requirements:
      \u25CF Share the project via a Github/Gitlab link or provide a zipped project file that includes all
      necessary files.`}]}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=Pt({type:n,selectors:[["app-home"]],decls:5,vars:1,consts:[["data-aos","fade-up","data-aos-easing","ease-out-cubic","data-aos-duration","1000",1,"text-center","text-break","my-3"],[1,"d-flex","justify-content-center"],[1,"mx-auto"],["class","p-3 btn btn-outline-info rounded w-75 mb-2",4,"ngFor","ngForOf"],[1,"p-3","btn","btn-outline-info","rounded","w-75","mb-2"],[1,"fas","fa-check-circle","text-success"]],template:function(r,o){r&1&&(ft(0,"h2",0),Mt(1,` Which Was Required in this Task
`),lt(),ft(2,"div",1)(3,"ul",2),cn(4,Ja,3,5,"li",3),lt()()),r&2&&(Nt(4),un("ngForOf",o.tasks))},dependencies:[vn],styles:["li[_ngcontent-%COMP%]{text-align:left;position:relative}span[_ngcontent-%COMP%]{position:absolute;font-size:20px;right:-10px;top:50%;transform:translateY(-50%);z-index:100}"]});let t=n;return t})();export{Sr as a,wr as b};
