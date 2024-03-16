import{L as b,r as p,o as y,c as v,d as o,b as e,z as t,j as m,e as s,cM as c,E as u,G as g,D as x,a2 as w,ag as T}from"./index-670bda14.js";import{a as C,b as S}from"./auth-v1-top-shape-c5f58476.js";import{V as n}from"./VNodeRenderer-8ba42f67.js";import{a as k,b as B,V as R}from"./VCard-367227de.js";import{V as f}from"./VCardText-83b6dd60.js";import{V as j}from"./VForm-e3bcef70.js";import{V as M,a as r}from"./VRow-44af3a5b.js";import{V as N}from"./VOtpInput-d6064b28.js";import"./VAvatar-eedc1aa8.js";import"./VImg-4f1dd734.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./VField-eebd85ff.js";import"./focus-bfe812d1.js";import"./easing-9f15041e.js";import"./VOverlay-9bca4c5f.js";import"./lazy-055ec9ba.js";import"./scopeId-78466d19.js";const D={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},F={class:"d-flex"},I=o("h4",{class:"text-h4 mb-1"}," Two Step Verification 💬 ",-1),L=o("p",{class:"mb-2"}," We sent a verification code to your mobile. Enter the code from the mobile in the field below. ",-1),z=o("h6",{class:"text-base font-weight-medium"}," ******1234 ",-1),H=o("h6",{class:"text-base font-weight-medium mt-3"}," Type your 6 digit security code ",-1),O=o("div",{class:"d-flex justify-center align-center flex-wrap"},[o("span",{class:"me-1"},"Didn't get the code?"),o("a",{href:"#"},"Resend")],-1),le={__name:"two-steps-v1",setup(G){const h=b(),l=p(""),a=p(!1),_=()=>{a.value=!0,setTimeout(()=>{a.value=!1,h.push("/")},2e3)};return(i,d)=>(y(),v("div",D,[o("div",E,[e(t(n),{nodes:("h"in i?i.h:t(m))("div",{innerHTML:t(C)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(n),{nodes:("h"in i?i.h:t(m))("div",{innerHTML:t(S)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(R,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[e(k,{class:"justify-center"},{prepend:s(()=>[o("div",F,[e(t(n),{nodes:t(c).app.logo},null,8,["nodes"])])]),default:s(()=>[e(B,{class:"font-weight-bold text-capitalize text-h3 py-1"},{default:s(()=>[u(g(t(c).app.title),1)]),_:1})]),_:1}),e(f,{class:"pt-2"},{default:s(()=>[I,L,z,H]),_:1}),e(f,null,{default:s(()=>[e(j,{onSubmit:x(()=>{},["prevent"])},{default:s(()=>[e(M,null,{default:s(()=>[e(r,{cols:"12"},{default:s(()=>[e(t(N),{modelValue:t(l),"onUpdate:modelValue":d[0]||(d[0]=V=>w(l)?l.value=V:null),disabled:t(a),type:"number",class:"pa-0",onFinish:_},null,8,["modelValue","disabled"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[e(T,{loading:t(a),disabled:t(a),block:"",type:"submit"},{default:s(()=>[u(" Verify my account ")]),_:1},8,["loading","disabled"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[O]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]))}};export{le as default};