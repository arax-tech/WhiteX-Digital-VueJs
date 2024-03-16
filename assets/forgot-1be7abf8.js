import{r as F,e as R}from"./validators-dea6e3a5.js";import{s as I,t as L,n as P,L as T,a4 as B,q as C,r as c,a as M,o as S,f as j,e as o,b as t,d as r,z as e,D as q,a2 as D,ag as E,E as N,G as A,a1 as G}from"./index-c4e71550.js";import{_ as z}from"./AppTextField-a8f30c8f.js";import{u as p}from"./useGenerateImageVariant-e1eabe90.js";import{a as U,b as $}from"./auth-v2-forgot-password-illustration-light-e0c59e4e.js";import{a as H,b as J}from"./misc-mask-light-1aeffaee.js";import{V as f}from"./VImg-8451f417.js";import{a as s,V as _}from"./VRow-3a397f81.js";import{V as K}from"./VCard-71b3ac17.js";import{V as g}from"./VCardText-6669d6f5.js";import{V as O}from"./VForm-617abc97.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";const Q={class:"position-relative bg-background rounded-lg w-100 ma-8 me-0"},W={class:"d-flex align-center justify-center w-100 h-100"},X=r("h4",{class:"text-h4 mb-1"}," Forgot Password? 🔒 ",-1),Y=r("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),Z=r("span",null,"Back to login",-1),vt={__name:"forgot",setup(tt){const h=p($,U),V=p(J,H);I(()=>document.title="Forgot Password");const u=L(()=>m.state.password.loading);P();const w=T(),d=B.useToast(),m=C(),l=c(),i=c(""),b=()=>{var a;(a=l==null?void 0:l.value)==null||a.validate().then(({valid:n})=>{n&&k()})},k=async()=>{try{console.log("here");const a=await m.dispatch("ForgotPasswordAction",{email:i.value});a.status===200&&(d.success(a.message),w.push("/login")),a.status===422&&d.error(a.message)}catch(a){console.error(a)}};return(a,n)=>{const y=z,v=M("RouterLink");return S(),j(_,{class:"auth-wrapper bg-surface","no-gutters":""},{default:o(()=>[t(s,{lg:"8",class:"d-none d-lg-flex"},{default:o(()=>[r("div",Q,[r("div",W,[t(f,{"max-width":"368",src:e(h),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),t(f,{class:"auth-footer-mask",src:e(V)},null,8,["src"])])]),_:1}),t(s,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:o(()=>[t(K,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:o(()=>[t(g,null,{default:o(()=>[X,Y]),_:1}),t(g,null,{default:o(()=>[t(O,{ref_key:"refForm",ref:l,onSubmit:q(b,["prevent"])},{default:o(()=>[t(_,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(y,{modelValue:e(i),"onUpdate:modelValue":n[0]||(n[0]=x=>D(i)?i.value=x:null),autofocus:"",label:"Email",type:"email",placeholder:"johndoe@email.com",rules:["requiredValidator"in a?a.requiredValidator:e(F),"emailValidator"in a?a.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(E,{block:"",type:"submit",disabled:e(u)},{default:o(()=>[N(A(e(u)?"Sending...":" Send Reset Link"),1)]),_:1},8,["disabled"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(v,{class:"d-flex align-center justify-center",to:{name:"login"}},{default:o(()=>[t(G,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),Z]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{vt as default};
