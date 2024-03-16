import{_ as G}from"./AppTextField-a8f30c8f.js";import{p as q}from"./paginationMeta-4ad053a4.js";import{u as H}from"./useApi-7f55bef7.js";import{c as J}from"./createUrl-a9d0e222.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{V as O,a as g}from"./VRow-3a397f81.js";import{V as h,a as Q,b as W,c as X}from"./VCard-71b3ac17.js";import{V as v}from"./VCardText-6669d6f5.js";import{V as I}from"./VAvatar-0d338c12.js";import{r as x,ah as Y,t as R,a as Z,o as k,c as C,b as e,e as t,F as z,C as j,d as s,G as c,a1 as y,E as d,ag as p,z as l,a2 as b,B as S,J as ee,K as te}from"./index-c4e71550.js";import{V as ae}from"./VSelect-9628140b.js";import{V as D}from"./VDivider-aef533a2.js";import{V as se}from"./VDataTableServer-7cf866d7.js";import{V as le}from"./VChip-a642ea45.js";import{V as oe}from"./VPagination-f593f2c8.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./index-87919977.js";import"./VList-48b3771d.js";import"./ssrBoot-3f554f90.js";import"./dialog-transition-1a37cbb8.js";import"./VMenu-3432c545.js";import"./VOverlay-14a99b98.js";import"./lazy-8c4021f0.js";import"./scopeId-203eb21d.js";import"./VCheckboxBtn-5dd1ee23.js";import"./VSelectionControl-9181ec5a.js";import"./VDataTable-145871c8.js";import"./VTable-28a89234.js";import"./filter-c3387b54.js";const V=m=>(ee("data-v-086f7a0a"),m=m(),te(),m),re={class:"d-flex justify-space-between align-center"},ie={class:"d-flex flex-column"},ne={class:"text-h4"},ce={class:"text-sm"},de=V(()=>s("span",{class:"text-body-1"},"Integrate your referral code in 3 easy steps.",-1)),pe={class:"d-flex flex-column flex-sm-row gap-6 justify-sm-space-between align-center pt-2"},ue={class:"icon-container"},me={class:"text-body-2 text-wrap text-center"},fe={class:"text-primary text-h5"},_e={class:"mb-8"},ge=V(()=>s("h5",{class:"text-h5 mb-4"}," Invite your friends ",-1)),he={class:"d-flex align-center flex-wrap gap-4 flex-wrap"},ve=V(()=>s("h5",{class:"text-h5 mb-4"}," Share the referral link ",-1)),xe={class:"d-flex gap-4 align-center flex-wrap"},ye={class:"d-flex align-self-end gap-x-4"},be={class:"d-flex justify-space-between align-center flex-wrap gap-4"},Ve=V(()=>s("h5",{class:"text-h5"}," Referred Users ",-1)),we={class:"d-flex flex-wrap gap-4"},ke={class:"d-flex gap-4 align-center flex-wrap"},Ce={class:"d-flex align-center gap-x-3"},Se={class:"font-weight-medium text-high-emphasis"},Pe={class:"text-sm text-disabled"},Ue={class:"text-h6"},Be={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Ee={class:"text-sm text-disabled mb-0"},Ie={__name:"referrals",async setup(m){let f,P;const A=[{title:"Total Earning",value:"$24,983",icon:"tabler-currency-dollar",color:"primary"},{title:"Unpaid Earning",value:"$8,647",icon:"tabler-gift",color:"success"},{title:"Signups",value:"2,367",icon:"tabler-user",color:"error"},{title:"Conversion Rate",value:"4.5%",icon:"tabler-infinity",color:"info"}],T=[{icon:"custom-rocket",desc:"Create & validate your referral link and get",value:"$50"},{icon:"custom-userinfo",desc:"For every new signup you get",value:"10%"},{icon:"custom-paper",desc:"Get other friends to generate link and get",value:"$100"}],r=x(10),i=x(1),U=x(),B=x(),$=[{title:"Users",key:"users"},{title:"Referred ID",key:"referred-id"},{title:"Status",key:"status"},{title:"Value",key:"value"},{title:"Earnings",key:"earning"}],F=n=>{var o,u;i.value=n.page,U.value=(o=n.sortBy[0])==null?void 0:o.key,B.value=(u=n.sortBy[0])==null?void 0:u.order},{data:E}=([f,P]=Y(()=>H(J("/apps/ecommerce/referrals",{query:{page:i,itemsPerPage:r,sortBy:U,orderBy:B}}))),f=await f,P(),f),M=R(()=>E.value.referrals),_=R(()=>E.value.total),N=n=>{if(n==="Rejected")return{text:"Rejected",color:"error"};if(n==="Unpaid")return{text:"Unpaid",color:"warning"};if(n==="Paid")return{text:"Paid",color:"success"}};return(n,o)=>{const u=G,L=Z("RouterLink");return k(),C("div",null,[e(O,{class:"match-height"},{default:t(()=>[(k(),C(z,null,j(A,(a,w)=>e(g,{key:w,cols:"12",md:"3",sm:"6"},{default:t(()=>[e(h,null,{default:t(()=>[e(v,null,{default:t(()=>[s("div",re,[s("div",ie,[s("h4",ne,c(a.value),1),s("span",ce,c(a.title),1)]),e(I,{size:"42",variant:"tonal",color:a.color},{default:t(()=>[e(y,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),e(g,{cols:"12",md:"6"},{default:t(()=>[e(h,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(W,{class:"mb-1"},{default:t(()=>[d(" How to use ")]),_:1}),e(X,null,{default:t(()=>[de]),_:1})]),_:1}),e(v,null,{default:t(()=>[s("div",pe,[(k(),C(z,null,j(T,(a,w)=>s("div",{key:w,class:"d-flex flex-column align-center gap-y-2",style:{"max-inline-size":"185px"}},[s("div",ue,[e(y,{icon:a.icon,color:"primary",size:"36"},null,8,["icon"])]),s("span",me,c(a.desc),1),s("h5",fe,c(a.value),1)])),64))])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(h,null,{default:t(()=>[e(v,null,{default:t(()=>[s("div",_e,[ge,s("div",he,[e(u,{label:"Enter friend’s email address and invite them",placeholder:"Email Addresss",density:"compact"}),e(p,{class:"align-self-end"},{default:t(()=>[d(" Submit ")]),_:1})])]),s("div",null,[ve,s("div",xe,[e(u,{label:"Share referral link in social media",placeholder:"pixinvent.com/?ref=6478",density:"compact"}),s("div",ye,[e(p,{icon:"",class:"rounded",color:"#3B5998",size:"40"},{default:t(()=>[e(y,{color:"white",icon:"tabler-brand-facebook"})]),_:1}),e(p,{icon:"",class:"rounded",color:"#55ACEE",size:"40"},{default:t(()=>[e(y,{color:"white",icon:"tabler-brand-twitter"})]),_:1})])])])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(h,null,{default:t(()=>[e(v,null,{default:t(()=>[s("div",be,[Ve,s("div",we,[s("div",ke,[e(ae,{modelValue:l(r),"onUpdate:modelValue":o[0]||(o[0]=a=>b(r)?r.value=a:null),items:[10,25,50,100],style:{"inline-size":"100px"},density:"compact"},null,8,["modelValue"]),e(p,{"prepend-icon":"tabler-screen-share",color:"default",variant:"tonal"},{default:t(()=>[d(" Export ")]),_:1})])])])]),_:1}),e(D),e(l(se),{"items-per-page":l(r),"onUpdate:itemsPerPage":o[2]||(o[2]=a=>b(r)?r.value=a:null),page:l(i),"onUpdate:page":o[3]||(o[3]=a=>b(i)?i.value=a:null),items:l(M),headers:$,"items-length":l(_),"show-select":"","onUpdate:options":F},{"item.users":t(({item:a})=>[s("div",Ce,[e(I,{image:a.avatar,size:38},null,8,["image"]),s("div",null,[s("div",Se,[e(L,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}}},{default:t(()=>[d(c(a.user),1)]),_:2},1024)]),s("div",Pe,c(a.email),1)])])]),"item.referred-id":t(({item:a})=>[d(c(a.referredId),1)]),"item.status":t(({item:a})=>[e(le,S(N(a.status),{label:""}),null,16)]),"item.earning":t(({item:a})=>[s("h6",Ue,c(a.earning),1)]),bottom:t(()=>[e(D),s("div",Be,[s("p",Ee,c(l(q)({page:l(i),itemsPerPage:l(r)},l(_))),1),e(oe,{modelValue:l(i),"onUpdate:modelValue":o[1]||(o[1]=a=>b(i)?i.value=a:null),length:Math.ceil(l(_)/l(r)),"total-visible":n.$vuetify.display.xs?1:Math.min(Math.ceil(l(_)/l(r)),5)},{prev:t(a=>[e(p,S({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[d(" Previous ")]),_:2},1040)]),next:t(a=>[e(p,S({variant:"tonal",color:"default"},a,{icon:!1}),{default:t(()=>[d(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})])}}},gt=K(Ie,[["__scopeId","data-v-086f7a0a"]]);export{gt as default};