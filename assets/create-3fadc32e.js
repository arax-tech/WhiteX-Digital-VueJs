import{r as k,e as T}from"./validators-dea6e3a5.js";import{q as G,L as Y,a4 as Z,s as y,t as U,r as d,o as m,f as H,e as s,b as l,d as t,ag as B,a1 as K,E,D as Q,z as n,a2 as f,x as W,aj as X,c as p,C as O,G as R,F as P}from"./index-35d4c811.js";import{_ as N}from"./AppTextField-e0d36e66.js";import{A as q}from"./Permission-403ee5c6.js";import{V as ee}from"./VCard-06d56730.js";import{V as S}from"./VCardText-20e2d0ff.js";import{V as le}from"./VDivider-4423ace3.js";import{V as ae}from"./VForm-790819b5.js";import{V as M,a as u}from"./VRow-d67d386c.js";import{V as te}from"./VFileInput-3fff29ca.js";import{V as se}from"./VTable-41351eee.js";import"./helpers-61e4df1a.js";import"./focus-47cc4c1d.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VImg-9b04c05e.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./VAvatar-7759ad5c.js";import"./VChip-5a7d2631.js";const oe=t("div",null,[t("h2",null,"Create Admin")],-1),ne={style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},ie=t("h2",{class:"mb-2"},"Permissions",-1),re=t("label",{for:"checkAll"}," All Permission",-1),de=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Modal"),t("th",{scope:"col"},"Create"),t("th",{scope:"col"},"Read"),t("th",{scope:"col"},"Update"),t("th",{scope:"col"},"Delete")])],-1),ue={key:0},ce=["value","checked","onChange"],me={key:1},je={__name:"create",setup(pe){const A=G(),D=Y(),$=Z.useToast();y(()=>document.title="Admin - Create Admin");const x=U(()=>A.state.admins.loading),j=U(()=>A.state.auth.user),z=JSON.parse(j.value.permissions);y(()=>{var e;(e=z.Admin)!=null&&e.includes("CreateAdmin")||(alert("You don't have permission to access this resource..."),D.go(-1))});const V=d(""),h=d(""),v=d(""),b=d(""),w=d(""),_=d(),r=d({}),F=()=>{for(const e in q)r.value[e]=g.value?q[e].permissions.slice():[]},g=d(!1);y(()=>{F()});const I=async()=>{const e=new FormData;e.append("name",V.value),e.append("email",h.value),e.append("designation",v.value),e.append("password",b.value),e.append("permissions",JSON.stringify(r.value)),e.append("role","Admin"),w.value&&e.append("image",w.value);try{const a=await A.dispatch("CreateAdminAction",e);a.status===200&&($.success(a.message),D.push("/admin/admin"))}catch(a){console.error(a)}},J=(e,a)=>{if(r.value.hasOwnProperty(e)){const c=r.value[e].indexOf(a);c!==-1?r.value[e].splice(c,1):r.value[e].push(a)}},L=()=>{var e;(e=_==null?void 0:_.value)==null||e.validate().then(({valid:a})=>{a&&I()})};return(e,a)=>{const c=N;return m(),H(M,null,{default:s(()=>[l(u,{cols:"12"},{default:s(()=>[l(ee,null,{default:s(()=>[l(S,{style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},{default:s(()=>[oe,t("div",null,[l(B,{to:"/admin/admin",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:s(()=>[l(K,{start:"",icon:"tabler-arrow-left"}),E("Back ")]),_:1})])]),_:1}),l(le),l(S,{class:"pt-0"},{default:s(()=>[l(ae,{class:"mt-6",ref_key:"refForm",ref:_,onSubmit:Q(L,["prevent"])},{default:s(()=>[l(M,null,{default:s(()=>[l(u,{cols:"12",md:"4"},{default:s(()=>[l(c,{modelValue:n(V),"onUpdate:modelValue":a[0]||(a[0]=o=>f(V)?V.value=o:null),"prepend-inner-icon":"tabler-user",placeholder:"Name","persistent-placeholder":"",label:"Name",rules:["requiredValidator"in e?e.requiredValidator:n(k)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"4"},{default:s(()=>[l(c,{modelValue:n(h),"onUpdate:modelValue":a[1]||(a[1]=o=>f(h)?h.value=o:null),"prepend-inner-icon":"tabler-mail",placeholder:"Email","persistent-placeholder":"",label:"Email",rules:["requiredValidator"in e?e.requiredValidator:n(k),"emailValidator"in e?e.emailValidator:n(T)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"4"},{default:s(()=>[l(c,{modelValue:n(b),"onUpdate:modelValue":a[2]||(a[2]=o=>f(b)?b.value=o:null),"prepend-inner-icon":"tabler-mail",placeholder:"Password","persistent-placeholder":"",label:"Password",rules:["requiredValidator"in e?e.requiredValidator:n(k)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6"},{default:s(()=>[l(c,{modelValue:n(v),"onUpdate:modelValue":a[3]||(a[3]=o=>f(v)?v.value=o:null),"prepend-inner-icon":"tabler-id",placeholder:"Designation","persistent-placeholder":"",label:"Designation",rules:["requiredValidator"in e?e.requiredValidator:n(k)]},null,8,["modelValue","rules"])]),_:1}),l(u,{cols:"12",md:"6",class:"mt-6"},{default:s(()=>[l(te,{label:"Profile Picture",variant:"filled",onChange:a[4]||(a[4]=o=>w.value=o.target.files[0])})]),_:1}),l(u,{cols:"12",md:"12",class:"mt-6"},{default:s(()=>[t("div",ne,[ie,t("div",null,[W(t("input",{id:"checkAll",type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=o=>f(g)?g.value=o:null),onChange:F},null,544),[[X,n(g)]]),re])]),l(se,{class:"text-no-wrap rounded border"},{default:s(()=>[de,t("tbody",null,[(m(!0),p(P,null,O(n(q),(o,i)=>(m(),p("tr",{key:i},[t("td",null,R(i.replace(/([a-z])([A-Z])/g,"$1 $2")),1),(m(),p(P,null,O(["Create","Read","Update","Delete"],C=>(m(),p(P,null,[o.permissions.includes(C+i)?(m(),p("td",ue,[t("input",{type:"checkbox",value:C+i,class:"checkbox",checked:n(r)[i]&&n(r)[i].includes(C+i),onChange:fe=>J(i,C+i)},null,40,ce)])):(m(),p("td",me))],64))),64))]))),128))])]),_:1})]),_:1}),l(u,{cols:"12"},{default:s(()=>[l(B,{type:"submit",disabled:x.value},{default:s(()=>[E(R(x.value?"Creating...":"Create"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{je as default};