import{V as r}from"./VSpacer-5f3cb4ca.js";import{a as c,o as i,c as l,d as p,G as d,b as e,v as m,e as _,a1 as u}from"./index-35d4c811.js";const f={class:"pa-6 d-flex align-center"},v={class:"text-h5"},x={__name:"AppDrawerHeaderSection",props:{title:{type:String,required:!0}},emits:["cancel"],setup(s,{emit:B}){const a=s;return(t,o)=>{const n=c("IconBtn");return i(),l("div",f,[p("h5",v,d(a.title),1),e(r),m(t.$slots,"beforeClose"),e(n,{variant:"tonal",class:"rounded",size:"32",onClick:o[0]||(o[0]=S=>t.$emit("cancel"))},{default:_(()=>[e(u,{size:"18",icon:"tabler-x"})]),_:1})])}}};export{x as _};