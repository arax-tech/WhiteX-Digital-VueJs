import{r as u}from"./validators-dea6e3a5.js";import{q as v,a4 as b,s as P,t as C,r as f,o as U,f as g,e as o,b as r,D as h,z as l,ag as q,E as k,G as y}from"./index-c4e71550.js";import{_ as D}from"./AppTextField-a8f30c8f.js";import{V as F}from"./VCard-71b3ac17.js";import{V as N}from"./VDivider-aef533a2.js";import{V as T}from"./VCardText-6669d6f5.js";import{V as x}from"./VForm-617abc97.js";import{V as w,a as n}from"./VRow-3a397f81.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";const ee={__name:"password",setup(B){const m=v(),p=b.useToast();P(()=>document.title="Client - Update Password");const c=C(()=>m.state.auth.loading),a=f({current_password:"",new_password:"",confirm_password:""}),i=f(),V=t=>{var e;t.preventDefault(),(e=i==null?void 0:i.value)==null||e.validate().then(({valid:s})=>{s&&_()})},_=async t=>{try{if(a.value.new_password===a.value.confirm_password){const e=new FormData;e.append("current_password",a.value.current_password),e.append("new_password",a.value.new_password);const s=await m.dispatch("UpdatePasswordAction",e);if(s.status===400&&p.error(s.message),s.status===200){p.success(s.message);for(let d in a.value)a.value[d]=null}}else p.error("Password confirmation does not match...")}catch(e){console.error(e)}};return(t,e)=>{const s=D;return U(),g(w,null,{default:o(()=>[r(n,{cols:"12"},{default:o(()=>[r(F,{title:"Update Password"},{default:o(()=>[r(N),r(T,{class:"pt-0"},{default:o(()=>[r(x,{ref_key:"refForm",ref:i,class:"mt-6",onSubmit:h(V,["prevent"])},{default:o(()=>[r(w,null,{default:o(()=>[r(n,{md:"12",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).current_password,"onUpdate:modelValue":e[0]||(e[0]=d=>l(a).current_password=d),placeholder:"Current Password","persistent-placeholder":"",label:"Current Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{md:"6",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).new_password,"onUpdate:modelValue":e[1]||(e[1]=d=>l(a).new_password=d),placeholder:"New Password","persistent-placeholder":"",label:"New Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{md:"6",cols:"12"},{default:o(()=>[r(s,{"prepend-inner-icon":"tabler-lock",modelValue:l(a).confirm_password,"onUpdate:modelValue":e[2]||(e[2]=d=>l(a).confirm_password=d),placeholder:"Confirm Password","persistent-placeholder":"",label:"Confirm Password",rules:["requiredValidator"in t?t.requiredValidator:l(u)]},null,8,["modelValue","rules"])]),_:1}),r(n,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[r(q,{type:"submit",disabled:c.value},{default:o(()=>[k(y(c.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ee as default};
