import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dB as g,dC as d,a1 as a,dA as f}from"./index.cd7babe8.js";import{F as h}from"./File.eb8ddf24.js";import"./icon.00b1145e.js";import"./index.0fd2a4fa.js";import"./Layout.0f994f60.js";import"./useTitle.8c2de15f.js";import"./index.6223198c.js";import"./FolderTree.6ee7b586.js";import"./index.20ae6a0b.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
