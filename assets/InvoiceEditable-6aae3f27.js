import{_ as P}from"./AppTextarea-b08d7908.js";import{_ as S}from"./AppSelect-b4b316a2.js";import{_ as O}from"./AppDateTimePicker-0ecee459.js";import{_ as j}from"./AppTextField-803105de.js";import{a as _,V as z}from"./VRow-44af3a5b.js";import{V as N}from"./VTooltip-4a06c0c7.js";import{r as f,aV as Q,w as U,t as W,a as G,o as g,c as $,d as e,b as t,e as o,z as s,a2 as C,E as D,G as c,a1 as B,F as R,f as H,cM as q,H as J,C as L,ag as K,I as w}from"./index-670bda14.js";import{V as Y}from"./VCard-367227de.js";import{V as X}from"./VNodeRenderer-8ba42f67.js";import{u as Z}from"./useApi-991c92ea.js";import{V as v}from"./VCardText-83b6dd60.js";import{V}from"./VDivider-964da8ec.js";const ee={class:"add-products-header mb-4 d-none d-md-flex ps-5 pe-16"},te=e("h6",{class:"text-sm font-weight-medium"},[e("span",{class:"text-base"}," Item ")],-1),se=e("span",{class:"text-base"}," Cost ",-1),oe=e("span",{class:"text-base"}," Qty ",-1),le=e("span",{class:"text-base"}," Price ",-1),ae={class:"pa-5 flex-grow-1"},ne={class:"text-body-2 text-no-wrap mt-4"},ie=e("p",{class:"mb-1"}," Discount ",-1),de=e("span",null,"0%",-1),ce={class:"mx-2"},me={class:"my-2"},pe=e("span",{class:"d-inline d-md-none"},"Price: ",-1),ue={class:"text-body-1"},re={class:"d-flex flex-column justify-space-between border-s pa-1"},_e={__name:"InvoiceProductEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0,default:()=>({title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(A,{emit:I}){const i=A,x=I,a=[{title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,qty:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,qty:1,description:"Vuetify admin template."},{title:"App Development",cost:32,qty:1,description:"Native App Development."}],r=f("App Customization"),d=f(structuredClone(Q(i.data)));U(r,()=>{const T=a.filter(m=>m.title===r.value);d.value=T[0]});const y=()=>{x("removeProduct",i.id)},h=W(()=>Number(d.value.cost)*Number(d.value.qty));return U(h,()=>{x("totalAmount",h.value)},{immediate:!0}),(T,m)=>{const k=S,p=P,l=j,b=G("IconBtn");return g(),$(R,null,[e("div",ee,[t(z,{class:"font-weight-medium"},{default:o(()=>[t(_,{cols:"12",md:"6"},{default:o(()=>[te]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[se]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[oe]),_:1}),t(_,{cols:"12",md:"2"},{default:o(()=>[le]),_:1})]),_:1})]),t(Y,{flat:"",border:"",class:"d-flex flex-row"},{default:o(()=>[e("div",ae,[t(z,null,{default:o(()=>[t(_,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:s(r),"onUpdate:modelValue":m[0]||(m[0]=u=>C(r)?r.value=u:null),items:a,"item-title":"title","item-value":"title",label:"Select Item",placeholder:"Select Item",class:"mb-3"},null,8,["modelValue"]),t(p,{modelValue:s(d).description,"onUpdate:modelValue":m[1]||(m[1]=u=>s(d).description=u),rows:"2",label:"Description",placeholder:"Item description"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).cost,"onUpdate:modelValue":m[2]||(m[2]=u=>s(d).cost=u),type:"number",label:"Cost",placeholder:"100"},null,8,["modelValue"]),e("div",ne,[ie,de,e("span",ce,[D(" 0% "),t(N,{activator:"parent"},{default:o(()=>[D("Tax 1")]),_:1})]),e("span",null,[D(" 0% "),t(N,{activator:"parent"},{default:o(()=>[D("Tax 2")]),_:1})])])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).qty,"onUpdate:modelValue":m[3]||(m[3]=u=>s(d).qty=u),type:"number",label:"Qty"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e("p",me,[pe,e("span",ue,"$"+c(s(h)),1)])]),_:1})]),_:1})]),e("div",re,[t(b,{onClick:y},{default:o(()=>[t(B,{size:"20",icon:"tabler-x"})]),_:1}),t(b,null,{default:o(()=>[t(B,{size:"20",icon:"tabler-settings"})]),_:1})])]),_:1})],64)}}},fe={class:"ma-sm-4"},he={class:"d-flex align-center mb-6"},be={class:"font-weight-bold text-capitalize text-h4"},xe=e("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),ye=e("p",{class:"my-2"}," San Diego County, CA 91905, USA ",-1),ve=e("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),Ve={class:"mt-4 ma-sm-4"},ge={class:"d-flex align-center font-weight-medium justify-sm-end text-xl mb-3"},De=e("span",{class:"me-3 text-h4",style:{"inline-size":"6rem"}},"Invoice",-1),we={class:"d-flex align-center justify-sm-end mb-3"},$e=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Date Issued",-1),Ce={style:{"inline-size":"9.5rem"}},Ae={class:"d-flex align-center justify-sm-end mb-0"},Ie=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Due Date",-1),Te={style:{"min-inline-size":"9.5rem"}},ke={class:"ma-sm-4",style:{"inline-size":"15.5rem"}},ze=e("h6",{class:"text-base font-weight-medium mb-6"}," Invoice To: ",-1),Ne={class:"mb-1"},Ue={class:"mb-1"},Be={key:0,class:"mb-1"},qe={class:"mb-1"},Pe={class:"mb-0"},Se={class:"ma-sm-4"},je=e("h6",{class:"text-base font-weight-medium mb-6"}," Bill To: ",-1),Re=e("td",{class:"pe-6 pb-1"}," Total Due: ",-1),Ye={class:"font-weight-medium pb-1"},Fe=e("td",{class:"pe-6 pb-1"}," Bank Name: ",-1),Me={class:"pb-1"},Ee=e("td",{class:"pe-6 pb-1"}," Country: ",-1),Oe={class:"pb-1"},Qe=e("td",{class:"pe-6 pb-1"}," IBAN: ",-1),We={class:"pb-1"},Ge=e("td",{class:"pe-6 pb-1"}," SWIFT Code: ",-1),He={class:"pb-1"},Je={class:"mt-4 ma-sm-4"},Le={class:"mx-sm-4 my-4"},Ke={class:"d-flex align-center mb-4"},Xe=e("h6",{class:"text-sm font-weight-medium me-10"}," Salesperson: ",-1),Ze={class:"mx-sm-4 my-4"},et={class:"w-100"},tt=e("td",{class:"pe-16"}," Subtotal: ",-1),st=e("h6",{class:"text-sm"}," $1800 ",-1),ot=[st],lt=e("td",{class:"pe-16"}," Discount: ",-1),at=e("h6",{class:"text-sm"}," $28 ",-1),nt=[at],it=e("td",{class:"pe-16"}," Tax: ",-1),dt=e("h6",{class:"text-sm"}," 21% ",-1),ct=[dt],mt={class:"w-100"},pt=e("td",{class:"pe-16"}," Total: ",-1),ut=e("h6",{class:"text-sm"}," $1690 ",-1),rt=[ut],_t=e("p",{class:"font-weight-medium text-sm text-high-emphasis mb-2"}," Note: ",-1),At={__name:"InvoiceEditable",props:{data:{type:null,required:!0}},emits:["push","remove"],setup(A,{emit:I}){const i=A,x=I,a=f(i.data.invoice),r=f(i.data.salesperson),d=f(i.data.thanksNote),y=f(i.data.note),h=f([]);(async()=>{const{data:p,error:l}=await Z("/apps/invoice/clients");l.value?console.log(l.value):h.value=p.value})();const m=()=>{x("push",{title:"App Design",cost:24,qty:1,description:"Designed UI kit & app pages."})},k=p=>{x("remove",p)};return(p,l)=>{const b=j,u=O,F=S,M=P;return g(),H(Y,null,{default:o(()=>[t(v,{class:"d-flex flex-wrap justify-space-between gap-y-5 flex-column flex-sm-row"},{default:o(()=>[e("div",fe,[e("div",he,[t(s(X),{nodes:s(q).app.logo,class:"me-3"},null,8,["nodes"]),e("h6",be,c(s(q).app.title),1)]),xe,ye,ve]),e("div",Ve,[e("h6",ge,[De,e("span",null,[t(b,{modelValue:s(a).id,"onUpdate:modelValue":l[0]||(l[0]=n=>s(a).id=n),disabled:"",prefix:"#",density:"compact",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",we,[$e,e("span",Ce,[t(u,{modelValue:s(a).issuedDate,"onUpdate:modelValue":l[1]||(l[1]=n=>s(a).issuedDate=n),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",Ae,[Ie,e("span",Te,[t(u,{modelValue:s(a).dueDate,"onUpdate:modelValue":l[2]||(l[2]=n=>s(a).dueDate=n),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),_:1}),t(V),t(v,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-y-5 gap-4"},{default:o(()=>[e("div",ke,[ze,t(F,{modelValue:s(a).client,"onUpdate:modelValue":l[3]||(l[3]=n=>s(a).client=n),items:s(h),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-6",density:"compact"},null,8,["modelValue","items"]),e("p",Ne,c(s(a).client.name),1),e("p",Ue,c(s(a).client.company),1),s(a).client.address?(g(),$("p",Be,c(s(a).client.address)+", "+c(s(a).client.country),1)):J("",!0),e("p",qe,c(s(a).client.contact),1),e("p",Pe,c(s(a).client.companyEmail),1)]),e("div",Se,[je,e("table",null,[e("tbody",null,[e("tr",null,[Re,e("td",Ye,c(i.data.paymentDetails.totalDue),1)]),e("tr",null,[Fe,e("td",Me,c(i.data.paymentDetails.bankName),1)]),e("tr",null,[Ee,e("td",Oe,c(i.data.paymentDetails.country),1)]),e("tr",null,[Qe,e("td",We,c(i.data.paymentDetails.iban),1)]),e("tr",null,[Ge,e("td",He,c(i.data.paymentDetails.swiftCode),1)])])])])]),_:1}),t(V),t(v,{class:"add-products-form"},{default:o(()=>[(g(!0),$(R,null,L(i.data.purchasedProducts,(n,E)=>(g(),$("div",{key:n.title,class:"my-4 ma-sm-4"},[t(_e,{id:E,data:n,onRemoveProduct:k},null,8,["id","data"])]))),128)),e("div",Je,[t(K,{onClick:m},{default:o(()=>[D(" Add Item ")]),_:1})])]),_:1}),t(V),t(v,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},{default:o(()=>[e("div",Le,[e("div",Ke,[Xe,t(b,{modelValue:s(r),"onUpdate:modelValue":l[4]||(l[4]=n=>C(r)?r.value=n:null),style:{"inline-size":"10rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(b,{modelValue:s(d),"onUpdate:modelValue":l[5]||(l[5]=n=>C(d)?d.value=n:null),placeholder:"Message"},null,8,["modelValue"])]),e("div",Ze,[e("table",et,[e("tbody",null,[e("tr",null,[tt,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},ot,2)]),e("tr",null,[lt,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},nt,2)]),e("tr",null,[it,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},ct,2)])])]),t(V,{class:"mt-4 mb-3"}),e("table",mt,[e("tbody",null,[e("tr",null,[pt,e("td",{class:w(p.$vuetify.locale.isRtl?"text-start":"text-end")},rt,2)])])])])]),_:1}),t(V),t(v,{class:"mx-sm-4"},{default:o(()=>[_t,t(M,{modelValue:s(y),"onUpdate:modelValue":l[6]||(l[6]=n=>C(y)?y.value=n:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])]),_:1})]),_:1})}}};export{At as _};