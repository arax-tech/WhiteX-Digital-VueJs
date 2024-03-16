import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{a as p,V as I}from"./VRow-44af3a5b.js";import{V as _}from"./focus-bfe812d1.js";import{V as w}from"./VCheckbox-a019a117.js";import{o as a,f as u,e as n,c as C,F as R,C as W,B as f,b as c,I as $,d as m,v,E as V,G as g,H as b,r as h,z as k,a2 as x,a1 as D}from"./index-670bda14.js";import{a as U,V as j}from"./VRadioGroup-604485b5.js";import{_ as B}from"./CustomRadiosWithIcon-9585f9f3.js";import{V as G}from"./VSpacer-5e937b1c.js";import{_ as q}from"./AppCardCode-6812349c.js";import{_ as F}from"./CustomRadios-c728c716.js";import"./VCheckboxBtn-770097af.js";import"./VSelectionControl-798a6484.js";import"./VInput-28c68c55.js";import"./VImg-4f1dd734.js";import"./form-f40ca62b.js";import"./VAvatar-eedc1aa8.js";import"./VCard-367227de.js";import"./VCardText-83b6dd60.js";const A=["src"],E={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:l}){const e=i,d=l,s=o=>{typeof o!="boolean"&&d("update:selectedCheckbox",o)};return(o,r)=>e.checkboxContent&&e.selectedCheckbox?(a(),u(I,{key:0},{default:n(()=>[(a(!0),C(R,null,W(e.checkboxContent,t=>(a(),u(p,f({key:t.value},i.gridColumn),{default:n(()=>[c(_,{class:$(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(t.value)?"active":""])},{default:n(()=>[m("div",null,[c(w,{id:`custom-checkbox-with-img-${t.value}`,"model-value":e.selectedCheckbox,value:t.value,"onUpdate:modelValue":s},null,8,["id","model-value","value"])]),m("img",{src:t.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,A)]),_:2},1032,["class"]),t.label||o.$slots.label?(a(),u(_,{key:0,for:`custom-checkbox-with-img-${t.value}`,class:"cursor-pointer"},{default:n(()=>[v(o.$slots,"label",{label:t.label},()=>[V(g(t.label),1)],!0)]),_:2},1032,["for"])):b("",!0)]),_:2},1040))),128))]),_:3})):b("",!0)}},P=y(E,[["__scopeId","data-v-4fc072ba"]]),T="/assets/custom-checkbox-img-1-ad01355a.png",L="/assets/custom-checkbox-img-2-2d35a86b.png",N="/assets/custom-checkbox-img-3-1a4526bb.png",O={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(i){const l=[{bgImage:T,value:"basic"},{bgImage:L,value:"premium"},{bgImage:N,value:"enterprise"}],e=h(["basic"]);return(d,s)=>{const o=P;return a(),u(o,{"selected-checkbox":k(e),"onUpdate:selectedCheckbox":s[0]||(s[0]=r=>x(e)?e.value=r:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const J=["src"],H={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(i,{emit:l}){const e=i,d=l,s=o=>{d("update:selectedRadio",o)};return(o,r)=>e.radioContent?(a(),u(j,{key:0,"model-value":e.selectedRadio,"onUpdate:modelValue":s},{default:n(()=>[c(I,null,{default:n(()=>[(a(!0),C(R,null,W(e.radioContent,t=>(a(),u(p,f({key:t.bgImage},i.gridColumn),{default:n(()=>[c(_,{class:$(["custom-input custom-radio rounded cursor-pointer w-100",e.selectedRadio===t.value?"active":""])},{default:n(()=>[v(o.$slots,"content",{item:t},()=>[t.bgImage?(a(),C("img",{key:0,src:t.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,J)):b("",!0)],!0),c(U,{id:`custom-radio-with-img-${t.value}`,value:t.value},null,8,["id","value"])]),_:2},1032,["class"]),t.label||o.$slots.label?(a(),u(_,{key:0,for:`custom-radio-with-img-${t.value}`,class:"cursor-pointer"},{default:n(()=>[v(o.$slots,"label",{label:t.label},()=>[V(g(t.label),1)],!0)]),_:2},1032,["for"])):b("",!0)]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):b("",!0)}},K=y(H,[["__scopeId","data-v-62785ce1"]]),M="/assets/custom-radio-img-1-9fd6addb.png",Q="/assets/custom-radio-img-2-81c76549.png",X="/assets/custom-radio-img-3-9150de6f.png",Y={__name:"DemoCustomInputCustomRadiosWithImage",setup(i){const l=[{bgImage:M,value:"basic"},{bgImage:Q,value:"premium"},{bgImage:X,value:"enterprise"}],e=h("basic");return(d,s)=>{const o=K;return a(),u(o,{"selected-radio":k(e),"onUpdate:selectedRadio":s[0]||(s[0]=r=>x(e)?e.value=r:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const Z={class:"d-flex flex-column align-center text-center gap-2"},ee={class:"cr-title text-base"},te={class:"text-sm clamp-text mb-0"},oe={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:l}){const e=i,d=l,s=o=>{typeof o!="boolean"&&d("update:selectedCheckbox",o)};return(o,r)=>e.checkboxContent&&e.selectedCheckbox?(a(),u(I,{key:0},{default:n(()=>[(a(!0),C(R,null,W(e.checkboxContent,t=>(a(),u(p,f({key:t.title},i.gridColumn),{default:n(()=>[c(_,{class:$(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(t.value)?"active":""])},{default:n(()=>[v(o.$slots,"default",{item:t},()=>[m("div",Z,[c(D,f(t.icon,{class:"text-high-emphasis"}),null,16),m("h6",ee,g(t.title),1),m("p",te,g(t.desc),1)])],!0),m("div",null,[c(w,{"model-value":e.selectedCheckbox,value:t.value,"onUpdate:modelValue":s},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):b("",!0)}},se=y(oe,[["__scopeId","data-v-0cda6519"]]),ce={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(i){const l=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],e=h(["backup"]);return(d,s)=>{const o=se;return a(),u(o,{"selected-checkbox":k(e),"onUpdate:selectedCheckbox":s[0]||(s[0]=r=>x(e)?e.value=r:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},ne={__name:"DemoCustomInputCustomRadiosWithIcon",setup(i){const l=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],e=h("starter");return(d,s)=>{const o=B;return a(),u(o,{"selected-radio":k(e),"onUpdate:selectedRadio":s[0]||(s[0]=r=>x(e)?e.value=r:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const ae={class:"flex-grow-1"},le={class:"d-flex align-center mb-1"},ie={class:"cr-title text-base"},re={key:0,class:"text-disabled text-base"},ue={class:"text-sm mb-0"},de={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:l}){const e=i,d=l,s=o=>{typeof o!="boolean"&&d("update:selectedCheckbox",o)};return(o,r)=>e.checkboxContent&&e.selectedCheckbox?(a(),u(I,{key:0},{default:n(()=>[(a(!0),C(R,null,W(e.checkboxContent,t=>(a(),u(p,f({key:t.title},i.gridColumn),{default:n(()=>[c(_,{class:$(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(t.value)?"active":""])},{default:n(()=>[m("div",null,[c(w,{"model-value":e.selectedCheckbox,value:t.value,"onUpdate:modelValue":s},null,8,["model-value","value"])]),v(o.$slots,"default",{item:t},()=>[m("div",ae,[m("div",le,[m("h6",ie,g(t.title),1),c(G),t.subtitle?(a(),C("span",re,g(t.subtitle),1)):b("",!0)]),m("p",ue,g(t.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):b("",!0)}},me=y(de,[["__scopeId","data-v-6eb5735e"]]),pe={__name:"DemoCustomInputCustomCheckboxes",setup(i){const l=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=h(["discount"]);return(d,s)=>{const o=me;return a(),u(o,{"selected-checkbox":k(e),"onUpdate:selectedCheckbox":s[0]||(s[0]=r=>x(e)?e.value=r:null),"checkbox-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},be={__name:"DemoCustomInputCustomRadios",setup(i){const l=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=h("basic");return(d,s)=>{const o=F;return a(),u(o,{"selected-radio":k(e),"onUpdate:selectedRadio":s[0]||(s[0]=r=>x(e)?e.value=r:null),"radio-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},ge={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},_e={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},xe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ae={__name:"custom-input",setup(i){return(l,e)=>{const d=be,s=q,o=pe,r=ne,t=ce,z=Y,S=O;return a(),u(I,null,{default:n(()=>[c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Radios",code:he},{default:n(()=>[c(d)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Checkboxes",code:ge},{default:n(()=>[c(o)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Radios With Icon",code:ke},{default:n(()=>[c(r)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Checkboxes With Icon",code:_e},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Radios With Image",code:xe},{default:n(()=>[c(z)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(s,{title:"Custom Checkboxes With Image",code:Ce},{default:n(()=>[c(S)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ae as default};
