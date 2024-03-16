import{_ as b}from"./AppSelect-676dfa2f.js";import{r as h,o as m,f as d,z as _,a2 as z,e as l,b as e,d as a,E as s}from"./index-35d4c811.js";import{a as c,V}from"./VRow-d67d386c.js";import{V as f}from"./VSelect-bf5a5be9.js";import{_ as g}from"./AppCardCode-a4dc2d55.js";import"./focus-47cc4c1d.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VImg-9b04c05e.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./VList-56d7996c.js";import"./ssrBoot-c2946fb8.js";import"./VAvatar-7759ad5c.js";import"./VDivider-4423ace3.js";import"./dialog-transition-5411c7b8.js";import"./VMenu-d6c3699e.js";import"./VOverlay-ec7a9eab.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./VCheckboxBtn-d7c7ca98.js";import"./VSelectionControl-4d8986cc.js";import"./VChip-5a7d2631.js";import"./VCard-06d56730.js";import"./VCardText-20e2d0ff.js";const D={__name:"DemoSelectMultiple",setup(u){const t=h(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(r,o)=>{const n=b;return m(),d(n,{modelValue:_(t),"onUpdate:modelValue":o[0]||(o[0]=p=>z(t)?t.value=p:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}},I={__name:"DemoSelectMenuProps",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,r)=>{const o=b;return m(),d(o,{items:t,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}},B={__name:"DemoSelectChips",setup(u){const t=["foo","bar","fizz","buzz"],i=h(["foo","bar","fizz","buzz"]);return(r,o)=>{const n=b;return m(),d(n,{modelValue:_(i),"onUpdate:modelValue":o[0]||(o[0]=p=>z(i)?i.value=p:null),items:t,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}},O={__name:"DemoSelectIcons",setup(u){const t=h("Florida"),i=h("Texas"),r=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(o,n)=>{const p=b;return m(),d(V,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:_(t),"onUpdate:modelValue":n[0]||(n[0]=S=>z(t)?t.value=S:null),items:r,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(p,{modelValue:_(i),"onUpdate:modelValue":n[1]||(n[1]=S=>z(i)?i.value=S:null),items:r,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}},w={__name:"DemoSelectCustomTextAndValue",setup(u){const t=h({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(r,o)=>{const n=b;return m(),d(n,{modelValue:_(t),"onUpdate:modelValue":o[0]||(o[0]=p=>z(t)?t.value=p:null),hint:`${_(t).state}, ${_(t).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}},x={__name:"DemoSelectVariant",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,r)=>(m(),d(V,null,{default:l(()=>[e(c,{cols:"12",sm:"6"},{default:l(()=>[e(f,{items:t,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(f,{items:t,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(f,{items:t,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(f,{items:t,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(f,{items:t,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}},k={__name:"DemoSelectDensity",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,r)=>{const o=b;return m(),d(o,{items:t,label:"Density",density:"compact",placeholder:"Select Item"})}}},y={__name:"DemoSelectBasic",setup(u){const t=["Foo","Bar","Fizz","Buzz"];return(i,r)=>{const o=b;return m(),d(o,{items:t,label:"Standard",placeholder:"Select Item"})}}},G={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},$={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},N={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},j={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},M={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},U={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},R={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},L={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},P=a("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),Y=a("p",null,[s("You can use "),a("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),T=a("p",null,[s(" Use "),a("code",null,"filled"),s(", "),a("code",null,"outlined"),s(", "),a("code",null,"solo"),s(", "),a("code",null,"underlined"),s(" and "),a("code",null,"plain"),s(" options of "),a("code",null,"variant"),s(" prop to change appearance of select. ")],-1),E=a("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),H=a("p",null,[s("Use a custom "),a("code",null,"prepend"),s(" or "),a("code",null,"appended"),s(" icon.")],-1),q=a("p",null,[s("Use "),a("code",null,"chips"),s(" prop to make selected option as chip.")],-1),J=a("p",null,[s("Custom props can be passed directly to "),a("code",null,"v-menu"),s(" using "),a("code",null,"menuProps"),s(" prop.")],-1),K=a("p",null,[s("Use "),a("code",null,"multiple"),s(" prop to select multiple option.")],-1),ge={__name:"select",setup(u){return(t,i)=>{const r=y,o=g,n=k,p=x,S=w,C=O,A=B,F=I,v=D;return m(),d(V,null,{default:l(()=>[e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Basic",code:G},{default:l(()=>[P,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Density",code:j},{default:l(()=>[Y,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(o,{title:"Variant",code:L},{default:l(()=>[T,e(p)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Custom text and value",code:N},{default:l(()=>[E,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Icons",code:M},{default:l(()=>[H,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Chips",code:$},{default:l(()=>[q,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Menu Props",code:U},{default:l(()=>[J,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Multiple",code:R},{default:l(()=>[K,e(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ge as default};
