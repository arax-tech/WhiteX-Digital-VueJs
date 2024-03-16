import{r as f}from"./validators-dea6e3a5.js";import{q as M,L as O,a4 as S,s as q,t as j,r as h,o as d,f as _,e as n,b as a,d as o,ag as P,a1 as z,E as D,D as I,z as t,x as L,aj as G,a2 as J,c,C as x,G as A,F as C}from"./index-c4e71550.js";import{_ as Z}from"./AppTextField-a8f30c8f.js";import{_ as H}from"./Loading-2eec0421.js";import{C as k}from"./Permission-f91c8685.js";import{a as u,V as F}from"./VRow-3a397f81.js";import{V as U}from"./VCardText-6669d6f5.js";import{V as K}from"./VDivider-aef533a2.js";import{V as Q}from"./VForm-617abc97.js";import{V as W}from"./VFileInput-134ee4d3.js";import{V as X}from"./VTable-28a89234.js";import{V as Y}from"./VCard-71b3ac17.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";import"./VChip-a642ea45.js";const N=o("div",null,[o("h2",null,"Create Team")],-1),ee=o("label",null,"Profile Image",-1),le={style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},ae=o("h2",{class:"mb-2"},"Permissions",-1),te=o("label",{for:"checkAll"}," All Permission",-1),oe=o("thead",null,[o("tr",null,[o("th",{scope:"col"},"Modal"),o("th",{scope:"col"},"Create"),o("th",{scope:"col"},"Read"),o("th",{scope:"col"},"Update"),o("th",{scope:"col"},"Delete")])],-1),se={key:0},ne=["value","checked","onChange"],re={key:1},Re={__name:"create",setup(ie){const w=M(),B=O(),T=S.useToast();q(()=>document.title="Client - Create Team");const b=j(()=>w.state.teams.loading);h("");const V=h(),s=h({name:"",email:"",phone:"",password:"",designation:"",image:null}),p=h({}),y=()=>{for(const e in k)p.value[e]=v.value?k[e].permissions.slice():[]},v=h(!1);q(()=>{y()});const E=async()=>{const e=new FormData;e.append("name",s.value.name),e.append("email",s.value.email),e.append("phone",s.value.phone),e.append("password",s.value.password),e.append("designation",s.value.designation),e.append("permissions",JSON.stringify(p.value)),s.value.image&&e.append("image",s.value.image),e.append("role","Client");try{const l=await w.dispatch("CreateTeamAction",e);l.status===200&&(T.success(l.message),B.push("/client/team"))}catch(l){console.error(l)}},R=()=>{var e;(e=V==null?void 0:V.value)==null||e.validate().then(({valid:l})=>{l&&E()})},$=(e,l)=>{if(p.value.hasOwnProperty(e)){const m=p.value[e].indexOf(l);m!==-1?p.value[e].splice(m,1):p.value[e].push(l)}};return(e,l)=>{const m=Z;return d(),_(F,null,{default:n(()=>[b.value?(d(),_(H,{key:0})):(d(),_(u,{key:1,cols:"12"},{default:n(()=>[a(Y,null,{default:n(()=>[a(U,{style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},{default:n(()=>[N,o("div",null,[a(P,{to:"/client/team",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:n(()=>[a(z,{start:"",icon:"tabler-arrow-left"}),D("Back ")]),_:1})])]),_:1}),a(K),a(U,{class:"pt-0"},{default:n(()=>[a(Q,{class:"mt-6",ref_key:"refForm",ref:V,onSubmit:I(R,["prevent"])},{default:n(()=>[a(F,null,{default:n(()=>[a(u,{md:"4",cols:"12"},{default:n(()=>[a(m,{"prepend-inner-icon":"tabler-user",placeholder:"Name",name:"name",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=r=>t(s).name=r),"persistent-placeholder":"",label:"Name",rules:["requiredValidator"in e?e.requiredValidator:t(f)]},null,8,["modelValue","rules"])]),_:1}),a(u,{md:"4",cols:"12"},{default:n(()=>[a(m,{"prepend-inner-icon":"tabler-mail",modelValue:t(s).email,"onUpdate:modelValue":l[1]||(l[1]=r=>t(s).email=r),placeholder:"Email","persistent-placeholder":"",label:"Email",rules:["requiredValidator"in e?e.requiredValidator:t(f)]},null,8,["modelValue","rules"])]),_:1}),a(u,{md:"4",cols:"12"},{default:n(()=>[a(m,{"prepend-inner-icon":"tabler-phone",modelValue:t(s).phone,"onUpdate:modelValue":l[2]||(l[2]=r=>t(s).phone=r),placeholder:"Phone","persistent-placeholder":"",label:"Phone",rules:["requiredValidator"in e?e.requiredValidator:t(f)]},null,8,["modelValue","rules"])]),_:1}),a(u,{md:"4",cols:"12"},{default:n(()=>[a(m,{"prepend-inner-icon":"tabler-lock",modelValue:t(s).password,"onUpdate:modelValue":l[3]||(l[3]=r=>t(s).password=r),placeholder:"Password","persistent-placeholder":"",label:"Password",rules:["requiredValidator"in e?e.requiredValidator:t(f)]},null,8,["modelValue","rules"])]),_:1}),a(u,{md:"4",cols:"12"},{default:n(()=>[a(m,{"prepend-inner-icon":"tabler-note",modelValue:t(s).designation,"onUpdate:modelValue":l[4]||(l[4]=r=>t(s).designation=r),placeholder:"Designation","persistent-placeholder":"",label:"Designation",rules:["requiredValidator"in e?e.requiredValidator:t(f)]},null,8,["modelValue","rules"])]),_:1}),a(u,{md:"4",cols:"12",class:""},{default:n(()=>[ee,a(W,{label:"Choose...",class:"mt-1",onChange:l[5]||(l[5]=r=>t(s).image=r.target.files[0])})]),_:1}),a(u,{cols:"12",md:"12",class:"mt-6"},{default:n(()=>[o("div",le,[ae,o("div",null,[L(o("input",{id:"checkAll",type:"checkbox","onUpdate:modelValue":l[6]||(l[6]=r=>J(v)?v.value=r:null),onChange:y},null,544),[[G,t(v)]]),te])]),a(X,{class:"text-no-wrap rounded border"},{default:n(()=>[oe,o("tbody",null,[(d(!0),c(C,null,x(t(k),(r,i)=>(d(),c("tr",{key:i},[o("td",null,A(i.replace(/([a-z])([A-Z])/g,"$1 $2")),1),(d(),c(C,null,x(["Create","Read","Update","Delete"],g=>(d(),c(C,null,[r.permissions.includes(g+i)?(d(),c("td",se,[o("input",{type:"checkbox",value:g+i,class:"checkbox",checked:t(p)[i]&&t(p)[i].includes(g+i),onChange:de=>$(i,g+i)},null,40,ne)])):(d(),c("td",re))],64))),64))]))),128))])]),_:1})]),_:1}),a(u,{cols:"12"},{default:n(()=>[a(P,{type:"submit",disabled:b.value},{default:n(()=>[D(A(b.value?"Creating...":"Create"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1}))]),_:1})}}};export{Re as default};
