import{as as Q,at as C,ar as Z,ax as ee,bV as te,ao as le,bF as ae,bC as ne,bW as se,aK as x,t as h,ca as M,bo as ue,w as oe,aF as ie,b as m,cg as E,a1 as H,aS as ce,bx as re}from"./index-c4e71550.js";function G(n){const s=Math.abs(n);return Math.sign(n)*(s/((1/.501-2)*(1-s)+1))}function $(n){let{selectedElement:f,containerSize:s,contentSize:c,isRtl:S,currentScrollOffset:a,isHorizontal:u}=n;const t=u?f.clientWidth:f.clientHeight,o=u?f.offsetLeft:f.offsetTop,r=S&&u?c-o-t:o,i=s+a,g=t+r,y=t*.4;return r<=a?a=Math.max(r-y,0):i<=g&&(a=Math.min(a-(i-g-y),c-s)),a}function ve(n){let{selectedElement:f,containerSize:s,contentSize:c,isRtl:S,isHorizontal:a}=n;const u=a?f.clientWidth:f.clientHeight,t=a?f.offsetLeft:f.offsetTop,o=S&&a?c-t-u/2-s/2:t+u/2-s/2;return Math.min(c-s,Math.max(0,o))}const fe=Symbol.for("vuetify:v-slide-group"),de=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:fe},nextIcon:{type:C,default:"$next"},prevIcon:{type:C,default:"$prev"},showArrows:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["always","desktop","mobile"].includes(n)},...Z(),...ee(),...te({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),me=le()({name:"VSlideGroup",props:de(),emits:{"update:modelValue":n=>!0},setup(n,f){let{slots:s}=f;const{isRtl:c}=ae(),{mobile:S}=ne(),a=se(n,n.symbol),u=x(!1),t=x(0),o=x(0),r=x(0),i=h(()=>n.direction==="horizontal"),{resizeRef:g,contentRect:y}=M(),{resizeRef:v,contentRect:R}=M(),A=h(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),L=h(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(ue){let e=-1;oe(()=>[a.selected.value,y.value,R.value,i.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(y.value&&R.value){const l=i.value?"width":"height";o.value=y.value[l],r.value=R.value[l],u.value=o.value+1<r.value}if(A.value>=0&&v.value){const l=v.value.children[L.value];A.value===0||!u.value?t.value=0:n.centerActive?t.value=ve({selectedElement:l,containerSize:o.value,contentSize:r.value,isRtl:c.value,isHorizontal:i.value}):u.value&&(t.value=$({selectedElement:l,containerSize:o.value,contentSize:r.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:i.value}))}})})}const z=x(!1);let F=0,I=0;function W(e){const l=i.value?"clientX":"clientY";I=(c.value&&i.value?-1:1)*t.value,F=e.touches[0][l],z.value=!0}function q(e){if(!u.value)return;const l=i.value?"clientX":"clientY",d=c.value&&i.value?-1:1;t.value=d*(I+F-e.touches[0][l])}function B(e){const l=r.value-o.value;t.value<0||!u.value?t.value=0:t.value>=l&&(t.value=l),z.value=!1}function K(){g.value&&(g.value[i.value?"scrollLeft":"scrollTop"]=0)}const w=x(!1);function N(e){if(w.value=!0,!(!u.value||!v.value)){for(const l of e.composedPath())for(const d of v.value.children)if(d===l){t.value=$({selectedElement:d,containerSize:o.value,contentSize:r.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:i.value});return}}}function X(e){w.value=!1}function Y(e){var l;!w.value&&!(e.relatedTarget&&((l=v.value)!=null&&l.contains(e.relatedTarget)))&&p()}function D(e){v.value&&(i.value?e.key==="ArrowRight"?p(c.value?"prev":"next"):e.key==="ArrowLeft"&&p(c.value?"next":"prev"):e.key==="ArrowDown"?p("next"):e.key==="ArrowUp"&&p("prev"),e.key==="Home"?p("first"):e.key==="End"&&p("last"))}function p(e){var l,d,P,V,_;if(v.value)if(!e)(l=ce(v.value)[0])==null||l.focus();else if(e==="next"){const b=(d=v.value.querySelector(":focus"))==null?void 0:d.nextElementSibling;b?b.focus():p("first")}else if(e==="prev"){const b=(P=v.value.querySelector(":focus"))==null?void 0:P.previousElementSibling;b?b.focus():p("last")}else e==="first"?(V=v.value.firstElementChild)==null||V.focus():e==="last"&&((_=v.value.lastElementChild)==null||_.focus())}function k(e){const l=t.value+(e==="prev"?-1:1)*o.value;t.value=re(l,0,r.value-o.value)}const U=h(()=>{let e=t.value>r.value-o.value?-(r.value-o.value)+G(r.value-o.value-t.value):-t.value;t.value<=0&&(e=G(-t.value));const l=c.value&&i.value?-1:1;return{transform:`translate${i.value?"X":"Y"}(${l*e}px)`,transition:z.value?"none":"",willChange:z.value?"transform":""}}),T=h(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),O=h(()=>{switch(n.showArrows){case"always":return!0;case"desktop":return!S.value;case!0:return u.value||Math.abs(t.value)>0;case"mobile":return S.value||u.value||Math.abs(t.value)>0;default:return!S.value&&(u.value||Math.abs(t.value)>0)}}),j=h(()=>Math.abs(t.value)>0),J=h(()=>r.value>Math.abs(t.value)+o.value);return ie(()=>m(n.tag,{class:["v-slide-group",{"v-slide-group--vertical":!i.value,"v-slide-group--has-affixes":O.value,"v-slide-group--is-overflowing":u.value},n.class],style:n.style,tabindex:w.value||a.selected.value.length?-1:0,onFocus:Y},{default:()=>{var e,l,d;return[O.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!j.value}],onClick:()=>k("prev")},[((e=s.prev)==null?void 0:e.call(s,T.value))??m(E,null,{default:()=>[m(H,{icon:c.value?n.nextIcon:n.prevIcon},null)]})]),m("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:K},[m("div",{ref:v,class:"v-slide-group__content",style:U.value,onTouchstartPassive:W,onTouchmovePassive:q,onTouchendPassive:B,onFocusin:N,onFocusout:X,onKeydown:D},[(l=s.default)==null?void 0:l.call(s,T.value)])]),O.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onClick:()=>k("next")},[((d=s.next)==null?void 0:d.call(s,T.value))??m(E,null,{default:()=>[m(H,{icon:c.value?n.prevIcon:n.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:k,scrollOffset:t,focus:p}}});export{me as V,fe as a,de as m};
