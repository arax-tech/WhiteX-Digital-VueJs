import{m as b,a as d}from"./VOverlay-14a99b98.js";import{f as y}from"./forwardRefs-8348545e.js";import{as as D,ao as S,aP as h,r as w,bo as x,w as m,aL as B,t as F,B as v,aF as R,b as g,aR as I,aS as T}from"./index-c4e71550.js";import{u as L}from"./scopeId-203eb21d.js";import{V as O}from"./dialog-transition-1a37cbb8.js";const A=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...b({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},"VDialog"),U=S()({name:"VDialog",props:A(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:V}=L(),o=w();function u(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const i=T(o.value.contentEl);if(!i.length)return;const f=i[0],P=i[i.length-1];e===f?P.focus():f.focus()}}x&&m(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),m(n,async l=>{var e,t;await B(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const E=F(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return R(()=>{const[l]=d.filterProps(a);return g(d,v({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(I,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),y({},o)}});export{U as V};
