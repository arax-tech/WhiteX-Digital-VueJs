import{as as P,aP as B,t as x,by as me,p as F,M as A,bx as X,ao as _,be as Z,b as f,ag as V,c6 as je,B as J,aN as C,r as Q,c7 as oe,b8 as be,b$ as Y,Y as T,c8 as j,c9 as L,at as ue,bh as Ue,bj as ze,bb as Ke,aF as U,bl as We,F as N,a1 as qe,E as se,D as ie,G as Xe,b9 as M,aX as Ye,w as de,bc as Je}from"./index-c4e71550.js";import{V as Qe}from"./VSelect-9628140b.js";import{V as ee}from"./VCheckboxBtn-5dd1ee23.js";import{m as Ze,V as ce}from"./VTable-28a89234.js";import{m as et,u as tt}from"./filter-c3387b54.js";const at=P({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),ye=Symbol.for("vuetify:data-table-pagination");function lt(e){const a=B(e,"page",void 0,t=>+(t??1)),l=B(e,"itemsPerPage",void 0,t=>+(t??10));return{page:a,itemsPerPage:l}}function nt(e){const{page:a,itemsPerPage:l,itemsLength:t}=e,n=x(()=>l.value===-1?0:l.value*(a.value-1)),c=x(()=>l.value===-1?t.value:Math.min(t.value,n.value+l.value)),s=x(()=>l.value===-1||t.value===0?1:Math.ceil(t.value/l.value));me(()=>{a.value>s.value&&(a.value=s.value)});function u(v){l.value=v,a.value=1}function r(){a.value=X(a.value+1,1,s.value)}function d(){a.value=X(a.value-1,1,s.value)}function o(v){a.value=X(v,1,s.value)}const m={page:a,itemsPerPage:l,startIndex:n,stopIndex:c,pageCount:s,itemsLength:t,nextPage:r,prevPage:d,setPage:o,setItemsPerPage:u};return F(ye,m),m}function rt(){const e=A(ye);if(!e)throw new Error("Missing pagination!");return e}function ot(e){const{items:a,startIndex:l,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:x(()=>n.value<=0?a.value:a.value.slice(l.value,t.value))}}const pe=P({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),fe=_()({name:"VDataTableFooter",props:pe(),setup(e,a){let{slots:l}=a;const{t}=Z(),{page:n,pageCount:c,startIndex:s,stopIndex:u,itemsLength:r,itemsPerPage:d,setItemsPerPage:o}=rt(),m=x(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:t(v.title)}));return()=>{var v;return f("div",{class:"v-data-table-footer"},[(v=l.prepend)==null?void 0:v.call(l),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[t(e.itemsPerPageText)]),f(Qe,{items:m.value,modelValue:d.value,"onUpdate:modelValue":h=>o(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[t(e.pageText,r.value?s.value+1:0,u.value,r.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(V,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:n.value===1,"aria-label":t(e.firstPageLabel)},null),f(V,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:n.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&f("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),f(V,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(c.value,n.value+1),disabled:n.value===c.value,"aria-label":t(e.nextPageLabel)},null),f(V,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=c.value,disabled:n.value===c.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),te=je({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,a)=>{let{slots:l,attrs:t}=a;const n=e.tag??"td";return f(n,J({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:C(e.height),width:C(e.width),left:C(e.fixedOffset||null)}},t),{default:()=>{var c;return[(c=l.default)==null?void 0:c.call(l)]}})}),ut=P({headers:{type:Array,default:()=>[]}},"DataTable-header"),he=Symbol.for("vuetify:data-table-headers");function st(e,a){const l=Q([]),t=Q([]);me(()=>{var h,S,y;const c=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],s=c.flatMap((i,g)=>i.map(p=>({column:p,row:g}))),u=c.length,r={title:"",sortable:!1},d={...r,width:48};if((h=a==null?void 0:a.groupBy)!=null&&h.value.length){const i=s.findIndex(g=>{let{column:p}=g;return p.key==="data-table-group"});i<0?s.unshift({column:{...r,key:"data-table-group",title:"Group",rowspan:u},row:0}):s.splice(i,1,{column:{...r,...s[i].column},row:s[i].row})}if((S=a==null?void 0:a.showSelect)!=null&&S.value){const i=s.findIndex(g=>{let{column:p}=g;return p.key==="data-table-select"});i<0?s.unshift({column:{...d,key:"data-table-select",rowspan:u},row:0}):s.splice(i,1,{column:{...d,...s[i].column},row:s[i].row})}if((y=a==null?void 0:a.showExpand)!=null&&y.value){const i=s.findIndex(g=>{let{column:p}=g;return p.key==="data-table-expand"});i<0?s.push({column:{...d,key:"data-table-expand",rowspan:u},row:0}):s.splice(i,1,{column:{...d,...s[i].column},row:s[i].row})}const o=oe(u).map(()=>[]),m=oe(u).fill(0);s.forEach(i=>{let{column:g,row:p}=i;const k=g.key??(typeof g.value=="string"?g.value:null),w=g.value??g.key??null;for(let b=p;b<=p+(g.rowspan??1)-1;b++)o[b].push({...g,key:k,value:w,fixedOffset:m[b],sortable:g.sortable??k!=null}),m[b]+=Number(g.width??0)}),o.forEach(i=>{for(let g=i.length;g--;g>=0)if(i[g].fixed){i[g].lastFixed=!0;return}});const v=new Set;l.value=o.map(i=>{const g=[];for(const p of i)v.has(p.key)||(v.add(p.key),g.push(p));return g}),t.value=o.at(-1)??[]});const n={headers:l,columns:t};return F(he,n),n}function z(){const e=A(he);if(!e)throw new Error("Missing headers!");return e}const it={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:a,value:l}=e;return new Set(l?[(t=a[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:a}=e;return a}},Se={showSelectAll:!0,allSelected:e=>{let{currentPage:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,currentPage:l,selected:t}=e;return Se.select({items:l,value:a,selected:t})}},xe={showSelectAll:!0,allSelected:e=>{let{allItems:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,allItems:l,selected:t}=e;return xe.select({items:l,value:a,selected:t})}},dt=P({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:be}},"DataTable-select"),we=Symbol.for("vuetify:data-table-selection");function ct(e,a){let{allItems:l,currentPage:t}=a;const n=B(e,"modelValue",e.modelValue,i=>new Set(Y(i).map(g=>{var p;return((p=l.value.find(k=>e.valueComparator(g,k.value)))==null?void 0:p.value)??g})),i=>[...i.values()]),c=x(()=>l.value.filter(i=>i.selectable)),s=x(()=>t.value.filter(i=>i.selectable)),u=x(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return it;case"all":return xe;case"page":default:return Se}});function r(i){return Y(i).every(g=>n.value.has(g.value))}function d(i){return Y(i).some(g=>n.value.has(g.value))}function o(i,g){const p=u.value.select({items:i,value:g,selected:new Set(n.value)});n.value=p}function m(i){o([i],!r([i]))}function v(i){const g=u.value.selectAll({value:i,allItems:c.value,currentPage:s.value,selected:new Set(n.value)});n.value=g}const h=x(()=>n.value.size>0),S=x(()=>{const i=u.value.allSelected({allItems:c.value,currentPage:s.value});return!!i.length&&r(i)}),y={toggleSelect:m,select:o,selectAll:v,isSelected:r,isSomeSelected:d,someSelected:h,allSelected:S,showSelectAll:u.value.showSelectAll};return F(we,y),y}function K(){const e=A(we);if(!e)throw new Error("Missing selection!");return e}const ft=P({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Pe=Symbol.for("vuetify:data-table-sort");function vt(e){const a=B(e,"sortBy"),l=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:a,mustSort:l,multiSort:t}}function gt(e){const{sortBy:a,mustSort:l,multiSort:t,page:n}=e,c=r=>{if(r.key==null)return;let d=a.value.map(m=>({...m}))??[];const o=d.find(m=>m.key===r.key);o?o.order==="desc"?l.value?o.order="asc":d=d.filter(m=>m.key!==r.key):o.order="desc":t.value?d=[...d,{key:r.key,order:"asc"}]:d=[{key:r.key,order:"asc"}],a.value=d,n&&(n.value=1)};function s(r){return!!a.value.find(d=>d.key===r.key)}const u={sortBy:a,toggleSort:c,isSorted:s};return F(Pe,u),u}function mt(){const e=A(Pe);if(!e)throw new Error("Missing sort!");return e}function bt(e,a,l){const t=Z();return{sortedItems:x(()=>l.value.length?yt(a.value,l.value,t.current.value,e.customKeySort):a.value)}}function yt(e,a,l,t){const n=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((c,s)=>{for(let u=0;u<a.length;u++){const r=a[u].key,d=a[u].order??"asc";if(d===!1)continue;let o=j(c.raw,r),m=j(s.raw,r);if(d==="desc"&&([o,m]=[m,o]),t!=null&&t[r]){const v=t[r](o,m);if(!v)continue;return v}if(o instanceof Date&&m instanceof Date)return o.getTime()-m.getTime();if([o,m]=[o,m].map(v=>v!=null?v.toString().toLocaleLowerCase():v),o!==m)return L(o)&&L(m)?0:L(o)?-1:L(m)?1:!isNaN(o)&&!isNaN(m)?Number(o)-Number(m):n.compare(o,m)}return 0})}const ke=P({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:ue,default:"$sortAsc"},sortDescIcon:{type:ue,default:"$sortDesc"},...Ue()},"VDataTableHeaders"),ve=_()({name:"VDataTableHeaders",props:ke(),setup(e,a){let{slots:l,emit:t}=a;const{toggleSort:n,sortBy:c,isSorted:s}=mt(),{someSelected:u,allSelected:r,selectAll:d,showSelectAll:o}=K(),{columns:m,headers:v}=z(),{loaderClasses:h}=ze(e),S=(w,b)=>{if(!(!e.sticky&&!w.fixed))return{position:"sticky",zIndex:w.fixed?4:e.sticky?3:void 0,left:w.fixed?C(w.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${b})`:void 0}};function y(w){const b=c.value.find(I=>I.key===w.key);return b?b.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:i,backgroundColorStyles:g}=Ke(e,"color"),p=x(()=>({headers:v.value,columns:m.value,toggleSort:n,isSorted:s,sortBy:c.value,someSelected:u.value,allSelected:r.value,selectAll:d,getSortIcon:y,getFixedStyles:S})),k=w=>{let{column:b,x:I,y:$}=w;const W=b.key==="data-table-select"||b.key==="data-table-expand";return f(te,{tag:"th",align:b.align,class:["v-data-table__th",{"v-data-table__th--sortable":b.sortable,"v-data-table__th--sorted":s(b)},h.value],style:{width:C(b.width),minWidth:C(b.width),...S(b,$)},colspan:b.colspan,rowspan:b.rowspan,onClick:b.sortable?()=>n(b):void 0,lastFixed:b.lastFixed,noPadding:W},{default:()=>{var H;const G=`column.${b.key}`,R={column:b,selectAll:d,isSorted:s,toggleSort:n,sortBy:c.value,someSelected:u.value,allSelected:r.value,getSortIcon:y};return l[G]?l[G](R):b.key==="data-table-select"?((H=l["column.data-table-select"])==null?void 0:H.call(l,R))??(o&&f(ee,{modelValue:r.value,indeterminate:u.value&&!r.value,"onUpdate:modelValue":d},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[b.title]),b.sortable&&f(qe,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(b)},null),e.multiSort&&s(b)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...i.value],style:g.value},[c.value.findIndex(E=>E.key===b.key)+1])])}})};U(()=>f(N,null,[l.headers?l.headers(p.value):v.value.map((w,b)=>f("tr",null,[w.map((I,$)=>f(k,{column:I,x:$,y:b},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:m.value.length},[f(We,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:l.loader})])])]))}}),pt=P({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Te=Symbol.for("vuetify:data-table-group");function ht(e){return{groupBy:B(e,"groupBy")}}function St(e){const{groupBy:a,sortBy:l}=e,t=Q(new Set),n=x(()=>a.value.map(d=>({...d,order:d.order??!1})).concat(l.value));function c(d){return t.value.has(d.id)}function s(d){const o=new Set(t.value);c(d)?o.delete(d.id):o.add(d.id),t.value=o}function u(d){function o(m){const v=[];for(const h of m.items)"type"in h&&h.type==="group"?v.push(...o(h)):v.push(h);return v}return o({type:"group",items:d,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:n,toggleGroup:s,opened:t,groupBy:a,extractRows:u,isGroupOpen:c};return F(Te,r),r}function De(){const e=A(Te);if(!e)throw new Error("Missing group!");return e}function xt(e,a){if(!e.length)return[];const l=new Map;for(const t of e){const n=j(t.raw,a);l.has(n)||l.set(n,[]),l.get(n).push(t)}return l}function Ie(e,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!a.length)return[];const n=xt(e,a[0]),c=[],s=a.slice(1);return n.forEach((u,r)=>{const d=a[0],o=`${t}_${d}_${r}`;c.push({depth:l,id:o,key:d,value:r,items:s.length?Ie(u,s,l+1,o):u,type:"group"})}),c}function Ve(e,a){const l=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&l.push(t),(a.has(t.id)||t.value==null)&&l.push(...Ve(t.items,a))):l.push(t);return l}function wt(e,a,l){return{flatItems:x(()=>{if(!a.value.length)return e.value;const n=Ie(e.value,a.value.map(c=>c.key));return Ve(n,l.value)})}}const Pt=P({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),kt=_()({name:"VDataTableGroupHeaderRow",props:Pt(),setup(e,a){let{slots:l}=a;const{isGroupOpen:t,toggleGroup:n,extractRows:c}=De(),{isSelected:s,isSomeSelected:u,select:r}=K(),{columns:d}=z(),o=x(()=>c([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(m=>{var v,h;if(m.key==="data-table-group"){const S=t(e.item)?"$expand":"$next",y=()=>n(e.item);return((v=l["data-table-group"])==null?void 0:v.call(l,{item:e.item,count:o.value.length,props:{icon:S,onClick:y}}))??f(te,{class:"v-data-table-group-header-row__column"},{default:()=>[f(V,{size:"small",variant:"text",icon:S,onClick:y},null),f("span",null,[e.item.value]),f("span",null,[se("("),o.value.length,se(")")])]})}if(m.key==="data-table-select"){const S=s(o.value),y=u(o.value)&&!S,i=g=>r(o.value,g);return((h=l["data-table-select"])==null?void 0:h.call(l,{props:{modelValue:S,indeterminate:y,"onUpdate:modelValue":i}}))??f("td",null,[f(ee,{modelValue:S,indeterminate:y,"onUpdate:modelValue":i},null)])}return f("td",null,null)})])}}),Tt=P({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ce=Symbol.for("vuetify:datatable:expanded");function Dt(e){const a=T(e,"expandOnClick"),l=B(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,r){const d=new Set(l.value);r?d.add(u.value):d.delete(u.value),l.value=d}function n(u){return l.value.has(u.value)}function c(u){t(u,!n(u))}const s={expand:t,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:c};return F(Ce,s),s}function Be(){const e=A(Ce);if(!e)throw new Error("foo");return e}const It=P({index:Number,item:Object,onClick:Function},"VDataTableRow"),Vt=_()({name:"VDataTableRow",props:It(),setup(e,a){let{slots:l}=a;const{isSelected:t,toggleSelect:n}=K(),{isExpanded:c,toggleExpand:s}=Be(),{columns:u}=z();U(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&u.value.map((r,d)=>f(te,{align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},{default:()=>{var h,S;const o=e.item,m=`item.${r.key}`,v={index:e.index,item:o.raw,internalItem:o,value:j(o.columns,r.key),column:r,isSelected:t,toggleSelect:n,isExpanded:c,toggleExpand:s};return l[m]?l[m](v):r.key==="data-table-select"?((h=l["item.data-table-select"])==null?void 0:h.call(l,v))??f(ee,{disabled:!o.selectable,modelValue:t([o]),onClick:ie(()=>n(o),["stop"])},null):r.key==="data-table-expand"?((S=l["item.data-table-expand"])==null?void 0:S.call(l,v))??f(V,{icon:c(o)?"$collapse":"$expand",size:"small",variant:"text",onClick:ie(()=>s(o),["stop"])},null):Xe(v.value)}}))]))}}),Fe=P({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),ge=_()({name:"VDataTableRows",props:Fe(),setup(e,a){let{emit:l,slots:t}=a;const{columns:n}=z(),{expandOnClick:c,toggleExpand:s,isExpanded:u}=Be(),{isSelected:r,toggleSelect:d}=K(),{toggleGroup:o,isGroupOpen:m}=De(),{t:v}=Z();return U(()=>{var h,S;return e.loading?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[((h=t.loading)==null?void 0:h.call(t))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((S=t["no-data"])==null?void 0:S.call(t))??v(e.noDataText)])]):f(N,null,[e.items.map((y,i)=>{var k;if(y.type==="group")return t["group-header"]?t["group-header"]({index:i,item:y,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:r,toggleSelect:d,toggleGroup:o,isGroupOpen:m}):f(kt,{key:`group-header_${y.id}`,item:y},t);const g={index:i,item:y.raw,internalItem:y,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:r,toggleSelect:d},p={...g,props:{key:`item_${y.key??y.index}`,onClick:c.value||e["onClick:row"]?w=>{var b;c.value&&s(y),(b=e["onClick:row"])==null||b.call(e,w,{item:y.raw,internalItem:y})}:void 0,index:i,item:y}};return f(N,null,[t.item?t.item(p):f(Vt,p.props,t),u(y)&&((k=t["expanded-row"])==null?void 0:k.call(t,g))])})])}),{}}}),Ct=P({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function Bt(e,a,l,t){const n=e.returnObject?a:M(a,e.itemValue),c=M(a,e.itemSelectable,!0),s=t.reduce((u,r)=>(r.key!=null&&(u[r.key]=M(a,r.value)),u),{});return{type:"item",key:e.returnObject?M(a,e.itemValue):n,index:l,value:n,selectable:c,columns:s,raw:a}}function Ft(e,a,l){return a.map((t,n)=>Bt(e,t,n,l))}function At(e,a){return{items:x(()=>Ft(e,e.items,a.value))}}function _t(e){let{page:a,itemsPerPage:l,sortBy:t,groupBy:n,search:c}=e;const s=Ye("VDataTable"),u=x(()=>({page:a.value,itemsPerPage:l.value,sortBy:t.value,groupBy:n.value,search:c.value}));de(()=>c==null?void 0:c.value,()=>{a.value=1});let r=null;de(u,()=>{be(r,u.value)||(s.emit("update:options",u.value),r=u.value)},{deep:!0,immediate:!0})}const $t=P({...Fe(),width:[String,Number],search:String,...Tt(),...pt(),...ut(),...Ct(),...dt(),...ft(),...ke(),...Ze()},"DataTable"),Et=P({...at(),...$t(),...et(),...pe()},"VDataTable"),Lt=_()({name:"VDataTable",props:Et(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{emit:l,slots:t}=a;const{groupBy:n}=ht(e),{sortBy:c,multiSort:s,mustSort:u}=vt(e),{page:r,itemsPerPage:d}=lt(e),{columns:o,headers:m}=st(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:v}=At(e,o),h=T(e,"search"),{filteredItems:S}=tt(e,v,h,{transform:q=>q.columns}),{toggleSort:y}=gt({sortBy:c,multiSort:s,mustSort:u,page:r}),{sortByWithGroups:i,opened:g,extractRows:p,isGroupOpen:k,toggleGroup:w}=St({groupBy:n,sortBy:c}),{sortedItems:b}=bt(e,S,i),{flatItems:I}=wt(b,n,g),$=x(()=>I.value.length),{startIndex:W,stopIndex:G,pageCount:R,setItemsPerPage:H}=nt({page:r,itemsPerPage:d,itemsLength:$}),{paginatedItems:E}=ot({items:I,startIndex:W,stopIndex:G,itemsPerPage:d}),ae=x(()=>p(E.value)),{isSelected:Ae,select:_e,selectAll:$e,toggleSelect:Ee,someSelected:Oe,allSelected:Ne}=ct(e,{allItems:v,currentPage:ae}),{isExpanded:Ge,toggleExpand:Re}=Dt(e);_t({page:r,itemsPerPage:d,sortBy:c,groupBy:n,search:h}),Je({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const D=x(()=>({page:r.value,itemsPerPage:d.value,sortBy:c.value,pageCount:R.value,toggleSort:y,setItemsPerPage:H,someSelected:Oe.value,allSelected:Ne.value,isSelected:Ae,select:_e,selectAll:$e,toggleSelect:Ee,isExpanded:Ge,toggleExpand:Re,isGroupOpen:k,toggleGroup:w,items:ae.value,groupedItems:E.value,columns:o.value,headers:m.value}));return U(()=>{const[q]=fe.filterProps(e),[He]=ve.filterProps(e),[Le]=ge.filterProps(e),[Me]=ce.filterProps(e);return f(ce,J({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Me),{top:()=>{var O;return(O=t.top)==null?void 0:O.call(t,D.value)},default:()=>{var O,le,ne,re;return t.default?t.default(D.value):f(N,null,[(O=t.colgroup)==null?void 0:O.call(t,D.value),f("thead",null,[f(ve,He,t)]),(le=t.thead)==null?void 0:le.call(t,D.value),f("tbody",null,[t.body?t.body(D.value):f(ge,J(Le,{items:E.value}),t)]),(ne=t.tbody)==null?void 0:ne.call(t,D.value),(re=t.tfoot)==null?void 0:re.call(t,D.value)])},bottom:()=>t.bottom?t.bottom(D.value):f(N,null,[f(fe,q,{prepend:t["footer.prepend"]})])})}),{}}});export{Lt as V,$t as a,pe as b,ht as c,vt as d,lt as e,st as f,St as g,nt as h,wt as i,ct as j,Dt as k,_t as l,at as m,fe as n,ve as o,gt as p,ge as q,At as u};
