import{_ as w}from"./AppTextarea-37ab21a0.js";import{_ as T}from"./AppTextField-a8f30c8f.js";import{_ as S}from"./CustomRadiosWithIcon-e9fd1810.js";import{_ as B}from"./DialogCloseBtn-6889b27a.js";import{r as V,aV as c,o as f,f as b,e as t,b as e,E as p,G as E,d as g,z as s,a2 as $,D as k,ag as _,H as z}from"./index-c4e71550.js";import{V as I,a as R,b as F,c as H}from"./VCard-71b3ac17.js";import{V as O}from"./VCardText-6669d6f5.js";import{V as j}from"./VForm-617abc97.js";import{V as q,a as d}from"./VRow-3a397f81.js";import{V as P}from"./VDialog-91d5bf8a.js";const G=g("span",{class:"text-base"}," Add new address for express delivery ",-1),M={class:"d-flex"},le={__name:"AddEditAddressDialog",props:{billingAddress:{type:Object,required:!1,default:()=>({companyName:"",billingEmail:"",taxID:"",vatNumber:"",address:"",contact:"",country:null,state:"",zipCode:null})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(C,{emit:y}){const m=C,n=y,o=V(structuredClone(c(m.billingAddress))),v=()=>{n("update:isDialogVisible",!1),o.value=structuredClone(c(m.billingAddress))},A=()=>{n("update:isDialogVisible",!1),n("submit",o.value)},u=V("Home"),D=[{icon:{icon:"custom-home",size:"40"},title:"Home",desc:"Delivery Time (7am - 9pm)",value:"Home"},{icon:{icon:"custom-office",size:"40"},title:"Office",desc:"Delivery Time (10am - 6pm)",value:"Office"}];return(r,l)=>{const x=B,N=S,i=T,U=w;return f(),b(P,{width:r.$vuetify.display.smAndDown?"auto":610,"model-value":m.isDialogVisible,"onUpdate:modelValue":l[11]||(l[11]=a=>r.$emit("update:isDialogVisible",a))},{default:t(()=>[e(x,{onClick:l[0]||(l[0]=a=>r.$emit("update:isDialogVisible",!1))}),m.billingAddress?(f(),b(I,{key:0,class:"pa-sm-8 pa-5"},{default:t(()=>[e(R,null,{default:t(()=>[e(F,{class:"text-h3 text-center"},{default:t(()=>[p(E(m.billingAddress.address?"Edit":"Add New")+" Address ",1)]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(H,{class:"text-center mb-6"},{default:t(()=>[G]),_:1}),g("div",M,[e(N,{"selected-radio":s(u),"onUpdate:selectedRadio":l[1]||(l[1]=a=>$(u)?u.value=a:null),"radio-content":D,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])]),e(j,{class:"mt-4",onSubmit:k(A,["prevent"])},{default:t(()=>[e(q,null,{default:t(()=>[e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).companyName,"onUpdate:modelValue":l[2]||(l[2]=a=>s(o).companyName=a),label:"Company Name",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).billingEmail,"onUpdate:modelValue":l[3]||(l[3]=a=>s(o).billingEmail=a),label:"Email",placeholder:"john@emaill.com"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).taxID,"onUpdate:modelValue":l[4]||(l[4]=a=>s(o).taxID=a),label:"Tax ID",placeholder:"123 345 32"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).vatNumber,"onUpdate:modelValue":l[5]||(l[5]=a=>s(o).vatNumber=a),label:"VAT Number",placeholder:"123 12 1223"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(U,{modelValue:s(o).address,"onUpdate:modelValue":l[6]||(l[6]=a=>s(o).address=a),rows:"2",label:"Billing Address",placeholder:"1, Pixinvent Street, USA"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).contact,"onUpdate:modelValue":l[7]||(l[7]=a=>s(o).contact=a),label:"Contact",placeholder:"+1 23 456 7890"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).country,"onUpdate:modelValue":l[8]||(l[8]=a=>s(o).country=a),label:"Country",placeholder:"USA"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).state,"onUpdate:modelValue":l[9]||(l[9]=a=>s(o).state=a),label:"State",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(i,{modelValue:s(o).zipCode,"onUpdate:modelValue":l[10]||(l[10]=a=>s(o).zipCode=a),label:"Zip Code",placeholder:"123123",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",class:"text-center"},{default:t(()=>[e(_,{type:"submit",class:"me-3"},{default:t(()=>[p(" submit ")]),_:1}),e(_,{variant:"tonal",color:"secondary",onClick:v},{default:t(()=>[p(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):z("",!0)]),_:1},8,["width","model-value"])}}};export{le as _};