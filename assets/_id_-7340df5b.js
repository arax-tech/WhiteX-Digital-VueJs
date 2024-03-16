import{_ as ce}from"./ECommerceAddCustomerDrawer-3da204ae.js";import{b as ue}from"./formatters-9f564f13.js";import{_ as me}from"./UserUpgradePlanDialog-5af5b1e0.js";import{_ as pe}from"./UserInfoEditDialog-c203b91c.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";import{a as g,V as N}from"./VRow-44af3a5b.js";import{V as D,a as te,b as le,c as se}from"./VCard-367227de.js";import{V as w}from"./VCardText-83b6dd60.js";import{V as M}from"./VAvatar-eedc1aa8.js";import{V as q}from"./VImg-4f1dd734.js";import{r as f,o as _,c as $,b as e,e as l,f as A,G as u,z as s,d as t,a1 as y,E as d,ag as T,H as L,a2 as C,F as I,J as fe,K as be,a as F,C as H,aZ as G,x as Q,y as Z,I as he,ah as ae,t as X,B as ee,D as ve,n as ge}from"./index-670bda14.js";import{V as R}from"./VDivider-964da8ec.js";import{V as oe,a as B}from"./VList-faf63776.js";import{V as z}from"./VChip-c9c9bc7b.js";import{_ as xe,a as ye}from"./TwoFactorAuthDialog-e5372d6e.js";import{_ as we}from"./AddEditAddressDialog-12ecab2e.js";import{m as Ve,a as De}from"./mastercard-091f965c.js";import{v as $e}from"./visa-light-5e3d9782.js";import{V as Y}from"./VTable-3015d60e.js";import{V as K}from"./VCheckbox-a019a117.js";import{p as Ce}from"./paginationMeta-4ad053a4.js";import{u as ne}from"./useApi-991c92ea.js";import{c as ke}from"./createUrl-35b4ec5e.js";import{$ as Pe}from"./api-222f7d98.js";import{V as ie}from"./VTextField-babd124d.js";import{V as Ae}from"./VDataTableServer-5b8536db.js";import{V as Te}from"./VMenu-cbe945a0.js";import{V as Ue}from"./VPagination-3b4b51ec.js";import{_ as Ie}from"./AppTextField-803105de.js";import{V as Se,a as Me}from"./VAlert-6a714c31.js";import{V as Ee}from"./VForm-e3bcef70.js";import{V as Be}from"./VDataTable-674b624c.js";import{V as Oe,a as Le}from"./VTabs-d671518a.js";import{V as Ne,a as W}from"./VWindowItem-2688b9cd.js";import"./validators-dea6e3a5.js";import"./helpers-61e4df1a.js";import"./AppSelect-b4b316a2.js";import"./focus-bfe812d1.js";import"./VSelect-80bd1ff2.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-a3b422c0.js";import"./easing-9f15041e.js";import"./VOverlay-9bca4c5f.js";import"./lazy-055ec9ba.js";import"./scopeId-78466d19.js";import"./VCheckboxBtn-770097af.js";import"./VSelectionControl-798a6484.js";import"./AppDrawerHeaderSection-e0a1bd17.js";import"./VSpacer-5e937b1c.js";import"./vue3-perfect-scrollbar.esm-8721f1bb.js";import"./VSwitch-898e0e06.js";import"./VInput-28c68c55.js";import"./VNavigationDrawer-2280f09e.js";import"./ssrBoot-587632ee.js";import"./ConfirmDialog-8ea15295.js";import"./VDialog-e50ee805.js";import"./CustomRadios-c728c716.js";import"./VRadioGroup-604485b5.js";import"./DialogCloseBtn-07a65624.js";import"./AppTextarea-b08d7908.js";/* empty css                   */import"./VCounter-40602143.js";import"./VField-eebd85ff.js";import"./CustomRadiosWithIcon-9585f9f3.js";import"./index-87919977.js";import"./filter-9f13f1fe.js";import"./VSlideGroup-4c7ec14a.js";const Re="/assets/rocket-ce0b606e.png";const S=k=>(fe("data-v-6a5604f0"),k=k(),be(),k),ze={key:1,class:"text-5xl font-weight-medium"},je={class:"text-h4 mt-4"},We={class:"text-sm"},Fe={class:"d-flex justify-center gap-x-5 mt-6"},He={class:"d-flex align-center"},Je={class:"d-flex flex-column align-start"},Ke={class:"text-body-1 font-weight-medium"},qe=S(()=>t("span",{class:"text-body-2"},"Orders",-1)),Ye={class:"d-flex align-center"},Ge={class:"d-flex flex-column align-start"},Qe={class:"text-body-1 font-weight-medium"},Ze=S(()=>t("span",{class:"text-body-2"},"Spent",-1)),Xe=S(()=>t("div",{class:"text-disabled text-uppercase text-sm"}," Details ",-1)),et={class:"text-body-1"},tt=S(()=>t("span",{class:"font-weight-medium me-2"},"Username:",-1)),lt={class:"text-body-1"},st=S(()=>t("span",{class:"font-weight-medium me-2"},"Billing Email:",-1)),at={class:"text-body-1"},ot=S(()=>t("span",{class:"font-weight-medium me-2"},"Status:",-1)),nt={class:"text-body-1"},it=S(()=>t("span",{class:"font-weight-medium me-2"},"Contact:",-1)),rt={class:"text-body-1"},dt=S(()=>t("span",{class:"font-weight-medium me-2"},"Country:",-1)),ct={class:"d-flex align-center"},ut=S(()=>t("div",null,[t("div",{class:"text-xl font-weight-medium mb-4"}," Upgrade to premium "),t("p",{class:"mb-6 text-wrap"}," Upgrade customer to premium membership to access pro features. ")],-1)),mt={__name:"CustomerBioPanel",props:{customerData:{type:null,required:!0}},setup(k){const a=k,m=f(!1),p=f(!1);return(n,i)=>{const h=pe,U=me;return _(),$(I,null,[e(N,null,{default:l(()=>[e(g,{cols:"12"},{default:l(()=>[a.customerData?(_(),A(D,{key:0},{default:l(()=>[e(w,{class:"text-center pt-15"},{default:l(()=>[e(M,{rounded:"",size:100,color:a.customerData.customer?void 0:"primary",variant:a.customerData.avatar?void 0:"tonal"},{default:l(()=>[a.customerData.avatar?(_(),A(q,{key:0,src:a.customerData.avatar},null,8,["src"])):(_(),$("span",ze,u(("avatarText"in n?n.avatarText:s(ue))(a.customerData.customer)),1))]),_:1},8,["color","variant"]),t("h4",je,u(a.customerData.customer),1),t("span",We,"Customer ID #"+u(a.customerData.customerId),1),t("div",Fe,[t("div",He,[e(M,{variant:"tonal",color:"primary",rounded:"",class:"me-3"},{default:l(()=>[e(y,{icon:"tabler-shopping-cart"})]),_:1}),t("div",Je,[t("span",Ke,u(a.customerData.order),1),qe])]),t("div",Ye,[e(M,{variant:"tonal",color:"primary",rounded:"",class:"me-3"},{default:l(()=>[e(y,{icon:"tabler-currency-dollar"})]),_:1}),t("div",Ge,[t("span",Qe,"$"+u(a.customerData.totalSpent),1),Ze])])])]),_:1}),e(w,null,{default:l(()=>[e(R,{class:"my-4"}),Xe,e(oe,{class:"card-list mt-2"},{default:l(()=>[e(B,null,{default:l(()=>[t("div",et,[tt,t("span",null,u(a.customerData.customer),1)])]),_:1}),e(B,null,{default:l(()=>[t("div",lt,[st,t("span",null,u(a.customerData.email),1)])]),_:1}),e(B,null,{default:l(()=>[t("div",at,[ot,e(z,{label:"",color:"success"},{default:l(()=>[d(u(a.customerData.status),1)]),_:1})])]),_:1}),e(B,null,{default:l(()=>[t("div",nt,[it,t("span",null,u(a.customerData.contact),1)])]),_:1}),e(B,null,{default:l(()=>[t("div",rt,[dt,t("span",null,u(a.customerData.country),1)])]),_:1})]),_:1})]),_:1}),e(w,{class:"text-center"},{default:l(()=>[e(T,{onClick:i[0]||(i[0]=r=>m.value=!s(m))},{default:l(()=>[d(" Edit Details ")]),_:1})]),_:1})]),_:1})):L("",!0)]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(D,{flat:"",class:"current-plan"},{default:l(()=>[e(w,null,{default:l(()=>[t("div",ct,[ut,t("div",null,[e(q,{src:s(Re),height:"108",width:"108"},null,8,["src"])])]),e(T,{color:"#fff",class:"text-primary",block:"",onClick:i[1]||(i[1]=r=>p.value=!s(p))},{default:l(()=>[d(" Upgrade to Premium ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{isDialogVisible:s(m),"onUpdate:isDialogVisible":i[2]||(i[2]=r=>C(m)?m.value=r:null)},null,8,["isDialogVisible"]),e(U,{isDialogVisible:s(p),"onUpdate:isDialogVisible":i[3]||(i[3]=r=>C(p)?p.value=r:null)},null,8,["isDialogVisible"])],64)}}},pt=_e(mt,[["__scopeId","data-v-6a5604f0"]]),_t={class:"d-flex justify-space-between mb-6 flex-wrap align-center gap-y-4 gap-x-6"},ft=t("h5",{class:"text-h5"}," Address Book ",-1),bt={class:"d-flex justify-space-between mb-4 gap-y-2 flex-wrap align-center"},ht={class:"d-flex align-center gap-x-1"},vt={class:"d-flex"},gt={class:"text-h6 me-2"},xt={class:"text-body-2 text-disabled"},yt={class:"ms-5"},wt={class:"px-10"},Vt={class:"mb-1 text-h6"},Dt=["innerHTML"],$t={class:"d-flex justify-space-between mb-6 flex-wrap align-center gap-y-4 gap-x-6"},Ct=t("h5",{class:"text-h5"}," Payment Methods ",-1),kt={class:"d-flex justify-space-between mb-4 gap-y-2 flex-wrap align-center"},Pt={class:"d-flex align-center"},At={class:"d-flex gap-x-2"},Tt={class:"text-h6"},Ut={class:"text-body-2 text-disabled"},It={class:"ms-5"},St={class:"px-8"},Mt=t("tr",null,[t("td",null,"Name "),t("td",{class:"font-weight-medium"}," Violet Mendoza ")],-1),Et=t("tr",null,[t("td",null,"Number "),t("td",{class:"font-weight-medium"}," **** 4487 ")],-1),Bt=t("tr",null,[t("td",null,"Expires "),t("td",{class:"font-weight-medium"}," 08/2028 ")],-1),Ot=t("tr",null,[t("td",null,"Type "),t("td",{class:"font-weight-medium"}," Master Card ")],-1),Lt=t("tr",null,[t("td",null,"Issuer "),t("td",{class:"font-weight-medium"}," VICBANK ")],-1),Nt=t("tr",null,[t("td",null,"ID "),t("td",{class:"font-weight-medium"}," DH73DJ8 ")],-1),Rt=t("tr",null,[t("td",null,"Billing "),t("td",{class:"font-weight-medium"}," United Kingdom ")],-1),zt=t("tr",null,[t("td",null,"Number"),t("td",{class:"font-weight-medium"}," +7634 983 637 ")],-1),jt=t("tr",null,[t("td",null,"Email"),t("td",{class:"font-weight-medium"}," vafgot@vultukir.org ")],-1),Wt=t("tr",null,[t("td",null,"Origin"),t("td",{class:"font-weight-medium"}," United States ")],-1),Ft=t("td",null,"CVC Check",-1),Ht={class:"font-weight-medium"},Jt={__name:"CustomerTabAddressAndBilling",setup(k){const a=f([!0,!1,!1]),m=f([!0,!1,!1]),p=f(!1),n=f(!1),i=[{title:"Home",subtitle:"23 Shatinon Mekalan",owner:"Violet Mendoza",defaultAdderss:!0,address:` 23 Shatinon Mekalan,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`},{title:"Office",subtitle:"45 Rocker Terrace",owner:"Violet Mendoza",defaultAdderss:!1,address:` 45 Rocker Terrace,
    <br>
    Latheronwheel,
    <br>
    KW5 8NW, London,
    <br>
    UK`},{title:"Family",subtitle:"512 Water Plant",owner:"Violet Mendoza",defaultAdderss:!1,address:` 512 Water Plant,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`}],h=[{title:"Mastercard",subtitle:"Expries Apr 2028",isDefaultMethod:!1,image:Ve},{title:"American Express",subtitle:"Expries Apr 2028",isDefaultMethod:!1,image:De},{title:"Visa",subtitle:"45 Roker Terrace",isDefaultMethod:!0,image:$e}];return(U,r)=>{const v=F("IconBtn"),E=we,V=xe;return _(),$(I,null,[e(D,{class:"mb-6"},{default:l(()=>[e(w,null,{default:l(()=>[t("div",_t,[ft,e(T,{variant:"tonal",onClick:r[0]||(r[0]=o=>p.value=!s(p))},{default:l(()=>[d(" Add new Address ")]),_:1})]),(_(),$(I,null,H(i,(o,x)=>(_(),$(I,{key:x},[t("div",bt,[t("div",ht,[e(v,{density:"comfortable",onClick:O=>s(a)[x]=!s(a)[x]},{default:l(()=>[e(y,{icon:s(a)[x]?"tabler-chevron-down":"tabler-chevron-right",class:"flip-in-rtl"},null,8,["icon"])]),_:2},1032,["onClick"]),t("div",null,[t("div",vt,[t("h6",gt,u(o.title),1),o.defaultAdderss?(_(),A(z,{key:0,color:"success",label:""},{default:l(()=>[d(" Default Address ")]),_:1})):L("",!0)]),t("span",xt,u(o.subtitle),1)])]),t("div",yt,[e(v,null,{default:l(()=>[e(y,{icon:"tabler-pencil",class:"flip-in-rtl"})]),_:1}),e(v,null,{default:l(()=>[e(y,{icon:"tabler-trash",class:"flip-in-rtl"})]),_:1}),e(v,null,{default:l(()=>[e(y,{icon:"tabler-dots-vertical",class:"flip-in-rtl"})]),_:1})])]),e(G,null,{default:l(()=>[Q(t("div",wt,[t("h6",Vt,u(o.owner),1),t("div",{class:"text-body-1",innerHTML:o.address},null,8,Dt)],512),[[Z,s(a)[x]]])]),_:2},1024),x!==i.length-1?(_(),A(R,{key:0,class:"my-4"})):L("",!0)],64))),64))]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(w,null,{default:l(()=>[t("div",$t,[Ct,e(T,{variant:"tonal",onClick:r[1]||(r[1]=o=>n.value=!s(n))},{default:l(()=>[d(" Add Payment Methods ")]),_:1})]),(_(),$(I,null,H(h,(o,x)=>(_(),$(I,{key:x},[t("div",kt,[t("div",Pt,[e(v,{density:"comfortable",onClick:O=>s(m)[x]=!s(m)[x]},{default:l(()=>[e(y,{icon:s(m)[x]?"tabler-chevron-down":"tabler-chevron-right",class:"flip-in-rtl"},null,8,["icon"])]),_:2},1032,["onClick"]),e(q,{src:o.image,height:"30",width:"50",class:"me-3"},null,8,["src"]),t("div",null,[t("div",At,[t("h6",Tt,u(o.title),1),o.isDefaultMethod?(_(),A(z,{key:0,color:"success",label:""},{default:l(()=>[d(" Default Method ")]),_:1})):L("",!0)]),t("span",Ut,u(o.subtitle),1)])]),t("div",It,[e(v,null,{default:l(()=>[e(y,{icon:"tabler-pencil",class:"flip-in-rtl"})]),_:1}),e(v,null,{default:l(()=>[e(y,{icon:"tabler-trash",class:"flip-in-rtl"})]),_:1}),e(v,null,{default:l(()=>[e(y,{icon:"tabler-dots-vertical",class:"flip-in-rtl"})]),_:1})])]),e(G,null,{default:l(()=>[Q(t("div",St,[e(N,null,{default:l(()=>[e(g,{cols:"12",md:"6"},{default:l(()=>[e(Y,null,{default:l(()=>[Mt,Et,Bt,Ot,Lt,Nt]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(Y,null,{default:l(()=>[Rt,zt,jt,Wt,t("tr",null,[Ft,t("td",Ht,[d(" Passed "),e(M,{class:"ms-2",color:"success",size:"20",variant:"tonal"},{default:l(()=>[e(y,{icon:"tabler-check",size:"14"})]),_:1})])])]),_:1})]),_:1})]),_:1})],512),[[Z,s(m)[x]]])]),_:2},1024),x!==h.length-1?(_(),A(R,{key:0,class:"my-4"})):L("",!0)],64))),64))]),_:1})]),_:1}),e(E,{isDialogVisible:s(p),"onUpdate:isDialogVisible":r[2]||(r[2]=o=>C(p)?p.value=o:null)},null,8,["isDialogVisible"]),e(V,{isDialogVisible:s(n),"onUpdate:isDialogVisible":r[3]||(r[3]=o=>C(n)?n.value=o:null)},null,8,["isDialogVisible"])],64)}}};const Kt=t("div",{class:"text-base text-high-emphasis"}," Change to notification settings, the user will get the update ",-1),qt=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," BROWSER "),t("th",{scope:"col"}," APP ")])],-1),Yt={__name:"CustomerTabNotification",setup(k){const a=f([{type:"Order status",email:!0,browser:!0,app:!0},{type:"Upcoming sale",email:!0,browser:!0,app:!0},{type:"Special offers",email:!0,browser:!0,app:!1},{type:"New item arrival",email:!0,browser:!1,app:!1}]);return(m,p)=>(_(),A(D,{class:"user-tab-notification"},{default:l(()=>[e(te,null,{default:l(()=>[e(le,{class:"mb-1"},{default:l(()=>[d(" Recent Devices ")]),_:1}),e(se,null,{default:l(()=>[Kt]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(Y,{class:"text-no-wrap border rounded recent-devices-table"},{default:l(()=>[qt,t("tbody",null,[(_(!0),$(I,null,H(s(a),(n,i)=>(_(),$("tr",{key:n.type,class:he(i%2===0?"table-colored-raw":"")},[t("td",null,u(n.type),1),t("td",null,[e(K,{modelValue:n.email,"onUpdate:modelValue":h=>n.email=h},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(K,{modelValue:n.browser,"onUpdate:modelValue":h=>n.browser=h},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(K,{modelValue:n.app,"onUpdate:modelValue":h=>n.app=h},null,8,["modelValue","onUpdate:modelValue"])])],2))),128))])]),_:1})]),_:1}),e(w,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(T,null,{default:l(()=>[d("Save changes")]),_:1}),e(T,{color:"secondary",variant:"tonal"},{default:l(()=>[d(" Discard ")]),_:1})]),_:1})]),_:1}))}},Gt={class:"d-flex justify-sm-space-between justify-start flex-wrap gap-4 align-center"},Qt=t("h5",{class:"text-h5"}," Orders placed ",-1),Zt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-6"},Xt={class:"text-sm text-disabled mb-0"},el={__name:"CustomerOrderTable",async setup(k){let a,m;const p=f(""),n=f(10),i=f(1),h=f(),U=f(),r=b=>{var P,j;i.value=b.page,h.value=(P=b.sortBy[0])==null?void 0:P.key,U.value=(j=b.sortBy[0])==null?void 0:j.order},v=[{title:"Order",key:"order"},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Spent",key:"spent"},{title:"Actions",key:"actions",sortable:!1}],E=b=>{if(b==="Delivered")return{color:"success"};if(b==="Out for Delivery")return{color:"primary"};if(b==="Ready to Pickup")return{color:"info"};if(b==="Dispatched")return{color:"warning"}},{data:V,execute:o}=([a,m]=ae(()=>ne(ke("/apps/ecommerce/orders",{query:{q:p,page:i,itemsPerPage:n,sortBy:h,orderBy:U}}))),a=await a,m(),a),x=X(()=>{var b;return(b=V.value)==null?void 0:b.orders}),O=X(()=>{var b;return((b=V.value)==null?void 0:b.total)??0}),re=async b=>{await Pe(`/apps/ecommerce/orders/${b}`,{method:"DELETE"}),o()};return(b,P)=>{const j=F("RouterLink"),de=F("IconBtn");return _(),A(D,null,{default:l(()=>[e(w,null,{default:l(()=>[t("div",Gt,[Qt,e(ie,{modelValue:s(p),"onUpdate:modelValue":P[0]||(P[0]=c=>C(p)?p.value=c:null),density:"compact",placeholder:"Serach Order",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"])])]),_:1}),e(s(Ae),{"items-per-page":s(n),"onUpdate:itemsPerPage":P[2]||(P[2]=c=>C(n)?n.value=c:null),page:s(i),"onUpdate:page":P[3]||(P[3]=c=>C(i)?i.value=c:null),headers:v,"show-select":"",items:s(x),"items-length":s(O),class:"text-no-wrap","onUpdate:options":r},{"item.order":l(({item:c})=>[e(j,{to:{name:"apps-ecommerce-order-details-id",params:{id:c.order}}},{default:l(()=>[d(" #"+u(c.order),1)]),_:2},1032,["to"])]),"item.date":l(({item:c})=>[d(u(new Date(c.date).toDateString()),1)]),"item.status":l(({item:c})=>{var J;return[e(z,{label:"",color:(J=E(c.status))==null?void 0:J.color},{default:l(()=>[d(u(c.status),1)]),_:2},1032,["color"])]}),"item.spent":l(({item:c})=>[d(" $"+u(c.spent),1)]),"item.actions":l(({item:c})=>[e(de,null,{default:l(()=>[e(y,{icon:"tabler-dots-vertical"}),e(Te,{activator:"parent"},{default:l(()=>[e(oe,null,{default:l(()=>[e(B,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:c.order}}},{default:l(()=>[d(" View ")]),_:2},1032,["to"]),e(B,{value:"delete",onClick:J=>re(c.id)},{default:l(()=>[d(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:l(()=>[e(R),t("div",Zt,[t("p",Xt,u(s(Ce)({page:s(i),itemsPerPage:s(n)},s(O))),1),e(Ue,{modelValue:s(i),"onUpdate:modelValue":P[1]||(P[1]=c=>C(i)?i.value=c:null),length:Math.ceil(s(O)/s(n)),"total-visible":b.$vuetify.display.xs?1:Math.min(Math.ceil(s(O)/s(n)),5)},{prev:l(c=>[e(T,ee({variant:"tonal",color:"default"},c,{icon:!1}),{default:l(()=>[d(" Previous ")]),_:2},1040)]),next:l(c=>[e(T,ee({variant:"tonal",color:"default"},c,{icon:!1}),{default:l(()=>[d(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})}}},tl=t("h4",{class:"text-h4"}," Account Balance ",-1),ll=t("div",null,[t("span",{class:"text-primary text-h4 me-2"},"$2345"),t("span",{class:"text-body-1"},"Credit Left"),t("p",{class:"mb-0 text-base text-disabled"}," Account balance for next purchase ")],-1),sl=t("h4",{class:"text-h4"}," Loyalty Program ",-1),al=t("p",{class:"mb-0 text-base text-disabled"}," 3000 points to next tier ",-1),ol=t("h4",{class:"text-h4"}," Wishlist ",-1),nl=t("div",null,[t("p",{class:"mb-1"},[t("span",{class:"text-warning text-h5 me-2"},"15"),t("span",{class:"text-body-1"},"items in wishlist")]),t("p",{class:"mb-0 text-disabled"}," Receive notification when items go on sale ")],-1),il=t("h4",{class:"text-h4 mb-2"}," Coupons ",-1),rl=t("div",null,[t("p",{class:"mb-1"},[t("span",{class:"text-info text-h5 me-2"},"21"),t("span",{class:"text-body-1"},"Coupons you win")]),t("p",{class:"mb-0 text-disabled"}," Use coupon on next purchase ")],-1),dl={__name:"CustomerTabOverview",setup(k){return(a,m)=>(_(),A(N,null,{default:l(()=>[e(g,{cols:"12",md:"6"},{default:l(()=>[e(D,null,{default:l(()=>[e(w,{class:"d-flex gap-y-2 flex-column"},{default:l(()=>[e(M,{variant:"tonal",color:"primary",icon:"tabler-currency-dollar",rounded:""}),tl,ll]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(D,null,{default:l(()=>[e(w,{class:"d-flex gap-y-2 flex-column"},{default:l(()=>[e(M,{variant:"tonal",color:"success",icon:"tabler-gift-card",rounded:""}),sl,t("div",null,[e(z,{color:"success",class:"mb-2",label:""},{default:l(()=>[d(" Platinum Member ")]),_:1}),al])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(D,null,{default:l(()=>[e(w,{class:"d-flex gap-y-2 flex-column"},{default:l(()=>[e(M,{variant:"tonal",color:"warning",icon:"tabler-star",rounded:""}),ol,nl]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(D,null,{default:l(()=>[e(w,{class:"d-flex gap-y-1 flex-column"},{default:l(()=>[e(M,{variant:"tonal",color:"info",icon:"tabler-discount-2",rounded:""}),il,rl]),_:1})]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(el)]),_:1})]),_:1}))}},cl=t("span",null,"Minimum 8 characters long, uppercase & symbol",-1),ul=t("span",{class:"text-base text-medium-emphasis"},"Keep your account secure with authentication step.",-1),ml=t("span",{class:"text-base text-high-emphasis font-weight-medium mb-1"}," SMS ",-1),pl=t("p",{class:"mb-0 mt-4"},[d(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),t("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more"),d(". ")],-1),_l={class:"d-flex align-center"},fl={__name:"CustomerTabSecurity",setup(k){const a=f(!1),m=f(!1),p=f("+1(968) 819-2547"),n=f(!1),i=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"activity"}],h=[{browser:"Chrome on Windows",logo:"tabler-brand-windows",color:"info",device:"HP Specter 360",location:"Switzerland",activity:"10, July 2021 20:07"},{browser:"Chrome on iPhone",logo:"tabler-device-mobile",color:"error",device:"iPhone 12x",location:"Australia",activity:"13, July 2021 10:10"},{browser:"Chrome on Android",logo:"tabler-brand-android",color:"success",device:"OnePlus 9 Pro",location:"Dubai",activity:"4, July 2021 15:15"},{browser:"Chrome on macOS",logo:"tabler-brand-apple",color:"secondary",device:"Apple iMac",location:"India",activity:"20, July 2021 21:01"},{browser:"Chrome on Windows",logo:"tabler-brand-windows",color:"info",device:"HP Specter 360",location:"Switzerland",activity:"10, July 2021 20:07"},{browser:"Chrome on Android",logo:"tabler-brand-android",color:"success",device:"OnePlus 9 Pro",location:"Dubai",activity:"4, July 2021 15:15"}];return(U,r)=>{const v=Ie,E=F("IconBtn"),V=ye;return _(),$(I,null,[e(N,null,{default:l(()=>[e(g,{cols:"12"},{default:l(()=>[e(D,{title:"Change Password"},{default:l(()=>[e(w,null,{default:l(()=>[e(Se,{variant:"tonal",color:"warning",class:"mb-4 px-4 py-3"},{default:l(()=>[e(Me,{class:"mb-3"},{default:l(()=>[d(" Ensure that these requirements are met ")]),_:1}),cl]),_:1}),e(Ee,{onSubmit:ve(()=>{},["prevent"])},{default:l(()=>[e(N,null,{default:l(()=>[e(g,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"New Password",placeholder:"············",type:s(a)?"text":"password","append-inner-icon":s(a)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[0]||(r[0]=o=>a.value=!s(a))},null,8,["type","append-inner-icon"])]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Confirm Password",placeholder:"············",type:s(m)?"text":"password","append-inner-icon":s(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[1]||(r[1]=o=>m.value=!s(m))},null,8,["type","append-inner-icon"])]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(T,{type:"submit"},{default:l(()=>[d(" Change Password ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(D,null,{default:l(()=>[e(te,null,{default:l(()=>[e(le,{class:"mb-2"},{default:l(()=>[d(" Two-steps verification ")]),_:1}),e(se,null,{default:l(()=>[ul]),_:1})]),_:1}),e(w,null,{default:l(()=>[t("div",null,[ml,e(ie,{variant:"underlined","model-value":s(p)},{"append-inner":l(()=>[e(E,{size:"small",variant:"text"},{default:l(()=>[e(y,{icon:"tabler-edit",onClick:r[2]||(r[2]=o=>n.value=!0)})]),_:1}),e(E,{size:"small",variant:"text"},{default:l(()=>[e(y,{icon:"tabler-trash"})]),_:1})]),_:1},8,["model-value"])]),pl]),_:1})]),_:1})]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(D,{title:"Recent devices"},{default:l(()=>[e(R),e(s(Be),{items:h,headers:i,"hide-default-footer":"",class:"text-no-wrap"},{"item.browser":l(({item:o})=>[t("div",_l,[e(y,{icon:o.logo,color:o.color,size:"18",class:"me-2"},null,8,["icon","color"]),d(" "+u(o.browser),1)])]),bottom:l(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{isDialogVisible:s(n),"onUpdate:isDialogVisible":r[3]||(r[3]=o=>C(n)?n.value=o:null),"sms-code":s(p)},null,8,["isDialogVisible","sms-code"])],64)}}},bl={class:"d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"},hl={class:"d-flex gap-2 align-center mb-2 flex-wrap"},vl={class:"text-h4 font-weight-medium"},gl=t("div",null,[t("span",{class:"text-body-1"}," Aug 17, 2020, 5:48 (ET) ")],-1),xl={class:"d-flex gap-4"},Es={__name:"[id]",async setup(k){let a,m;const p=ge(),n=f(),i=f(null),h=[{title:"Overview"},{title:"Security"},{title:"Billing & Plan"},{title:"Notifications"}],{data:U,error:r}=([a,m]=ae(()=>ne(`/apps/ecommerce/customers/${p.params.id}`)),a=await a,m(),a);r.value?console.log(r.value):U.value&&(n.value=U.value);const v=f(!1);return(E,V)=>(_(),$("div",null,[t("div",bl,[t("div",null,[t("div",hl,[t("h4",vl," Customer ID #"+u(s(p).params.id),1)]),gl]),t("div",xl,[e(T,{variant:"tonal",color:"error"},{default:l(()=>[d(" Delete Customer ")]),_:1})])]),s(n)?(_(),A(N,{key:0},{default:l(()=>[e(g,{cols:"12",md:"5",lg:"4"},{default:l(()=>[e(pt,{"customer-data":s(n)},null,8,["customer-data"])]),_:1}),e(g,{cols:"12",md:"7",lg:"8"},{default:l(()=>[e(Oe,{modelValue:s(i),"onUpdate:modelValue":V[0]||(V[0]=o=>C(i)?i.value=o:null),class:"v-tabs-pill mb-3 disable-tab-transition"},{default:l(()=>[(_(),$(I,null,H(h,o=>e(Le,{key:o.title},{default:l(()=>[t("span",null,u(o.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(Ne,{modelValue:s(i),"onUpdate:modelValue":V[1]||(V[1]=o=>C(i)?i.value=o:null),class:"disable-tab-transition",touch:!1},{default:l(()=>[e(W,null,{default:l(()=>[e(dl)]),_:1}),e(W,null,{default:l(()=>[e(fl)]),_:1}),e(W,null,{default:l(()=>[e(Jt)]),_:1}),e(W,null,{default:l(()=>[e(Yt)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):L("",!0),e(ce,{"is-drawer-open":s(v),"onUpdate:isDrawerOpen":V[2]||(V[2]=o=>C(v)?v.value=o:null)},null,8,["is-drawer-open"])]))}};export{Es as default};