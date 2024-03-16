import{V as we}from"./focus-ba6d54b4.js";import{m as xe,u as Se,a as _e}from"./VSelect-9628140b.js";import{m as Ie,V as Z}from"./VTextField-47e6f93c.js";import{as as Ae,aO as Fe,ao as Pe,be as Re,r as D,aK as A,aP as K,t as C,b7 as De,b$ as Me,w as U,aL as G,bo as Te,aF as Le,b as o,F as L,B as M,a1 as J,aR as Be,E as $e,cZ as Ee,bB as Q,c4 as X,o as Y,c as Ne,z as T,f as Oe,H as Ke,ac as Ue,C as ze,e as He,v as je,ad as ee,ae as le,I as qe}from"./index-c4e71550.js";import{m as We,u as Ze}from"./filter-c3387b54.js";import{u as Ge}from"./form-d2acef44.js";import{f as Je}from"./forwardRefs-8348545e.js";import{u as Qe,V as Xe,a as te}from"./VList-48b3771d.js";import{m as Ye}from"./VImg-8451f417.js";import{V as el}from"./VMenu-3432c545.js";import{V as ll}from"./VCheckboxBtn-5dd1ee23.js";import{V as tl}from"./VChip-a642ea45.js";function al(l,m,t){if(m==null)return l;if(Array.isArray(m))throw new Error("Multiple matches is not implemented");return typeof m=="number"&&~m?o(L,null,[o("span",{class:"v-autocomplete__unmask"},[l.substr(0,m)]),o("span",{class:"v-autocomplete__mask"},[l.substr(m,t)]),o("span",{class:"v-autocomplete__unmask"},[l.substr(m+t)])]):l}const nl=Ae({autoSelectFirst:{type:[Boolean,String]},search:String,...We({filterKeys:["title"]}),...xe(),...Fe(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ye({transition:!1})},"VAutocomplete"),ul=Pe()({name:"VAutocomplete",props:nl(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,m){let{slots:t}=m;const{t:g}=Re(),d=D(),b=A(!1),V=A(!0),x=A(!1),z=D(),H=D(),B=K(l,"menu"),c=C({get:()=>B.value,set:e=>{var a;B.value&&!e&&((a=z.value)!=null&&a.ΨopenChildren)||(B.value=e)}}),s=A(-1),ae=C(()=>{var e;return(e=d.value)==null?void 0:e.color}),j=C(()=>c.value?l.closeText:l.openText),{items:$,transformIn:ne,transformOut:ue}=Qe(l),{textColorClasses:oe,textColorStyles:se}=De(ae),v=K(l,"search",""),u=K(l,"modelValue",[],e=>ne(e===null?[null]:Me(e)),e=>{const a=ue(e);return l.multiple?a:a[0]??null}),S=Ge(),{filteredItems:E,getMatches:ie}=Ze(l,$,()=>V.value?"":v.value),k=C(()=>l.hideSelected?E.value.filter(e=>!u.value.some(a=>a.value===e.value)):E.value),re=C(()=>u.value.map(e=>e.props.value)),F=C(()=>{var a;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((a=k.value[0])==null?void 0:a.title))&&k.value.length>0&&!V.value&&!x.value}),N=C(()=>l.hideNoData&&!$.value.length||l.readonly||(S==null?void 0:S.isReadonly.value)),O=D(),{onListScroll:ce,onListKeydown:ve}=Se(O,d);function de(e){l.openOnClear&&(c.value=!0),v.value=""}function fe(){N.value||(c.value=!0)}function me(e){N.value||(b.value&&(e.preventDefault(),e.stopPropagation()),c.value=!c.value)}function pe(e){var _,n,f;if(l.readonly||S!=null&&S.isReadonly.value)return;const a=d.value.selectionStart,i=u.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(c.value=!0),["Escape"].includes(e.key)&&(c.value=!1),F.value&&["Enter","Tab"].includes(e.key)&&w(k.value[0]),e.key==="ArrowDown"&&F.value&&((_=O.value)==null||_.focus("next")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(s.value<0){e.key==="Backspace"&&!v.value&&(s.value=i-1);return}const r=s.value,y=u.value[s.value];y&&!y.props.disabled&&w(y),s.value=r>=i-1?i-2:r}if(e.key==="ArrowLeft"){if(s.value<0&&a>0)return;const r=s.value>-1?s.value-1:i-1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange((n=v.value)==null?void 0:n.length,(f=v.value)==null?void 0:f.length))}if(e.key==="ArrowRight"){if(s.value<0)return;const r=s.value+1;u.value[r]?s.value=r:(s.value=-1,d.value.setSelectionRange(0,0))}}}function he(e){v.value=e.target.value}function ge(e){if(Q(d.value,":autofill")||Q(d.value,":-webkit-autofill")){const a=$.value.find(i=>i.title===e.target.value);a&&w(a)}}function Ve(){var e;b.value&&(V.value=!0,(e=d.value)==null||e.focus())}function ye(e){b.value=!0,setTimeout(()=>{x.value=!0})}function be(e){x.value=!1}function ke(e){(e==null||e===""&&!l.multiple)&&(u.value=[])}const I=A(!1);function w(e){if(l.multiple){const a=u.value.findIndex(i=>l.valueComparator(i.value,e.value));if(a===-1)u.value=[...u.value,e];else{const i=[...u.value];i.splice(a,1),u.value=i}}else u.value=[e],I.value=!0,v.value=e.title,c.value=!1,V.value=!0,G(()=>I.value=!1)}return U(b,(e,a)=>{var i;e!==a&&(e?(I.value=!0,v.value=l.multiple?"":String(((i=u.value.at(-1))==null?void 0:i.props.title)??""),V.value=!0,G(()=>I.value=!1)):(!l.multiple&&!v.value?u.value=[]:F.value&&!x.value&&!u.value.some(_=>{let{value:n}=_;return n===k.value[0].value})&&w(k.value[0]),c.value=!1,v.value="",s.value=-1))}),U(v,e=>{!b.value||I.value||(e&&(c.value=!0),V.value=!e)}),U(c,()=>{if(!l.hideSelected&&c.value&&u.value.length){const e=k.value.findIndex(a=>u.value.some(i=>a.value===i.value));Te&&window.requestAnimationFrame(()=>{var a;e>=0&&((a=H.value)==null||a.scrollToIndex(e))})}}),Le(()=>{const e=!!(l.chips||t.chip),a=!!(!l.hideNoData||k.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),i=u.value.length>0,[_]=Z.filterProps(l);return o(Z,M({ref:d},_,{modelValue:v.value,"onUpdate:modelValue":ke,focused:b.value,"onUpdate:focused":n=>b.value=n,validationValue:u.externalValue,counterValue:u.value.length,dirty:i,onInput:he,onChange:ge,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},l.class],style:l.style,readonly:l.readonly,placeholder:i?void 0:l.placeholder,"onClick:clear":de,"onMousedown:control":fe,onKeydown:pe}),{...t,default:()=>o(L,null,[o(el,M({ref:z,modelValue:c.value,"onUpdate:modelValue":n=>c.value=n,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:Ve},l.menuProps),{default:()=>[a&&o(Xe,{ref:O,selected:re.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onKeydown:ve,onFocusin:ye,onFocusout:be,onScrollPassive:ce,tabindex:"-1",color:l.itemColor??l.color},{default:()=>{var n,f,r;return[(n=t["prepend-item"])==null?void 0:n.call(t),!k.value.length&&!l.hideNoData&&(((f=t["no-data"])==null?void 0:f.call(t))??o(te,{title:g(l.noDataText)},null)),o(_e,{ref:H,renderless:!0,items:k.value},{default:y=>{var W;let{item:p,index:h,itemRef:Ce}=y;const q=M(p.props,{ref:Ce,key:h,active:F.value&&h===0?!0:void 0,onClick:()=>w(p)});return((W=t.item)==null?void 0:W.call(t,{item:p,index:h,props:q}))??o(te,q,{prepend:P=>{let{isSelected:R}=P;return o(L,null,[l.multiple&&!l.hideSelected?o(ll,{key:p.value,modelValue:R,ripple:!1,tabindex:"-1"},null):void 0,p.props.prependIcon&&o(J,{icon:p.props.prependIcon},null)])},title:()=>{var P,R;return V.value?p.title:al(p.title,(P=ie(p))==null?void 0:P.title,((R=v.value)==null?void 0:R.length)??0)}})}}),(r=t["append-item"])==null?void 0:r.call(t)]}})]}),u.value.map((n,f)=>{var p;function r(h){h.stopPropagation(),h.preventDefault(),w(n)}const y={"onClick:close":r,onMousedown(h){h.preventDefault(),h.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:n.value,class:["v-autocomplete__selection",f===s.value&&["v-autocomplete__selection--selected",oe.value]],style:f===s.value?se.value:{}},[e?t.chip?o(Be,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:n.title}}},{default:()=>{var h;return[(h=t.chip)==null?void 0:h.call(t,{item:n,index:f,props:y})]}}):o(tl,M({key:"chip",closable:l.closableChips,size:"small",text:n.title,disabled:n.props.disabled},y),null):((p=t.selection)==null?void 0:p.call(t,{item:n,index:f}))??o("span",{class:"v-autocomplete__selection-text"},[n.title,l.multiple&&f<u.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[$e(",")])])])})]),"append-inner":function(){var y;for(var n=arguments.length,f=new Array(n),r=0;r<n;r++)f[r]=arguments[r];return o(L,null,[(y=t["append-inner"])==null?void 0:y.call(t,...f),l.menuIcon?o(J,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:me,onClick:Ee,"aria-label":g(j.value),title:g(j.value)},null):void 0])}})}),Je({isFocused:b,isPristine:V,menu:c,search:v,filteredItems:E,select:w},d)}}),Vl=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(l){const m=C(()=>{const g=X(),d=g.id||g.label;return d?`app-autocomplete-${d}-${Math.random().toString(36).slice(2,7)}`:void 0}),t=C(()=>X().label);return(g,d)=>(Y(),Ne("div",{class:qe(["app-autocomplete flex-grow-1",g.$attrs.class])},[T(t)?(Y(),Oe(we,{key:0,for:T(m),class:"mb-1 text-body-2 text-high-emphasis",text:T(t)},null,8,["for","text"])):Ke("",!0),o(ul,ee(le({...g.$attrs,class:null,label:void 0,id:T(m),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),Ue({_:2},[ze(g.$slots,(b,V)=>({name:V,fn:He(x=>[je(g.$slots,V,ee(le(x||{})))])}))]),1040)],2))}});export{ul as V,Vl as _};
