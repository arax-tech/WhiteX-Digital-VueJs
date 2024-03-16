import{r as u,a as v,o as b,c as x,d as s,b as e,z as a,j as f,e as t,cM as _,E as m,G as g,D as w,ag as k}from"./index-c4e71550.js";import{_ as C}from"./AppTextField-a8f30c8f.js";import{_ as T}from"./AuthProvider-49ac3ea3.js";import{a as S,b as j}from"./auth-v1-top-shape-c5f58476.js";import{V as c}from"./VNodeRenderer-e4ac41d5.js";import{a as B,b as L,V as M}from"./VCard-71b3ac17.js";import{V}from"./VCardText-6669d6f5.js";import{V as P}from"./VForm-617abc97.js";import{V as U,a as i}from"./VRow-3a397f81.js";import{V as N}from"./VCheckbox-7e1155cc.js";import{V as R}from"./focus-ba6d54b4.js";import{V as h}from"./VDivider-aef533a2.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";import"./VCheckboxBtn-5dd1ee23.js";import"./VSelectionControl-9181ec5a.js";const A={class:"auth-wrapper d-flex align-center justify-center pa-4"},D={class:"position-relative my-sm-16"},E={class:"d-flex"},I=s("h4",{class:"text-h4 mb-1"}," Adventure starts here 🚀 ",-1),$=s("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),z={class:"d-flex align-center mt-2 mb-4"},F=s("span",{class:"me-1"},"I agree to",-1),H=s("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),G=s("span",null,"Already have an account?",-1),J=s("span",{class:"mx-4"},"or",-1),he={__name:"register-v1",setup(q){const l=u({username:"",email:"",password:"",privacyPolicies:!1}),n=u(!1);return(d,o)=>{const p=C,y=v("RouterLink");return b(),x("div",A,[s("div",D,[e(a(c),{nodes:("h"in d?d.h:a(f))("div",{innerHTML:a(S)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(a(c),{nodes:("h"in d?d.h:a(f))("div",{innerHTML:a(j)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(M,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(B,{class:"justify-center"},{prepend:t(()=>[s("div",E,[e(a(c),{nodes:a(_).app.logo},null,8,["nodes"])])]),default:t(()=>[e(L,{class:"font-weight-bold text-h3 text-capitalize py-1"},{default:t(()=>[m(g(a(_).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:t(()=>[I,$]),_:1}),e(V,null,{default:t(()=>[e(P,{onSubmit:w(()=>{},["prevent"])},{default:t(()=>[e(U,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).username,"onUpdate:modelValue":o[0]||(o[0]=r=>a(l).username=r),autofocus:"",label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(l).email=r),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(p,{modelValue:a(l).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(l).password=r),label:"Password",placeholder:"············",type:a(n)?"text":"password","append-inner-icon":a(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=r=>n.value=!a(n))},null,8,["modelValue","type","append-inner-icon"]),s("div",z,[e(N,{id:"privacy-policy",modelValue:a(l).privacyPolicies,"onUpdate:modelValue":o[4]||(o[4]=r=>a(l).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(R,{for:"privacy-policy",style:{opacity:"1"}},{default:t(()=>[F,H]),_:1})]),e(k,{block:"",type:"submit"},{default:t(()=>[m(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[G,e(y,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v1"}},{default:t(()=>[m(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(h),J,e(h)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(T)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};export{he as default};