import{as as b,ar as h,au as d,ax as m,ay as v,ao as c,aA as f,aC as u,aF as g,b as t,aN as x}from"./index-c4e71550.js";const T=b({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...h(),...d(),...m(),...v()},"VTable"),V=c()({name:"VTable",props:T(),setup(a,r){let{slots:e}=r;const{themeClasses:n}=f(a),{densityClasses:i}=u(a);return g(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},n.value,i.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{V,T as m};
