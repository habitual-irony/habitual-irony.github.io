(self.webpackChunkhabitual_irony=self.webpackChunkhabitual_irony||[]).push([[534],{34151:(e,t,n)=>{"use strict";n.d(t,{d:()=>i});var a=n(12035),o=n(9210),r=n.n(o);const s=r().AES.decrypt("U2FsdGVkX1/ylguJ4acXIXdsOfcfzKRt5BOuj9pxJA3oBsV3qWGc2WLebCqlNG0bwjybuLjKUgHQ7QrpYTrZNg==","lethe's_playground").toString(r().enc.Utf8),c="test_repo",i=async e=>{try{const t=new a.E({auth:s}),n=await t.request("GET /repos/habitual-irony/".concat(c,"/contents/").concat(e),{repo:"".concat(c),path:"".concat(e),encoding:"utf-8",decoding:"utf-8"});return decodeURIComponent(escape(window.atob(n.data.content)))}catch(t){return}}},33234:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var a=n(9950),o=n(16491),r=n(10226),s=(n(56625),n(42794),n(43816)),c=n(76062),i=n.n(c),l=(n(41846),n(77437),n(95595)),d=n.n(l),u=(n(31337),n(81927)),p=n.n(u),g=n(81052),h=n.n(g),w=n(59019),b=n(34151),m=n(44414);const y={preset:["#333333","#666666","#FFFFFF","#EE2323","#F89009","#009A87","#006DD7","#8A3DB6","#781B33","#5733B1","#953B34","#FFC1C8","#FFC9AF","#9FEEC3","#99CEFA","#C1BEF9"]},f="TOAST",F=()=>{const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1);let c='\n  <br/><br/>\n  # \uc81c\ubaa9\n\n  ***~~<span style="color: #EE2323">\ub0b4\uc6a9</span>~~***\n  \n  * [x] \uccb4\ud06c\ubc15\uc2a4\n  * [ ] \uccb4\ud06c\ubc15\uc2a4 2\n\n  <br/><br/>';return(0,a.useEffect)((()=>{(async()=>{let n=localStorage.getItem(f),a=localStorage.getItem("FILE_PATH");if(a){let e=JSON.parse(a).filePath,t=await b.d("actions/".concat(e));void 0!==t&&(n=t),localStorage.removeItem("FILE_PATH")}if(!1===t){const e=new(i())({el:document.querySelector(".toast-editor-viewer"),viewer:!0,height:"400px",usageStatistics:!1,plugins:[p()]});n?e.setMarkdown(n):(e.setMarkdown(c),localStorage.setItem(f,c))}n?e.current&&e.current.getInstance().setMarkdown(n):e.current&&e.current.getInstance().setMarkdown(c)})()}),[t]),(0,m.jsx)("div",{children:(0,m.jsxs)(o.A,{sx:{m:2},children:[(0,m.jsx)("h1",{children:"Toast UI Editor"}),(0,m.jsx)(r.A,{variant:"outlined",color:"secondary",sx:{m:1},onClick:()=>n(!t),children:t?"\ucde8\uc18c\ud558\uae30":"\ud3b8\uc9d1\ud558\uae30"}),(0,m.jsx)(r.A,{variant:"outlined",color:"primary",sx:{m:1},onClick:async()=>{const e=document.querySelector("#pdf-download"),t=await h()(e,{scale:2}),n=t.toDataURL("image/png",1);let a=190,o=1.414*a,r=t.height*a/t.width,s=r,c=new w.Ay("p","mm"),i=0;for(c.addImage(n,"PNG",10,i,a,r),c.addImage(n,"PNG",10,i,a,r),s-=o;s>=20;)i=s-r,i-=20,c.addPage(),c.addImage(n,"PNG",10,i,a,r),s-=o;c.save("toast.pdf"),window.open(c.output("bloburl"));return new File([c.output("blob")],"toast.pdf",{type:"application/pdf"})},disabled:!0===t,children:"PDF\ub85c \uc800\uc7a5"}),(0,m.jsx)(r.A,{variant:"outlined",color:"primary",sx:{m:1},onClick:()=>{let a=e.current.getInstance().getMarkdown();localStorage.setItem(f,a),n(!t)},disabled:!1===t,children:"\uc800\uc7a5\ud558\uae30"}),!1===t&&(0,m.jsx)("div",{id:"pdf-download",className:"toast-editor-viewer"}),!0===t&&(0,m.jsx)(s.K,{ref:e,height:"400px",placeholder:"Please Enter Text.",previewStyle:"tab",initialEditType:"wysiwyg",toolbarItems:[["heading","bold","italic","strike"],["hr","quote"],["ul","ol","task","indent","outdent"],["table","link"],["code","codeblock"]],usageStatistics:!1,plugins:[[d(),y],p()]})]})})}},72858:()=>{}}]);