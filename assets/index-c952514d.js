import{r as L}from"./validators-dea6e3a5.js";import{q as P,L as Y,a4 as K,s as F,t as B,r as k,a as Q,o as p,f as u,e as t,b as a,d as n,E as g,z as l,a2 as C,D as W,ag as X,G as i,H as D,a1 as N}from"./index-670bda14.js";import{_ as Z}from"./AppTextField-803105de.js";import{_ as ee}from"./DialogCloseBtn-07a65624.js";import{_ as te}from"./Loading-0e8ee1a0.js";import{a as _,V as U}from"./VRow-44af3a5b.js";import{V as R}from"./VCardText-83b6dd60.js";import{V as ae}from"./VDialog-e50ee805.js";import{V as S}from"./VCard-367227de.js";import{V as oe}from"./VDivider-964da8ec.js";import{V as se}from"./VForm-e3bcef70.js";import{V as ne}from"./VDataTable-674b624c.js";import{V as le}from"./VImg-4f1dd734.js";import{V as q}from"./VTooltip-4a06c0c7.js";import"./helpers-61e4df1a.js";import"./focus-bfe812d1.js";import"./VTextField-babd124d.js";/* empty css                   */import"./VCounter-40602143.js";import"./VField-eebd85ff.js";import"./easing-9f15041e.js";import"./VInput-28c68c55.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./VAvatar-eedc1aa8.js";import"./VOverlay-9bca4c5f.js";import"./lazy-055ec9ba.js";import"./scopeId-78466d19.js";import"./dialog-transition-a3b422c0.js";import"./VSelect-80bd1ff2.js";import"./VList-faf63776.js";import"./ssrBoot-587632ee.js";import"./VMenu-cbe945a0.js";import"./VCheckboxBtn-770097af.js";import"./VSelectionControl-798a6484.js";import"./VChip-c9c9bc7b.js";import"./VTable-3015d60e.js";import"./filter-9f13f1fe.js";const ie={class:"d-flex align-center"},re={class:"d-flex flex-column ms-3"},de={class:"d-block font-weight-medium text-truncate text-high-emphasis"},ce={class:"text-xs"},pe={class:"text-xs"},ue={class:"text-xs"},me={class:"text-xs"},fe={class:"text-xs"},ke={class:"text-xs"},tt={__name:"index",setup(_e){const r=P(),G=Y(),w=K.useToast();F(()=>document.title="Admin - Feedbacks"),F(()=>r.dispatch("GetFeedbacks"));const I=B(()=>r.state.feedbacks.data),v=B(()=>r.state.feedbacks.loading),M=B(()=>r.state.auth.user),y=JSON.parse(M.value.permissions);F(()=>{var s;(s=y.FeedBack)!=null&&s.includes("ReadFeedBack")||(alert("You don't have permission to access this resource..."),G.go(-1))});const x=k({}),c=k(""),b=k(""),d=k(!1),E=s=>{d.value=!0,x.value=s,c.value=s.action_taken},O=[{title:"Client",key:"feedback.client"},{title:"Title",key:"feedback.title"},{title:"Description",key:"feedback.description"},{title:"Category",key:"feedback.category"},{title:"Ratings",key:"feedback.ratings"},{title:"Action Taken",key:"feedback.taken"},{title:"Actions",key:"feedback.action",sortable:!1}],h=k(),j=()=>{var s;(s=h==null?void 0:h.value)==null||s.validate().then(({valid:o})=>{o&&z()})},z=async()=>{const s=new FormData;s.append("action_taken",c.value);try{const o=await r.dispatch("UpdateFeedback",{id:x.value.id,formData:s});o.status===200&&(w.success(o.message),r.dispatch("GetFeedbacks"),d.value=!1,c.value="")}catch(o){console.error(o)}},H=async s=>{if(confirm("Are you sure to delete ?"))try{const o=await r.dispatch("DeleteFeedback",s);o.status===200&&(w.error(o.message),r.dispatch("GetFeedbacks"))}catch(o){console.log(o)}};return(s,o)=>{const J=ee,T=Z,A=Q("IconBtn");return p(),u(U,null,{default:t(()=>[v.value?(p(),u(te,{key:0})):(p(),u(_,{key:1,cols:"12"},{default:t(()=>[a(S,null,{default:t(()=>[a(R,{style:{"border-bottom":"thin solid rgba(var(--v-border-color), var(--v-border-opacity))"}},{default:t(()=>[a(U,null,{default:t(()=>[a(_,{cols:"8",md:"8"},{default:t(()=>[n("h2",null,[g("Feedbacks "),l(x)?(p(),u(ae,{key:0,modelValue:l(d),"onUpdate:modelValue":o[2]||(o[2]=e=>C(d)?d.value=e:null),persistent:"",width:"600"},{default:t(()=>[a(J,{onClick:o[0]||(o[0]=e=>d.value=!l(d))}),a(S,{title:"Update Feedback"},{default:t(()=>[a(oe,{class:"mt-3"}),a(R,null,{default:t(()=>[a(se,{ref_key:"refForm",ref:h,onSubmit:W(j,["prevent"])},{default:t(()=>[a(U,null,{default:t(()=>[a(_,{cols:"12",md:"12"},{default:t(()=>[a(T,{modelValue:l(c),"onUpdate:modelValue":o[1]||(o[1]=e=>C(c)?c.value=e:null),"prepend-inner-icon":"tabler-note",placeholder:"Action Taken","persistent-placeholder":"",label:"Action Taken",rules:["requiredValidator"in s?s.requiredValidator:l(L)]},null,8,["modelValue","rules"])]),_:1}),a(_,{cols:"12"},{default:t(()=>[a(X,{type:"submit",disabled:v.value},{default:t(()=>[g(i(v.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])):D("",!0)])]),_:1}),a(_,{cols:"4",md:"4"},{default:t(()=>[a(T,{modelValue:l(b),"onUpdate:modelValue":o[3]||(o[3]=e=>C(b)?b.value=e:null),density:"compact",placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(l(ne),{headers:O,items:I.value,search:l(b),"items-per-page":5,class:"text-no-wrap mb-4"},{"item.feedback.client":t(({item:e})=>{var m,f,V,$;return[n("div",ie,[n("div",null,[a(le,{rounded:"",src:((f=(m=e.client)==null?void 0:m.image)==null?void 0:f.length)>0?(V=e.client)==null?void 0:V.image:"/placeholder.jpg",height:"40",width:"40"},null,8,["src"])]),n("div",re,[n("span",de,i(($=e.client)==null?void 0:$.name),1),n("span",ce,i(e.client.designation),1)])])]}),"item.feedback.title":t(({item:e})=>[n("span",pe,i(e.title),1)]),"item.feedback.description":t(({item:e})=>[n("span",ue,i(e==null?void 0:e.description.substring(0,35))+" "+i((e==null?void 0:e.description.length)>35?"...":""),1)]),"item.feedback.category":t(({item:e})=>[n("span",me,i(e.category),1)]),"item.feedback.ratings":t(({item:e})=>[n("span",fe,i(e.ratings),1)]),"item.feedback.taken":t(({item:e})=>[n("span",ke,i(e!=null&&e.action_taken?e==null?void 0:e.action_taken:"-"),1)]),"item.feedback.action":t(({item:e})=>{var m,f;return[(m=l(y).FeedBack)!=null&&m.includes("UpdateFeedBack")?(p(),u(A,{key:0,onClick:V=>E(e)},{default:t(()=>[a(q,{activator:"parent",location:"top"},{default:t(()=>[g("Update")]),_:1}),a(N,{icon:"tabler-edit"})]),_:2},1032,["onClick"])):D("",!0),(f=l(y).FeedBack)!=null&&f.includes("DeleteFeedBack")?(p(),u(A,{key:1,onClick:V=>H(e.id)},{default:t(()=>[a(q,{activator:"parent",location:"top"},{default:t(()=>[g("Delete")]),_:1}),a(N,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):D("",!0)]}),_:1},8,["items","search"])]),_:1})]),_:1}))]),_:1})}}};export{tt as default};