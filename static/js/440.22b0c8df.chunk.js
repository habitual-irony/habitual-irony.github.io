(self.webpackChunkhabitual_irony=self.webpackChunkhabitual_irony||[]).push([[440],{81228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var o=n(9950),a=n(28429),r=n(11773),c=n(89776);const i=(0,r.UM)({id:"upload",button:{name:"Upload",toolbar:!0,contextMenu:!1,icon:r.jz.upload}}),l=[(0,r.UM)({id:"view",requiresSelection:!0,fileFilter:e=>!e.isDir,button:{name:"View",toolbar:!1,contextMenu:!0,icon:r.jz.file}}),i];var s=n(16491),d=n(44414);const u=o.memo((e=>{const[t,n]=(0,o.useState)(!1),i=(0,o.useRef)(null),u=(0,a.Zp)(),h=e.chonkyMap,p=()=>({baseFileMap:h.fileMap,rootFolderId:h.rootFolderId}),{fileMap:f,currentFolderId:m,setCurrentFolderId:y,deleteFiles:b,moveFiles:F,createFolder:I,createFile:g}=(()=>{const{baseFileMap:e,rootFolderId:t}=(0,o.useMemo)(p,[]),[n,a]=(0,o.useState)(e),[r,c]=(0,o.useState)(t),i=(0,o.useCallback)((()=>{a(e),c(t)}),[e,t]),l=(0,o.useRef)(r);(0,o.useEffect)((()=>{l.current=r}),[r]);const s=(0,o.useCallback)((e=>{a((t=>{const n={...t};return e.forEach((e=>{if(delete n[e.id],e.parentId){const t=n[e.parentId],o=t.childrenIds.filter((t=>t!==e.id));n[e.parentId]={...t,childrenIds:o,childrenCount:o.length}}})),n}))}),[]),d=(0,o.useCallback)(((e,t,n)=>{a((o=>{const a={...o},r=new Set(e.map((e=>e.id))),c=t.childrenIds.filter((e=>!r.has(e)));a[t.id]={...t,childrenIds:c,childrenCount:c.length};const i=[...n.childrenIds,...e.map((e=>e.id))];return a[n.id]={...n,childrenIds:i,childrenCount:i.length},e.forEach((e=>{a[e.id]={...e,parentId:n.id}})),a}))}),[]),u=(0,o.useRef)(0),h=(0,o.useCallback)((e=>{a((t=>{const n={...t},o="new-folder-".concat(u.current++);n[o]={id:o,name:e,isDir:!0,modDate:new Date,parentId:l.current,childrenIds:[],childrenCount:0};const a=n[l.current];return n[l.current]={...a,childrenIds:[...a.childrenIds,o]},n}))}),[]),f=(0,o.useCallback)((e=>{a((t=>{const n={...t},o="new-folder-".concat(u.current++);n[o]={id:o,name:e,modDate:new Date,parentId:l.current,childrenIds:[],childrenCount:0};const a=n[l.current];return n[l.current]={...a,childrenIds:[...a.childrenIds,o]},n}))}),[]);return{fileMap:n,currentFolderId:r,setCurrentFolderId:c,resetFileMap:i,deleteFiles:s,moveFiles:d,createFolder:h,createFile:f}})();(0,r.B$)({iconComponent:c.R});const C=((e,t)=>(0,o.useMemo)((()=>e[t].childrenIds.map((t=>e[t]))),[t,e]))(f,m),w=((e,t)=>(0,o.useMemo)((()=>{const n=e[t],o=[n];let a=n.parentId;for(;a;){const t=e[a];if(!t)break;o.unshift(t),a=t.parentId}return o}),[t,e]))(f,m),k=((e,t,n,a,c,i,l)=>(0,o.useCallback)((o=>{if(o.id===r.YQ.OpenFiles.id){const{targetFile:n,files:a}=o.payload,c=n||a[0];if(c&&r.FP.isDirectory(c))return void t(c.id);if(n.name.endsWith(".md")){let t=o.state.selectedFiles.map((e=>e.name)),n=e.map((e=>e.name)).join("/"),a="".concat(n,"/").concat(t);localStorage.setItem("FILE_PATH",JSON.stringify({filePath:a})),u("/lethe/toast")}}else if(o.id===r.YQ.DeleteFiles.id)n(o.state.selectedFilesForAction);else if(o.id===r.YQ.MoveFiles.id)a(o.payload.files,o.payload.source,o.payload.destination);else if(o.id===r.YQ.CreateFolder.id){const e=prompt("Provide the name for your new folder:");e&&c(e)}else if(o.id===r.YQ.ToggleDarkMode.id)i();else if("view"===o.id){let t=o.state.selectedFiles.map((e=>e.name)),n=e.map((e=>e.name)).join("/");for(let e of t)console.log("".concat(n,"/").concat(e))}else"upload"===o.id&&l.current.click();console.log(o)}),[c,n,a,t,i]))(w,y,b,F,I,(()=>{n(!t)}),i),M=(0,o.useMemo)((()=>[...l,r.YQ.CreateFolder,r.YQ.DeleteFiles,r.YQ.ToggleDarkMode]),[]),v=(0,o.useCallback)((e=>e.thumbnailUrl?"https://chonky.io".concat(e.thumbnailUrl):null),[]);return(0,d.jsxs)(s.A,{sx:{m:2},children:[(0,d.jsx)("input",{type:"file",ref:i,accept:".json,.md",style:{display:"none"},multiple:!0,onChange:e=>(async e=>{let t=e.target.files;for(let n of t)void 0!==n&&g(n.name)})(e)}),(0,d.jsx)("div",{style:{height:400},children:(0,d.jsx)(r.I0,{files:C,folderChain:w,fileActions:M,onFileAction:k,thumbnailGenerator:v,darkMode:t,...e})})]})}));var h=n(85008);const p=()=>{const[e,t]=(0,o.useState)(void 0);return(0,o.useEffect)((()=>{(async()=>{let e=await h.d("actions/config/chonky_map.json");if(void 0===e)return;let n=JSON.parse(e);t(n)})()}),[]),(0,d.jsx)("div",{children:e&&(0,d.jsx)(u,{chonkyMap:e})})}},85008:(e,t,n)=>{"use strict";n.d(t,{d:()=>l,s:()=>s});var o=n(12035),a=n(9210),r=n.n(a);const c=r().AES.decrypt("U2FsdGVkX1/ylguJ4acXIXdsOfcfzKRt5BOuj9pxJA3oBsV3qWGc2WLebCqlNG0bwjybuLjKUgHQ7QrpYTrZNg==","lethe's_playground").toString(r().enc.Utf8),i="test_repo",l=async e=>{try{const t=new o.E({auth:c}),n=await t.request("GET /repos/habitual-irony/".concat(i,"/contents/").concat(e),{repo:"".concat(i),path:"".concat(e),encoding:"utf-8",decoding:"utf-8"});return decodeURIComponent(escape(window.atob(n.data.content)))}catch(t){return}},s=async(e,t)=>{const n=new o.E({auth:c}),a=await(async(e,t)=>(await t.request("GET /repos/habitual-irony/".concat(i,"/contents/").concat(e),{owner:"habitual-irony",repo:"".concat(i),path:"".concat(e)})).data.sha)(e,n);await n.request("PUT /repos/habitual-irony/".concat(i,"/contents/").concat(e),{owner:"habitual-irony",repo:"".concat(i),path:"".concat(e),message:"chonky commit",sha:a,committer:{name:"habitual-irony",email:"habitual-irony@github.com"},content:"".concat(btoa(unescape(encodeURIComponent("".concat(t))))),headers:{}})}},72858:()=>{}}]);