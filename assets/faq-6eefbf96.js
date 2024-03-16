import{_ as B}from"./AppSearchHeader-78dc4082.js";import{r as f,w,o as i,c,b as t,z as s,a2 as _,e as a,d as o,x,y as q,F as h,C as V,f as g,a1 as v,E as T,G as d,I as E}from"./index-c4e71550.js";import{s as F}from"./sitting-girl-with-laptop-457cbceb.js";import{$ as L}from"./api-c3faec65.js";import{V as k,a as y}from"./VRow-3a397f81.js";import{V as N}from"./VChip-a642ea45.js";import{V as W,a as Q}from"./VTabs-c4af68e7.js";import{V as A}from"./VImg-8451f417.js";import{V as P,a as R}from"./VWindowItem-ce604431.js";import{V as z}from"./VAvatar-0d338c12.js";import{V as $,a as D}from"./VExpansionPanel-9f70f943.js";import{V as G}from"./VCard-71b3ac17.js";import{V as I}from"./VCardText-6669d6f5.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VField-0f4003e5.js";import"./focus-ba6d54b4.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./index-87919977.js";import"./VSlideGroup-c5a070c6.js";import"./lazy-8c4021f0.js";import"./ssrBoot-3f554f90.js";const H={class:"d-flex align-center mb-6"},j={class:"text-h6"},O={class:"text-sm"},Y=o("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),J={class:"text-center pt-15"},K=o("h4",{class:"text-h4 mb-2"}," You still have a question? ",-1),M=o("p",null," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),X={class:"text-h4 mb-2"},ke={__name:"faq",setup(Z){const u=f(""),r=f([]),C=async()=>{const b=await L("/pages/faq",{query:{q:u.value}}).catch(l=>console.log(l));r.value=b},n=f("Payment"),p=f(0);w(n,()=>p.value=0),w(u,C,{immediate:!0});const S=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(b,l)=>{const U=B;return i(),c("section",null,[t(U,{modelValue:s(u),"onUpdate:modelValue":l[0]||(l[0]=e=>_(u)?u.value=e:null),title:"Hello, how can we help?",subtitle:"or select a category to quickly find the help you require","custom-class":"mb-7"},null,8,["modelValue"]),t(k,null,{default:a(()=>[x(t(y,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[t(W,{modelValue:s(n),"onUpdate:modelValue":l[1]||(l[1]=e=>_(n)?n.value=e:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(i(!0),c(h,null,V(s(r),e=>(i(),g(Q,{key:e.faqTitle,value:e.faqTitle,class:"text-high-emphasis"},{default:a(()=>[t(v,{icon:e.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+d(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(A,{width:245,src:s(F),class:"d-none d-sm-block mt-10 mx-auto"},null,8,["src"])]),_:1},512),[[q,s(r).length]]),t(y,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[t(P,{modelValue:s(n),"onUpdate:modelValue":l[3]||(l[3]=e=>_(n)?n.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(i(!0),c(h,null,V(s(r),e=>(i(),g(R,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[o("div",H,[t(z,{rounded:"",color:"primary",variant:"tonal",class:"me-3",size:"large"},{default:a(()=>[t(v,{size:32,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),o("div",null,[o("h6",j,d(e.faqTitle),1),o("span",O,d(e.faqSubtitle),1)])]),t($,{modelValue:s(p),"onUpdate:modelValue":l[2]||(l[2]=m=>_(p)?p.value=m:null),multiple:""},{default:a(()=>[(i(!0),c(h,null,V(e.faqs,m=>(i(),g(D,{key:m.question,title:m.question,text:m.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),x(t(y,{cols:"12",class:E(s(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(v,{icon:"tabler-help",start:"",size:"20"}),Y]),_:1},8,["class"]),[[q,!s(r).length]])]),_:1}),o("div",J,[t(N,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" QUESTION? ")]),_:1}),K,M,t(k,{class:"mt-4"},{default:a(()=>[(i(),c(h,null,V(S,e=>t(y,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(G,{flat:"",class:"bg-var-theme-background"},{default:a(()=>[t(I,null,{default:a(()=>[t(z,{rounded:"",color:"primary",variant:"tonal",size:"38"},{default:a(()=>[t(v,{icon:e.icon,size:"28"},null,8,["icon"])]),_:2},1024)]),_:2},1024),t(I,null,{default:a(()=>[o("h4",X,d(e.via),1),o("span",null,d(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}};export{ke as default};