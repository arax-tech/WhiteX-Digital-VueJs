import{d4 as A,r as m,w as y,a as C,o as V,f as R,e as a,b as s,z as o,a2 as K,da as S,d as r,a1 as _,x as g,c as L,F,C as z,v as d,E as U,G as b,y as v,J as N,K as E}from"./index-35d4c811.js";import{P}from"./vue3-perfect-scrollbar.esm-4ffbcf84.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{V as j}from"./VCard-06d56730.js";import{V as D}from"./VCardText-20e2d0ff.js";import{V as q}from"./VTextField-9bfa6dc1.js";import{V as M}from"./VDivider-4423ace3.js";import{V as G,a as J}from"./VList-56d7996c.js";import{V as O}from"./VDialog-b2a36fbc.js";import"./VAvatar-7759ad5c.js";import"./VImg-9b04c05e.js";/* empty css                   */import"./VCounter-dcd2da2a.js";import"./VField-4ee07b6e.js";import"./focus-47cc4c1d.js";import"./easing-9f15041e.js";import"./VInput-ff4d0189.js";import"./form-ff0dacbf.js";import"./forwardRefs-8348545e.js";import"./ssrBoot-c2946fb8.js";import"./VOverlay-ec7a9eab.js";import"./lazy-4836c696.js";import"./scopeId-d5f41359.js";import"./dialog-transition-5411c7b8.js";const Q=p=>(N("data-v-a6198595"),p=p(),E(),p),X={class:"d-flex align-center text-high-emphasis me-1"},H={class:"d-flex align-start"},W={class:"h-100"},Y={class:"h-100"},Z={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ee={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},se=Q(()=>r("span",null,"No Result For ",-1)),te={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0}},emits:["update:isDialogVisible","search"],setup(p,{emit:w}){const l=p,f=w,{ctrl_k:x,meta_k:k}=A({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),h=m(),B=m(),t=m("");y([x,k],()=>{f("update:isDialogVisible",!0)});const c=()=>{t.value="",f("update:isDialogVisible",!1)},I=e=>{var i,u;e.key==="ArrowDown"?(e.preventDefault(),(i=h.value)==null||i.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(u=h.value)==null||u.focus("prev"))},$=e=>{t.value="",f("update:isDialogVisible",e)};return y(()=>l.isDialogVisible,()=>{t.value=""}),(e,i)=>{const u=C("IconBtn");return V(),R(O,{"max-width":"600","model-value":l.isDialogVisible,height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":$,onKeyup:S(c,["esc"])},{default:a(()=>[s(j,{height:"100%",width:"100%",class:"position-relative"},{default:a(()=>[s(D,{class:"pt-2"},{default:a(()=>[s(q,{ref_key:"refSearchInput",ref:B,modelValue:o(t),"onUpdate:modelValue":[i[0]||(i[0]=n=>K(t)?t.value=n:null),i[1]||(i[1]=n=>e.$emit("search",o(t)))],autofocus:"",density:"comfortable",variant:"plain",onKeyup:S(c,["esc"]),onKeydown:I},{"prepend-inner":a(()=>[r("div",X,[s(_,{size:"22",icon:"tabler-search",style:{opacity:"1"}})])]),"append-inner":a(()=>[r("div",H,[r("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:c}," [esc] "),s(u,{size:"22",onClick:c},{default:a(()=>[s(_,{icon:"tabler-x",size:"20"})]),_:1})])]),_:1},8,["modelValue"])]),_:1}),s(M),s(o(P),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:a(()=>[g(s(o(G),{ref_key:"refSearchList",ref:h,density:"compact",class:"app-bar-search-list"},{default:a(()=>[(V(!0),L(F,null,z(l.searchResults,n=>d(e.$slots,"searchResult",{key:n,item:n},()=>[s(o(J),null,{default:a(()=>[U(b(n),1)]),_:2},1024)],!0)),128))]),_:3},512),[[v,o(t).length&&!!l.searchResults.length]]),g(r("div",W,[d(e.$slots,"suggestions",{},void 0,!0)],512),[[v,!!l.searchResults&&!o(t)&&e.$slots.suggestions]]),g(r("div",Y,[d(e.$slots,"noData",{},()=>[s(D,{class:"h-100"},{default:a(()=>[r("div",Z,[s(_,{size:"75",icon:"tabler-file-x"}),r("div",ee,[se,r("span",null,'"'+b(o(t))+'"',1)]),d(e.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[v,!l.searchResults.length&&o(t).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"])}}},Be=T(te,[["__scopeId","data-v-a6198595"]]);export{Be as default};