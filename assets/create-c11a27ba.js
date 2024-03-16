import{r as s}from"./validators-dea6e3a5.js";import{q as L,L as z,a4 as E,s as h,t as k,r as D,bD as G,o as p,f,e as n,b as l,d as C,ag as y,a1 as M,E as b,D as Q,z as a,c as j,C as H,ai as J,H as O,F as Y,G as K}from"./index-c4e71550.js";import{_ as W}from"./AppTextField-a8f30c8f.js";import{_ as X}from"./AppDateTimePicker-36695006.js";import{_ as Z}from"./AppSelect-0065786f.js";import{_ as x}from"./Loading-2eec0421.js";import{a as i,V as v}from"./VRow-3a397f81.js";import{V as S}from"./VCardText-6669d6f5.js";import{V as ee}from"./VDivider-aef533a2.js";import{V as le}from"./VForm-617abc97.js";import{V as ae}from"./VFileInput-134ee4d3.js";import{V as te}from"./VCard-71b3ac17.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VSelect-9628140b.js";import"./VList-48b3771d.js";import"./ssrBoot-3f554f90.js";import"./VAvatar-0d338c12.js";import"./dialog-transition-1a37cbb8.js";import"./VMenu-3432c545.js";import"./VOverlay-14a99b98.js";import"./lazy-8c4021f0.js";import"./scopeId-203eb21d.js";import"./VCheckboxBtn-5dd1ee23.js";import"./VSelectionControl-9181ec5a.js";import"./VChip-a642ea45.js";const re=C("div",null,[C("h2",null,"Create Invoice")],-1),Ge={__name:"create",setup(oe){const m=L(),U=z(),I=E.useToast();h(()=>document.title="Admin - Create Invoice"),h(()=>m.dispatch("GetClients"));const P=k(()=>m.state.clients.clients),_=k(()=>m.state.clients.loading),N=k(()=>m.state.auth.user),T=JSON.parse(N.value.permissions);h(()=>{var e;(e=T.CustomInvoice)!=null&&e.includes("CreateCustomInvoice")||(alert("You don't have permission to access this resource..."),U.go(-1))});const q=D(),c=G([{name:"",description:"",cost:"",qty:"",price:""}]),w=e=>{c.push({name:"",description:"",cost:"",qty:"",price:""})},F=e=>{c.length>1&&c.splice(e,1)},r=D({client_id:"",issue_date:"",salesperson_name:"",payment_instructions:"",payment_links:"",subtotal:"",discount:"",tax:"",total:"",status:"",note:"",signature:""}),A=async()=>{const e=new FormData;e.append("client_id",r.value.client_id),e.append("issue_date",r.value.issue_date),e.append("salesperson_name",r.value.salesperson_name),e.append("payment_instructions",r.value.payment_instructions),e.append("payment_links",r.value.payment_links),e.append("subtotal",r.value.subtotal),e.append("discount",r.value.discount),e.append("tax",r.value.tax),e.append("total",r.value.total),e.append("note",r.value.note),e.append("status",r.value.status),e.append("signature",r.value.signature),c.map(t=>{e.append("name[]",t.name),e.append("description[]",t.description),e.append("cost[]",t.cost),e.append("qty[]",t.qty),e.append("price[]",t.price)});try{const t=await m.dispatch("CreateInvoice",e);t.status===200&&(I.success(t.message),U.push("/admin/invoice"))}catch(t){console.error(t)}},B=["Due","Paid","UnPaid"],R=()=>{var e;(e=q==null?void 0:q.value)==null||e.validate().then(({valid:t})=>{t&&A()})};return(e,t)=>{const g=Z,$=X,d=W;return p(),f(v,null,{default:n(()=>[_.value?(p(),f(x,{key:0})):(p(),f(i,{key:1,cols:"12"},{default:n(()=>[l(te,null,{default:n(()=>[l(S,{style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},{default:n(()=>[re,C("div",null,[l(y,{to:"/admin/invoice",rounded:"pill",color:"primary",size:"small",class:"ml-5"},{default:n(()=>[l(M,{start:"",icon:"tabler-arrow-left"}),b("Back ")]),_:1})])]),_:1}),l(ee),l(S,{class:"pt-0"},{default:n(()=>[l(le,{class:"mt-6",ref_key:"refForm",ref:q,onSubmit:Q(R,["prevent"])},{default:n(()=>[l(v,null,{default:n(()=>[l(i,{cols:"12",md:"3"},{default:n(()=>[l(g,{modelValue:a(r).client_id,"onUpdate:modelValue":t[0]||(t[0]=o=>a(r).client_id=o),items:P.value,"item-title":"email","item-value":"id",label:"Client","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose..",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","items","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l($,{modelValue:a(r).issue_date,"onUpdate:modelValue":t[1]||(t[1]=o=>a(r).issue_date=o),"prepend-inner-icon":"tabler-calendar-check",placeholder:"Issue Date","persistent-placeholder":"",label:"Issue Date",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).salesperson_name,"onUpdate:modelValue":t[2]||(t[2]=o=>a(r).salesperson_name=o),"prepend-inner-icon":"tabler-user",placeholder:"SalesPerson Name","persistent-placeholder":"",label:"SalesPerson Name",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).payment_instructions,"onUpdate:modelValue":t[3]||(t[3]=o=>a(r).payment_instructions=o),"prepend-inner-icon":"tabler-coin",placeholder:"Payment Instructions","persistent-placeholder":"",label:"Payment Instructions",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).payment_links,"onUpdate:modelValue":t[4]||(t[4]=o=>a(r).payment_links=o),"prepend-inner-icon":"tabler-link",placeholder:"Payment Links","persistent-placeholder":"",label:"Payment Links",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).subtotal,"onUpdate:modelValue":t[5]||(t[5]=o=>a(r).subtotal=o),"prepend-inner-icon":"tabler-receipt",placeholder:"Subtotal","persistent-placeholder":"",label:"Subtotal",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).discount,"onUpdate:modelValue":t[6]||(t[6]=o=>a(r).discount=o),"prepend-inner-icon":"tabler-receipt",placeholder:"Discount","persistent-placeholder":"",label:"Discount",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).tax,"onUpdate:modelValue":t[7]||(t[7]=o=>a(r).tax=o),"prepend-inner-icon":"tabler-receipt",placeholder:"Tax","persistent-placeholder":"",label:"Tax",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).total,"onUpdate:modelValue":t[8]||(t[8]=o=>a(r).total=o),"prepend-inner-icon":"tabler-receipt",placeholder:"Total","persistent-placeholder":"",label:"Total",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(g,{modelValue:a(r).status,"onUpdate:modelValue":t[9]||(t[9]=o=>a(r).status=o),items:B,"prepend-inner-icon":"tabler-color-picker",label:"Status",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"3"},{default:n(()=>[l(d,{modelValue:a(r).note,"onUpdate:modelValue":t[10]||(t[10]=o=>a(r).note=o),"prepend-inner-icon":"tabler-note",placeholder:"Note","persistent-placeholder":"",label:"Note",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","rules"])]),_:1}),l(i,{md:"3",cols:"12"},{default:n(()=>[b(" Signature "),l(ae,{label:"Signature",rules:["requiredValidator"in e?e.requiredValidator:a(s)],onChange:t[11]||(t[11]=o=>a(r).signature=o.target.files[0])},null,8,["rules"])]),_:1})]),_:1}),(p(!0),j(Y,null,H(a(c),(o,V)=>(p(),f(v,{key:V},{default:n(()=>[l(i,{cols:"12",md:"2"},{default:n(()=>[l(d,{modelValue:o.name,"onUpdate:modelValue":u=>o.name=u,"prepend-inner-icon":"tabler-color-picker",placeholder:"Name","persistent-placeholder":"",label:"Name",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),l(i,{cols:"12",md:"2"},{default:n(()=>[l(d,{modelValue:o.description,"onUpdate:modelValue":u=>o.description=u,"prepend-inner-icon":"tabler-note",placeholder:"Description","persistent-placeholder":"",label:"Description",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),l(i,{cols:"12",md:"2"},{default:n(()=>[l(d,{modelValue:o.cost,"onUpdate:modelValue":u=>o.cost=u,"prepend-inner-icon":"tabler-coin",placeholder:"Cost","persistent-placeholder":"",label:"Cost",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),l(i,{cols:"12",md:"2"},{default:n(()=>[l(d,{modelValue:o.qty,"onUpdate:modelValue":u=>o.qty=u,"prepend-inner-icon":"tabler-file-orientation",placeholder:"Qty","persistent-placeholder":"",label:"Qty",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),l(i,{cols:"12",md:"2"},{default:n(()=>[l(d,{modelValue:o.price,"onUpdate:modelValue":u=>o.price=u,"prepend-inner-icon":"tabler-coin",placeholder:"Price","persistent-placeholder":"",label:"Price",rules:["requiredValidator"in e?e.requiredValidator:a(s)]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),l(i,{cols:"12",md:"2"},{default:n(()=>[l(y,{style:J({marginTop:"25px",width:V===0?"100%":"auto"}),color:"success",type:"button",onClick:u=>w(V)},{default:n(()=>[b("Add")]),_:2},1032,["style","onClick"]),V>0?(p(),f(y,{key:0,style:{"margin-top":"25px"},color:"error",type:"button",onClick:u=>F(V)},{default:n(()=>[b("Remove")]),_:2},1032,["onClick"])):O("",!0)]),_:2},1024)]),_:2},1024))),128)),l(v,null,{default:n(()=>[l(i,{cols:"12"},{default:n(()=>[l(y,{type:"submit",disabled:_.value},{default:n(()=>[b(K(_.value?"Creating...":"Create"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1}))]),_:1})}}};export{Ge as default};
