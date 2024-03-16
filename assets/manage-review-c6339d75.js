import{_ as K}from"./AppSelect-b4b316a2.js";import{q as X}from"./vue3-apexcharts-67a9e9cd.js";import{p as Y}from"./paginationMeta-4ad053a4.js";import{u as Z}from"./useApi-991c92ea.js";import{c as ee}from"./createUrl-35b4ec5e.js";import{$ as te}from"./api-222f7d98.js";import{V as w,a as p}from"./VRow-44af3a5b.js";import{V as x}from"./VCard-367227de.js";import{V as y}from"./VCardText-83b6dd60.js";import{r as u,ah as se,t as B,a as A,o as W,f as ae,e as s,b as e,d as a,a1 as z,I as O,E as r,c as oe,C as le,G as i,a3 as ie,F as re,z as o,a2 as h,ag as V,B as D}from"./index-670bda14.js";import{V as k}from"./VChip-c9c9bc7b.js";import{V as ne}from"./VTextField-babd124d.js";import{V as de}from"./VSelect-80bd1ff2.js";import{V as T}from"./VDivider-964da8ec.js";import{V as ce}from"./VDataTableServer-5b8536db.js";import{V as U}from"./VAvatar-eedc1aa8.js";import{V as me}from"./VRating-ef6b662a.js";import{V as pe}from"./VMenu-cbe945a0.js";import{V as ue,a as $}from"./VList-faf63776.js";import{V as he}from"./VPagination-3b4b51ec.js";import"./focus-bfe812d1.js";import"./index-87919977.js";import"./VImg-4f1dd734.js";/* empty css                   */import"./VCounter-40602143.js";import"./VField-eebd85ff.js";import"./easing-9f15041e.js";import"./VInput-28c68c55.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-a3b422c0.js";import"./VOverlay-9bca4c5f.js";import"./lazy-055ec9ba.js";import"./scopeId-78466d19.js";import"./VCheckboxBtn-770097af.js";import"./VSelectionControl-798a6484.js";import"./VDataTable-674b624c.js";import"./VTable-3015d60e.js";import"./filter-9f13f1fe.js";import"./ssrBoot-587632ee.js";const fe={class:"d-flex align-center gap-x-2"},ve=a("h2",{class:"text-h2 text-primary"}," 4.89 ",-1),be=a("div",{class:"my-2 text-body-1 font-weight-medium text-high-emphasis"}," Total 187 reviews ",-1),_e=a("div",{class:"mb-2"}," All reviews are from genuine customers ",-1),ge={class:"text-no-wrap text-sm"},we={class:"w-100"},xe=a("h4",{class:"text-h4 mb-2"}," Reviews statistics ",-1),ye={class:"mb-9"},Ve=a("span",{class:"me-2"},"12 New Reviews",-1),ke=a("div",null,[a("div",{class:"text-high-emphasis text-body-1 font-weight-medium mb-2"},[a("span",{class:"text-success"},"87%"),r(" Positive Reviews ")]),a("div",{class:"text-body-1 text-disabled"}," Weekly Report ")],-1),Re={class:"d-flex justify-start justify-sm-end"},Ce={class:"d-flex justify-space-between flex-wrap gap-6"},Pe={class:"d-flex flex-row gap-4 align-center flex-wrap"},Se={class:"d-flex gap-x-3 align-center"},Le={class:"d-flex flex-column"},Be={class:"text-body-1 text-high-emphasis font-weight-medium"},Ae={class:"text-sm text-disabled text-wrap clamp-text text-wrap clamp-text"},We={class:"d-flex align-center gap-x-3"},ze={class:"d-flex flex-column"},Oe={class:"text-disabled text-sm"},De={class:"my-3"},Te={class:"text-h6 mb-2"},Ue={class:"text-sm text-medium-emphasis text-wrap mb-0"},$e={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Ee={class:"text-sm text-disabled mb-0"},Ie="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",St={__name:"manage-review",async setup(Me){let f,R;const v=u("All"),b=u(""),n=u(10),d=u(1),C=u(),P=u(),{data:S,execute:E}=([f,R]=se(()=>Z(ee("/apps/ecommerce/reviews",{query:{q:b,status:v,page:d,itemsPerPage:n,sortBy:C,orderBy:P}}))),f=await f,R(),f),I=B(()=>S.value.reviews),_=B(()=>S.value.total),M=c=>{var l,g;d.value=c.page,C.value=(l=c.sortBy[0])==null?void 0:l.key,P.value=(g=c.sortBy[0])==null?void 0:g.order},N=async c=>{await te(`/apps/ecommerce/reviews/${c}`,{method:"DELETE"}),E()},j=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],q=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],m={colorsLabel:{success:"#28c76f29"},colors:{success:"#28c76f"}},F=[{data:[20,40,60,80,100,80,60]}],G={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[m.colorsLabel.success,m.colorsLabel.success,m.colorsLabel.success,m.colorsLabel.success,m.colors.success,m.colorsLabel.success,m.colorsLabel.success],plotOptions:{bar:{barHeight:"75%",columnWidth:"40%",startingShape:"rounded",endingShape:"rounded",borderRadius:5,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:Ie,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:576,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:3,columnWidth:"30%"}}}}]};return(c,l)=>{const g=X,H=K,Q=A("RouterLink"),J=A("IconBtn");return W(),ae(w,{class:"match-height"},{default:s(()=>[e(p,{cols:"12",md:"6"},{default:s(()=>[e(x,null,{default:s(()=>[e(y,null,{default:s(()=>[e(w,null,{default:s(()=>[e(p,{cols:"12",sm:"6"},{default:s(()=>[a("div",{class:O(c.$vuetify.display.smAndUp?"border-e":"border-b")},[a("div",fe,[ve,e(z,{icon:"tabler-star-filled",color:"primary",size:"32"})]),be,_e,e(k,{color:"primary",label:"",class:O(c.$vuetify.display.smAndUp?"":"mb-4")},{default:s(()=>[r(" +5 This week ")]),_:1},8,["class"])],2)]),_:1}),e(p,{cols:"12",sm:"6"},{default:s(()=>[(W(),oe(re,null,le(j,(t,L)=>a("div",{key:L,class:"d-flex align-center gap-x-4 mb-2"},[a("div",ge,i(t.rating)+" Star ",1),a("div",we,[e(ie,{color:"primary",height:"8","model-value":t.value/185*100,rounded:""},null,8,["model-value"])]),a("div",null,i(t.value),1)])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(x,null,{default:s(()=>[e(y,null,{default:s(()=>[e(w,null,{default:s(()=>[e(p,{cols:"12",sm:"5"},{default:s(()=>[a("div",null,[xe,a("div",ye,[Ve,e(k,{color:"success",label:""},{default:s(()=>[r(" +8.4% ")]),_:1})]),ke])]),_:1}),e(p,{cols:"12",sm:"7"},{default:s(()=>[a("div",Re,[e(g,{id:"shipment-statistics",type:"bar",height:"160",options:G,series:F})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12"},{default:s(()=>[e(x,null,{default:s(()=>[e(y,null,{default:s(()=>[a("div",Ce,[e(ne,{modelValue:o(b),"onUpdate:modelValue":l[0]||(l[0]=t=>h(b)?b.value=t:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search ..",density:"compact"},null,8,["modelValue"]),a("div",Pe,[e(de,{modelValue:o(n),"onUpdate:modelValue":l[1]||(l[1]=t=>h(n)?n.value=t:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"},density:"compact"},null,8,["modelValue"]),e(H,{modelValue:o(v),"onUpdate:modelValue":l[2]||(l[2]=t=>h(v)?v.value=t:null),style:{"max-inline-size":"6.25rem","min-inline-size":"6.25rem"},density:"compact",items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),e(V,{"prepend-icon":"tabler-download",variant:"tonal",color:"default"},{default:s(()=>[r(" Export ")]),_:1})])])]),_:1}),e(T),e(o(ce),{"items-per-page":o(n),"onUpdate:itemsPerPage":l[4]||(l[4]=t=>h(n)?n.value=t:null),page:o(d),"onUpdate:page":l[5]||(l[5]=t=>h(d)?d.value=t:null),headers:q,items:o(I),"show-select":"","items-length":o(_),class:"text-no-wrap","onUpdate:options":M},{"item.product":s(({item:t})=>[a("div",Se,[e(U,{image:t.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),a("div",Le,[a("span",Be,i(t.product),1),a("span",Ae,i(t.companyName),1)])])]),"item.reviewer":s(({item:t})=>[a("div",We,[e(U,{image:t.avatar,size:"38"},null,8,["image"]),a("div",ze,[e(Q,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium"},{default:s(()=>[r(i(t.reviewer),1)]),_:2},1024),a("span",Oe,i(t.email),1)])])]),"item.review":s(({item:t})=>[a("div",De,[e(me,{readonly:"","model-value":t.review,density:"compact",class:"mb-1"},null,8,["model-value"]),a("h6",Te,i(t.head),1),a("p",Ue,i(t.para),1)])]),"item.date":s(({item:t})=>[r(i(new Date(t.date).toDateString()),1)]),"item.status":s(({item:t})=>[e(k,{color:t.status==="Published"?"success":"warning",label:""},{default:s(()=>[r(i(t.status),1)]),_:2},1032,["color"])]),"item.actions":s(({item:t})=>[e(J,null,{default:s(()=>[e(z,{icon:"tabler-dots-vertical"}),e(pe,{activator:"parent"},{default:s(()=>[e(ue,null,{default:s(()=>[e($,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:t.id}}},{default:s(()=>[r(" View ")]),_:2},1032,["to"]),e($,{value:"delete",onClick:L=>N(t.id)},{default:s(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:s(()=>[e(T),a("div",$e,[a("p",Ee,i(o(Y)({page:o(d),itemsPerPage:o(n)},o(_))),1),e(he,{modelValue:o(d),"onUpdate:modelValue":l[3]||(l[3]=t=>h(d)?d.value=t:null),length:Math.ceil(o(_)/o(n)),"total-visible":c.$vuetify.display.xs?1:Math.min(Math.ceil(o(_)/o(n)),5)},{prev:s(t=>[e(V,D({variant:"tonal",color:"default"},t,{icon:!1}),{default:s(()=>[r(" Previous ")]),_:2},1040)]),next:s(t=>[e(V,D({variant:"tonal",color:"default"},t,{icon:!1}),{default:s(()=>[r(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}};export{St as default};