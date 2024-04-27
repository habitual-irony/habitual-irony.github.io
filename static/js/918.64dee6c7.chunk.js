/*! For license information please see 918.64dee6c7.chunk.js.LICENSE.txt */
(self.webpackChunkhabitual_irony=self.webpackChunkhabitual_irony||[]).push([[918],{41538:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var r=n(58168),o=n(98587),s=n(65043),i=n(58387),a=n(68606),u=n(34535),c=n(61070),l=n(95849),p=n(93319),f=n(82191);function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=n(92646),m=n(83290),y=n(31140),b=n(70579);const v=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:a,rippleSize:u,in:c,onExited:l,timeout:p}=e,[f,d]=s.useState(!1),h=(0,i.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:u,height:u,top:-u/2+a,left:-u/2+o},y=(0,i.A)(n.child,f&&n.childLeaving,r&&n.childPulsate);return c||f||d(!0),s.useEffect((()=>{if(!c&&null!=l){const e=setTimeout(l,p);return()=>{clearTimeout(e)}}}),[l,c,p]),(0,b.jsx)("span",{className:h,style:m,children:(0,b.jsx)("span",{className:y})})};var A=n(57056);const g=(0,A.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var w,R,S,x;const M=["center","classes","className"];let k,T,j,P;const E=(0,m.i7)(k||(k=w||(w=d(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),O=(0,m.i7)(T||(T=R||(R=d(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),_=(0,m.i7)(j||(j=S||(S=d(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),C=(0,u.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),I=(0,u.Ay)(v,{name:"MuiTouchRipple",slot:"Ripple"})(P||(P=x||(x=d(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),g.rippleVisible,E,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),g.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),g.child,g.childLeaving,O,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),g.childPulsate,_,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),L=s.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:u={},className:l}=n,p=(0,o.A)(n,M),[f,d]=s.useState([]),m=s.useRef(0),v=s.useRef(null);s.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[f]);const A=s.useRef(!1),w=(0,y.A)(),R=s.useRef(null),S=s.useRef(null),x=s.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:s}=e;d((e=>[...e,(0,b.jsx)(I,{classes:{ripple:(0,i.A)(u.ripple,g.ripple),rippleVisible:(0,i.A)(u.rippleVisible,g.rippleVisible),ripplePulsate:(0,i.A)(u.ripplePulsate,g.ripplePulsate),child:(0,i.A)(u.child,g.child),childLeaving:(0,i.A)(u.childLeaving,g.childLeaving),childPulsate:(0,i.A)(u.childPulsate,g.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},m.current)])),m.current+=1,v.current=s}),[u]),k=s.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:o=a||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&A.current)return void(A.current=!1);"touchstart"===(null==e?void 0:e.type)&&(A.current=!0);const i=s?null:S.current,u=i?i.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,l,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(u.width/2),l=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(t-u.left),l=Math.round(n-u.top)}if(o)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((i?i.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((i?i.clientHeight:0)-l),l)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===R.current&&(R.current=()=>{x({pulsate:r,rippleX:c,rippleY:l,rippleSize:p,cb:n})},w.start(80,(()=>{R.current&&(R.current(),R.current=null)}))):x({pulsate:r,rippleX:c,rippleY:l,rippleSize:p,cb:n})}),[a,x,w]),T=s.useCallback((()=>{k({},{pulsate:!0})}),[k]),j=s.useCallback(((e,t)=>{if(w.clear(),"touchend"===(null==e?void 0:e.type)&&R.current)return R.current(),R.current=null,void w.start(0,(()=>{j(e,t)}));R.current=null,d((e=>e.length>0?e.slice(1):e)),v.current=t}),[w]);return s.useImperativeHandle(t,(()=>({pulsate:T,start:k,stop:j})),[T,k,j]),(0,b.jsx)(C,(0,r.A)({className:(0,i.A)(g.root,u.root,l),ref:S},p,{children:(0,b.jsx)(h.A,{component:null,exit:!0,children:f})}))}));var N=n(32400);function V(e){return(0,N.Ay)("MuiButtonBase",e)}const F=(0,A.A)("MuiButtonBase",["root","disabled","focusVisible"]),D=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],B=(0,u.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(F.disabled)]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),z=s.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:d=!1,children:h,className:m,component:y="button",disabled:v=!1,disableRipple:A=!1,disableTouchRipple:g=!1,focusRipple:w=!1,LinkComponent:R="a",onBlur:S,onClick:x,onContextMenu:M,onDragLeave:k,onFocus:T,onFocusVisible:j,onKeyDown:P,onKeyUp:E,onMouseDown:O,onMouseLeave:_,onMouseUp:C,onTouchEnd:I,onTouchMove:N,onTouchStart:F,tabIndex:z=0,TouchRippleProps:K,touchRippleRef:X,type:$}=n,U=(0,o.A)(n,D),Y=s.useRef(null),W=s.useRef(null),H=(0,l.A)(W,X),{isFocusVisibleRef:q,onFocus:Q,onBlur:G,ref:J}=(0,f.A)(),[Z,ee]=s.useState(!1);v&&Z&&ee(!1),s.useImperativeHandle(u,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=s.useState(!1);s.useEffect((()=>{ne(!0)}),[]);const re=te&&!A&&!v;function oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return(0,p.A)((r=>{t&&t(r);return!n&&W.current&&W.current[e](r),!0}))}s.useEffect((()=>{Z&&w&&!A&&te&&W.current.pulsate()}),[A,w,Z,te]);const se=oe("start",O),ie=oe("stop",M),ae=oe("stop",k),ue=oe("stop",C),ce=oe("stop",(e=>{Z&&e.preventDefault(),_&&_(e)})),le=oe("start",F),pe=oe("stop",I),fe=oe("stop",N),de=oe("stop",(e=>{G(e),!1===q.current&&ee(!1),S&&S(e)}),!1),he=(0,p.A)((e=>{Y.current||(Y.current=e.currentTarget),Q(e),!0===q.current&&(ee(!0),j&&j(e)),T&&T(e)})),me=()=>{const e=Y.current;return y&&"button"!==y&&!("A"===e.tagName&&e.href)},ye=s.useRef(!1),be=(0,p.A)((e=>{w&&!ye.current&&Z&&W.current&&" "===e.key&&(ye.current=!0,W.current.stop(e,(()=>{W.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),x&&x(e))})),ve=(0,p.A)((e=>{w&&" "===e.key&&W.current&&Z&&!e.defaultPrevented&&(ye.current=!1,W.current.stop(e,(()=>{W.current.pulsate(e)}))),E&&E(e),x&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&x(e)}));let Ae=y;"button"===Ae&&(U.href||U.to)&&(Ae=R);const ge={};"button"===Ae?(ge.type=void 0===$?"button":$,ge.disabled=v):(U.href||U.to||(ge.role="button"),v&&(ge["aria-disabled"]=v));const we=(0,l.A)(t,J,Y);const Re=(0,r.A)({},n,{centerRipple:d,component:y,disabled:v,disableRipple:A,disableTouchRipple:g,focusRipple:w,tabIndex:z,focusVisible:Z}),Se=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},i=(0,a.A)(s,V,o);return n&&r&&(i.root+=" ".concat(r)),i})(Re);return(0,b.jsxs)(B,(0,r.A)({as:Ae,className:(0,i.A)(Se.root,m),ownerState:Re,onBlur:de,onClick:x,onContextMenu:ie,onFocus:he,onKeyDown:be,onKeyUp:ve,onMouseDown:se,onMouseLeave:ce,onMouseUp:ue,onDragLeave:ae,onTouchEnd:pe,onTouchMove:fe,onTouchStart:le,ref:we,tabIndex:v?-1:z,type:$},ge,U,{children:[h,re?(0,b.jsx)(L,(0,r.A)({ref:H,center:d},K)):null]}))}))},15170:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=(0,n(88279).A)()},61475:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(47123);const o=e=>(0,r.A)(e)&&"classes"!==e},47123:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}},34535:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>a});var r=n(38052),o=n(15170),s=n(13375),i=n(61475);const a=(0,r.Ay)({themeId:s.A,defaultTheme:o.A,rootShouldForwardProp:i.A})},61070:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(22018);var o=n(68653);function s(e){let{props:t,name:n,defaultTheme:s,themeId:i}=e,a=(0,o.A)(s);i&&(a=a[i]||a);const u=function(e){const{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.A)(t.components[n].defaultProps,o):o}({theme:a,name:n,props:t});return u}var i=n(15170),a=n(13375);function u(e){let{props:t,name:n}=e;return s({props:t,name:n,defaultTheme:i.A,themeId:a.A})}},6803:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(90410).A},93319:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(24626).A},95849:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(47042).A},82191:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(65043),o=n(31140);let s=!0,i=!1;const a=new o.E,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(s=!0)}function l(){s=!1}function p(){"hidden"===this.visibilityState&&i&&(s=!0)}function f(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return s||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!u[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const d=function(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",p,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!f(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,a.start(100,(()=>{i=!1})),t.current=!1,!0)},ref:e}}},38052:(e,t,n)=>{"use strict";var r=n(24994);t.Ay=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=m,rootShouldForwardProp:r=h,slotShouldForwardProp:u=h}=e,l=e=>(0,c.default)((0,o.default)({},e,{theme:b((0,o.default)({},e,{defaultTheme:n,themeId:t}))}));return l.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:p,slot:d,skipVariantsResolver:m,skipSx:g,overridesResolver:w=v(y(d))}=c,R=(0,s.default)(c,f),S=void 0!==m?m:d&&"Root"!==d&&"root"!==d||!1,x=g||!1;let M=h;"Root"===d||"root"===d?M=r:d?M=u:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(M=void 0);const k=(0,i.default)(e,(0,o.default)({shouldForwardProp:M,label:undefined},R)),T=e=>"function"===typeof e&&e.__emotion_real!==e||(0,a.isPlainObject)(e)?r=>A(e,(0,o.default)({},r,{theme:b({theme:r.theme,defaultTheme:n,themeId:t})})):e,j=function(r){let s=T(r);for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];const c=a?a.map(T):[];p&&w&&c.push((e=>{const r=b((0,o.default)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[p]||!r.components[p].styleOverrides)return null;const s=r.components[p].styleOverrides,i={};return Object.entries(s).forEach((t=>{let[n,s]=t;i[n]=A(s,(0,o.default)({},e,{theme:r}))})),w(e,i)})),p&&!S&&c.push((e=>{var r;const s=b((0,o.default)({},e,{defaultTheme:n,themeId:t}));return A({variants:null==s||null==(r=s.components)||null==(r=r[p])?void 0:r.variants},(0,o.default)({},e,{theme:s}))})),x||c.push(l);const f=c.length-a.length;if(Array.isArray(r)&&f>0){const e=new Array(f).fill("");s=[...r,...e],s.raw=[...r.raw,...e]}const d=k(s,...c);return e.muiName&&(d.muiName=e.muiName),d};return k.withConfig&&(j.withConfig=k.withConfig),j}};var o=r(n(94634)),s=r(n(54893)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}(n(68131)),a=n(14534),u=(r(n(20578)),r(n(92046)),r(n(24989))),c=r(n(73234));const l=["ownerState"],p=["variants"],f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const m=(0,u.default)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b(e){let{defaultTheme:t,theme:n,themeId:r}=e;return o=n,0===Object.keys(o).length?t:n[r]||n;var o}function v(e){return e?(t,n)=>n[e]:null}function A(e,t){let{ownerState:n}=t,r=(0,s.default)(t,l);const i="function"===typeof e?e((0,o.default)({ownerState:n},r)):e;if(Array.isArray(i))return i.flatMap((e=>A(e,(0,o.default)({ownerState:n},r))));if(i&&"object"===typeof i&&Array.isArray(i.variants)){const{variants:e=[]}=i;let t=(0,s.default)(i,p);return e.forEach((e=>{let s=!0;"function"===typeof e.props?s=e.props((0,o.default)({ownerState:n},r,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&r[t]!==e.props[t]&&(s=!1)})),s&&(Array.isArray(t)||(t=[t]),t.push("function"===typeof e.style?e.style((0,o.default)({ownerState:n},r,n)):e.style))})),t}return i}},24989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,private_createBreakpoints:()=>o.A,unstable_applyStyles:()=>s.A});var r=n(18280),o=n(34853),s=n(89703)},73234:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,extendSxProp:()=>o.A,unstable_createStyleFunctionSx:()=>r.k,unstable_defaultSxConfig:()=>s.A});var r=n(58812),o=n(18698),s=n(37758)},20578:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(90410)},68606:(e,t,n)=>{"use strict";function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}n.d(t,{A:()=>r})},14534:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,isPlainObject:()=>r.Q});var r=n(43216)},92046:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u,getFunctionName:()=>s});var r=n(2086);const o=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function s(e){const t="".concat(e).match(o);return t&&t[1]||""}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||s(e)||t}function a(e,t,n){const r=i(t);return e.displayName||(""!==r?"".concat(n,"(").concat(r,")"):n)}function u(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return i(e,"Component");if("object"===typeof e)switch(e.$$typeof){case r.ForwardRef:return a(e,e.render,"ForwardRef");case r.Memo:return a(e,e.type,"memo");default:return}}}},22018:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(58168);function o(e,t){const n=(0,r.A)({},t);return Object.keys(e).forEach((s=>{if(s.toString().match(/^(components|slots)$/))n[s]=(0,r.A)({},e[s],n[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const i=e[s]||{},a=t[s];n[s]={},a&&Object.keys(a)?i&&Object.keys(i)?(n[s]=(0,r.A)({},a),Object.keys(i).forEach((e=>{n[s][e]=o(i[e],a[e])}))):n[s]=a:n[s]=i}else void 0===n[s]&&(n[s]=e[s])})),n}},69184:(e,t,n)=>{"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{A:()=>r})},63844:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(65043);const o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},24626:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(65043),o=n(63844);const s=function(e){const t=r.useRef(e);return(0,o.A)((()=>{t.current=e})),r.useRef((function(){return(0,t.current)(...arguments)})).current}},47042:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(65043),o=n(69184);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{(0,o.A)(t,e)}))}),t)}},31140:(e,t,n)=>{"use strict";n.d(t,{E:()=>i,A:()=>a});var r=n(65043);const o={};const s=[];class i{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new i}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}}function a(){const e=function(e,t){const n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}(i.create).current;var t;return t=e.disposeEffect,r.useEffect(t,s),e}},95082:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function b(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case a:case i:case f:case d:return e;default:switch(e=e&&e.$$typeof){case l:case c:case p:case m:case h:case u:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.ForwardRef=p,t.Memo=h},2086:(e,t,n)=>{"use strict";e.exports=n(95082)},94634:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},54893:e=>{e.exports=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=918.64dee6c7.chunk.js.map