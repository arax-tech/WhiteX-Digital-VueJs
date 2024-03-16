import{_ as U}from"./AppSelect-b4b316a2.js";import{_ as B}from"./InvoiceAddPaymentDrawer-90119edf.js";import{_ as N}from"./InvoiceEditable-6aae3f27.js";import{_ as $}from"./InvoiceSendInvoiceDrawer-b3214615.js";import{r as l,n as O,ah as j,o as D,f as x,e as a,b as t,z as s,H as I,ag as f,E as r,d as n,a2 as i}from"./index-670bda14.js";import{u as R}from"./useApi-991c92ea.js";import{V as M,a as C}from"./VRow-44af3a5b.js";import{V as q}from"./VCard-367227de.js";import{V as z}from"./VCardText-83b6dd60.js";import{V as b}from"./focus-bfe812d1.js";import{V as w}from"./VSwitch-898e0e06.js";import"./VSelect-80bd1ff2.js";import"./VTextField-babd124d.js";/* empty css                   */import"./VCounter-40602143.js";import"./VImg-4f1dd734.js";import"./VField-eebd85ff.js";import"./easing-9f15041e.js";import"./VInput-28c68c55.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./VList-faf63776.js";import"./ssrBoot-587632ee.js";import"./VAvatar-eedc1aa8.js";import"./VDivider-964da8ec.js";import"./dialog-transition-a3b422c0.js";import"./VMenu-cbe945a0.js";import"./VOverlay-9bca4c5f.js";import"./lazy-055ec9ba.js";import"./scopeId-78466d19.js";import"./VCheckboxBtn-770097af.js";import"./VSelectionControl-798a6484.js";import"./VChip-c9c9bc7b.js";import"./AppTextarea-b08d7908.js";import"./AppDateTimePicker-0ecee459.js";import"./AppTextField-803105de.js";import"./AppDrawerHeaderSection-e0a1bd17.js";import"./VSpacer-5e937b1c.js";import"./vue3-perfect-scrollbar.esm-8721f1bb.js";import"./VForm-e3bcef70.js";import"./VNavigationDrawer-2280f09e.js";import"./VTooltip-4a06c0c7.js";import"./VNodeRenderer-8ba42f67.js";const E={class:"d-flex gap-2"},H={class:"w-50"},L={class:"w-50"},W={class:"d-flex align-center justify-space-between mb-2"},Y={class:"d-flex align-center justify-space-between mb-2"},F={class:"d-flex align-center justify-space-between"},Re={__name:"[id]",async setup(G){let p,k;const m=l(),P=O(),{data:A}=([p,k]=j(()=>R(`/apps/invoice/${P.params.id}`)),p=await p,k(),p);m.value={invoice:A.value.invoice,paymentDetails:A.value.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,qty:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"};const g=c=>{var e;(e=m.value)==null||e.purchasedProducts.push(c)},S=c=>{var e;(e=m.value)==null||e.purchasedProducts.splice(c,1)},d=l(!1),u=l(!1),v=l(!0),_=l(!1),y=l(!1),V=l("Bank Account"),h=["Bank Account","PayPal","UPI Transfer"];return(c,e)=>{const T=U;return D(),x(M,null,{default:a(()=>[t(C,{cols:"12",md:"9"},{default:a(()=>{var o;return[(o=s(m))!=null&&o.invoice?(D(),x(N,{key:0,data:s(m),onPush:g,onRemove:S},null,8,["data"])):I("",!0)]}),_:1}),t(C,{cols:"12",md:"3"},{default:a(()=>[t(q,{class:"mb-8"},{default:a(()=>[t(z,null,{default:a(()=>[t(f,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:e[0]||(e[0]=o=>d.value=!0)},{default:a(()=>[r(" Send Invoice ")]),_:1}),n("div",E,[n("div",H,[t(f,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:s(P).params.id}}},{default:a(()=>[r(" Preview ")]),_:1},8,["to"])]),n("div",L,[t(f,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[r(" Save ")]),_:1})])]),t(f,{block:"","prepend-icon":"tabler-currency-dollar",onClick:e[1]||(e[1]=o=>u.value=!0)},{default:a(()=>[r(" Add Payment ")]),_:1})]),_:1})]),_:1}),t(T,{modelValue:s(V),"onUpdate:modelValue":e[2]||(e[2]=o=>i(V)?V.value=o:null),items:h,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",W,[t(b,{for:"payment-terms"},{default:a(()=>[r(" Payment Terms ")]),_:1}),n("div",null,[t(w,{id:"payment-terms",modelValue:s(v),"onUpdate:modelValue":e[3]||(e[3]=o=>i(v)?v.value=o:null)},null,8,["modelValue"])])]),n("div",Y,[t(b,{for:"client-notes"},{default:a(()=>[r(" Client Notes ")]),_:1}),n("div",null,[t(w,{id:"client-notes",modelValue:s(_),"onUpdate:modelValue":e[4]||(e[4]=o=>i(_)?_.value=o:null)},null,8,["modelValue"])])]),n("div",F,[t(b,{for:"payment-stub"},{default:a(()=>[r(" Payment Stub ")]),_:1}),n("div",null,[t(w,{id:"payment-stub",modelValue:s(y),"onUpdate:modelValue":e[5]||(e[5]=o=>i(y)?y.value=o:null)},null,8,["modelValue"])])])]),_:1}),t($,{isDrawerOpen:s(d),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>i(d)?d.value=o:null)},null,8,["isDrawerOpen"]),t(B,{isDrawerOpen:s(u),"onUpdate:isDrawerOpen":e[7]||(e[7]=o=>i(u)?u.value=o:null)},null,8,["isDrawerOpen"])]),_:1})}}};export{Re as default};