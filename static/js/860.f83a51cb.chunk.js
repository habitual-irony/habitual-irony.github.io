"use strict";(self.webpackChunkhabitual_irony=self.webpackChunkhabitual_irony||[]).push([[860],{30578:(e,t,r)=>{r.d(t,{E:()=>l});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=r(3319),l=(0,o.forwardRef)((function(e,t){var r,i=e.children,c=e.className,u=e.color,l=e.textBgColor,s=e.textColor,d=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return o.createElement("div",(0,n.Cl)({className:(0,a.A)("card",(r={},r["bg-".concat(u)]=u,r["text-".concat(s)]=s,r["text-bg-".concat(l)]=l,r),c)},d,{ref:t}),i)}));l.propTypes={children:c().node,className:c().string,color:u.TX,textBgColor:u.TX,textColor:c().string},l.displayName="CCard"},98114:(e,t,r)=>{r.d(t,{W:()=>u});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.className,c=(0,n.Tt)(e,["children","className"]);return o.createElement("div",(0,n.Cl)({className:(0,a.A)("card-body",i)},c,{ref:t}),r)}));u.propTypes={children:c().node,className:c().string},u.displayName="CCardBody"},48053:(e,t,r)=>{r.d(t,{d:()=>u});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.as,c=void 0===i?"p":i,u=e.className,l=(0,n.Tt)(e,["children","as","className"]);return o.createElement(c,(0,n.Cl)({className:(0,a.A)("card-text",u)},l,{ref:t}),r)}));u.propTypes={as:c().elementType,children:c().node,className:c().string},u.displayName="CCardText"},38926:(e,t,r)=>{r.d(t,{Q:()=>u});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.as,c=void 0===i?"h5":i,u=e.className,l=(0,n.Tt)(e,["children","as","className"]);return o.createElement(c,(0,n.Cl)({className:(0,a.A)("card-title",u)},l,{ref:t}),r)}));u.propTypes={as:c().elementType,children:c().node,className:c().string},u.displayName="CCardTitle"},71398:(e,t,r)=>{r.d(t,{U:()=>l});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=["xxl","xl","lg","md","sm","xs"],l=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.className,c=(0,n.Tt)(e,["children","className"]),l=[];return u.forEach((function(e){var t=c[e];delete c[e];var r="xs"===e?"":"-".concat(e);"number"!==typeof t&&"string"!==typeof t||l.push("col".concat(r,"-").concat(t)),"boolean"===typeof t&&l.push("col".concat(r)),t&&"object"===typeof t&&("number"!==typeof t.span&&"string"!==typeof t.span||l.push("col".concat(r,"-").concat(t.span)),"boolean"===typeof t.span&&l.push("col".concat(r)),"number"!==typeof t.order&&"string"!==typeof t.order||l.push("order".concat(r,"-").concat(t.order)),"number"===typeof t.offset&&l.push("offset".concat(r,"-").concat(t.offset)))})),o.createElement("div",(0,n.Cl)({className:(0,a.A)(l.length>0?l:"col",i)},c,{ref:t}),r)})),s=c().oneOfType([c().bool,c().number,c().string,c().oneOf(["auto"])]),d=c().oneOfType([s,c().shape({span:s,offset:c().oneOfType([c().number,c().string]),order:c().oneOfType([c().oneOf(["first","last"]),c().number,c().string])})]);l.propTypes={children:c().node,className:c().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},l.displayName="CCol"},52684:(e,t,r)=>{r.d(t,{s:()=>l});var n=r(3035),o=r(9950),i=r(11942),c=r.n(i),a=r(96238),u=["xxl","xl","lg","md","sm","xs"],l=(0,o.forwardRef)((function(e,t){var r=e.children,i=e.className,c=(0,n.Tt)(e,["children","className"]),l=[];return u.forEach((function(e){var t=c[e];delete c[e];var r="xs"===e?"":"-".concat(e);"object"===typeof t&&(t.cols&&l.push("row-cols".concat(r,"-").concat(t.cols)),"number"===typeof t.gutter&&l.push("g".concat(r,"-").concat(t.gutter)),"number"===typeof t.gutterX&&l.push("gx".concat(r,"-").concat(t.gutterX)),"number"===typeof t.gutterY&&l.push("gy".concat(r,"-").concat(t.gutterY)))})),o.createElement("div",{className:(0,a.A)("row",l,i),ref:t},r)})),s=c().shape({cols:c().oneOfType([c().oneOf(["auto"]),c().number,c().string]),gutter:c().oneOfType([c().string,c().number]),gutterX:c().oneOfType([c().string,c().number]),gutterY:c().oneOfType([c().string,c().number])});l.propTypes={children:c().node,className:c().string,xs:s,sm:s,md:s,lg:s,xl:s,xxl:s},l.displayName="CRow"},35023:(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function f(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"===typeof e}r.d(t,{Ay:()=>ie,dJ:()=>te});var g=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,t){return f(t)||g("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&g("changeField"),t},selector:function(e){p(e)||g("selectorType")},handler:function(e){p(e)||f(e)||g("handlerType"),f(e)&&Object.values(e).some((function(e){return!p(e)}))&&g("handlersType")},initial:function(e){var t;e||g("initialIsRequired"),f(e)||g("initialType"),t=e,Object.keys(t).length||g("initialContent")}};function v(e,t){return p(t)?t(e.current):t}function m(e,t){return e.current=s(s({},e.current),t),t}function y(e,t,r){return p(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}const b={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(t);var r={current:e},n=d(y)(r,t),o=d(m)(r),i=d(h.changes)(e),c=d(v)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(r.current)},function(e){!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(n,o,i,c)(e)}]}};const w={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};const O=function(e){return{}.toString.call(e).includes("Object")};var j={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},M=function(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}((function(e,t){throw new Error(e[t]||e.default)}))(j),E={config:function(e){return e||M("configIsRequired"),O(e)||M("configType"),e.urls?(console.warn(j.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};const x=E;const T=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};const C=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),i(i({},t),r)};var N={type:"cancelation",msg:"operation is manually canceled"};const R=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(N):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r};var P,k,S=b.create({config:w,isInitialized:!1,resolve:null,reject:null,monaco:null}),A=(k=2,function(e){if(Array.isArray(e))return e}(P=S)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(P,k)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(P,k)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=A[0],V=A[1];function D(e){return document.body.appendChild(e)}function L(e){var t=I((function(e){return{config:e.config,reject:e.reject}})),r=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function _(){var e=I((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){q(t),e.resolve(t)}),(function(t){e.reject(t)}))}function q(e){I().monaco||V({monaco:e})}var z=new Promise((function(e,t){return V({resolve:e,reject:t})})),B={config:function(e){var t=x.config(e),r=t.monaco,n=c(t,["monaco"]);V((function(e){return{config:C(e.config,n),monaco:r}}))},init:function(){var e=I((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(V({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),R(z);if(window.monaco&&window.monaco.editor)return q(window.monaco),e.resolve(window.monaco),R(z);T(D,L)(_)}return R(z)},__getMonacoInstance:function(){return I((function(e){return e.monaco}))}};const F=B;var U=r(9950),X={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Y={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}};var W=function(e){let{children:t}=e;return U.createElement("div",{style:Y.container},t)};var J=function(e){let{width:t,height:r,isEditorReady:n,loading:o,_ref:i,className:c,wrapperProps:a}=e;return U.createElement("section",{style:{...X.wrapper,width:t,height:r},...a},!n&&U.createElement(W,null,o),U.createElement("div",{ref:i,style:{...X.fullWidth,...!n&&X.hide},className:c}))},Q=(0,U.memo)(J);var $=function(e){(0,U.useEffect)(e,[])};var G=function(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,U.useRef)(!0);(0,U.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function H(){}function K(e,t,r,n){return function(e,t){return e.editor.getModel(Z(e,t))}(e,n)||function(e,t,r,n){return e.editor.createModel(t,r,n?Z(e,n):void 0)}(e,t,r,n)}function Z(e,t){return e.Uri.parse(t)}var ee=function(e){let{original:t,modified:r,language:n,originalLanguage:o,modifiedLanguage:i,originalModelPath:c,modifiedModelPath:a,keepCurrentOriginalModel:u=!1,keepCurrentModifiedModel:l=!1,theme:s="light",loading:d="Loading...",options:f={},height:p="100%",width:g="100%",className:h,wrapperProps:v={},beforeMount:m=H,onMount:y=H}=e,[b,w]=(0,U.useState)(!1),[O,j]=(0,U.useState)(!0),M=(0,U.useRef)(null),E=(0,U.useRef)(null),x=(0,U.useRef)(null),T=(0,U.useRef)(y),C=(0,U.useRef)(m),N=(0,U.useRef)(!1);$((()=>{let e=F.init();return e.then((e=>(E.current=e)&&j(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>M.current?function(){var e,t,r,n;let o=null===(e=M.current)||void 0===e?void 0:e.getModel();u||null!==o&&void 0!==o&&null!==(t=o.original)&&void 0!==t&&t.dispose(),l||null!==o&&void 0!==o&&null!==(r=o.modified)&&void 0!==r&&r.dispose(),null===(n=M.current)||void 0===n||n.dispose()}():e.cancel()})),G((()=>{if(M.current&&E.current){let e=M.current.getOriginalEditor(),r=K(E.current,t||"",o||n||"text",c||"");r!==e.getModel()&&e.setModel(r)}}),[c],b),G((()=>{if(M.current&&E.current){let e=M.current.getModifiedEditor(),t=K(E.current,r||"",i||n||"text",a||"");t!==e.getModel()&&e.setModel(t)}}),[a],b),G((()=>{let e=M.current.getModifiedEditor();e.getOption(E.current.editor.EditorOption.readOnly)?e.setValue(r||""):r!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[r],b),G((()=>{var e;null===(e=M.current)||void 0===e||null===(e=e.getModel())||void 0===e||e.original.setValue(t||"")}),[t],b),G((()=>{let{original:e,modified:t}=M.current.getModel();E.current.editor.setModelLanguage(e,o||n||"text"),E.current.editor.setModelLanguage(t,i||n||"text")}),[n,o,i],b),G((()=>{var e;null===(e=E.current)||void 0===e||e.editor.setTheme(s)}),[s],b),G((()=>{var e;null===(e=M.current)||void 0===e||e.updateOptions(f)}),[f],b);let R=(0,U.useCallback)((()=>{var e;if(!E.current)return;C.current(E.current);let u=K(E.current,t||"",o||n||"text",c||""),l=K(E.current,r||"",i||n||"text",a||"");null===(e=M.current)||void 0===e||e.setModel({original:u,modified:l})}),[n,r,i,t,o,c,a]),P=(0,U.useCallback)((()=>{var e;!N.current&&x.current&&(M.current=E.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...f}),R(),null!==(e=E.current)&&void 0!==e&&e.editor.setTheme(s),w(!0),N.current=!0)}),[f,s,R]);return(0,U.useEffect)((()=>{b&&T.current(M.current,E.current)}),[b]),(0,U.useEffect)((()=>{!O&&!b&&P()}),[O,b,P]),U.createElement(Q,{width:g,height:p,isEditorReady:b,loading:d,_ref:x,className:h,wrapperProps:v})};(0,U.memo)(ee);var te=function(){let[e,t]=(0,U.useState)(F.__getMonacoInstance());return $((()=>{let r;return e||(r=F.init(),r.then((e=>{t(e)}))),()=>{var e;return null===(e=r)||void 0===e?void 0:e.cancel()}})),e};var re=function(e){let t=(0,U.useRef)();return(0,U.useEffect)((()=>{t.current=e}),[e]),t.current},ne=new Map;var oe=function(e){let{defaultValue:t,defaultLanguage:r,defaultPath:n,value:o,language:i,path:c,theme:a="light",line:u,loading:l="Loading...",options:s={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:p=!1,width:g="100%",height:h="100%",className:v,wrapperProps:m={},beforeMount:y=H,onMount:b=H,onChange:w,onValidate:O=H}=e,[j,M]=(0,U.useState)(!1),[E,x]=(0,U.useState)(!0),T=(0,U.useRef)(null),C=(0,U.useRef)(null),N=(0,U.useRef)(null),R=(0,U.useRef)(b),P=(0,U.useRef)(y),k=(0,U.useRef)(),S=(0,U.useRef)(o),A=re(c),I=(0,U.useRef)(!1),V=(0,U.useRef)(!1);$((()=>{let e=F.init();return e.then((e=>(T.current=e)&&x(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>C.current?function(){var e,t;null!==(e=k.current)&&void 0!==e&&e.dispose(),p?f&&ne.set(c,C.current.saveViewState()):null===(t=C.current.getModel())||void 0===t||t.dispose(),C.current.dispose()}():e.cancel()})),G((()=>{var e,a,u,l;let s=K(T.current,t||o||"",r||i||"",c||n||"");s!==(null===(e=C.current)||void 0===e?void 0:e.getModel())&&(f&&ne.set(A,null===(a=C.current)||void 0===a?void 0:a.saveViewState()),null!==(u=C.current)&&void 0!==u&&u.setModel(s),f&&(null===(l=C.current)||void 0===l||l.restoreViewState(ne.get(c))))}),[c],j),G((()=>{var e;null===(e=C.current)||void 0===e||e.updateOptions(s)}),[s],j),G((()=>{!C.current||void 0===o||(C.current.getOption(T.current.editor.EditorOption.readOnly)?C.current.setValue(o):o!==C.current.getValue()&&(V.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),C.current.pushUndoStop(),V.current=!1))}),[o],j),G((()=>{var e,t;let r=null===(e=C.current)||void 0===e?void 0:e.getModel();r&&i&&(null===(t=T.current)||void 0===t||t.editor.setModelLanguage(r,i))}),[i],j),G((()=>{var e;void 0!==u&&(null===(e=C.current)||void 0===e||e.revealLine(u))}),[u],j),G((()=>{var e;null===(e=T.current)||void 0===e||e.editor.setTheme(a)}),[a],j);let D=(0,U.useCallback)((()=>{if(N.current&&T.current&&!I.current){var e;P.current(T.current);let l=c||n,p=K(T.current,o||t||"",r||i||"",l||"");C.current=null===(e=T.current)||void 0===e?void 0:e.editor.create(N.current,{model:p,automaticLayout:!0,...s},d),f&&C.current.restoreViewState(ne.get(l)),T.current.editor.setTheme(a),void 0!==u&&C.current.revealLine(u),M(!0),I.current=!0}}),[t,r,n,o,i,c,s,d,f,a,u]);return(0,U.useEffect)((()=>{j&&R.current(C.current,T.current)}),[j]),(0,U.useEffect)((()=>{!E&&!j&&D()}),[E,j,D]),S.current=o,(0,U.useEffect)((()=>{var e,t;j&&w&&(null!==(e=k.current)&&void 0!==e&&e.dispose(),k.current=null===(t=C.current)||void 0===t?void 0:t.onDidChangeModelContent((e=>{V.current||w(C.current.getValue(),e)})))}),[j,w]),(0,U.useEffect)((()=>{if(j){let e=T.current.editor.onDidChangeMarkers((e=>{var t;let r=null===(t=C.current.getModel())||void 0===t?void 0:t.uri;if(r&&e.find((e=>e.path===r.path))){let e=T.current.editor.getModelMarkers({resource:r});null===O||void 0===O||O(e)}}));return()=>{null===e||void 0===e||e.dispose()}}return()=>{}}),[j,O]),U.createElement(Q,{width:g,height:h,isEditorReady:j,loading:l,_ref:N,className:v,wrapperProps:m})},ie=(0,U.memo)(oe)}}]);