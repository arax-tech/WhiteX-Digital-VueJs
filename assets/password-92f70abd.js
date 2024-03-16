import{r as u}from"./validators-dea6e3a5.js";import{q as v,a4 as b,s as P,t as C,r as f,o as U,f as g,e as o,b as r,D as h,z as l,ag as q,E as k,G as y}from"./index-670bda14.js";import{_ as D}from"./AppTextField-803105de.js";import{V as F}from"./VCard-367227de.js";import{V as N}from"./VDivider-964da8ec.js";import{V as T}from"./VCardText-83b6dd60.js";import{V as x}from"./VForm-e3bcef70.js";import{V as w,a as n}from"./VRow-44af3a5b.js";import"./helpers-61e4df1a.js";import"./focus-bfe812d1.js";import"./VTextField-babd124d.js";/* empty css                   */import"./VCounter-40602143.js";import"./VImg-4f1dd734.js";import"./VField-eebd85ff.js";import"./easing-9f15041e.js";import"./VInput-28c68c55.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./VAvatar-eedc1aa8.js";const ee={__name:"password",setup(B){const m=v(),p=b.useToast();P(()=>document.title="Client - Update Password");const c=C(()=>m.state.auth.loading),a=f({current_password:"",new_password:"",confirm_password:""}),i=f(),V=t=>{var e;t.preventDefault(),(e=i==null?void 0:i.value)==null||e.validate().then(({valid:s})=>{s&&_()})},_=async t=>{try{if(a.value.new_password===a.value.confirm_password){const e=new FormData;e.append("current_password",a.value.current_password),e.append("new_password",a.value.new_password);const s=await m.dispatch("UpdatePasswordAction",e);if(s.status===400&&p.error(s.message),s.status===200){p.success(s.message);for(let d in a.value)a.value[d]=null}}else p.error("Password confirmation does not match...")}catch(e){console.error(e)}};return(t,e)=>{const s=D;return U(),g(w,null,{default:o(()=>[r(n,{cols:"12"},{default:o(()=>[r(F,{title:"Update Password"},{default:o(()=>[r(N),r(T,{class:"pt-0"},{default:o(()=>[r(x,{ref_key:"refForm",ref:i,class:"mt-6",onSubmit:h(V,["prevent"])},{default:o(()=>[r(w,null,{default:o(()=>[r(n,{md:"12",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).current_password,"onUpdate:modelValue":e[0]||(e[0]=d=>l(a).current_password=d),placeholder:"Current Password","persistent-placeholder":"",label:"Current Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{md:"6",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).new_password,"onUpdate:modelValue":e[1]||(e[1]=d=>l(a).new_password=d),placeholder:"New Password","persistent-placeholder":"",label:"New Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{md:"6",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).confirm_password,"onUpdate:modelValue":e[2]||(e[2]=d=>l(a).confirm_password=d),placeholder:"Confirm Password","persistent-placeholder":"",label:"Confirm Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[r(q,{type:"submit",disabled:c.value},{default:o(()=>[k(y(c.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ee as default};