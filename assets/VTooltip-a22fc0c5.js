import{m as p,a as u}from"./VOverlay-14a99b98.js";import{f as O}from"./forwardRefs-8348545e.js";import{as as S,aO as h,ao as T,aP as x,aQ as k,t as e,r as w,B as d,aF as A,b as B}from"./index-c4e71550.js";import{u as C}from"./scopeId-203eb21d.js";const F=S({id:String,text:String,...h(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),G=T()({name:"VTooltip",props:F(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=x(t,"modelValue"),{scopeId:v}=C(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return A(()=>{const[b]=u.filterProps(t);return B(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),O({},l)}});export{G as V};
