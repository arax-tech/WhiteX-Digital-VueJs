import{r as p}from"./validators-dea6e3a5.js";import{s as x,q as j,a4 as E,t as A,r as f,o as G,f as B,e as d,b as a,D as R,z as t,d as m,ag as D,a1 as T,E as z,G as M}from"./index-c4e71550.js";import{_ as S}from"./AppTextField-a8f30c8f.js";import{V as L}from"./VCard-71b3ac17.js";import{V as $}from"./VForm-617abc97.js";import{V as w}from"./VCardText-6669d6f5.js";import{V as J}from"./VAvatar-0d338c12.js";import{V as K}from"./VDivider-aef533a2.js";import{V as I,a as i}from"./VRow-3a397f81.js";import"./helpers-61e4df1a.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VImg-8451f417.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";const H={class:"d-flex flex-column justify-center gap-4"},O={class:"d-flex flex-wrap gap-2"},Q=m("span",{class:"d-none d-sm-block"},"Upload new photo",-1),W=m("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),he={__name:"profile",setup(X){var g,h,b,y,U;x(()=>document.title="Client - Profile");const u=j(),C=E.useToast(),r=A(()=>u.state.auth.user),v=A(()=>u.state.auth.loading),o=f({name:r.value.name,email:r.value.email,company_name:(g=r==null?void 0:r.value)==null?void 0:g.company_name,phone:(h=r==null?void 0:r.value)==null?void 0:h.phone,address_1:(b=r==null?void 0:r.value)==null?void 0:b.address_1,address_2:(y=r==null?void 0:r.value)==null?void 0:y.address_2,image:null}),F={avatarImg:(U=r==null?void 0:r.value)==null?void 0:U.image,name:"john",email:"johnDoe@example.com"},_=f(),V=f(structuredClone(F)),N=l=>{const e=new FileReader,{files:s}=l.target;s&&s.length&&(o.value.image=s[0],e.readAsDataURL(s[0]),e.onload=()=>{typeof e.result=="string"&&(V.value.avatarImg=e.result)})},c=f(),P=l=>{var e;l.preventDefault(),(e=c==null?void 0:c.value)==null||e.validate().then(({valid:s})=>{s&&k()})},k=async()=>{const l=new FormData;l.append("name",o.value.name),l.append("email",o.value.email),l.append("company_name",o.value.company_name),l.append("phone",o.value.phone),l.append("address_1",o.value.address_1),l.append("address_2",o.value.address_2),o.value.image&&l.append("image",o.value.image);try{const e=await u.dispatch("UpdateProfileAction",l);e.status===200&&(u.dispatch("GetAuthUser"),C.success(e.message))}catch(e){console.error(e)}};return(l,e)=>{const s=S;return G(),B(I,null,{default:d(()=>[a(i,{cols:"12"},{default:d(()=>[a(L,{title:"Profile Details"},{default:d(()=>[a($,{ref_key:"refForm",ref:c,onSubmit:R(P,["prevent"])},{default:d(()=>[a(w,{class:"d-flex"},{default:d(()=>{var n;return[a(J,{rounded:"",size:"100",class:"me-6",image:((n=t(V).avatarImg)==null?void 0:n.length)>0?t(V).avatarImg:"/placeholder.jpg"},null,8,["image"]),m("div",H,[m("div",O,[a(D,{color:"primary",onClick:e[0]||(e[0]=Y=>{var q;return(q=t(_))==null?void 0:q.click()})},{default:d(()=>[a(T,{icon:"tabler-cloud-upload",class:"d-sm-none"}),Q]),_:1}),m("input",{ref_key:"refInputEl",ref:_,type:"file",name:"image",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:N},null,544)]),W])]}),_:1}),a(K),a(w,{class:"pt-2"},{default:d(()=>[a(I,{class:"mt-6"},{default:d(()=>[a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-user",placeholder:"Name",name:"name",modelValue:t(o).name,"onUpdate:modelValue":e[1]||(e[1]=n=>t(o).name=n),"persistent-placeholder":"",label:"Name",rules:["requiredValidator"in l?l.requiredValidator:t(p)]},null,8,["modelValue","rules"])]),_:1}),a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-mail",modelValue:t(o).email,"onUpdate:modelValue":e[2]||(e[2]=n=>t(o).email=n),placeholder:"Email","persistent-placeholder":"",label:"Email",rules:["requiredValidator"in l?l.requiredValidator:t(p)]},null,8,["modelValue","rules"])]),_:1}),a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-mail",modelValue:t(o).company_name,"onUpdate:modelValue":e[3]||(e[3]=n=>t(o).company_name=n),placeholder:"Company Name","persistent-placeholder":"",label:"Company Name",rules:["requiredValidator"in l?l.requiredValidator:t(p)]},null,8,["modelValue","rules"])]),_:1}),a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-mail",modelValue:t(o).phone,"onUpdate:modelValue":e[4]||(e[4]=n=>t(o).phone=n),placeholder:"Phone","persistent-placeholder":"",label:"Phone",rules:["requiredValidator"in l?l.requiredValidator:t(p)]},null,8,["modelValue","rules"])]),_:1}),a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-mail",modelValue:t(o).address_1,"onUpdate:modelValue":e[5]||(e[5]=n=>t(o).address_1=n),placeholder:"Address 1","persistent-placeholder":"",label:"Address 1",rules:["requiredValidator"in l?l.requiredValidator:t(p)]},null,8,["modelValue","rules"])]),_:1}),a(i,{md:"4",cols:"12"},{default:d(()=>[a(s,{"prepend-inner-icon":"tabler-mail",modelValue:t(o).address_2,"onUpdate:modelValue":e[6]||(e[6]=n=>t(o).address_2=n),placeholder:"Address 2","persistent-placeholder":"",label:"Address 2"},null,8,["modelValue"])]),_:1}),a(i,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:d(()=>[a(D,{type:"submit",disabled:v.value},{default:d(()=>[z(M(v.value?"Updating...":"Update"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})}}};export{he as default};
