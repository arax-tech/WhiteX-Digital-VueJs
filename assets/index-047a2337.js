import{a as se,_ as oe}from"./AddPaymentMethodDialog-6f457fd5.js";import{_ as ne}from"./UserInfoEditDialog-426d0fc5.js";import{_ as re,a as de}from"./TwoFactorAuthDialog-b21881ed.js";import{_ as Z}from"./AppTextField-a8f30c8f.js";import{_ as ue}from"./AppStepper-a20adec8.js";import{_ as K}from"./DialogCloseBtn-6889b27a.js";import{l as me}from"./laptop-girl-c0871a8e.js";import{V as x,a as $,b as S}from"./VCard-71b3ac17.js";import{V}from"./VCardText-6669d6f5.js";import{V as Y,a as p}from"./VRow-3a397f81.js";import{V as ce,a as R}from"./VWindowItem-ce604431.js";import{V as Q,a as q}from"./VRadioGroup-44125f25.js";import{V as I,a as z,b as L,c as W}from"./VList-48b3771d.js";import{V as U}from"./VAvatar-0d338c12.js";import{r as h,w as pe,o as D,f as j,e as t,b as e,z as i,a2 as y,c as N,F as B,C as M,E as o,G as w,a1 as m,d as s,ag as c,D as X,ad as fe,ae as _e,cd as be,co as ge,a7 as ve,a5 as xe,a6 as Ve,cu as he,ct as ye,cN as De}from"./index-c4e71550.js";import{V as J}from"./VForm-617abc97.js";import{V as we}from"./VSwitch-131a1f0e.js";import{V as Ce}from"./VImg-8451f417.js";import{V as H}from"./VDialog-91d5bf8a.js";import{_ as ke}from"./AddEditAddressDialog-f613f9af.js";import{V as $e}from"./VDivider-aef533a2.js";import{_ as Se}from"./PricingPlanDialog-84d36058.js";import{_ as Ae}from"./AppAutocomplete-7c0f768c.js";import{V as Ee}from"./VMenu-3432c545.js";import"./mastercard-091f965c.js";import"./visa-dark-88f6d41a.js";import"./visa-light-5e3d9782.js";import"./useGenerateImageVariant-e1eabe90.js";import"./VAlert-19a9b57e.js";import"./focus-ba6d54b4.js";import"./VTextField-47e6f93c.js";/* empty css                   */import"./VCounter-856e1893.js";import"./VField-0f4003e5.js";import"./easing-9f15041e.js";import"./VInput-6532c874.js";import"./form-d2acef44.js";import"./forwardRefs-8348545e.js";import"./VSlideGroupItem-990355ba.js";import"./VSlideGroup-c5a070c6.js";import"./lazy-8c4021f0.js";import"./ssrBoot-3f554f90.js";import"./VSelectionControl-9181ec5a.js";import"./VOverlay-14a99b98.js";import"./scopeId-203eb21d.js";import"./dialog-transition-1a37cbb8.js";import"./AppTextarea-37ab21a0.js";import"./CustomRadiosWithIcon-e9fd1810.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AppPricing-343dd138.js";import"./VChip-a642ea45.js";import"./VSelect-9628140b.js";import"./VCheckboxBtn-5dd1ee23.js";import"./filter-c3387b54.js";const Pe=s("h3",{class:"text-h3 text-center mb-2"}," Create App ",-1),ze=s("p",{class:"text-sm text-center mb-8"}," Provide data with this form to create your app. ",-1),Ue=s("h6",{class:"text-h6 my-4"}," Category ",-1),je=s("h6",{class:"text-h6 mb-4"}," Select Framework ",-1),Ne=s("h6",{class:"text-h6 my-4"}," Select Database Engine ",-1),Be=s("h6",{class:"text-h6 mb-4"}," Payment Details ",-1),Me=s("h6",{class:"text-h6 mb-2"}," Submit 🥳 ",-1),Fe=s("p",{class:"text-sm mb-6"}," Submit to kickstart your project. ",-1),Re={class:"d-flex justify-space-between mt-8"},Ie={__name:"CreateAppDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","updatedData"],setup(P,{emit:C}){const _=P,b=C,u=h(0),g=[{icon:"tabler-clipboard",title:"Details",subtitle:"Enter Details"},{icon:"tabler-box",title:"Frameworks",subtitle:"Select Framework"},{icon:"tabler-database",title:"Database",subtitle:"Select Database"},{icon:"tabler-credit-card",title:"Billing",subtitle:"Payment Details"},{icon:"tabler-check",title:"Submit",subtitle:"submit"}],f=[{icon:"tabler-briefcase",color:"info",title:"CRM Application",subtitle:"Scales with any business",slug:"crm-application"},{icon:"tabler-shopping-cart",color:"success",title:"Ecommerce Platforms",subtitle:"Grow Your Business With App",slug:"ecommerce-application"},{icon:"tabler-device-laptop",color:"error",title:"Online Learning platform",subtitle:"Start learning today",slug:"online-learning-application"}],v=[{icon:"tabler-brand-react-native",color:"info",title:"React Native",subtitle:"Create truly native apps",slug:"react-framework"},{icon:"tabler-brand-angular",color:"error",title:"Angular",subtitle:"Most suited for your application",slug:"angular-framework"},{icon:"tabler-brand-html5",color:"warning",title:"HTML",subtitle:"Progressive Framework",slug:"html-framework"},{icon:"tabler-brand-python",color:"primary",title:"Python",subtitle:"js web frameworks",slug:"js-framework"}],k=[{icon:"tabler-brand-firebase",color:"error",title:"Firebase",subtitle:"Cloud Firestore",slug:"firebase-database"},{icon:"tabler-brand-amazon",color:"warning",title:"AWS",subtitle:"Amazon Fast NoSQL Database",slug:"aws-database"},{icon:"tabler-database",color:"info",title:"MySQL",subtitle:"Basic MySQL database",slug:"mysql-database"}],n=h({category:"crm-application",framework:"vue-framework",database:"firebase-database",cardNumber:null,cardName:"",cardExpiry:"",cardCvv:"",isSave:!1}),d=F=>{b("update:isDialogVisible",F),u.value=0};pe(_,()=>{_.isDialogVisible||(u.value=0)});const A=()=>{alert("submitted...!!"),b("updatedData",n.value)};return(F,l)=>{const G=K,O=ue,E=Z;return D(),j(H,{"model-value":_.isDialogVisible,"max-width":"900","onUpdate:modelValue":d},{default:t(()=>[e(G,{size:"small",onClick:l[0]||(l[0]=a=>b("update:isDialogVisible",!1))}),e(x,{class:"create-app-dialog"},{default:t(()=>[e(V,{class:"pa-5 pa-sm-10"},{default:t(()=>[Pe,ze,e(Y,null,{default:t(()=>[e(p,{cols:"12",sm:"5",md:"4",lg:"3"},{default:t(()=>[e(O,{"current-step":i(u),"onUpdate:currentStep":l[1]||(l[1]=a=>y(u)?u.value=a:null),direction:"vertical",items:g,"icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e(p,{cols:"12",sm:"7",md:"8",lg:"9"},{default:t(()=>[e(ce,{modelValue:i(u),"onUpdate:modelValue":l[10]||(l[10]=a=>y(u)?u.value=a:null),class:"disable-tab-transition stepper-content"},{default:t(()=>[e(R,null,{default:t(()=>[e(E,{label:"Application Name"}),Ue,e(Q,{modelValue:i(n).category,"onUpdate:modelValue":l[2]||(l[2]=a=>i(n).category=a)},{default:t(()=>[e(I,{class:"card-list"},{default:t(()=>[(D(),N(B,null,M(f,a=>e(z,{key:a.title,onClick:T=>i(n).category=a.slug},{prepend:t(()=>[e(U,{size:"48",rounded:"",variant:"tonal",color:a.color,icon:a.icon},null,8,["color","icon"])]),append:t(()=>[e(q,{value:a.slug},null,8,["value"])]),default:t(()=>[e(L,{class:"mb-1"},{default:t(()=>[o(w(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(w(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(R,null,{default:t(()=>[je,e(Q,{modelValue:i(n).framework,"onUpdate:modelValue":l[3]||(l[3]=a=>i(n).framework=a)},{default:t(()=>[e(I,{class:"card-list"},{default:t(()=>[(D(),N(B,null,M(v,a=>e(z,{key:a.title,onClick:T=>i(n).framework=a.slug},{prepend:t(()=>[e(U,{size:"48",rounded:"",variant:"tonal",color:a.color},{default:t(()=>[e(m,{icon:a.icon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[e(q,{value:a.slug},null,8,["value"])]),default:t(()=>[e(L,{class:"mb-1"},{default:t(()=>[o(w(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(w(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(R,null,{default:t(()=>[e(E,{label:"Database Name",placeholder:"userDB"}),Ne,e(Q,{modelValue:i(n).database,"onUpdate:modelValue":l[4]||(l[4]=a=>i(n).database=a)},{default:t(()=>[e(I,{class:"card-list"},{default:t(()=>[(D(),N(B,null,M(k,a=>e(z,{key:a.title,onClick:T=>i(n).database=a.slug},{prepend:t(()=>[e(U,{size:"48",rounded:"",variant:"tonal",color:a.color},{default:t(()=>[e(m,{icon:a.icon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[e(q,{value:a.slug},null,8,["value"])]),default:t(()=>[e(L,{class:"mb-1"},{default:t(()=>[o(w(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(w(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(R,null,{default:t(()=>[Be,e(J,null,{default:t(()=>[e(Y,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(E,{modelValue:i(n).cardNumber,"onUpdate:modelValue":l[5]||(l[5]=a=>i(n).cardNumber=a),label:"Card Number",placeholder:"1234 1234 1234 1234",type:"number"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(E,{modelValue:i(n).cardName,"onUpdate:modelValue":l[6]||(l[6]=a=>i(n).cardName=a),label:"Name on Card",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6",md:"3"},{default:t(()=>[e(E,{modelValue:i(n).cardExpiry,"onUpdate:modelValue":l[7]||(l[7]=a=>i(n).cardExpiry=a),label:"Expiry",placeholder:"MM/YY"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6",md:"3"},{default:t(()=>[e(E,{modelValue:i(n).cardCvv,"onUpdate:modelValue":l[8]||(l[8]=a=>i(n).cardCvv=a),label:"CVV",placeholder:"123"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(we,{modelValue:i(n).isSave,"onUpdate:modelValue":l[9]||(l[9]=a=>i(n).isSave=a),label:"Save Card for future billing?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{class:"text-center"},{default:t(()=>[Me,Fe,e(Ce,{src:i(me),width:"176",class:"mx-auto"},null,8,["src"])]),_:1})]),_:1},8,["modelValue"]),s("div",Re,[e(c,{variant:"tonal",color:"secondary",disabled:i(u)===0,onClick:l[11]||(l[11]=a=>u.value--)},{default:t(()=>[e(m,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),o(" Previous ")]),_:1},8,["disabled"]),g.length-1===i(u)?(D(),j(c,{key:0,color:"success",onClick:A},{default:t(()=>[o(" submit "),e(m,{icon:"tabler-check",end:"",class:"flip-in-rtl"})]),_:1})):(D(),j(c,{key:1,onClick:l[12]||(l[12]=a=>u.value++)},{default:t(()=>[o(" Next "),e(m,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};const Le=s("h3",{class:"text-h3 text-center mb-3"}," Refer & Earn ",-1),Te=s("p",{class:"text-sm-body-1 text-center"}," Invite your friend to vuexy, if they sign up, you and your friend will get 30 days free trial ",-1),We={class:"text-h5 mt-4 mb-2"},Ye=s("h5",{class:"text-h5 mb-4"}," Invite your friends ",-1),Ge=s("p",{class:"mb-1 text-sm"}," Enter your friend's email address and invite them to join Vuexy 😍 ",-1),Oe=s("h5",{class:"text-h5 mb-4 mt-7"}," Share the referral link ",-1),Qe=s("p",{class:"mb-1 text-sm"}," You can also copy and send it or share it on your social media. 🚀 ",-1),qe={class:"d-flex gap-3"},Je={__name:"ReferAndEarnDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(P,{emit:C}){const _=P,b=C,u=f=>{b("update:isDialogVisible",f)},g=[{icon:"custom-paper",title:"Send Invitation 👍🏻",subtitle:"Send your referral link to your friend"},{icon:"custom-keyboard",title:"Registration 😎",subtitle:"Let them register to our services"},{icon:"custom-rocket",title:"Free Trial  🎉",subtitle:"Your friend will get 30 days free trial"}];return(f,v)=>{const k=K,n=Z;return D(),j(H,{"model-value":_.isDialogVisible,"max-width":"740","onUpdate:modelValue":u},{default:t(()=>[e(k,{onClick:v[0]||(v[0]=d=>f.$emit("update:isDialogVisible",!1))}),e(x,{class:"refer-and-earn-dialog"},{default:t(()=>[e(V,{class:"px-5 px-sm-16 pt-16 pb-10"},{default:t(()=>[Le,Te,e(Y,{class:"text-center mt-8"},{default:t(()=>[(D(),N(B,null,M(g,d=>e(p,{key:d.title,cols:"12",sm:"4"},{default:t(()=>[e(U,{variant:"tonal",size:"82",color:"primary",rounded:""},{default:t(()=>[e(m,{size:"50",icon:d.icon},null,8,["icon"])]),_:2},1024),s("h5",We,w(d.title),1),s("span",null,w(d.subtitle),1)]),_:2},1024)),64))]),_:1}),e($e,{class:"my-10"}),Ye,Ge,e(J,{class:"d-flex align-center gap-4",onSubmit:X(()=>{},["prevent"])},{default:t(()=>[e(n,{density:"compact",placeholder:"johnDoe@gmail.com"}),e(c,{type:"submit"},{default:t(()=>[o(" Submit ")]),_:1})]),_:1}),Oe,Qe,e(J,{class:"d-flex align-center flex-wrap gap-4",onSubmit:X(()=>{},["prevent"])},{default:t(()=>[e(n,{density:"compact",placeholder:"http://referral.link",class:"refer-link-input me-1"},{"append-inner":t(()=>[e(c,{variant:"text"},{default:t(()=>[o(" COPY LINK ")]),_:1})]),_:1}),s("div",qe,[e(c,{icon:"",class:"rounded",color:"#3B5998",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"tabler-brand-facebook",size:"22"})]),_:1}),e(c,{icon:"",class:"rounded",color:"#55ACEE",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"tabler-brand-twitter",size:"22"})]),_:1}),e(c,{icon:"",class:"rounded",color:"#007BB6",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"tabler-brand-linkedin",size:"22"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};const Ke=s("h3",{class:"text-h3 text-center mb-3"}," Share Project ",-1),He=s("p",{class:"text-sm-body-1 text-center mb-6"}," Share project with a team members ",-1),Xe=s("p",{class:"font-weight-medium mb-1"}," Add Members ",-1),Ze=s("h4",{class:"text-h4 mb-4 mt-8"}," 8 Members ",-1),et={class:"font-weight-medium"},tt={class:"text-disabled font-weight-medium text-body-1"},lt={class:"d-none d-sm-block"},at={class:"d-flex align-center justify-space-between flex-wrap gap-3 mt-6"},it={class:"text-h6 font-weight-medium d-flex align-start"},st=s("div",null,"Public to Master - ThemeSelection",-1),ot={__name:"ShareProjectDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(P,{emit:C}){const _=P,b=C,u=f=>{b("update:isDialogVisible",f)},g=[{avatar:be,name:"Lester Palmer",email:"jerrod98@gmail.com",permission:"Can Edit"},{avatar:ge,name:"Mattie Blair",email:"prudence.boehm@yahoo.com",permission:"Owner"},{avatar:ve,name:"Marvin Wheeler",email:"rumet@jujpejah.net",permission:"Can Comment"},{avatar:xe,name:"Nannie Ford",email:"negza@nuv.io",permission:"Can View"},{avatar:Ve,name:"Julian Murphy",email:"lunebame@umdomgu.net",permission:"Can Edit"},{avatar:he,name:"Sophie Gilbert",email:"ha@sugit.gov",permission:"Can View"},{avatar:ye,name:"Chris Watkins",email:"zokap@mak.org",permission:"Can Comment"},{avatar:De,name:"Adelaide Nichols",email:"ujinomu@jigo.com",permission:"Can Edit"}];return(f,v)=>{const k=K,n=Ae;return D(),j(H,{"model-value":_.isDialogVisible,"max-width":"800","onUpdate:modelValue":u},{default:t(()=>[e(k,{onClick:v[0]||(v[0]=d=>f.$emit("update:isDialogVisible",!1))}),e(x,{class:"share-project-dialog pa-5 pa-sm-8"},{default:t(()=>[e(V,null,{default:t(()=>[Ke,He,Xe,e(n,{items:g,"item-title":"name","item-value":"name",placeholder:"Add project members...",density:"compact"},{item:t(({props:d,item:A})=>[e(z,fe(_e(d)),{prepend:t(()=>[e(U,{image:A.raw.avatar,size:"30"},null,8,["image"])]),_:2},1040)]),_:1}),Ze,e(I,{class:"card-list"},{default:t(()=>[(D(),N(B,null,M(g,d=>e(z,{key:d.name},{prepend:t(()=>[e(U,{image:d.avatar},null,8,["image"])]),append:t(()=>[e(c,{variant:"plain",color:"default",icon:f.$vuetify.display.xs},{default:t(()=>[s("span",lt,w(d.permission),1),e(m,{icon:"tabler-chevron-down"}),e(Ee,{activator:"parent"},{default:t(()=>[e(I,{selected:[d.permission]},{default:t(()=>[(D(),N(B,null,M(["Owner","Can Edit","Can Comment","Can View"],(A,F)=>e(z,{key:F,value:A},{default:t(()=>[e(L,null,{default:t(()=>[o(w(A),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:2},1032,["selected"])]),_:2},1024)]),_:2},1032,["icon"])]),default:t(()=>[e(L,null,{default:t(()=>[s("span",et,w(d.name),1)]),_:2},1024),e(W,null,{default:t(()=>[s("span",tt,w(d.email),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),s("div",at,[s("h6",it,[e(m,{icon:"tabler-users",class:"me-2",size:"20"}),st]),e(c,{class:"text-capitalize"},{default:t(()=>[o(" Copy Project Link ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value"])}}};const nt=s("p",{class:"text-base clamp-text"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),rt=s("p",{class:"text-base clamp-text"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),dt=s("p",{class:"text-base clamp-text"}," Elegant pricing options dialog popup example, easy to use in any page. ",-1),ut=s("p",{class:"text-base clamp-text"}," Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. ",-1),mt=s("p",{class:"text-base clamp-text"}," Ready to use form to collect user address data with validation and custom input support. ",-1),ct=s("p",{class:"text-base clamp-text"}," Provide application data with this form to create the app dialog popup example, easy to use in any page. ",-1),pt=s("p",{class:"text-base clamp-text"}," Enhance your application security by enabling two factor authentication. ",-1),ft=s("p",{class:"text-base clamp-text"}," Enhance your application security by enabling two factor authentication. ",-1),_t=s("p",{class:"text-base clamp-text"}," Elegant payment options modal popup example, easy to use in any page. ",-1),bt=s("p",{class:"text-base clamp-text"}," Elegant payment methods modal popup example, easy to use in any page. ",-1),gl={__name:"index",setup(P){const C=h(!1),_=h(!1),b=h(!1),u=h(!1),g=h(!1),f=h(!1),v=h(!1),k=h(!1),n=h(!1),d=h(!1),A={id:110,fullName:"Selena Kyle",company:"pixinvent",role:"Web developer",username:"charwomen1940",country:"USA",contact:"(829) 537-0057",email:"irena.dubrovna@wayne.com",currentPlan:"",status:"active",avatar:"",taskDone:null,projectDone:null,taxId:"Tax-8894",language:"English"};return(F,l)=>{const G=ot,O=re,E=Se,a=Je,T=ke,ee=Ie,te=de,le=ne,ae=se,ie=oe;return D(),j(Y,null,{default:t(()=>[e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-file"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Share Project")]),_:1})]),_:1}),e(V,null,{default:t(()=>[nt,e(c,{onClick:l[0]||(l[0]=r=>f.value=!i(f))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(G,{isDialogVisible:i(f),"onUpdate:isDialogVisible":l[1]||(l[1]=r=>y(f)?f.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-credit-card"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add New Card")]),_:1})]),_:1}),e(V,null,{default:t(()=>[rt,e(c,{onClick:l[2]||(l[2]=r=>C.value=!i(C))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(O,{isDialogVisible:i(C),"onUpdate:isDialogVisible":l[3]||(l[3]=r=>y(C)?C.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-currency-dollar"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Pricing")]),_:1})]),_:1}),e(V,null,{default:t(()=>[dt,e(c,{onClick:l[4]||(l[4]=r=>_.value=!i(_))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(E,{"is-dialog-visible":i(_),"onUpdate:isDialogVisible":l[5]||(l[5]=r=>y(_)?_.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-gift"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Refer & Earn")]),_:1})]),_:1}),e(V,null,{default:t(()=>[ut,e(c,{onClick:l[6]||(l[6]=r=>v.value=!i(v))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(a,{"is-dialog-visible":i(v),"onUpdate:isDialogVisible":l[7]||(l[7]=r=>y(v)?v.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-home"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add New Address")]),_:1})]),_:1}),e(V,null,{default:t(()=>[mt,e(c,{onClick:l[8]||(l[8]=r=>b.value=!i(b))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(T,{isDialogVisible:i(b),"onUpdate:isDialogVisible":l[9]||(l[9]=r=>y(b)?b.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-box"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Create App")]),_:1})]),_:1}),e(V,null,{default:t(()=>[ct,e(c,{onClick:l[10]||(l[10]=r=>d.value=!i(d))},{default:t(()=>[o(" Show ")]),_:1})]),_:1})]),_:1}),e(ee,{"is-dialog-visible":i(d),"onUpdate:isDialogVisible":l[11]||(l[11]=r=>y(d)?d.value=r:null)},null,8,["is-dialog-visible"])]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-lock"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Two Factor Auth")]),_:1})]),_:1}),e(V,null,{default:t(()=>[pt,e(c,{onClick:l[12]||(l[12]=r=>u.value=!i(u))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(te,{isDialogVisible:i(u),"onUpdate:isDialogVisible":l[13]||(l[13]=r=>y(u)?u.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-lock"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Edit User Info")]),_:1})]),_:1}),e(V,null,{default:t(()=>[ft,e(c,{onClick:l[14]||(l[14]=r=>g.value=!i(g))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(le,{isDialogVisible:i(g),"onUpdate:isDialogVisible":l[15]||(l[15]=r=>y(g)?g.value=r:null),"user-data":A},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-brand-mastercard"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Payment Providers")]),_:1})]),_:1}),e(V,null,{default:t(()=>[_t,e(c,{onClick:l[16]||(l[16]=r=>k.value=!i(k))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(ae,{"is-dialog-visible":i(k),"onUpdate:isDialogVisible":l[17]||(l[17]=r=>y(k)?k.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(x,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"tabler-credit-card"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add Payment Methods")]),_:1})]),_:1}),e(V,null,{default:t(()=>[bt,e(c,{onClick:l[18]||(l[18]=r=>n.value=!i(n))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(ie,{"is-dialog-visible":i(n),"onUpdate:isDialogVisible":l[19]||(l[19]=r=>y(n)?n.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1})]),_:1})}}};export{gl as default};
