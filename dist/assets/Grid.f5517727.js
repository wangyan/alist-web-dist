import{h as t,l as n,G as p,a1 as a,cX as s}from"./index.5b232f05.js";import{G as u}from"./GridItem.e5e6f459.js";import"./Folder.63d9fd27.js";import{a as c}from"./helper.90365350.js";import"./index.e32a7f53.js";import"./index.018e3bd1.js";import"./ImageWithError.2859f560.js";import"./icon.79f45fb8.js";import"./Layout.e9aed04d.js";import"./useTitle.915458dd.js";import"./FolderTree.f758ae3f.js";import"./index.aa52b542.js";import"./video_box.c7e88c3c.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.d01d8a61.js";import"./index.6ad4822f.js";const v=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(n.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return a.objs},children:(i,m)=>t(u,{obj:i,get index(){return m()}})})}})};export{v as default};