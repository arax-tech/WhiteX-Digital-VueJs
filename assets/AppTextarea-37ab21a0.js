import{u as ne,V as le}from"./focus-ba6d54b4.js";import{as as oe,ao as re,aP as se,t as x,r as h,aK as ie,by as ue,s as ce,w as V,aW as de,aF as fe,bS as ve,b as l,B as _,F as B,x as $,aM as me,cc as xe,aL as A,bU as ge,aN as he,bx as Ve,c4 as E,o as G,c as we,z as P,f as ye,H as Ce,ac as be,C as Fe,e as Pe,v as ke,ad as U,ae as D,I as pe}from"./index-c4e71550.js";/* empty css                   */import{V as Ie}from"./VCounter-856e1893.js";import{m as Se,f as Re,V as _e}from"./VField-0f4003e5.js";import{m as Be,V as O}from"./VInput-6532c874.js";import{f as Ae}from"./forwardRefs-8348545e.js";import{I as Me}from"./VImg-8451f417.js";const Te=oe({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Be(),...Se()},"VTextarea"),ze=re()({name:"VTextarea",directives:{Intersect:Me},inheritAttrs:!1,props:Te(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:f,emit:s,slots:n}=w;const o=se(e,"modelValue"),{isFocused:u,focus:k,blur:L}=ne(e),j=x(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),K=x(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function W(t,r){var a,i;!e.autofocus||!t||(i=(a=r[0].target)==null?void 0:a.focus)==null||i.call(a)}const M=h(),y=h(),T=ie(""),C=h(),q=x(()=>e.persistentPlaceholder||u.value||e.active);function p(){var t;C.value!==document.activeElement&&((t=C.value)==null||t.focus()),u.value||k()}function J(t){p(),s("click:control",t)}function Q(t){s("mousedown:control",t)}function X(t){t.stopPropagation(),p(),A(()=>{o.value="",ge(e["onClick:clear"],t)})}function Y(t){var a;const r=t.target;if(o.value=r.value,(a=e.modelModifiers)!=null&&a.trim){const i=[r.selectionStart,r.selectionEnd];A(()=>{r.selectionStart=i[0],r.selectionEnd=i[1]})}}const v=h(),b=h(+e.rows),I=x(()=>["plain","underlined"].includes(e.variant));ue(()=>{e.autoGrow||(b.value=+e.rows)});function m(){e.autoGrow&&A(()=>{if(!v.value||!y.value)return;const t=getComputedStyle(v.value),r=getComputedStyle(y.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=v.value.scrollHeight,F=parseFloat(t.lineHeight),S=Math.max(parseFloat(e.rows)*F+a,parseFloat(r.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*F+a||1/0,d=Ve(i??0,S,R);b.value=Math.floor((d-a)/F),T.value=he(d)})}ce(m),V(o,m),V(()=>e.rows,m),V(()=>e.maxRows,m),V(()=>e.density,m);let c;return V(v,t=>{t?(c=new ResizeObserver(m),c.observe(v.value)):c==null||c.disconnect()}),de(()=>{c==null||c.disconnect()}),fe(()=>{const t=!!(n.counter||e.counter||e.counterValue),r=!!(t||n.details),[a,i]=ve(f),[{modelValue:F,...S}]=O.filterProps(e),[R]=Re(e);return l(O,_({ref:M,modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":I.value},e.class],style:e.style},a,S,{centerAffix:b.value===1&&!I.value,focused:u.value}),{...n,default:d=>{let{isDisabled:g,isDirty:z,isReadonly:Z,isValid:ee}=d;return l(_e,_({ref:y,style:{"--v-textarea-control-height":T.value},onClick:J,onMousedown:Q,"onClick:clear":X,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{active:q.value||z.value,centerAffix:b.value===1&&!I.value,dirty:z.value||e.dirty,disabled:g.value,focused:u.value,error:ee.value===!1}),{...n,default:te=>{let{props:{class:N,...H}}=te;return l(B,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),$(l("textarea",_({ref:C,class:N,value:o.value,onInput:Y,autofocus:e.autofocus,readonly:Z.value,disabled:g.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:p,onBlur:L},H,i),null),[[me("intersect"),{handler:W},null,{once:!0}]]),e.autoGrow&&$(l("textarea",{class:[N,"v-textarea__sizer"],id:`${H.id}-sizer`,"onUpdate:modelValue":ae=>o.value=ae,ref:v,readonly:!0,"aria-hidden":"true"},null),[[xe,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?d=>{var g;return l(B,null,[(g=n.details)==null?void 0:g.call(n,d),t&&l(B,null,[l("span",null,null),l(Ie,{active:e.persistentCounter||u.value,value:j.value,max:K.value},n.counter)])])}:void 0})}),Ae({},M,y,C)}}),Le=Object.assign({name:"AppTextarea",inheritAttrs:!1},{__name:"AppTextarea",setup(e){const w=x(()=>{const s=E(),n=s.id||s.label;return n?`app-textarea-${n}-${Math.random().toString(36).slice(2,7)}`:void 0}),f=x(()=>E().label);return(s,n)=>(G(),we("div",{class:pe(["app-textarea flex-grow-1",s.$attrs.class])},[P(f)?(G(),ye(le,{key:0,for:P(w),class:"mb-1 text-body-2 text-high-emphasis",text:P(f)},null,8,["for","text"])):Ce("",!0),l(ze,U(D({...s.$attrs,class:null,label:void 0,variant:"outlined",id:P(w)})),be({_:2},[Fe(s.$slots,(o,u)=>({name:u,fn:Pe(k=>[ke(s.$slots,u,U(D(k||{})))])}))]),1040)],2))}});export{ze as V,Le as _};
