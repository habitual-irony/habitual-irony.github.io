(self.webpackChunkhabitual_irony=self.webpackChunkhabitual_irony||[]).push([[440],{81228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(9950),o=n(28429),r=n(11773),i=n(89776);const c=(0,r.UM)({id:"upload",button:{name:"Upload",toolbar:!0,contextMenu:!1,icon:r.jz.upload}}),l=((0,r.UM)({id:"view",requiresSelection:!0,fileFilter:e=>!e.isDir,button:{name:"View",toolbar:!1,contextMenu:!0,icon:r.jz.file}}),[c]);var s=n(85008),d=n(16491),u=n(44414);const h=a.memo((e=>{const[t,n]=(0,a.useState)(!1),c=(0,a.useRef)(null),h=(0,o.Zp)(),p=e.chonkyMap,m=()=>({baseFileMap:p.fileMap,rootFolderId:p.rootFolderId}),{fileMap:f,currentFolderId:y,setCurrentFolderId:b,deleteFiles:F,moveFiles:I,createFolder:w,createFile:g}=(()=>{const{baseFileMap:e,rootFolderId:t}=(0,a.useMemo)(m,[]),[n,o]=(0,a.useState)(e),[r,i]=(0,a.useState)(t),c=(0,a.useCallback)((()=>{o(e),i(t)}),[e,t]),l=(0,a.useRef)(r);(0,a.useEffect)((()=>{l.current=r}),[r]);const d=(0,a.useCallback)((e=>{o((t=>{const n={...t};return e.forEach((e=>{if(delete n[e.id],e.parentId){const t=n[e.parentId],a=t.childrenIds.filter((t=>t!==e.id));n[e.parentId]={...t,childrenIds:a,childrenCount:a.length}}s.TR(e.path.replace("/home/runner/work/test_repo/test_repo/",""))})),n}))}),[]),u=(0,a.useCallback)(((e,t,n)=>{o((a=>{const o={...a},r=new Set(e.map((e=>e.id))),i=t.childrenIds.filter((e=>!r.has(e)));o[t.id]={...t,childrenIds:i,childrenCount:i.length};const c=[...n.childrenIds,...e.map((e=>e.id))];return o[n.id]={...n,childrenIds:c,childrenCount:c.length},e.forEach((e=>{o[e.id]={...e,parentId:n.id}})),o}))}),[]),h=(0,a.useRef)(0),p=(0,a.useCallback)((e=>{o((t=>{const n={...t},a="new-folder-".concat(h.current++);n[a]={id:a,name:e,isDir:!0,modDate:new Date,parentId:l.current,childrenIds:[],childrenCount:0};const o=n[l.current];return n[l.current]={...o,childrenIds:[...o.childrenIds,a]},n}))}),[]),f=(0,a.useCallback)((e=>{o((t=>{const n={...t},a="new-folder-".concat(h.current++);n[a]={id:a,name:e,modDate:new Date,parentId:l.current,childrenIds:[],childrenCount:0};const o=n[l.current];return n[l.current]={...o,childrenIds:[...o.childrenIds,a]},n}))}),[]);return{fileMap:n,currentFolderId:r,setCurrentFolderId:i,resetFileMap:c,deleteFiles:d,moveFiles:u,createFolder:p,createFile:f}})();(0,r.B$)({iconComponent:i.R});const k=((e,t)=>(0,a.useMemo)((()=>e[t].childrenIds.map((t=>e[t]))),[t,e]))(f,y),C=((e,t)=>(0,a.useMemo)((()=>{const n=e[t],a=[n];let o=n.parentId;for(;o;){const t=e[o];if(!t)break;a.unshift(t),o=t.parentId}return a}),[t,e]))(f,y),M=((e,t,n,o,i,c,l)=>(0,a.useCallback)((a=>{if(a.id===r.YQ.OpenFiles.id){const{targetFile:n,files:o}=a.payload,i=n||o[0];if(i&&r.FP.isDirectory(i))return void t(i.id);if(n.name.endsWith(".md")){let t=a.state.selectedFiles.map((e=>e.name)),n=e.map((e=>e.name)).join("/"),o="".concat(n,"/").concat(t);localStorage.setItem("FILE_PATH",JSON.stringify({filePath:o})),h("/lethe/toast")}}else if(a.id===r.YQ.DeleteFiles.id)n(a.state.selectedFilesForAction);else if(a.id===r.YQ.MoveFiles.id)o(a.payload.files,a.payload.source,a.payload.destination);else if(a.id===r.YQ.CreateFolder.id){const e=prompt("Provide the name for your new folder:");e&&i(e)}else if(a.id===r.YQ.ToggleDarkMode.id)c();else if("view"===a.id){a.state.selectedFiles.map((e=>e.name)),e.map((e=>e.name)).join("/")}else"upload"===a.id&&l.current.click()}),[i,n,o,t,c]))(C,b,F,I,w,(()=>{n(!t)}),c),j=(0,a.useMemo)((()=>[...l,r.YQ.CreateFolder,r.YQ.DeleteFiles,r.YQ.ToggleDarkMode]),[]),v=(0,a.useCallback)((e=>e.thumbnailUrl?"https://chonky.io".concat(e.thumbnailUrl):null),[]);return(0,u.jsxs)(d.A,{sx:{m:2},children:[(0,u.jsx)("input",{type:"file",ref:c,accept:".json,.md",style:{display:"none"},multiple:!0,onChange:e=>(async e=>{let t=e.target.files;for(let n of t)void 0!==n&&g(n.name)})(e)}),(0,u.jsx)("div",{style:{height:400},children:(0,u.jsx)(r.I0,{files:k,folderChain:C,fileActions:j,onFileAction:M,thumbnailGenerator:v,darkMode:t,...e})})]})})),p=()=>{const[e,t]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{(async()=>{let e=await s.dd("actions/config/chonky_map.json");if(void 0===e)return;let n=JSON.parse(e);t(n)})()}),[]),(0,u.jsx)("div",{children:e&&(0,u.jsx)(h,{chonkyMap:e})})}},85008:(e,t,n)=>{"use strict";n.d(t,{TR:()=>u,dd:()=>l,sq:()=>d});var a=n(12035),o=n(9210),r=n.n(o);const i=r().AES.decrypt("U2FsdGVkX1/ylguJ4acXIXdsOfcfzKRt5BOuj9pxJA3oBsV3qWGc2WLebCqlNG0bwjybuLjKUgHQ7QrpYTrZNg==","lethe's_playground").toString(r().enc.Utf8),c="test_repo",l=async e=>{try{const t=new a.E({auth:i}),n=await t.request("GET /repos/habitual-irony/".concat(c,"/contents/").concat(e),{repo:"".concat(c),path:"".concat(e),encoding:"utf-8",decoding:"utf-8"});return decodeURIComponent(escape(window.atob(n.data.content)))}catch(t){return}},s=async(e,t)=>(await t.request("GET /repos/habitual-irony/".concat(c,"/contents/").concat(e),{owner:"habitual-irony",repo:"".concat(c),path:"".concat(e)})).data.sha,d=async(e,t)=>{const n=new a.E({auth:i}),o=await s(e,n);await n.request("PUT /repos/habitual-irony/".concat(c,"/contents/").concat(e),{owner:"habitual-irony",repo:"".concat(c),path:"".concat(e),message:"chonky commit",sha:o,committer:{name:"habitual-irony",email:"habitual-irony@github.com"},content:"".concat(btoa(unescape(encodeURIComponent("".concat(t))))),headers:{}})},u=async e=>{const t=new a.E({auth:i}),n=await s(e,t);await t.request("DELETE /repos/habitual-irony/".concat(c,"/contents/").concat(e),{owner:"habitual-irony",repo:"".concat(c),path:"".concat(e),message:"chonky delete",sha:n,committer:{name:"habitual-irony",email:"habitual-irony@github.com"},headers:{}})}},72858:()=>{}}]);