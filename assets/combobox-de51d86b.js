import{_ as h,V as _}from"./AppCombobox-eabe1f59.js";import{r as u,o as b,f as V,z as n,a2 as r,w as x,aL as v,e as m,b as l,E as i,d as a,G as P}from"./index-35d4c811.js";import{a as D,b as I}from"./VList-56d7996c.js";import{a as d,V as C}from"./VRow-d67d386c.js";import{_ as L}from"./AppCardCode-a4dc2d55.js";import"./focus-47cc4c1d.js";import"./VSelect-bf5a5be9.js";import"./VTextField-9bfa6dc1.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VImg-9b04c05e.js";import"./VField-4ee07b6e.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-5411c7b8.js";import"./VMenu-d6c3699e.js";import"./VOverlay-ec7a9eab.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./VCheckboxBtn-d7c7ca98.js";import"./VSelectionControl-4d8986cc.js";import"./VChip-5a7d2631.js";import"./VAvatar-7759ad5c.js";import"./filter-85676bf0.js";import"./ssrBoot-c2946fb8.js";import"./VDivider-4423ace3.js";import"./VCard-06d56730.js";import"./VCardText-20e2d0ff.js";const w={__name:"DemoComboboxClearable",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(p,t)=>{const o=h;return b(),V(o,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=c=>r(e)?e.value=c:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},A=a("kbd",null,"enter",-1),U={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],s=u(["Vuetify"]),p=u(null);return x(s,t=>{t.length>5&&v(()=>s.value.pop())}),(t,o)=>{const c=h;return b(),V(c,{modelValue:n(s),"onUpdate:modelValue":o[0]||(o[0]=f=>r(s)?s.value=f:null),"search-input":n(p),"onUpdate:searchInput":o[1]||(o[1]=f=>r(p)?p.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":m(()=>[l(D,null,{default:m(()=>[l(I,null,{default:m(()=>[i(' No results matching "'),a("strong",null,P(n(p)),1),i('". Press '),A,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},k={__name:"DemoComboboxVariant",setup(g){const e=u(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(p,t)=>(b(),V(C,null,{default:m(()=>[l(d,{cols:"12"},{default:m(()=>[l(_,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=o=>r(e)?e.value=o:null),items:s,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(d,{cols:"12"},{default:m(()=>[l(_,{modelValue:n(e),"onUpdate:modelValue":t[1]||(t[1]=o=>r(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(d,{cols:"12"},{default:m(()=>[l(_,{modelValue:n(e),"onUpdate:modelValue":t[2]||(t[2]=o=>r(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(d,{cols:"12"},{default:m(()=>[l(_,{modelValue:n(e),"onUpdate:modelValue":t[3]||(t[3]=o=>r(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(d,{cols:"12"},{default:m(()=>[l(_,{modelValue:n(e),"onUpdate:modelValue":t[4]||(t[4]=o=>r(e)?e.value=o:null),multiple:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},N={__name:"DemoComboboxDensity",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(p,t)=>{const o=h;return b(),V(o,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=c=>r(e)?e.value=c:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},T={__name:"DemoComboboxBasic",setup(g){const e=u("Programming"),s=["Programming","Design","Vue","Vuetify"];return(p,t)=>{const o=h;return b(),V(o,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=c=>r(e)?e.value=c:null),items:s,placeholder:"deployment"},null,8,["modelValue"])}}},$={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},R={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},j={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},G={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},W=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),F=a("p",null,[i(" You can use "),a("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(". ")],-1),M=a("p",null,[i("Use "),a("code",null,"solo"),i(", "),a("code",null,"outlined"),i(", "),a("code",null,"underlined"),i(", "),a("code",null,"filled"),i(" and "),a("code",null,"plain"),i(" options of "),a("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),O=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),z=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to clear combobox.")],-1),Ce={__name:"combobox",setup(g){return(e,s)=>{const p=T,t=L,o=N,c=k,f=U,y=w;return b(),V(C,{class:"match-height"},{default:m(()=>[l(d,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Basic",code:$},{default:m(()=>[W,l(p)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Density",code:R},{default:m(()=>[F,l(o)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Variant",code:G},{default:m(()=>[M,l(c)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"No data with chips",code:j},{default:m(()=>[O,l(f)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Clearable",code:B},{default:m(()=>[z,l(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ce as default};
