import{r as V}from"./validators-dea6e3a5.js";import{s as q,t as T,n as B,L,a4 as M,q as D,r as p,a as F,o as N,f as S,e as s,b as e,d,z as t,D as $,ag as j,E as A,G as E,a1 as G}from"./index-c4e71550.js";import{_ as U}from"./AppTextField-a8f30c8f.js";import{u as h}from"./useGenerateImageVariant-e1eabe90.js";import{a as z,b as Y}from"./auth-v2-reset-password-illustration-light-3895af4b.js";import{a as H,b as J}from"./misc-mask-light-1aeffaee.js";import{V as b}from"./VImg-8451f417.js";import{a as l,V as g}from"./VRow-3a397f81.js";import{V as K}from"./VCard-71b3ac17.js";import{V as P}from"./VCardText-6669d6f5.js";import{V as O}from"./VForm-617abc97.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";const Q={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},W={class:"d-flex align-center justify-center w-100 h-100"},X=d("h4",{class:"text-h4 mb-1"},"Reset Password 🔒",-1),Z=d("p",{class:"mb-0"},"Your new password must be different from previously used passwords.",-1),ee=d("span",null,"Back to login",-1),ye={__name:"[token]",setup(se){q(()=>document.title="Reset Password");const w=T(()=>_.state.password.loading),v=B(),k=L(),f=M.useToast(),_=D(),n=p({newPassword:"",confirmPassword:""}),u=p(),y=()=>{var o;(o=u==null?void 0:u.value)==null||o.validate().then(({valid:a})=>{a&&x()})},x=async()=>{const o=n.value.newPassword,a=n.value.confirmPassword;if(o!==a)f.error("Password Confirmation does not match...");else try{const r=await _.dispatch("ResetPasswordAction",{reset_token:v.params.token,password:o});r.status===200&&(f.success(r.message),k.push("/login")),r.status===422&&f.error(r.message)}catch(r){console.error(r)}},R=h(Y,z),C=h(J,H),m=p(!1),c=p(!1);return(o,a)=>{const r=U,I=F("RouterLink");return N(),S(g,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:s(()=>[e(l,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[d("div",Q,[d("div",W,[e(b,{"max-width":"400",src:t(R),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(b,{class:"auth-footer-mask",src:t(C)},null,8,["src"])])]),_:1}),e(l,{cols:"12",md:"4",class:"auth-card-v2 d-flex",style:{"margin-top":"10% !important"}},{default:s(()=>[e(K,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[e(P,null,{default:s(()=>[X,Z]),_:1}),e(P,null,{default:s(()=>[e(O,{class:"mt-6",ref_key:"refForm",ref:u,onSubmit:$(y,["prevent"])},{default:s(()=>[e(g,null,{default:s(()=>[e(l,{cols:"12"},{default:s(()=>[e(r,{modelValue:t(n).newPassword,"onUpdate:modelValue":a[0]||(a[0]=i=>t(n).newPassword=i),autofocus:"",label:"New Password",placeholder:"············",type:t(m)?"text":"password","append-inner-icon":t(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[1]||(a[1]=i=>m.value=!t(m)),rules:["requiredValidator"in o?o.requiredValidator:t(V)]},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(r,{modelValue:t(n).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=i=>t(n).confirmPassword=i),label:"Confirm Password",placeholder:"············",type:t(c)?"text":"password","append-inner-icon":t(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[3]||(a[3]=i=>c.value=!t(c)),rules:["requiredValidator"in o?o.requiredValidator:t(V)]},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(j,{block:"",type:"submit",disabled:w.value},{default:s(()=>[A(E(w.value?"Reseting...":"Reset Password"),1)]),_:1},8,["disabled"])]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(I,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:s(()=>[e(G,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),ee]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ye as default};
