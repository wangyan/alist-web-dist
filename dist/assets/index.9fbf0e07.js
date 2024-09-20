import{h as t,G as O,a4 as y,k as x,ag as L,ah as R,bO as h,a0 as D,$ as M,b as f,a as d,N as W,O as z,L as w,S as p,ax as E,bP as _,m as U,bQ as b,ae as g,a7 as l,aD as N,V as n,W as r,bR as Y,bS as H,bT as j,bU as F,bV as X,bW as q,bX as S,bY as J,bZ as K,aR as Q,b_ as Z,b$ as G,c0 as ee,ay as te,c1 as ne,aK as re,aW as oe,b9 as ae,X as C,ak as T,c2 as ie,bm as se,be as le,bf as ce,bg as ue,bh as ge,bi as me,aC as I,bk as P,bl as k,ba as de,c3 as _e,n as he,c4 as pe,c5 as Ee,c6 as fe}from"./index.bf459d0c.js";import{b as be,a as Ie}from"./useTitle.aca00b96.js";import{A as $e,f as ve,g as Ae,h as Le,i as Re}from"./index.7d51a977.js";import{S as De}from"./index.b4e26d3c.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Se=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Se||{});const Te=e=>{const o=x(()=>{if(!L.is_admin(R())){if(e.role===void 0)return!1;if(e.role===h.GENERAL&&!L.is_general(R()))return!1}return!0});return t(M,{get fallback(){return t(Oe,e)},get children(){return[t(D,{get when(){return!o()},children:null}),t(D,{get when(){return e.children},get children(){return t(we,e)}})]}})},Oe=e=>{const{pathname:o}=f(),a=d(),c=()=>o()===e.to;return t($e,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var A;if(V(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let m=e.to;m.startsWith("http")||(m=z(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},we=e=>{const{pathname:o}=f(),[a,c]=U(o().includes(e.to)),u=d();return t(l,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return u(e.title)}})]}}),t(E,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(O,{get each(){return e.items},children:o=>t(Te,o)})}});function Ce(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.228788e5.js"),["assets/Common.228788e5.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/SettingItem.46a153ad.js","assets/item_type.be442da4.js","assets/index.7d51a977.js","assets/ResponsiveGrid.f1b999c6.js","assets/index.b4e26d3c.js"])),v=[{title:"manage.sidemenu.profile",icon:Y,to:"/@manage",role:h.GUEST,component:n(()=>r(()=>import("./Profile.81e4d564.js"),["assets/Profile.81e4d564.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/index.7d51a977.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:H,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:j,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:F,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:S,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:S,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:J,to:"/@manage/settings/s3",component:n(()=>r(()=>import("./S3.e7750a6b.js"),["assets/S3.e7750a6b.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/SettingItem.46a153ad.js","assets/item_type.be442da4.js","assets/index.7d51a977.js","assets/ResponsiveGrid.f1b999c6.js","assets/FolderTree.9480c8cd.js","assets/index.ba5fc525.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.b4e26d3c.js"]))},{title:"manage.sidemenu.other",icon:K,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.0e7e8273.js"),["assets/Other.0e7e8273.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/SettingItem.46a153ad.js","assets/item_type.be442da4.js","assets/index.7d51a977.js","assets/index.b4e26d3c.js"]))}]},{title:"manage.sidemenu.tasks",icon:Ce,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:Q,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.8cf7eaef.js"),["assets/offline_download.8cf7eaef.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/Tasks.f90cf6ee.js","assets/Paginator.620c3f56.js","assets/index.7d51a977.js"]))},{title:"manage.sidemenu.upload",icon:Z,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.f4d3347a.js"),["assets/Upload.f4d3347a.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/Tasks.f90cf6ee.js","assets/Paginator.620c3f56.js","assets/index.7d51a977.js"]))},{title:"manage.sidemenu.copy",icon:G,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.59adce8b.js"),["assets/Copy.59adce8b.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/Tasks.f90cf6ee.js","assets/Paginator.620c3f56.js","assets/index.7d51a977.js"]))}]},{title:"manage.sidemenu.users",icon:ee,to:"/@manage/users",component:n(()=>r(()=>import("./Users.288ef5d1.js"),["assets/Users.288ef5d1.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/DeletePopover.691e00b3.js","assets/Wether.5c324548.js"]))},{title:"manage.sidemenu.storages",icon:Ae,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.adb4ade9.js"),["assets/Storages.adb4ade9.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/DeletePopover.691e00b3.js"]))},{title:"manage.sidemenu.metas",icon:De,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.9c27cc63.js"),["assets/Metas.9c27cc63.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/DeletePopover.691e00b3.js","assets/Wether.5c324548.js"]))},{title:"manage.sidemenu.indexes",icon:te,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.4381b001.js"),["assets/indexes.4381b001.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/Common.228788e5.js","assets/useTitle.aca00b96.js","assets/SettingItem.46a153ad.js","assets/item_type.be442da4.js","assets/index.7d51a977.js","assets/ResponsiveGrid.f1b999c6.js","assets/index.b4e26d3c.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Le,component:n(()=>r(()=>import("./backup-restore.67806ce0.js"),["assets/backup-restore.67806ce0.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/useTitle.aca00b96.js","assets/index.ba5fc525.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:ne,to:"/",role:h.GUEST,refresh:!0}],{isOpen:Pe,onOpen:ke,onClose:V}=re(),[Ve,Be]=oe(()=>ae.get("/auth/logout")),ye=()=>{const e=d(),{to:o}=f(),a=async()=>{de(await Be(),()=>{_e(),he.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return C("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(T,{"aria-label":"menu",get icon(){return t(Re,{})},display:{"@sm":"none"},onClick:ke,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(T,{"aria-label":"logout",get icon(){return t(ie,{})},get loading(){return Ve()},onClick:a,size:"sm"})}})]}}),t(se,{get opened(){return Pe()},placement:"left",onClose:V,get children(){return[t(le,{}),t(ce,{get children(){return[t(ue,{}),t(ge,{color:"$info9",get children(){return e("manage.title")}}),t(me,{get children(){return[t($,{items:v}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(P,{}),t(k,{})]}})}})]}})]}})]}})]}})},xe=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.72f4006b.js"),["assets/AddOrEdit.72f4006b.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f1b999c6.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.72f4006b.js"),["assets/AddOrEdit.72f4006b.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f1b999c6.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.b5256452.js"),["assets/AddOrEdit.b5256452.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/FolderTree.9480c8cd.js","assets/index.7d51a977.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.b5256452.js"),["assets/AddOrEdit.b5256452.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/FolderTree.9480c8cd.js","assets/index.7d51a977.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.ee2d2726.js"),["assets/AddOrEdit.ee2d2726.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/FolderTree.9480c8cd.js","assets/index.7d51a977.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.ee2d2726.js"),["assets/AddOrEdit.ee2d2726.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css","assets/FolderTree.9480c8cd.js","assets/index.7d51a977.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.487fd493.js"),["assets/2fa.487fd493.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.208069d3.js"),["assets/Messenger.208069d3.js","assets/index.bf459d0c.js","assets/index.c4c82a28.css"]))}],Me=e=>(be(e.title),t(I,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:pe(a.to,"/@manage"),component:a.component||(()=>t(Me,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),We=B(v).concat(xe),ze=()=>{const e=d();return Ie(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(ye,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return C("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:v}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(P,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Ee,{get children(){return t(O,{each:We,children:o=>t(fe,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},je=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Se as F,i as G,je as i};