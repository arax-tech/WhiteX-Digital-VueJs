import{r as u,b as O,i as M,a as Y,c as I,l as $,p as S,d as j,f as x,e as R,u as J}from"./validators-dea6e3a5.js";import{r as s,o as g,f as A,e as o,b as l,z as e,a2 as V,ag as N,E as q,D as U,d as L}from"./index-670bda14.js";import{_ as B}from"./AppTextField-803105de.js";import{V as T,a as i}from"./VRow-44af3a5b.js";import{V as k}from"./VForm-e3bcef70.js";import{_ as z}from"./AppCardCode-6812349c.js";import"./helpers-61e4df1a.js";import"./focus-bfe812d1.js";import"./VTextField-babd124d.js";/* empty css                   */import"./VCounter-40602143.js";import"./VImg-4f1dd734.js";import"./VField-eebd85ff.js";import"./easing-9f15041e.js";import"./VInput-28c68c55.js";import"./form-f40ca62b.js";import"./forwardRefs-8348545e.js";import"./VCard-367227de.js";import"./VAvatar-eedc1aa8.js";import"./VCardText-83b6dd60.js";const G={__name:"DemoFormValidationValidationTypes",setup(P){const C=s(""),h=s(""),F=s(""),d=s(""),m=s(""),c=s(""),b=s(""),n=s(""),p=s(""),v=s(""),f=s(""),y=s(""),E=s();return(r,a)=>{const w=B;return g(),A(k,{ref_key:"refForm",ref:E,onSubmit:a[13]||(a[13]=U(()=>{},["prevent"]))},{default:o(()=>[l(T,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(C),"onUpdate:modelValue":a[0]||(a[0]=t=>V(C)?C.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:["requiredValidator"in r?r.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(h),"onUpdate:modelValue":a[1]||(a[1]=t=>V(h)?h.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:["requiredValidator"in r?r.requiredValidator:e(u),("betweenValidator"in r?r.betweenValidator:e(O))(e(h),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(F),"onUpdate:modelValue":a[2]||(a[2]=t=>V(F)?F.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:["requiredValidator"in r?r.requiredValidator:e(u),"integerValidator"in r?r.integerValidator:e(M)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(d),"onUpdate:modelValue":a[3]||(a[3]=t=>V(d)?d.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:["requiredValidator"in r?r.requiredValidator:e(u),("regexValidator"in r?r.regexValidator:e(Y))(e(d),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(m),"onUpdate:modelValue":a[4]||(a[4]=t=>V(m)?m.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaValidator"in r?r.alphaValidator:e(I)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(c),"onUpdate:modelValue":a[5]||(a[5]=t=>V(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e($))(e(c),3)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(b),"onUpdate:modelValue":a[6]||(a[6]=t=>V(b)?b.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),"passwordValidator"in r?r.passwordValidator:e(S)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(n),"onUpdate:modelValue":a[7]||(a[7]=t=>V(n)?n.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e($))(e(n),3),"integerValidator"in r?r.integerValidator:e(M)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(p),"onUpdate:modelValue":a[8]||(a[8]=t=>V(p)?p.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),("confirmedValidator"in r?r.confirmedValidator:e(j))(e(p),e(b))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(v),"onUpdate:modelValue":a[9]||(a[9]=t=>V(v)?v.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaDashValidator"in r?r.alphaDashValidator:e(x)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(f),"onUpdate:modelValue":a[10]||(a[10]=t=>V(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:["requiredValidator"in r?r.requiredValidator:e(u),"emailValidator"in r?r.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(w,{modelValue:e(y),"onUpdate:modelValue":a[11]||(a[11]=t=>V(y)?y.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:["requiredValidator"in r?r.requiredValidator:e(u),"urlValidator"in r?r.urlValidator:e(J)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:a[12]||(a[12]=t=>{var D;return(D=e(E))==null?void 0:D.validate()})},{default:o(()=>[q(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},H={__name:"DemoFormValidationValidatingMultipleRules",setup(P){const C=s(""),h=s(""),F=s(),d=s(""),m=s(""),c=s(!1),b=s(!1);return(n,p)=>{const v=B;return g(),A(k,{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(T,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(C),"onUpdate:modelValue":p[0]||(p[0]=f=>V(C)?C.value=f:null),placeholder:"Your Name","persistent-placeholder":"",rules:["requiredValidator"in n?n.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(h),"onUpdate:modelValue":p[1]||(p[1]=f=>V(h)?h.value=f:null),placeholder:"Your Email","persistent-placeholder":"",rules:["requiredValidator"in n?n.requiredValidator:e(u),"emailValidator"in n?n.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(d),"onUpdate:modelValue":p[2]||(p[2]=f=>V(d)?d.value=f:null),type:e(c)?"text":"password","append-inner-icon":e(c)?"tabler-eye-off":"tabler-eye",placeholder:"Enter Password",rules:["requiredValidator"in n?n.requiredValidator:e(u),"passwordValidator"in n?n.passwordValidator:e(S)],autocomplete:"on","onClick:appendInner":p[3]||(p[3]=f=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(m),"onUpdate:modelValue":p[4]||(p[4]=f=>V(m)?m.value=f:null),type:e(b)?"text":"password",placeholder:"Confirm Password","persistent-placeholder":"","append-inner-icon":e(m)?"tabler-eye-off":"tabler-eye",rules:["requiredValidator"in n?n.requiredValidator:e(u),("confirmedValidator"in n?n.confirmedValidator:e(j))(e(m),e(d))],autocomplete:"on","onClick:appendInner":p[5]||(p[5]=f=>b.value=!e(b))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:p[6]||(p[6]=f=>{var y;return(y=e(F))==null?void 0:y.validate()})},{default:o(()=>[q(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},K={__name:"DemoFormValidationSimpleFormValidation",setup(P){const C=s(""),h=s(""),F=s();return(d,m)=>{const c=B;return g(),A(k,{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(T,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(c,{"prepend-inner-icon":"tabler-user",placeholder:"Name","persistent-placeholder":"",label:"Name",rules:["requiredValidator"in d?d.requiredValidator:e(u)]},null,8,["rules"]),l(c,{modelValue:e(C),"onUpdate:modelValue":m[0]||(m[0]=b=>V(C)?C.value=b:null),label:"First Name",placeholder:"John",rules:["requiredValidator"in d?d.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:e(h),"onUpdate:modelValue":m[1]||(m[1]=b=>V(h)?h.value=b:null),label:"Email",placeholder:"john@email.com",rules:["requiredValidator"in d?d.requiredValidator:e(u),"emailValidator"in d?d.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:m[2]||(m[2]=b=>{var n;return(n=e(F))==null?void 0:n.validate()})},{default:o(()=>[q(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Q={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},W={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          persistent-placeholder
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          persistent-placeholder
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},X={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Z=L("p",null,[q("Use "),L("code",null,"Rules"),q(" prop to validate the input.")],-1),we={__name:"form-validation",setup(P){return(C,h)=>{const F=K,d=z,m=H,c=G;return g(),A(T,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(d,{title:"Simple Form Validation",code:Q},{default:o(()=>[Z,l(F)]),_:1},8,["code"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(d,{title:"Validating Multiple Rules",code:W},{default:o(()=>[l(m)]),_:1},8,["code"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(d,{title:"Validation Types",code:X},{default:o(()=>[l(c)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{we as default};
