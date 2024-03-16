import{as as x,ar as y,ax as T,ao as V,aF as k,b as t,a$ as H,b0 as I,av as D,ay as E,bb as F,Y as $,b4 as w,b5 as A,aD as K,aA as U,bF as Y,aK as Z,t as h,bc as j,aR as u,aN as o,aZ as q}from"./index-c4e71550.js";import{V as z}from"./VImg-8451f417.js";const G=x({text:String,...y(),...T()},"VToolbarTitle"),J=V()({name:"VToolbarTitle",props:G(),setup(e,n){let{slots:a}=n;return k(()=>{const s=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),L=[null,"prominent","default","comfortable","compact"],M=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>L.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...H(),...y(),...I(),...D(),...T({tag:"header"}),...E()},"VToolbar"),W=V()({name:"VToolbar",props:M(),setup(e,n){var c;let{slots:a}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=F($(e,"color")),{borderClasses:_}=w(e),{elevationClasses:C}=A(e),{roundedClasses:B}=K(e),{themeClasses:P}=U(e),{rtlClasses:N}=Y(),i=Z(!!(e.extended||(c=a.extension)!=null&&c.call(a))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return j({VBtn:{variant:"text"}}),k(()=>{var b;const S=!!(e.title||a.title),R=!!(a.image||e.image),m=(b=a.extension)==null?void 0:b.call(a);return i.value=!!(e.extended||m),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,N.value,e.class],style:[l.value,e.style]},{default:()=>[R&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(z,{key:"image-img",cover:!0,src:e.image},null)]),t(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>{var g,v,f;return[t("div",{class:"v-toolbar__content",style:{height:o(r.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(g=a.prepend)==null?void 0:g.call(a)]),S&&t(J,{key:"title",text:e.title},{text:a.title}),(v=a.default)==null?void 0:v.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(f=a.append)==null?void 0:f.call(a)])])]}}),t(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>[t(q,null,{default:()=>[i.value&&t("div",{class:"v-toolbar__extension",style:{height:o(d.value)}},[m])]})]})]})}),{contentHeight:r,extensionHeight:d}}});export{W as V,J as a,G as b,M as m};
