/* empty css                   */import{V as H}from"./VCounter-dcd2da2a.js";import{m as J,f as K,V as Q}from"./VField-4ee07b6e.js";import{m as W,V as I}from"./VInput-ff4d0189.js";import{u as X}from"./focus-47cc4c1d.js";import{f as Y}from"./forwardRefs-8348545e.js";import{as as Z,ao as $,aP as ee,t as v,r as x,aF as te,bS as ne,b as n,B as V,x as le,aM as ae,F as y,bT as ue,aL as _,bU as ie}from"./index-35d4c811.js";import{I as oe}from"./VImg-9b04c05e.js";const re=["color","file","time","date","datetime-local","week","month"],se=Z({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...W(),...J()},"VTextField"),Ce=$()({name:"VTextField",directives:{Intersect:oe},inheritAttrs:!1,props:se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,S){let{attrs:m,emit:g,slots:l}=S;const i=ee(e,"modelValue"),{isFocused:r,focus:p,blur:w}=X(e),T=v(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:(i.value??"").toString().length),A=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=v(()=>["plain","underlined"].includes(e.variant));function D(t,a){var u,o;!e.autofocus||!t||(o=(u=a[0].target)==null?void 0:u.focus)==null||o.call(u)}const C=x(),F=x(),s=x(),M=v(()=>re.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||p()}function R(t){g("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),g("click:control",t)}function E(t){t.stopPropagation(),d(),_(()=>{i.value=null,ie(e["onClick:clear"],t)})}function U(t){var u;const a=t.target;if(i.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const o=[a.selectionStart,a.selectionEnd];_(()=>{a.selectionStart=o[0],a.selectionEnd=o[1]})}}return te(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,o]=ne(m),[{modelValue:ce,...O}]=I.filterProps(e),[j]=K(e);return n(I,V({ref:C,modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},u,O,{centerAffix:!B.value,focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:P,isDirty:h,isReadonly:z,isValid:L}=c;return n(Q,V({ref:F,onMousedown:R,onClick:N,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},j,{id:f.value,active:M.value||h.value,dirty:h.value||e.dirty,disabled:P.value,focused:r.value,error:L.value===!1}),{...l,default:q=>{let{props:{class:k,...G}}=q;const b=le(n("input",V({ref:s,value:i.value,onInput:U,autofocus:e.autofocus,readonly:z.value,disabled:P.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:w},G,o),null),[[ae("intersect"),{handler:D},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:k,"data-no-activator":""},[l.default(),b]):ue(b,{class:k}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(H,{active:e.persistentCounter||r.value,value:T.value,max:A.value},l.counter)])])}:void 0})}),Y({},C,F,s)}});export{Ce as V,se as m};