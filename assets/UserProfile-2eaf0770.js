import{L as z,q as E,a4 as N,ab as m,t as d,z as a,o as s,f as n,e,b as t,a1 as p,E as f,G as I,c as P,F as h,C as U,ac as F,ad as $,ae as q,H as G}from"./index-35d4c811.js";import{P as H}from"./vue3-perfect-scrollbar.esm-4ffbcf84.js";import{u as M}from"./useAbility-ce756b78.js";import{V as L}from"./VAvatar-7759ad5c.js";import{V as w}from"./VImg-9b04c05e.js";import{V as O}from"./VMenu-d6c3699e.js";import{V as j,a as C,b as S,c as J}from"./VList-56d7996c.js";import{V as K}from"./VListItemAction-3c6fc743.js";import{V as g}from"./VBadge-0d2fe36f.js";import{V as Q}from"./VDivider-4423ace3.js";import"./VOverlay-ec7a9eab.js";import"./easing-9f15041e.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-5411c7b8.js";import"./ssrBoot-c2946fb8.js";const ge={__name:"UserProfile",setup(W){const x=z(),l=E(),A=N.useToast(),B=M(),D=m("userData"),r=d(()=>l.state.auth.user);d(()=>l.state.auth.notifications),d(()=>l.state.auth.loading);const y=async()=>{const c=await l.dispatch("LogoutAction");c.status===200&&(A.success(c.message),m("accessToken").value=null,D.value=null,m("userAbilityRules").value=null,B.update([]),localStorage.removeItem("role"),localStorage.removeItem("token"),localStorage.removeItem("Refresh"),await x.push("/login"))},R=[{type:"divider"},{type:"navItem",icon:"tabler-user",title:"Profile",to:{name:"admin-profile"}},{type:"navItem",icon:"tabler-settings",title:"Settings",to:{name:"admin-setting"}},{type:"navItem",icon:"tabler-lock",title:"Update Password",to:{name:"admin-password"}},{type:"divider"},{type:"navItem",icon:"tabler-logout",title:"Logout",onClick:y}],T=[{type:"divider"},{type:"navItem",icon:"tabler-user",title:"Profile",to:{name:"client-profile"}},{type:"navItem",icon:"tabler-lock",title:"Update Password",to:{name:"client-password"}},{type:"divider"},{type:"navItem",icon:"tabler-logout",title:"Logout",onClick:y}];return(c,X)=>a(r)?(s(),n(g,{key:0,dot:"",bordered:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:e(()=>{var v,b;return[t(L,{class:"cursor-pointer",color:(v=a(r))!=null&&v.image?void 0:"primary",variant:(b=a(r))!=null&&b.image?void 0:"tonal"},{default:e(()=>{var k,V;return[(k=a(r))!=null&&k.image?(s(),n(w,{key:0,src:(V=a(r))==null?void 0:V.image},null,8,["src"])):(s(),n(p,{key:1,icon:"tabler-user"})),t(O,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:e(()=>[t(j,null,{default:e(()=>[t(C,null,{prepend:e(()=>[t(K,{start:""},{default:e(()=>[t(g,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success",bordered:""},{default:e(()=>{var i,o;return[t(L,{color:(i=a(r))!=null&&i.image?void 0:"primary",variant:(o=a(r))!=null&&o.image?void 0:"tonal"},{default:e(()=>{var u,_;return[(u=a(r))!=null&&u.image?(s(),n(w,{key:0,src:(_=a(r))==null?void 0:_.image},null,8,["src"])):(s(),n(p,{key:1,icon:"tabler-user"}))]}),_:1},8,["color","variant"])]}),_:1})]),_:1})]),default:e(()=>[t(S,{class:"font-weight-medium"},{default:e(()=>{var i;return[f(I((i=a(r))==null?void 0:i.name),1)]}),_:1}),t(J,null,{default:e(()=>[f("Online")]),_:1})]),_:1}),t(a(H),{options:{wheelPropagation:!1}},{default:e(()=>{var i;return[(s(!0),P(h,null,U(((i=a(r))==null?void 0:i.role)==="Admin"?R:T,o=>(s(),P(h,{key:o.title},[o.type==="navItem"?(s(),n(C,{key:0,to:o.to,onClick:u=>o.onClick&&o.onClick()},F({prepend:e(()=>[t(p,{class:"me-2",icon:o.icon,size:"22"},null,8,["icon"])]),default:e(()=>[t(S,null,{default:e(()=>[f(I(o.title),1)]),_:2},1024)]),_:2},[o.badgeProps?{name:"append",fn:e(()=>[t(g,$(q(o.badgeProps)),null,16)]),key:"0"}:void 0]),1032,["to","onClick"])):(s(),n(Q,{key:1,class:"my-2"}))],64))),128))]}),_:1})]),_:1})]),_:1})]}),_:1},8,["color","variant"])]}),_:1})):G("",!0)}};export{ge as default};