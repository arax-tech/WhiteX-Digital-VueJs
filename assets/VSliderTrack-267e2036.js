import{as as W,av as fe,b0 as he,t as l,cY as Q,bF as le,Y as S,aK as Z,r as ee,c7 as ke,p as ye,bx as se,ar as re,ao as ne,b2 as pe,M as oe,b7 as Se,aF as ie,aN as R,b5 as ge,b as d,x as te,aM as we,cr as Ce,y as Ve,cq as _e,aD as Te,bb as ae}from"./index-c4e71550.js";const G=Symbol.for("vuetify:v-slider");function xe(e,t,n){const i=n==="vertical",u=t.getBoundingClientRect(),v="touches"in e?e.touches[0]:e;return i?v.clientY-(u.top+u.height/2):v.clientX-(u.left+u.width/2)}function Fe(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Ne=W({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...fe(),...he({elevation:2})},"Slider"),Re=e=>{const t=l(()=>parseFloat(e.min)),n=l(()=>parseFloat(e.max)),i=l(()=>+e.step>0?parseFloat(e.step):0),u=l(()=>Math.max(Q(i.value),Q(t.value)));function v(h){if(h=parseFloat(h),i.value<=0)return h;const g=se(h,t.value,n.value),f=t.value%i.value,w=Math.round((g-f)/i.value)*i.value+f;return parseFloat(Math.min(w,n.value).toFixed(u.value))}return{min:t,max:n,step:i,decimals:u,roundValue:v}},Le=e=>{let{props:t,steps:n,onSliderStart:i,onSliderMove:u,onSliderEnd:v,getActiveThumb:h}=e;const{isRtl:g}=le(),f=S(t,"reverse"),w=l(()=>t.direction==="vertical"),_=l(()=>w.value!==f.value),{min:m,max:k,step:T,decimals:L,roundValue:M}=n,O=l(()=>parseInt(t.thumbSize,10)),$=l(()=>parseInt(t.tickSize,10)),j=l(()=>parseInt(t.trackSize,10)),x=l(()=>(k.value-m.value)/T.value),P=S(t,"disabled"),F=l(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),B=l(()=>t.error||t.disabled?void 0:t.trackColor??t.color),D=l(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),z=Z(!1),y=Z(0),C=ee(),b=ee();function s(a){var J;const r=t.direction==="vertical",ue=r?"top":"left",ce=r?"height":"width",de=r?"clientY":"clientX",{[ue]:ve,[ce]:me}=(J=C.value)==null?void 0:J.$el.getBoundingClientRect(),be=Fe(a,de);let X=Math.min(Math.max((be-ve-y.value)/me,0),1)||0;return(r?_.value:_.value!==g.value)&&(X=1-X),M(m.value+X*(k.value-m.value))}const p=a=>{v({value:s(a)}),z.value=!1,y.value=0},q=a=>{b.value=h(a),b.value&&(b.value.focus(),z.value=!0,b.value.contains(a.target)?y.value=xe(a,b.value,t.direction):(y.value=0,u({value:s(a)})),i({value:s(a)}))},V={passive:!0,capture:!0};function K(a){u({value:s(a)})}function I(a){a.stopPropagation(),a.preventDefault(),p(a),window.removeEventListener("mousemove",K,V),window.removeEventListener("mouseup",I)}function o(a){var r;p(a),window.removeEventListener("touchmove",K,V),(r=a.target)==null||r.removeEventListener("touchend",o)}function c(a){var r;q(a),window.addEventListener("touchmove",K,V),(r=a.target)==null||r.addEventListener("touchend",o,{passive:!1})}function E(a){a.preventDefault(),q(a),window.addEventListener("mousemove",K,V),window.addEventListener("mouseup",I,{passive:!1})}const N=a=>{const r=(a-m.value)/(k.value-m.value)*100;return se(isNaN(r)?0:r,0,100)},A=S(t,"showTicks"),Y=l(()=>A.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:N(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseFloat(a),position:N(parseFloat(a)),label:t.ticks[a]})):x.value!==1/0?ke(x.value+1).map(a=>{const r=m.value+a*T.value;return{value:r,position:N(r)}}):[]:[]),U=l(()=>Y.value.some(a=>{let{label:r}=a;return!!r})),H={activeThumbRef:b,color:S(t,"color"),decimals:L,disabled:P,direction:S(t,"direction"),elevation:S(t,"elevation"),hasLabels:U,isReversed:f,indexFromEnd:_,min:m,max:k,mousePressed:z,numTicks:x,onSliderMousedown:E,onSliderTouchstart:c,parsedTicks:Y,parseMouseMove:s,position:N,readonly:S(t,"readonly"),rounded:S(t,"rounded"),roundValue:M,showTicks:A,startOffset:y,step:T,thumbSize:O,thumbColor:F,thumbLabel:S(t,"thumbLabel"),ticks:S(t,"ticks"),tickSize:$,trackColor:B,trackContainerRef:C,trackFillColor:D,trackSize:j,vertical:w};return ye(G,H),H},ze=W({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...re()},"VSliderThumb"),Pe=ne()({name:"VSliderThumb",directives:{Ripple:pe},props:ze(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:i}=t;const u=oe(G),{isRtl:v,rtlClasses:h}=le();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:g,step:f,disabled:w,thumbSize:_,thumbLabel:m,direction:k,isReversed:T,vertical:L,readonly:M,elevation:O,mousePressed:$,decimals:j,indexFromEnd:x}=u,{textColorClasses:P,textColorStyles:F}=Se(g),{pageup:B,pagedown:D,end:z,home:y,left:C,right:b,down:s,up:p}=_e,q=[B,D,z,y,C,b,s,p],V=l(()=>f.value?[1,2,3]:[1,5,10]);function K(o,c){if(!q.includes(o.key))return;o.preventDefault();const E=f.value||.1,N=(e.max-e.min)/E;if([C,b,s,p].includes(o.key)){const Y=(L.value?[v.value?C:b,T.value?s:p]:x.value!==v.value?[C,p]:[b,p]).includes(o.key)?1:-1,U=o.shiftKey?2:o.ctrlKey?1:0;c=c+Y*E*V.value[U]}else if(o.key===y)c=e.min;else if(o.key===z)c=e.max;else{const A=o.key===D?1:-1;c=c-A*E*(N>100?N/10:10)}return Math.max(e.min,Math.min(e.max,c))}function I(o){const c=K(o,e.modelValue);c!=null&&i("update:modelValue",c)}return ie(()=>{const o=R(x.value?100-e.position:e.position,"%"),{elevationClasses:c}=ge(l(()=>w.value?void 0:O.value));return d("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&$.value},e.class,h.value],style:[{"--v-slider-thumb-position":o,"--v-slider-thumb-size":R(_.value)},e.style],role:"slider",tabindex:w.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!M.value,"aria-orientation":k.value,onKeydown:M.value?void 0:I},[d("div",{class:["v-slider-thumb__surface",P.value,c.value],style:{...F.value}},null),te(d("div",{class:["v-slider-thumb__ripple",P.value],style:F.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),d(Ce,{origin:"bottom center"},{default:()=>{var E;return[te(d("div",{class:"v-slider-thumb__label-container"},[d("div",{class:["v-slider-thumb__label"]},[d("div",null,[((E=n["thumb-label"])==null?void 0:E.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(f.value?j.value:1)])])]),[[Ve,m.value&&e.focused||m.value==="always"]])]}})])}),{}}});const Ee=W({start:{type:Number,required:!0},stop:{type:Number,required:!0},...re()},"VSliderTrack"),Be=ne()({name:"VSliderTrack",props:Ee(),emits:{},setup(e,t){let{slots:n}=t;const i=oe(G);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:v,rounded:h,showTicks:g,tickSize:f,trackColor:w,trackFillColor:_,trackSize:m,vertical:k,min:T,max:L,indexFromEnd:M}=i,{roundedClasses:O}=Te(h),{backgroundColorClasses:$,backgroundColorStyles:j}=ae(_),{backgroundColorClasses:x,backgroundColorStyles:P}=ae(w),F=l(()=>`inset-${k.value?"block":"inline"}-${M.value?"end":"start"}`),B=l(()=>k.value?"height":"width"),D=l(()=>({[F.value]:"0%",[B.value]:"100%"})),z=l(()=>e.stop-e.start),y=l(()=>({[F.value]:R(e.start,"%"),[B.value]:R(z.value,"%")})),C=l(()=>g.value?(k.value?v.value.slice().reverse():v.value).map((s,p)=>{var V;const q=s.value!==T.value&&s.value!==L.value?R(s.position,"%"):void 0;return d("div",{key:s.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":s.position>=e.start&&s.position<=e.stop,"v-slider-track__tick--first":s.value===T.value,"v-slider-track__tick--last":s.value===L.value}],style:{[F.value]:q}},[(s.label||n["tick-label"])&&d("div",{class:"v-slider-track__tick-label"},[((V=n["tick-label"])==null?void 0:V.call(n,{tick:s,index:p}))??s.label])])}):[]);return ie(()=>d("div",{class:["v-slider-track",O.value,e.class],style:[{"--v-slider-track-size":R(m.value),"--v-slider-tick-size":R(f.value)},e.style]},[d("div",{class:["v-slider-track__background",x.value,{"v-slider-track__background--opacity":!!u.value||!_.value}],style:{...D.value,...P.value}},null),d("div",{class:["v-slider-track__fill",$.value],style:{...y.value,...j.value}},null),g.value&&d("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":g.value==="always"}]},[C.value])])),{}}});export{Be as V,Le as a,Pe as b,xe as g,Ne as m,Re as u};
