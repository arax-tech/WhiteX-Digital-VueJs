import{r as v}from"./validators-dea6e3a5.js";import{q as x,a4 as S,L as N,n as M,s as h,a0 as z,t as u,r as q,o as c,f as p,e as a,b as t,d as m,ag as y,a1 as E,E as C,D as $,z as i}from"./index-35d4c811.js";import{_ as j}from"./AppTextField-e0d36e66.js";import{_ as A}from"./Loading-891177bd.js";import"./moment-a9aaa855.js";import{a as n,V as w}from"./VRow-d67d386c.js";import{V as U}from"./VCardText-20e2d0ff.js";import{V as G}from"./VDivider-4423ace3.js";import{V as I}from"./VForm-790819b5.js";import{V as J}from"./VCard-06d56730.js";import"./helpers-61e4df1a.js";import"./focus-47cc4c1d.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VImg-9b04c05e.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./VAvatar-7759ad5c.js";const L=m("div",null,[m("h2",null,"Update Requests")],-1),fe={__name:"[id]",setup(O){const l=x(),D=S.useToast(),f=N(),R=M();h(()=>document.title="Client - Update Requests "),z(async()=>{await l.dispatch("GetSingleubscriptionCancellation",R.params.id),B()});const V=u(()=>l.state.subscriptionCancellations.loading),_=u(()=>l.state.subscriptionCancellations.cancellation),g=u(()=>l.state.auth.user),k=JSON.parse(g.value.permissions);h(()=>{var e;(e=k.CancellationRequests)!=null&&e.includes("UpdateCancellationRequests")||(alert("You don't have permission to access this resource..."),f.go(-1))});const B=()=>{const e=_.value;e&&(o.value.title=e.title,o.value.description=e.description)},r=q(),o=q({title:"",description:""}),F=()=>{var e;(e=r==null?void 0:r.value)==null||e.validate().then(({valid:s})=>{s&&T()})},T=async()=>{const e=new FormData;e.append("title",o.value.title),e.append("description",o.value.description);try{const s=await l.dispatch("UpdateSubscriptionCancellation",{id:_.value.id,formData:e});s.status===200&&(D.success(s.message),f.push("/client/subscription/cancellation/requests"))}catch(s){console.error(s)}};return(e,s)=>{const b=j;return c(),p(w,null,{default:a(()=>[V.value?(c(),p(A,{key:0})):(c(),p(n,{key:1,cols:"12"},{default:a(()=>[t(J,null,{default:a(()=>[t(U,{style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},{default:a(()=>[L,m("div",null,[t(y,{to:"/client/subscription/cancellation/requests",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:a(()=>[t(E,{start:"",icon:"tabler-arrow-left"}),C("Back ")]),_:1})])]),_:1}),t(G),t(U,{class:"pt-0"},{default:a(()=>[t(I,{class:"mt-6",ref_key:"refForm",ref:r,onSubmit:$(F,["prevent"])},{default:a(()=>[t(w,null,{default:a(()=>[t(n,{md:"12",cols:"12"},{default:a(()=>[t(b,{"prepend-inner-icon":"tabler-user",modelValue:i(o).title,"onUpdate:modelValue":s[0]||(s[0]=d=>i(o).title=d),placeholder:"Title","persistent-placeholder":"",label:"Title",rules:["requiredValidator"in e?e.requiredValidator:i(v)]},null,8,["modelValue","rules"])]),_:1}),t(n,{md:"12",cols:"12"},{default:a(()=>[t(b,{"prepend-inner-icon":"tabler-note",modelValue:i(o).description,"onUpdate:modelValue":s[1]||(s[1]=d=>i(o).description=d),placeholder:"Description","persistent-placeholder":"",label:"Description",rules:["requiredValidator"in e?e.requiredValidator:i(v)]},null,8,["modelValue","rules"])]),_:1}),t(n,{cols:"12"},{default:a(()=>[t(y,{type:"submit",disabled:V.value},{default:a(()=>[C("Update")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1}))]),_:1})}}};export{fe as default};