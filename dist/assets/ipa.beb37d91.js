import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dB as g,dC as d,a1 as a,dA as f}from"./index.5b232f05.js";import{F as h}from"./File.2b2512f8.js";import"./icon.79f45fb8.js";import"./index.018e3bd1.js";import"./Layout.e9aed04d.js";import"./useTitle.915458dd.js";import"./index.e32a7f53.js";import"./FolderTree.f758ae3f.js";import"./index.aa52b542.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};