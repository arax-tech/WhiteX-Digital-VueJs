import{as as A,ar as T,ao as D,aF as E,b as l,at as p,a_ as I,bh as J,av as K,ay as ee,aA as le,bj as ae,aD as ne,bF as te,t as d,aQ as ie,r as F,bb as se,Y as oe,b7 as re,w as de,bm as ce,ba as ue,aN as ve,bl as fe,bZ as be,x as ge,y as ye,F as me,B as Ce}from"./index-c4e71550.js";import{V as he,m as _e,u as ke,a as pe}from"./focus-ba6d54b4.js";import{n as Ie,a as Fe,s as Ve}from"./easing-9f15041e.js";const Pe=A({floating:Boolean,...T()},"VFieldLabel"),_=D()({name:"VFieldLabel",props:Pe(),setup(e,u){let{slots:i}=u;return E(()=>l(he,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),xe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Be=A({appendInnerIcon:p,bgColor:String,clearable:Boolean,clearIcon:{type:p,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:p,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>xe.includes(e)},"onClick:clear":I(),"onClick:appendInner":I(),"onClick:prependInner":I(),...T(),...J(),...K(),...ee()},"VField"),Le=D()({name:"VField",inheritAttrs:!1,props:{id:String,..._e(),...Be()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:Se,slots:a}=u;const{themeClasses:O}=le(e),{loaderClasses:U}=ae(e),{focusClasses:j,isFocused:V,focus:P,blur:x}=ke(e),{InputIcon:k}=pe(e),{roundedClasses:M}=ne(e),{rtlClasses:N}=te(),f=d(()=>e.dirty||e.active),b=d(()=>!e.singleLine&&!!(e.label||a.label)),W=ie(),s=d(()=>e.id||`input-${W}`),q=d(()=>`${s.value}-messages`),B=F(),g=F(),L=F(),S=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:Q,backgroundColorStyles:X}=se(oe(e,"bgColor")),{textColorClasses:R,textColorStyles:$}=re(d(()=>e.error||e.disabled?void 0:f.value&&V.value?e.color:e.baseColor));de(f,c=>{if(b.value){const t=B.value.$el,o=g.value.$el;requestAnimationFrame(()=>{const r=Ie(t),n=o.getBoundingClientRect(),m=n.x-r.x,C=n.y-r.y-(r.height/2-n.height/2),v=n.width/.75,h=Math.abs(v-r.width)>1?{maxWidth:ve(v)}:void 0,Z=getComputedStyle(t),w=getComputedStyle(o),z=parseFloat(Z.transitionDuration)*1e3||150,G=parseFloat(w.getPropertyValue("--v-field-label-scale")),H=w.getPropertyValue("color");t.style.visibility="visible",o.style.visibility="hidden",Fe(t,{transform:`translate(${m}px, ${C}px) scale(${G})`,color:H,...h},{duration:z,easing:Ve,direction:c?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),o.style.removeProperty("visibility")})})}},{flush:"post"});const y=d(()=>({isActive:f,isFocused:V,controlRef:L,blur:x,focus:P}));function Y(c){c.target!==document.activeElement&&c.preventDefault()}return E(()=>{var m,C,v;const c=e.variant==="outlined",t=a["prepend-inner"]||e.prependInnerIcon,o=!!(e.clearable||a.clear),r=!!(a["append-inner"]||e.appendInnerIcon||o),n=a.label?a.label({...y.value,label:e.label,props:{for:s.value}}):e.label;return l("div",Ce({class:["v-field",{"v-field--active":f.value,"v-field--appended":r,"v-field--center-affix":e.centerAffix??!S.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!n,[`v-field--variant-${e.variant}`]:!0},O.value,Q.value,j.value,U.value,M.value,N.value,e.class],style:[X.value,e.style],onClick:Y},i),[l("div",{class:"v-field__overlay"},null),l(fe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(k,{key:"prepend-icon",name:"prependInner"},null),(m=a["prepend-inner"])==null?void 0:m.call(a,y.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&l(_,{key:"floating-label",ref:g,class:[R.value],floating:!0,for:s.value,style:$.value},{default:()=>[n]}),l(_,{ref:B,for:s.value},{default:()=>[n]}),(C=a.default)==null?void 0:C.call(a,{...y.value,props:{id:s.value,class:"v-field__input","aria-describedby":q.value},focus:P,blur:x})]),o&&l(be,{key:"clear"},{default:()=>[ge(l("div",{class:"v-field__clearable",onMousedown:h=>{h.preventDefault(),h.stopPropagation()}},[a.clear?a.clear():l(k,{name:"clear"},null)]),[[ye,e.dirty]])]}),r&&l("div",{key:"append",class:"v-field__append-inner"},[(v=a["append-inner"])==null?void 0:v.call(a,y.value),e.appendInnerIcon&&l(k,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",R.value],style:$.value},[c&&l(me,null,[l("div",{class:"v-field__outline__start"},null),b.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n]})]),l("div",{class:"v-field__outline__end"},null)]),S.value&&b.value&&l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n]})])])}),{controlRef:L}}});function Ae(e){const u=Object.keys(Le.props).filter(i=>!ce(i)&&i!=="class"&&i!=="style");return ue(e,u)}export{Le as V,Ae as f,Be as m};
