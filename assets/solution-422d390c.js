import{r as c}from"./validators-dea6e3a5.js";import{q as de,L as me,a4 as pe,s as g,t as q,r as _,a as ce,o as d,f as m,e as a,b as l,d as V,E as k,z as o,ag as $,a1 as B,H as T,a2 as S,D as Y,G as h,ac as Ve}from"./index-35d4c811.js";import{_ as fe}from"./AppTextField-e0d36e66.js";import{_ as ve}from"./AppSelect-676dfa2f.js";import{_ as ke}from"./DialogCloseBtn-553e93aa.js";import{_ as be}from"./Loading-891177bd.js";import"./moment-a9aaa855.js";import{a as r,V as N}from"./VRow-d67d386c.js";import{V as G}from"./VCardText-20e2d0ff.js";import{V as K}from"./VDialog-b2a36fbc.js";import{V as L}from"./VCard-06d56730.js";import{V as Q}from"./VDivider-4423ace3.js";import{V as W}from"./VForm-790819b5.js";import{V as Ce}from"./VDataTable-6d3f6f6a.js";import{V as X}from"./VTooltip-5c041b29.js";import{V as _e}from"./VImg-9b04c05e.js";import{V as Z}from"./VChip-5a7d2631.js";import"./helpers-61e4df1a.js";import"./focus-47cc4c1d.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./VSelect-bf5a5be9.js";import"./VList-56d7996c.js";import"./ssrBoot-c2946fb8.js";import"./VAvatar-7759ad5c.js";import"./dialog-transition-5411c7b8.js";import"./VMenu-d6c3699e.js";import"./VOverlay-ec7a9eab.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./VCheckboxBtn-d7c7ca98.js";import"./VSelectionControl-4d8986cc.js";import"./VTable-41351eee.js";import"./filter-85676bf0.js";const he={class:"d-flex align-center"},ye={class:"d-flex flex-column ms-3"},Ue={class:"d-block font-weight-medium text-truncate text-high-emphasis"},ge={class:"text-xs"},qe={class:"text-xs"},Se={class:"text-xs"},Me={class:"text-xs"},fl={__name:"solution",setup(De){const u=de(),ee=me(),F=pe.useToast();g(()=>document.title="Admin - Custom Solution"),g(()=>u.dispatch("GetSolutions")),g(()=>u.dispatch("GetClients")),g(()=>u.dispatch("GetAdmins"));const I=q(()=>u.state.clients.clients),R=q(()=>u.state.admins.admins),le=q(()=>u.state.solutions.data),U=q(()=>u.state.solutions.loading),te=q(()=>u.state.auth.user),M=JSON.parse(te.value.permissions);g(()=>{var t;(t=M.CustomMenu)!=null&&t.includes("ReadCustomMenu")||(alert("You don't have permission to access this resource..."),ee.go(-1))});const p=_("Admin"),D=_({}),s=_({user_id:"",name:"",link:"",tooltip:"",status:""}),A=_(""),y=_(!1),b=_(!1),oe=t=>{b.value=!0,D.value=t,s.value.user_id=t.user_id,s.value.name=t.name,s.value.link=t.link,s.value.tooltip=t.tooltip,s.value.status=t.status,p.value=t.user.role==="Admin"?"Admin":"Client"},E=t=>{b.value=!1,D.value="",p.value="Client"},ae=[{title:"User",key:"solution.user"},{title:"Name",key:"solution.name"},{title:"Link",key:"solution.link"},{title:"Tooltip",key:"solution.tooltip"},{title:"Status",key:"solution.status"},{title:"Actions",key:"solution.action",sortable:!1}],f=_(),se=()=>{var t;(t=f==null?void 0:f.value)==null||t.validate().then(({valid:e})=>{e&&ne()})},ie=()=>{var t;(t=f==null?void 0:f.value)==null||t.validate().then(({valid:e})=>{e&&re()})},ne=async()=>{const t=new FormData;t.append("user_id",s.value.user_id),t.append("name",s.value.name),t.append("link",s.value.link),t.append("tooltip",s.value.tooltip),t.append("status",s.value.status);try{const e=await u.dispatch("CreateSolution",t);e.status===200&&(F.success(e.message),u.dispatch("GetSolutions"),y.value=!1,s.value="")}catch(e){console.error(e)}},re=async()=>{const t=new FormData;t.append("user_id",s.value.user_id),t.append("name",s.value.name),t.append("link",s.value.link),t.append("tooltip",s.value.tooltip),t.append("status",s.value.status);try{const e=await u.dispatch("UpdateSolution",{id:D.value.id,formData:t});e.status===200&&(F.success(e.message),u.dispatch("GetSolutions"),E())}catch(e){console.error(e)}},ue=async t=>{if(confirm("Are you sure to delete ?"))try{const e=await u.dispatch("DeleteSolution",t);e.status===200&&(F.error(e.message),u.dispatch("GetSolutions"))}catch(e){console.log(e)}},O=["Active","Disable"],z=["Admin","Client"];return(t,e)=>{const j=ke,v=ve,C=fe,x=ce("IconBtn");return d(),m(N,null,{default:a(()=>[U.value?(d(),m(be,{key:0})):(d(),m(r,{key:1,cols:"12"},{default:a(()=>[l(L,null,{default:a(()=>{var H;return[l(G,{style:{"border-bottom":"thin solid rgba(var(--v-border-color), var(--v-border-opacity))"}},{default:a(()=>[l(N,null,{default:a(()=>[l(r,{cols:"8",md:"8"},{default:a(()=>{var n;return[V("h2",null,[k("Custom Solution "),(n=o(M).CustomMenu)!=null&&n.includes("CreateCustomMenu")?(d(),m($,{key:0,onClick:e[0]||(e[0]=i=>y.value=!o(y)),rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:a(()=>[l(B,{start:"",icon:"tabler-plus"}),k(" Create ")]),_:1})):T("",!0),l(K,{modelValue:o(y),"onUpdate:modelValue":e[9]||(e[9]=i=>S(y)?y.value=i:null),persistent:"",width:"900"},{default:a(()=>[l(j,{onClick:e[1]||(e[1]=i=>E())}),l(L,{title:"Create Custom Solution"},{default:a(()=>[l(Q,{class:"mt-3"}),l(G,null,{default:a(()=>[l(W,{ref_key:"refForm",ref:f,onSubmit:Y(se,["prevent"])},{default:a(()=>[l(N,null,{default:a(()=>[l(r,{cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(p),"onUpdate:modelValue":e[2]||(e[2]=i=>S(p)?p.value=i:null),items:z,"item-title":"email","item-value":"id",label:"Menu For","prepend-inner-icon":"tabler-list","persistent-placeholder":"",placeholder:"Choose..",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),o(p)==="Client"?(d(),m(r,{key:0,cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).user_id,"onUpdate:modelValue":e[3]||(e[3]=i=>o(s).user_id=i),items:I.value,"item-title":"email","item-value":"id",label:"Clients","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose.."},null,8,["modelValue","items"])]),_:1})):(d(),m(r,{key:1,cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).user_id,"onUpdate:modelValue":e[4]||(e[4]=i=>o(s).user_id=i),items:R.value,"item-title":"email","item-value":"id",label:"Admins","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose.."},null,8,["modelValue","items"])]),_:1})),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).name,"onUpdate:modelValue":e[5]||(e[5]=i=>o(s).name=i),"prepend-inner-icon":"tabler-note",placeholder:"Name","persistent-placeholder":"",label:"Name",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).link,"onUpdate:modelValue":e[6]||(e[6]=i=>o(s).link=i),"prepend-inner-icon":"tabler-link",placeholder:"Link","persistent-placeholder":"",label:"Link",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).tooltip,"onUpdate:modelValue":e[7]||(e[7]=i=>o(s).tooltip=i),"prepend-inner-icon":"tabler-link",placeholder:"Tooltip","persistent-placeholder":"",label:"Tooltip",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).status,"onUpdate:modelValue":e[8]||(e[8]=i=>o(s).status=i),items:O,"prepend-inner-icon":"tabler-color-picker",label:"Status",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12"},{default:a(()=>[l($,{type:"submit",disabled:U.value},{default:a(()=>[k(h(U.value?"Creating...":"Create"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(D)?(d(),m(K,{key:1,modelValue:o(b),"onUpdate:modelValue":e[18]||(e[18]=i=>S(b)?b.value=i:null),persistent:"",width:"900"},{default:a(()=>[l(j,{onClick:e[10]||(e[10]=i=>b.value=!o(b))}),l(L,{title:"Update Custom SOlution  Message"},{default:a(()=>[l(Q,{class:"mt-3"}),l(G,null,{default:a(()=>[l(W,{ref_key:"refForm",ref:f,onSubmit:Y(ie,["prevent"])},{default:a(()=>[l(N,null,{default:a(()=>[l(r,{cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(p),"onUpdate:modelValue":e[11]||(e[11]=i=>S(p)?p.value=i:null),items:z,"item-title":"email","item-value":"id",label:"Menu For","prepend-inner-icon":"tabler-list","persistent-placeholder":"",placeholder:"Choose..",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),o(p)==="Client"?(d(),m(r,{key:0,cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).user_id,"onUpdate:modelValue":e[12]||(e[12]=i=>o(s).user_id=i),items:I.value,"item-title":"email","item-value":"id",label:"Clients","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose.."},null,8,["modelValue","items"])]),_:1})):(d(),m(r,{key:1,cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).user_id,"onUpdate:modelValue":e[13]||(e[13]=i=>o(s).user_id=i),items:R.value,"item-title":"email","item-value":"id",label:"Admins","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose.."},null,8,["modelValue","items"])]),_:1})),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).name,"onUpdate:modelValue":e[14]||(e[14]=i=>o(s).name=i),"prepend-inner-icon":"tabler-note",placeholder:"Name","persistent-placeholder":"",label:"Name",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).link,"onUpdate:modelValue":e[15]||(e[15]=i=>o(s).link=i),"prepend-inner-icon":"tabler-link",placeholder:"Link","persistent-placeholder":"",label:"Link",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(C,{modelValue:o(s).tooltip,"onUpdate:modelValue":e[16]||(e[16]=i=>o(s).tooltip=i),"prepend-inner-icon":"tabler-link",placeholder:"Tooltip","persistent-placeholder":"",label:"Tooltip",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12",md:"4"},{default:a(()=>[l(v,{modelValue:o(s).status,"onUpdate:modelValue":e[17]||(e[17]=i=>o(s).status=i),items:O,"prepend-inner-icon":"tabler-color-picker",label:"Status",rules:["requiredValidator"in t?t.requiredValidator:o(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"12"},{default:a(()=>[l($,{type:"submit",disabled:U.value},{default:a(()=>[k(h(U.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])):T("",!0)])]}),_:1}),l(r,{cols:"4",md:"4"},{default:a(()=>[l(C,{modelValue:o(A),"onUpdate:modelValue":e[19]||(e[19]=n=>S(A)?A.value=n:null),density:"compact",placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(o(Ce),{headers:ae,items:le.value,search:o(A),"items-per-page":5,class:"text-no-wrap mb-4"},Ve({"item.solution.user":a(({item:n})=>{var i,w,J,P;return[V("div",he,[V("div",null,[l(_e,{rounded:"",src:((w=(i=n.user)==null?void 0:i.image)==null?void 0:w.length)>0?(J=n.user)==null?void 0:J.image:"/placeholder.jpg",height:"40",width:"40"},null,8,["src"])]),V("div",ye,[V("span",Ue,h((P=n.user)==null?void 0:P.name),1),V("span",ge,h(n.user.designation),1)])])]}),"item.solution.name":a(({item:n})=>[V("span",qe,h(n.name),1)]),"item.solution.link":a(({item:n})=>[V("span",Se,h(n.link),1)]),"item.solution.tooltip":a(({item:n})=>[V("span",Me,h(n.tooltip),1)]),"item.solution.status":a(({item:n})=>[n.status==="Active"?(d(),m(Z,{key:0,color:"success"},{default:a(()=>[k("Active")]),_:1})):n.status==="Disable"?(d(),m(Z,{key:1,color:"error"},{default:a(()=>[k("Disable")]),_:1})):T("",!0)]),_:2},[(H=o(M).CustomMenu)!=null&&H.includes("UpdateCustomMenu")?{name:"item.solution.action",fn:a(({item:n})=>{var i;return[l(x,{onClick:w=>oe(n)},{default:a(()=>[l(X,{activator:"parent",location:"top"},{default:a(()=>[k("Update")]),_:1}),l(B,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),(i=o(M).CustomMenu)!=null&&i.includes("DeleteCustomMenu")?(d(),m(x,{key:0,onClick:w=>ue(n.id)},{default:a(()=>[l(X,{activator:"parent",location:"top"},{default:a(()=>[k("Delete")]),_:1}),l(B,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):T("",!0)]}),key:"0"}:void 0]),1032,["items","search"])]}),_:1})]),_:1}))]),_:1})}}};export{fl as default};