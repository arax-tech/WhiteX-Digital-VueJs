import{_ as E}from"./AppTextField-a8f30c8f.js";import{h as M}from"./moment-a9aaa855.js";import{q as $,a4 as F,L as G,s as b,t as k,r as U,a as q,o as n,f as p,e as o,b as a,d as s,E as c,z as r,ag as z,a1 as C,H as f,a2 as L,G as l,c as m,C as H,F as J}from"./index-c4e71550.js";import{_ as O}from"./Loading-2eec0421.js";import{a as x,V as D}from"./VRow-3a397f81.js";import{V as Y}from"./VCardText-6669d6f5.js";import{V as j}from"./VDataTable-145871c8.js";import{V as B}from"./VTooltip-a22fc0c5.js";import{V as K}from"./VCard-71b3ac17.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VAvatar-0d338c12.js";import"./VSelect-9628140b.js";import"./VList-48b3771d.js";import"./ssrBoot-3f554f90.js";import"./VDivider-aef533a2.js";import"./dialog-transition-1a37cbb8.js";import"./VMenu-3432c545.js";import"./VOverlay-14a99b98.js";import"./lazy-8c4021f0.js";import"./scopeId-203eb21d.js";import"./VCheckboxBtn-5dd1ee23.js";import"./VSelectionControl-9181ec5a.js";import"./VChip-a642ea45.js";import"./VTable-28a89234.js";import"./filter-c3387b54.js";const Q={class:"text-xs"},W=s("b",null,"Name : ",-1),X=s("br",null,null,-1),Z=s("b",null,"Company : ",-1),ee=s("br",null,null,-1),oe=s("b",null,"Email : ",-1),te=s("br",null,null,-1),se=s("b",null,"Phone : ",-1),ae=s("br",null,null,-1),ne=s("br",null,null,-1),le={key:0,style:{padding:"2px 10px"},class:"rounded bg-warning"},ce={key:1,style:{padding:"2px 10px"},class:"rounded bg-success"},ie={key:2,style:{padding:"2px 10px","background-color":"#c72c2c",color:"#fff"},class:"rounded"},re={class:"text-xs"},ue={class:"text-xs"},Oe={__name:"index",setup(de){const d=$(),T=F.useToast(),V=G();b(()=>document.title="Admin - Subscription Invoices"),b(()=>d.dispatch("GetInvoices"));const w=k(()=>d.state.invoices.data),N=k(()=>d.state.invoices.loading),S=k(()=>d.state.auth.user),v=JSON.parse(S.value.permissions);b(()=>{var _;(_=v.CustomInvoice)!=null&&_.includes("ReadCustomInvoice")||(alert("You don't have permission to access this resource..."),V.go(-1))});const h=U(""),P=[{title:"Client",key:"invoice.client"},{title:"Items",key:"invoice.products"},{title:"Status",key:"invoice.status"},{title:"Issue Date",key:"invoice.issue_date"},{title:"Total",key:"invoice.total"},{title:"Action",key:"invoice.action"}],R=async _=>{if(confirm("Are you sure to delete ?"))try{const u=await d.dispatch("DeleteInvoice",_);u.status===200&&(T.error(u.message),d.dispatch("GetInvoices"))}catch(u){console.log(u)}};return(_,u)=>{const A=E,I=q("IconBtn");return n(),p(D,null,{default:o(()=>[N.value?(n(),p(O,{key:0})):(n(),p(x,{key:1,cols:"12"},{default:o(()=>[a(K,null,{default:o(()=>[a(Y,{style:{"border-bottom":"thin solid rgba(var(--v-border-color), var(--v-border-opacity))"}},{default:o(()=>[a(D,null,{default:o(()=>[a(x,{cols:"8",md:"8"},{default:o(()=>{var e;return[s("h2",null,[c(" Invoices "),(e=r(v).CustomInvoice)!=null&&e.includes("CreateCustomInvoice")?(n(),p(z,{key:0,to:"/admin/invoice/create",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:o(()=>[a(C,{start:"",icon:"tabler-plus"}),c(" Create ")]),_:1})):f("",!0)])]}),_:1}),a(x,{cols:"4",md:"4"},{default:o(()=>[a(A,{modelValue:r(h),"onUpdate:modelValue":u[0]||(u[0]=e=>L(h)?h.value=e:null),density:"compact",placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(r(j),{headers:P,items:w.value,search:r(h),"items-per-page":5,class:"text-no-wrap mb-4"},{"item.invoice.client":o(({item:e})=>{var t,i,y,g;return[s("span",Q,[W,c(" "+l((t=e==null?void 0:e.client)==null?void 0:t.name)+" ",1),X,Z,c(" "+l((i=e==null?void 0:e.client)==null?void 0:i.company_name)+" ",1),ee,oe,c(" "+l((y=e==null?void 0:e.client)==null?void 0:y.email)+" ",1),te,se,c(" "+l((g=e==null?void 0:e.client)==null?void 0:g.phone)+" ",1),ae])]}),"item.invoice.products":o(({item:e})=>[(n(!0),m(J,null,H(e==null?void 0:e.items,(t,i)=>(n(),m("span",{key:i,class:"text-xs"},[c(l(i+1)+" : "+l(t==null?void 0:t.name)+", "+l(t==null?void 0:t.qty)+"  -  "+l(t==null?void 0:t.price),1),ne]))),128))]),"item.invoice.status":o(({item:e})=>[(e==null?void 0:e.status)==="Due"?(n(),m("span",le,"Due")):(e==null?void 0:e.status)==="Paid"?(n(),m("span",ce,"Paid")):(e==null?void 0:e.status)==="UnPaid"?(n(),m("span",ie,"Unpaid")):f("",!0)]),"item.invoice.issue_date":o(({item:e})=>[s("span",re,l(e!=null&&e.issue_date?r(M)(e==null?void 0:e.issue_date).format("DD MMM yyyy"):"-"),1)]),"item.invoice.total":o(({item:e})=>[s("span",ue,l(e==null?void 0:e.total),1)]),"item.invoice.action":o(({item:e})=>{var t,i;return[(t=r(v).CustomInvoice)!=null&&t.includes("ReadCustomInvoice")?(n(),p(I,{key:0,onClick:()=>r(V).push(`/invoice/print/${e==null?void 0:e.id}`)},{default:o(()=>[a(B,{activator:"parent",location:"top"},{default:o(()=>[c("View")]),_:1}),a(C,{icon:"tabler-eye"})]),_:2},1032,["onClick"])):f("",!0),(i=r(v).CustomInvoice)!=null&&i.includes("DeleteCustomInvoice")?(n(),p(I,{key:1,onClick:y=>R(e.id)},{default:o(()=>[a(B,{activator:"parent",location:"top"},{default:o(()=>[c("Delete")]),_:1}),a(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):f("",!0)]}),_:1},8,["items","search"])]),_:1})]),_:1}))]),_:1})}}};export{Oe as default};