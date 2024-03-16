import{r as Z}from"./validators-dea6e3a5.js";import{q as tt,L as et,a4 as st,s as C,t as T,r as g,a as ot,o as p,f as u,e,b as s,z as i,a2 as D,d as l,G as r,E as m,H as w,a1 as $,D as at,ag as lt}from"./index-35d4c811.js";import{_ as rt}from"./AppSelect-676dfa2f.js";import{_ as it}from"./DialogCloseBtn-553e93aa.js";import{_ as nt}from"./AppTextField-e0d36e66.js";import{_ as pt}from"./Loading-891177bd.js";import{a as V,V as F}from"./VRow-d67d386c.js";import{V as O}from"./VCardText-20e2d0ff.js";import{V as ut}from"./VDataTable-6d3f6f6a.js";import{V as P}from"./VImg-9b04c05e.js";import{V as U}from"./VChip-5a7d2631.js";import{V as G}from"./VTooltip-5c041b29.js";import{V as E}from"./VCard-06d56730.js";import{V as dt}from"./VDialog-b2a36fbc.js";import{V as ct}from"./VDivider-4423ace3.js";import{V as mt}from"./VForm-790819b5.js";import"./helpers-61e4df1a.js";import"./focus-47cc4c1d.js";import"./VSelect-bf5a5be9.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./VList-56d7996c.js";import"./ssrBoot-c2946fb8.js";import"./VAvatar-7759ad5c.js";import"./dialog-transition-5411c7b8.js";import"./VMenu-d6c3699e.js";import"./VOverlay-ec7a9eab.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./VCheckboxBtn-d7c7ca98.js";import"./VSelectionControl-4d8986cc.js";import"./VTable-41351eee.js";import"./filter-85676bf0.js";const _t=l("h2",null,"Support Tickets",-1),ft={class:"d-flex align-center"},ht={class:"d-flex flex-column ms-3"},vt={class:"d-block font-weight-medium text-truncate text-high-emphasis"},gt={class:"text-xs"},Vt={class:"d-flex align-center"},yt={class:"d-flex flex-column ms-3"},kt={class:"d-block font-weight-medium text-truncate text-high-emphasis"},xt={class:"text-xs"},St={class:"text-xs"},bt={class:"text-xs"},Ct={class:"text-xs"},Tt={class:"text-xs"},Dt={class:"text-xs"},_e={__name:"index",setup(wt){const n=tt(),N=et(),q=st.useToast();C(()=>document.title="Admin - Supports"),C(()=>n.dispatch("GetAdmins")),C(()=>n.dispatch("GetSupports"));const M=T(()=>n.state.admins.admins),j=T(()=>n.state.supports.data),A=T(()=>n.state.supports.loading),z=T(()=>n.state.auth.user),B=JSON.parse(z.value.permissions);C(()=>{var a;(a=B.SupportTicket)!=null&&a.includes("ReadSupportTicket")||(alert("You don't have permission to access this resource..."),N.go(-1))});const x=g(""),h=g(""),v=g(null),_=g(!1),S=g({}),b=g(),H=a=>{_.value=!0,S.value=a,h.value=a.status},J=[{title:"Client",key:"support.client"},{title:"Assign To",key:"support.assign_to"},{title:"Title",key:"support.title"},{title:"Description",key:"support.description"},{title:"Department",key:"support.department"},{title:"Priority",key:"support.priority"},{title:"Resolution Summary",key:"support.resolution_summary"},{title:"Status",key:"support.status"},{title:"Action",key:"support.action",sortable:!1}],L=["Open","Pending","Resolved","Closed"],Y=()=>{var a;(a=b==null?void 0:b.value)==null||a.validate().then(({valid:o})=>{o&&K()})},K=async()=>{const a=new FormData;a.append("status",h.value),v.value!=null&&a.append("assigned_to",v.value);try{const o=await n.dispatch("UpdateSupport",{id:S.value.id,formData:a});o.status===200&&(q.success(o.message),n.dispatch("GetSupports"),_.value=!1,h.value="",v.value=null,S.value="")}catch(o){console.error(o)}},Q=async a=>{if(confirm("Are you sure to delete ?"))try{const o=await n.dispatch("DeleteSupport",a);o.status===200&&(q.error(o.message),n.dispatch("GetSupports"))}catch(o){console.log(o)}};return(a,o)=>{const W=nt,R=ot("IconBtn"),X=it,I=rt;return p(),u(F,null,{default:e(()=>[A.value?(p(),u(pt,{key:0})):(p(),u(V,{key:1,cols:"12"},{default:e(()=>[s(E,null,{default:e(()=>[s(O,{style:{"border-bottom":"thin solid rgba(var(--v-border-color), var(--v-border-opacity))"}},{default:e(()=>[s(F,null,{default:e(()=>[s(V,{cols:"8",md:"8"},{default:e(()=>[_t]),_:1}),s(V,{cols:"4",md:"4"},{default:e(()=>[s(W,{modelValue:i(x),"onUpdate:modelValue":o[0]||(o[0]=t=>D(x)?x.value=t:null),density:"compact",placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),s(i(ut),{headers:J,items:j.value,search:i(x),"items-per-page":5,class:"text-no-wrap mb-4"},{"item.support.client":e(({item:t})=>{var d,c,f,y,k;return[l("div",ft,[l("div",null,[s(P,{rounded:"",src:((c=(d=t.client)==null?void 0:d.image)==null?void 0:c.length)>0?(f=t.client)==null?void 0:f.image:"/placeholder.jpg",height:"40",width:"40"},null,8,["src"])]),l("div",ht,[l("span",vt,r((y=t.client)==null?void 0:y.name),1),l("span",gt,r((k=t.client)==null?void 0:k.designation),1)])])]}),"item.support.assign_to":e(({item:t})=>{var d,c,f,y,k;return[l("div",Vt,[l("div",null,[s(P,{rounded:"",src:((c=(d=t.assigned)==null?void 0:d.image)==null?void 0:c.length)>0?(f=t.assigned)==null?void 0:f.image:"/placeholder.jpg",height:"40",width:"40"},null,8,["src"])]),l("div",yt,[l("span",kt,r((y=t.assigned)==null?void 0:y.name),1),l("span",xt,r((k=t.assigned)==null?void 0:k.designation),1)])])]}),"item.support.title":e(({item:t})=>[l("span",St,r(t.title),1)]),"item.support.description":e(({item:t})=>[l("span",bt,r(t.message),1)]),"item.support.department":e(({item:t})=>[l("span",Ct,r(t.department),1)]),"item.support.priority":e(({item:t})=>[l("span",Tt,r(t.priority),1)]),"item.support.resolution_summary":e(({item:t})=>[l("span",Dt,r(t.resolution_summary),1)]),"item.support.status":e(({item:t})=>[t.status==="Open"?(p(),u(U,{key:0,color:"primary"},{default:e(()=>[m(r(t.status),1)]),_:2},1024)):t.status==="Pending"?(p(),u(U,{key:1,color:"primary"},{default:e(()=>[m(r(t.status),1)]),_:2},1024)):t.status==="Resolved"?(p(),u(U,{key:2,color:"success"},{default:e(()=>[m(r(t.status),1)]),_:2},1024)):t.status==="Closed"?(p(),u(U,{key:3,color:"error"},{default:e(()=>[m(r(t.status),1)]),_:2},1024)):w("",!0)]),"item.support.action":e(({item:t})=>{var d,c;return[(d=i(B).SupportTicket)!=null&&d.includes("UpdateSupportTicket")?(p(),u(R,{key:0,onClick:f=>H(t)},{default:e(()=>[s(G,{activator:"parent",location:"top"},{default:e(()=>[m("Update")]),_:1}),s($,{icon:"tabler-edit"})]),_:2},1032,["onClick"])):w("",!0),s(R,{onClick:()=>i(N).push("/admin/support/chat/"+t.id)},{default:e(()=>[s(G,{activator:"parent",location:"top"},{default:e(()=>[m("Chat")]),_:1}),s($,{icon:"tabler-message-circle"})]),_:2},1032,["onClick"]),(c=i(B).SupportTicket)!=null&&c.includes("DeleteSupportTicket")?(p(),u(R,{key:1,onClick:f=>Q(t.id)},{default:e(()=>[s(G,{activator:"parent",location:"top"},{default:e(()=>[m("Delete")]),_:1}),s($,{icon:"tabler-trash"})]),_:2},1032,["onClick"])):w("",!0)]}),_:1},8,["items","search"])]),_:1}),i(S)?(p(),u(dt,{key:0,modelValue:i(_),"onUpdate:modelValue":o[4]||(o[4]=t=>D(_)?_.value=t:null),persistent:"",width:"600"},{default:e(()=>[s(X,{onClick:o[1]||(o[1]=t=>_.value=!i(_))}),s(E,{title:"Update"},{default:e(()=>[s(ct,{class:"mt-3"}),s(O,null,{default:e(()=>[s(mt,{ref_key:"refForm",ref:b,onSubmit:at(Y,["prevent"])},{default:e(()=>[s(F,null,{default:e(()=>[s(V,{cols:"12",md:"12"},{default:e(()=>[s(I,{modelValue:i(v),"onUpdate:modelValue":o[2]||(o[2]=t=>D(v)?v.value=t:null),items:M.value,"item-title":"email","item-value":"id",label:"Assign To","prepend-inner-icon":"tabler-user","persistent-placeholder":"",placeholder:"Choose.."},null,8,["modelValue","items"])]),_:1}),s(V,{cols:"12",md:"12"},{default:e(()=>[s(I,{modelValue:i(h),"onUpdate:modelValue":o[3]||(o[3]=t=>D(h)?h.value=t:null),items:L,"prepend-inner-icon":"tabler-color-picker",label:"Status",rules:["requiredValidator"in a?a.requiredValidator:i(Z)]},null,8,["modelValue","rules"])]),_:1}),s(V,{cols:"12"},{default:e(()=>[s(lt,{type:"submit",disabled:A.value},{default:e(()=>[m(r(A.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"])):w("",!0)]),_:1}))]),_:1})}}};export{_e as default};