import{m as Z,u as ee,a as le,V as ae,b as E,g as Y}from"./VSliderTrack-0252b58f.js";import{m as te,V as q}from"./VInput-ff4d0189.js";import{m as se,u as oe,V as ue}from"./focus-47cc4c1d.js";import{as as ne,ao as re,r as V,bF as ie,aP as de,t as G,aF as ce,b as a,F as me,B as pe,o as S,f as R,z as $,a2 as w,e as i,a1 as ve,d,E as v}from"./index-35d4c811.js";import{_ as fe}from"./AppCardCode-a4dc2d55.js";import{V as be,a as k}from"./VRow-d67d386c.js";import"./VImg-9b04c05e.js";import"./form-ff0dacbf.js";import"./VCard-06d56730.js";import"./VAvatar-7759ad5c.js";import"./VCardText-20e2d0ff.js";const Ve=ne({...se(),...te(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),x=re()({name:"VRangeSlider",props:Ve(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=V(),n=V(),g=V(),{rtlClasses:M}=ie();function j(c){if(!l.value||!n.value)return;const f=Y(c,l.value.$el,e.direction),m=Y(c,n.value.$el,e.direction),r=Math.abs(f),p=Math.abs(m);return r<p||r===p&&f<0?l.value.$el:n.value.$el}const C=ee(e),t=de(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(f=>C.roundValue(f)):[0,0]),{activeThumbRef:b,hasLabels:H,max:z,min:I,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:L,trackContainerRef:X}=le({props:e,steps:C,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var r;let{value:f}=c;const m=b.value===((r=l.value)==null?void 0:r.$el)?[f,t.value[1]]:[t.value[0],f];!e.strict&&m[0]<m[1]&&(t.value=m),o("end",t.value)},onSliderMove:c=>{var p,_,y,D;let{value:f}=c;const[m,r]=t.value;!e.strict&&m===r&&m!==I.value&&(b.value=f>m?(p=n.value)==null?void 0:p.$el:(_=l.value)==null?void 0:_.$el,(y=b.value)==null||y.focus()),b.value===((D=l.value)==null?void 0:D.$el)?t.value=[Math.min(f,r),r]:t.value=[m,Math.max(m,f)]},getActiveThumb:j}),{isFocused:U,focus:A,blur:N}=oe(e),O=G(()=>L(t.value[0])),W=G(()=>L(t.value[1]));return ce(()=>{const[c,f]=q.filterProps(e),m=!!(e.label||u.label||u.prepend);return a(q,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||H.value,"v-slider--focused":U.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},M.value,e.class],style:e.style,ref:g},c,{focused:U.value}),{...u,prepend:m?r=>{var p,_;return a(me,null,[((p=u.label)==null?void 0:p.call(u,r))??(e.label?a(ue,{class:"v-slider__label",text:e.label},null):void 0),(_=u.prepend)==null?void 0:_.call(u,r)])}:void 0,default:r=>{var y,D;let{id:p,messagesId:_}=r;return a("div",{class:"v-slider__container",onMousedown:K,onTouchstartPassive:Q},[a("input",{id:`${p.value}_start`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${p.value}_stop`,name:e.name||p.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:X,start:O.value,stop:W.value},{"tick-label":u["tick-label"]}),a(E,{ref:l,"aria-describedby":_.value,focused:U&&b.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":h=>t.value=[h,t.value[1]],onFocus:h=>{var T,F,P,B;A(),b.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===I.value&&h.relatedTarget!==((F=n.value)==null?void 0:F.$el)&&((P=l.value)==null||P.$el.blur(),(B=n.value)==null||B.$el.focus())},onBlur:()=>{N(),b.value=void 0},min:I.value,max:t.value[1],position:O.value},{"thumb-label":u["thumb-label"]}),a(E,{ref:n,"aria-describedby":_.value,focused:U&&b.value===((D=n.value)==null?void 0:D.$el),modelValue:t.value[1],"onUpdate:modelValue":h=>t.value=[t.value[0],h],onFocus:h=>{var T,F,P,B;A(),b.value=(T=n.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===z.value&&h.relatedTarget!==((F=l.value)==null?void 0:F.$el)&&((P=n.value)==null||P.$el.blur(),(B=l.value)==null||B.$el.focus())},onBlur:()=>{N(),b.value=void 0},min:t.value[0],max:z.value,position:W.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),_e={__name:"DemoRangeSliderVertical",setup(e){const s=V([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=V([1,2]);return(l,n)=>(S(),R(x,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=g=>w(o)?o.value=g:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":i(({modelValue:g})=>[a(ve,{icon:u[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}},he={__name:"DemoRangeSliderStep",setup(e){const s=V([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const s=V([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"warning"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const s=V([30,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ke={__name:"DemoRangeSliderBasic",setup(e){const s=V([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="warning"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Pe=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1),Be=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Ce=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Ue=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Me=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Ge={__name:"range-slider",setup(e){return(s,u)=>{const o=ke,l=fe,n=Re,g=Se,M=he,j=ge,C=_e;return S(),R(be,null,{default:i(()=>[a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:$e},{default:i(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Disabled",code:xe},{default:i(()=>[Pe,a(n)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Color",code:we},{default:i(()=>[Be,a(g)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Step",code:ye},{default:i(()=>[Ce,a(M)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Thumb label",code:De},{default:i(()=>[Ue,a(j)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Vertical",code:Te},{default:i(()=>[Me,a(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ge as default};
