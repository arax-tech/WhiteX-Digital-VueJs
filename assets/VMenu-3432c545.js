import{m as T,V as p,a as y}from"./VOverlay-14a99b98.js";import{f as k}from"./forwardRefs-8348545e.js";import{as as A,aO as S,ao as K,aP as O,aQ as U,t as V,r as I,M as R,aK as F,p as L,w as N,B as g,aF as $,b as w,aR as j,aL as B,aS as P,aT as Q,aU as b}from"./index-c4e71550.js";import{u as q}from"./scopeId-203eb21d.js";import{V as z}from"./dialog-transition-1a37cbb8.js";const G=A({id:String,...S(T({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:z}}),["absolute"])},"VMenu"),_=K()({name:"VMenu",props:G(),emits:{"update:modelValue":r=>!0},setup(r,E){let{slots:i}=E;const l=O(r,"modelValue"),{scopeId:x}=q(),h=U(),d=V(()=>r.id||`v-menu-${h}`),n=I(),a=R(p,null),c=F(0);L(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(l.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,f;const t=e.relatedTarget,o=e.target;await B(),l.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((f=P(n.value.contentEl)[0])==null||f.focus())}N(l,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function C(){a==null||a.closeParents()}function D(e){var t,o,s;r.disabled||e.key==="Tab"&&(Q(P((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",f=>f.tabIndex>=0)||(l.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(r.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&l.value?e.key==="ArrowDown"?(e.preventDefault(),b(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),b(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=V(()=>g({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":d.value,onKeydown:m},r.activatorProps));return $(()=>{const[e]=y.filterProps(r);return w(y,g({ref:n,class:["v-menu",r.class],style:r.style},e,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return w(j,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),k({id:d,ΨopenChildren:c},n)}});export{_ as V};