import{_ as A}from"./AppTextField-a8f30c8f.js";import{q as G,a4 as I,L as U,s as k,t as _,r as l,a as $,o as d,f as p,e as t,b as a,d as c,E as f,z as s,ag as z,a1 as b,H as B,a2 as E,ac as M,G as i}from"./index-c4e71550.js";import{_ as q}from"./Loading-2eec0421.js";import{a as h,V as C}from"./VRow-3a397f81.js";import{V as H}from"./VCardText-6669d6f5.js";import{V as J}from"./VDataTable-145871c8.js";import{V as F}from"./VTooltip-a22fc0c5.js";import{V as L}from"./VCard-71b3ac17.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";import"./VSelect-9628140b.js";import"./VList-48b3771d.js";import"./ssrBoot-3f554f90.js";import"./VDivider-aef533a2.js";import"./dialog-transition-1a37cbb8.js";import"./VMenu-3432c545.js";import"./VOverlay-14a99b98.js";import"./lazy-8c4021f0.js";import"./scopeId-203eb21d.js";import"./VCheckboxBtn-5dd1ee23.js";import"./VSelectionControl-9181ec5a.js";import"./VChip-a642ea45.js";import"./VTable-28a89234.js";import"./filter-c3387b54.js";const O={class:"text-xs"},P={class:"text-xs"},Y={class:"text-xs"},j={class:"text-xs"},K={class:"text-xs"},Se={__name:"index",setup(Q){const r=G(),v=I.useToast(),y=U();k(()=>document.title="Client - Feedbacks"),k(()=>r.dispatch("GetFeedbacks"));const T=_(()=>r.state.feedbacks.data),D=_(()=>r.state.feedbacks.loading),N=_(()=>r.state.auth.user),m=JSON.parse(N.value.permissions);k(()=>{var n;(n=m.FeedBack)!=null&&n.includes("ReadFeedBack")||(alert("You don't have permission to access this resource..."),y.go(-1))}),l({}),l("");const u=l("");l(!1);const R=[{title:"Title",key:"feedback.title"},{title:"Description",key:"feedback.description"},{title:"Category",key:"feedback.category"},{title:"Ratings",key:"feedback.ratings"},{title:"Action Taken",key:"feedback.taken"},{title:"Actions",key:"feedback.action",sortable:!1}];l();const S=async n=>{if(confirm("Are you sure to delete ?"))try{const o=await r.dispatch("DeleteFeedback",n);o.status===200&&(v.error(o.message),r.dispatch("GetFeedbacks"))}catch(o){console.log(o)}};return(n,o)=>{const w=A,g=$("IconBtn");return d(),p(C,null,{default:t(()=>[D.value?(d(),p(q,{key:0})):(d(),p(h,{key:1,cols:"12"},{default:t(()=>[a(L,null,{default:t(()=>{var V;return[a(H,{style:{"border-bottom":"thin solid rgba(var(--v-border-color), var(--v-border-opacity))"}},{default:t(()=>[a(C,null,{default:t(()=>[a(h,{cols:"8",md:"8"},{default:t(()=>{var e;return[c("h2",null,[f("Feedbacks "),(e=s(m).FeedBack)!=null&&e.includes("CreateFeedBack")?(d(),p(z,{key:0,to:"/client/feedback/create",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:t(()=>[a(b,{start:"",icon:"tabler-plus"}),f(" Create ")]),_:1})):B("",!0)])]}),_:1}),a(h,{cols:"4",md:"4"},{default:t(()=>[a(w,{modelValue:s(u),"onUpdate:modelValue":o[0]||(o[0]=e=>E(u)?u.value=e:null),density:"compact",placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(s(J),{headers:R,items:T.value,search:s(u),"items-per-page":5,class:"text-no-wrap mb-4"},M({"item.feedback.title":t(({item:e})=>[c("span",O,i(e.title),1)]),"item.feedback.description":t(({item:e})=>[c("span",P,i(e==null?void 0:e.description.substring(0,35))+" "+i((e==null?void 0:e.description.length)>35?"...":""),1)]),"item.feedback.category":t(({item:e})=>[c("span",Y,i(e.category),1)]),"item.feedback.ratings":t(({item:e})=>[c("span",j,i(e.ratings),1)]),"item.feedback.taken":t(({item:e})=>[c("span",K,i(e!=null&&e.action_taken?e==null?void 0:e.action_taken:"-"),1)]),_:2},[(V=s(m).FeedBack)!=null&&V.includes("UpdateFeedBack")?{name:"item.feedback.action",fn:t(({item:e})=>{var x;return[a(g,{onClick:()=>s(y).push("/client/feedback/edit/"+e.id)},{default:t(()=>[a(F,{activator:"parent",location:"top"},{default:t(()=>[f("Update")]),_:1}),a(b,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),(x=s(m).FeedBack)!=null&&x.includes("DeleteFeedBack")?(d(),p(g,{key:0,onClick:W=>S(e.id)},{default:t(()=>[a(F,{activator:"parent",location:"top"},{default:t(()=>[f("Delete")]),_:1}),a(b,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):B("",!0)]}),key:"0"}:void 0]),1032,["items","search"])]}),_:1})]),_:1}))]),_:1})}}};export{Se as default};
