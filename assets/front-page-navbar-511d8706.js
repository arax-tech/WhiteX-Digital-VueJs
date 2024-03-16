import{_ as se}from"./AppTextField-a8f30c8f.js";import{V as j}from"./VNodeRenderer-e4ac41d5.js";import{a as M,o as u,c as h,d as e,b as t,e as n,I as f,z as i,cM as N,G as y,ag as X,E as C,F as x,C as I,f as K,H as ne,ai as le,a1 as V,J as W,K as q,as as $,r as Y,aK as _,t as B,bx as ie,w as Q,s as re,aW as Ae,bP as ce,ao as ee,aP as de,bp as me,by as ue,bR as pe,Y as P,aF as te,B as ae,bC as ge,d5 as ve,n as he,L as fe,a2 as G}from"./index-c4e71550.js";import{u as T}from"./useGenerateImageVariant-e1eabe90.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as be,a as L}from"./VRow-3a397f81.js";import{V as we}from"./VForm-617abc97.js";import{V as ye}from"./VChip-a642ea45.js";import{V as H}from"./VImg-8451f417.js";import{V as Z}from"./VContainer-27ffe3ab.js";import{V as F}from"./VAvatar-0d338c12.js";import Ce from"./NavbarThemeSwitcher-94c77673.js";import{V as Be}from"./VNavigationDrawer-b10cd8de.js";import{m as xe,V as J,b as Ue,a as ke}from"./VToolbar-5fa05916.js";import{V as Se}from"./VMenu-3432c545.js";import{V as Ie}from"./VCard-71b3ac17.js";import{V as Re}from"./VCardText-6669d6f5.js";import{V as Ve}from"./VSpacer-2306cb40.js";import{u as Ee}from"./ssrBoot-3f554f90.js";const _e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJuSURBVHgBvZfRcdpAEIZ3T4SnPKgENCYPBEOsDqCCmAoCFTCUQAWxK4BUYFIB6sDEcuyHkJFSQTQZwwvSbfYEIkIQYQPnb4YBVrv62dPe3gJwQlz3R0O98nwEnELoweu69z9/A+IYUXzK8y3AEXieZz7NohuQUSOxEclfeTFHZTibRZ/5rZExO3kxCAdy933aRoLB5s3QPz8/s/LiDs4QCbtZ28IQzX1xBwne3nomP62LtI0kdOyK5e+LPUiwUAjTYg5XSrNeLw+fFZt3UVVhEIBpmhBYlhUk9jAsTIrFRUdK9Gu1d07iO58vSmwz+bpv27uzxV0iT3PZRaA2EZTWjogTCXT9RhhOZbV0yvfPTLYF0EfIVKsqIF5oxzCMfiW11BuCdw/TS5TIlUcm5OOswi/2+SphKahXf18eLb+vUN2CN/AVaIIEtJRoXDSPj15JpxjnFUAI8UrERRNG0QC0gUGIomnXrYn6JlbdvQGaIKSeXV2KKThDvARNqIKpVc+GaZtg6wfQhETqZ22C4tLWA0ryszaB+/fcwaiOk7Wd5MR/CWpJA9BEsfhvElgLcqvxQROSYGu+ESSjb6CPrSlOkDAmoBGe4gZx60wEpSFGoBECKkWRHCei8Wnh3k/HoLG9JfB52hPLD/gVXgE+xIOl4EIMdW6PWIz7ar1aHsaCPH8ESPIaNJL01XWn4TZ0tZxDTk+S3YagypL/F3RAA+kBeaOXxiMfwUmXVhL17f9NbQmuO73hK8cfzASjWq3cSpt2nhZhaHR2ZRo/Y/7FPNa3woVhqYmbt1Rv17MnkF/Ct0Zn+x45ZOYdJ5myj/H9CxGqCa3djCMgAAAAAElFTkSuQmCC",Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKqSURBVHgB7Zc/aBNhGMaf72ppzynFRbv0xF2UIuigVnBoFy2Cq56LU2vt0ohUTMRBaMUGOigFU7FDQTGpi9GIZilpoJLQqaGURESwITShmDYYc+f32sakubv08ufi0h8kJO/7kvz4nnsPDtjHDCmHDamRfjQRpqmk7kiAGuafbPwV5yMX0PEoDosRNJXsUXlHgpC4VAwpu3tbsJkiyZvA+lVAaS+tylzoM5eR0TQRYrMbSAwBvztKqxKX4Sdjj1lxOoJhhyRIhqR2I1kRl1CxS/FQTBsX9bpyI+MSTE2RSOJWeVSE1Ki4zIkQvzq3L+TcEb2uVG9c5kUIOpG1IaOoCLnWuKoTKUAi2hUvIBXjunsCJqlNhNBf8TKhfNhsXLWLEMYrXrTJbciLX1+E1ZBwH5aJEBVWvP/nCsLxaXRnf9igqg51gcXUYIsMS0QKlK34k8QneL57YFOypVMSmOJWg+iBZSIEX/Gu5cv4MO9L304tGs8xQXMRH0ADOb+8hCn3Y3QlD9vyfRm09K3qD6pKBFaJ3JubwejbmX/f8++OQV0X0XIlCibmCuU0t3CyMwg0XMS2mcGrSSfORZc0PSXUCXWlA60DX9I4lHGhHRPsJMloqUukGMWa8VDqYCD78OwNccEXr/RbNYsM+j0Yn31mPMAQVxgjgQBMULUIRTH1fByXwkGjkbQC5hJDPgeqoCqR499W8XryQaUovIrAhveKoS4RioK2gk6kHMYQybO/AgHUyJ4i9Mejcy8x+NGr106rDM620PsJ1ElFEYrAPzaiGwVjbLpVbB9mAW8aDcBQ5Nq8H2OzTzVRcIFAnp9CPTGYEpGSCQz43+hFsRODr+4YTIlE7df5u7qrxgVcbaLoaFQMpkT4jTlSeCS2KgbTbJ3qlbdO9/Zgn//IH4vuIpDi7RkVAAAAAElFTkSuQmCC",Qe="/assets/footer-bg-dark-06b203c0.png",Ye="/assets/footer-bg-light-b7ae3d87.png",Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB1VG7EYJAEN133KihsZElmBtIrAkl2Il2IB1oB5IwRg4taAWCWgCEOLjroRwQMORucLP3Pnf7ZkGtOka38Ygcr0EQw7bh+b4GsG8bBHJQtRZqQx2ly+MUPVwRmVqQIb4idWEqEt3lwkD7y/kk+fZh9Jw5JAsW8q3AuD0BZ0xItSLZGdJtv8DEAUk5F/uKekpMTG1yBvK7uy3GYJLyG1c0KSiq+aEzXVVD9n7xN4JqFzoGiq0F81ee2f4DYYNGUV2l6sQAAAAASUVORK5CYII=",Ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAARCAYAAADg1u3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB1VExEoJADEzC0WhjbYWlNPIEnuAT/Ik+gR/oE/gBT0A5KmFGKO2wvBEuInoDBUPPFjfZ5DabTBAGiOPHyrLfe8ORsUBDkiQ/IMF5KGDACxlCFh5hBOL7SJn5zOz0Sg5awbWudSlGVbQM3O267OI0vXtMYge66b1ZebHMNjZyhTLNozbnj3XqrGACSFSIdvzw397vKxAyY9UofUOzBSBGpm7RwnHd35CTFrP50N1CCFHUWp9MUqnny8QfRbFGrj13JZQAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHCSURBVHgBlVNLUsJAEO0eU+pOXVrF9wTiDYysBCzKEwAnEE4gOYF4g3gCWSisMLBwnxvw0dKlcUUFk7Q9wYSEQsDe9PRMz+t+PW8QVtiDMTzcByUHQBkZE4Blg2teqdnRqnxcvrzrKXVEuObwcDmZkPQZuNoyWAjSNT4yRK4RVF9nHnmNUj7dioH8ByAEQqyW1MS9XIv5lnvzC2AWzpNIRDUeRBuIWkytKdfE3kbnSCDU/ep8JunLtTLvwqlGqxTzKZ2dvqqDbm/yBYzMFOTw5ew07sSpBAncgQkbzBE4CinRvCtJ5yzMEO7dJpBLNdmXtH1K3M3Ty3taxDJ29z5hC2M2VhjM7KM4CG/AFkYU1xCDLDgKUMqbAORDsMsFcVHNmgIJ25EKzcfeuL4OYK6n0Pp+8SnOBuwtItQ9woZAcdt5ngw7g7dK9HLXeDVYCsOYIBF1H4T/gcXKqSFSdUfQAUkxEZq29z0Ici/U4xHvZaJdsRz0QlSxBTXlK1K+Owq0UDgN2R38aTSaCVcLIrEYUFJjShq40CRShnuknKy+D20b3dPoT1ai56V8osX82whOeQrOOHrGdFs8eLOQTw6WcX8AhSvRhJM2wPYAAAAASUVORK5CYII=",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgBlVPdcdpAEN47HfCSSeQKAhPwDLEQVgfpwCUYVxCoIFBBSAdKB+rApgIpiWJm8jNSXvIaZewHjHS33gMfFrZs7J2R9ke73+7efWJQIWGY2EIUh8iwuQoozGq1etTtttKqfFZRPATG3wOgfS+ZMd/ifHIXbAMynydNqdQp4k33R0QBjvpOZ7oF8hyA20Jr4Ditz9rm+kUAH9YAGPWcNkOlTmj2AAGnpMfa1rrIL/aAW0NdgyCnYRiuVhZ6ikLKQbmL6+77pPyqCb7GP/6zdW9b1F/S2cGEF0odmwQEFsGuNZClGwdxuF4H8Z2JSVCfdoH0ep0zUqaZfX7+9zUvJzT4i3/wNMmMcaUu97ZAdACeJlsc4kSg1DiCWUe7qvVFkDo0vufsR5xOOthkII6/xD+HjwFoPpVCZ6tJlkuY0ZlnxDpfSRxxYB/j77+TeJ4cl4u/xb9OiQpJmZDshgbc81oZKjxBgAEX/JUmE9lRvljMTLL+VxiDZnkqyvEdp33LWNdtB1wzk+6dkrNiyUcAi+yhtQgglXk+Mf7mdg4O3kxoHXrkWNRkYjXsfiUCg0DmF57ndVMTEuXv/X6H/od5IBr1I3m1+LPVnVlTZBC5b1uzu7jXUNzWZ36+37sAAAAASUVORK5CYII=",Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBnVNNTsJAFP7eiG7c1D0k7Q3oCaBdGYiJnkA9gXgCuQHeADyBboCVtDcAb0DowqVdYgJ9vlcgoT8Y8SWT6Xudb+b7vnlD2MbwPeoagwYz6pJaKI+YCDM2NGg1qi9aoBQ8iabyUcdxEbb8mkfDYHFHTP0/gmI5Uwbb6emErhHww+H1NN+Adil1Wn7VoU0dIrdZkdkuQYYG1Ln0qx+ajINPm3nVR8LX42BBzLzFsG2QN4zxptqY+EIW90fBorfEEloTxyzOyCWbRpOI9/HftHLOcWqtmKeZfYncBGydMIL9uskejvjGc+ZroOALIbm98mphxpP8Bv+JgoQ1wdM5RzUWae6ZSKOctAIDAT4pVaKKI/f0rEP0eyqNGK9lDL5QbN1QQI9trzrTZBxEzYTRK3Yrz3UDpdpEeewMO/Q2QiPtGOJwWL+AtTMH6WMSFmrMUY9JnJ+1/Zqbmihd5kp73isl5O45F/pP/EFXwVr4ASaglVmlwvGSAAAAAElFTkSuQmCC",Fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBnVPtTQJBEJ2Z5YwxMTk7wPiRaA5lK1ArEDugA+kArUCoACjBDo4KDgQlEQzXgZfwRzl2x10UhTsgwZdsbnYyb+bN7BzCHDqd/iUjZ2ENFGMoc0f+7I4zIhLVmNeTf0mIIbC68bzjFvZ6w+xE6QCAXdgMUUYISUrr8gZkHwhLRkNkbDdWk1sysvMrgxHvpsfaBoRcyZ0eVP9CsICd7oCTTCZxeXa63wyC4VSZlPtRu90viQzdMmtTHWdFI0rVNRIt+an7Ws846t2e7svbw/n5UcVMvD5HtnBTCibxaE84uwUTXEsmnnxSwyZccC9IBwillBEhXiSFsYa8bQURwpUJTFU3CALXfMNUZ8C+nQkzZFcmsD052+71eEx20v6c3/e8wwY5uphOnJSqVMVx4mzOO7xCEFLQztS222qCy4nwCLvPg2FS1rQdxLpm1fy2xTUwFyAFbmUYsGWMVAKzYEUEKv5cYBksl0DrKvwTKo7vKWd+TfNEN7xk8msQmfkUpTwJceaxzye23AsEnV/HROIw/hg92n2x9y8kIrH/6Vl+uQAAAABJRU5ErkJggg==",De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgBnVRBTkJBDG1HjS7ZmkCCJ5AbyNcVYCKcQDmB3EA4AXADPIEsFNwgcALwBHzAxKUsIfLnOR1C8j/5fIS3mEyn7eu00w7TnnjpjmJndJRfSexmnERv04ZlaXe/k5q8WM6JD6MI3zqTB2aumm3Md9wjRh2aU6ToJ+ck6pb0vTt91EAJrArbiCUwsBxFxOwxU2VOS1eJBBuZkwwMXjvjUriP90TRSGmiq4JzsSIljfFao1hVWx+TUav/dR/0QTKSEmiY1CuytelL8U9xMghxnJmUhiAMCSq/gzidvU707cVkOVUnd8S6GWIYAyhN4NLOm/pgSXmpeeV4OBa8/AyQzpXXlJ6jw9EzDzQLkMoB85EjSjoEzA2/qNabjHPummcz0eDSXoCbdeLPoaQCrbkv/Ur7gFV58yhAensTrwEo/re+mlHbvKWNE2bc7k7TGlQ1yhRtAUwdzUgXw3S8JrGCoktoytvejACYSvJxbNMfWyPI+FMZXiTZTEZxoby6zHeEXTB9+YkYv5cmtZTPYGZKMZTm9vdiFP4A1KWn8KHURH8AAAAASUVORK5CYII=",ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGsSURBVHgBpZTdUcJAEMd3L6A+UgKOHzNqEFKBsQK1ArUC6UCtQOgAO6AEqCB8KQ/oBCswr06yt96GYQxMOAX/DzfZ293ffezmENZUEIQlpxhfyjcxTr3KQWc5BmUYj8MyUVxy3cOeDTgYvN2gwicALmWmO6ypiahq4KjPyvFeM4UOX8M7ZF0HpqtVYFk4IQota3aA+TFJkqlKTdYlZi4zqKA/mtTzMkjre7AKa6DUmecdzaDM9DF3KcCn0ct7OBqH19kUWdSGZNCtysneY4qXYXb5FBhjKREjE95jwJ5CuLSBWTn+6fFud7Yxo+IOXBhAOydUCuIjcP23nWaVQjXFKInwD9FX1F+AUlxsM8AUNlfH87xoAep5uxHF8bk4YQOZWrSytpp/SCsYb2SKMoU1JCd03f3nXKhIJ9w1d1uGNWQADzlzP6pWDxqs9e1f75eBG8u7FGFe8HA48QHlH4carJBpl5Z7sn+b5yvIEAhEDKdQNf0lL5APNimsu+bhWOVOodtOgUnTgwH6FpQpIrcoTpppUS1aOH4QjMvO1k4VQdcyEQametLc2V606RtOU7oRhbSIrQAAAABJRU5ErkJggg==";const O=o=>(W("data-v-56600d10"),o=o(),q(),o),Ke={class:"footer"},Pe={class:"d-flex align-center gap-x-3 mb-4"},Ge={class:"text-h3 text-white text-capitalize"},He=O(()=>e("div",{class:"font-weight-medium mb-6"}," Demos ",-1)),Ze={style:{"list-style":"none"}},Je=["href"],je=O(()=>e("div",{class:"font-weight-medium mb-6"}," Pages ",-1)),We={style:{"list-style":"none"}},qe=O(()=>e("div",{class:"font-weight-medium mb-6"}," Download our app ",-1)),$e={class:"d-flex gap-x-3"},et={class:"d-flex flex-column justify-content-start"},tt={class:"text-white-variant footer-line w-100"},at={class:"d-flex justify-space-between flex-wrap gap-y-4 align-center"},ot={class:"text-wrap me-4"},st=O(()=>e("a",{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer",class:"font-weight-bold ms-1 text-white"},"Pixinvent",-1)),nt={class:"d-flex gap-x-6"},lt=["href"],it={__name:"front-page-footer",setup(o){const U=T(Me,Oe),b=T(ze,De),k=T(Ne,Le),p=T(Fe,Xe),r=T(Ye,Qe),d=[{name:"Pricing",to:{name:"front-pages-pricing"}},{name:"Payment",to:{name:"front-pages-payment"},isNew:!0},{name:"Checkout",to:{name:"front-pages-checkout"}},{name:"Help Center",to:{name:"front-pages-help-center"}},{name:"Login/Register",to:{name:"pages-authentication-login-v2"}}],g=[{title:"Vertical Layout",to:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/dashboards/analytics"},{title:"Horizontal Layout",to:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-5/dashboards/analytics"},{title:"Bordered Layout",to:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/dashboards/analytics"},{title:"Semi Dark Layout",to:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-3/dashboards/analytics"},{title:"Dark Layout",to:"https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/dashboards/analytics"}];return(m,S)=>{const v=se,R=M("RouterLink");return u(),h("div",Ke,[e("div",{class:"footer-top pt-15",style:le({"background-image":`url(${i(r)})`})},[t(Z,null,{default:n(()=>[t(be,null,{default:n(()=>[t(L,{cols:"12",md:"5"},{default:n(()=>[e("div",{class:f(["mb-4",m.$vuetify.display.smAndDown?"w-100":"w-75"])},[e("div",Pe,[t(i(j),{nodes:i(N).app.logo},null,8,["nodes"]),e("h3",Ge,y(i(N).app.title),1)]),e("div",{class:f(["mb-8",m.$vuetify.theme.current.dark?"text-body-1":"text-white-variant"])}," Most Powerful & Comprehensive 🤩 Vuejs Admin Template with Elegant Material Design & Unique Layouts. ",2),t(we,{class:"subscribe-form d-flex align-center"},{default:n(()=>[t(v,{label:"Subscribe to newsletter",placeholder:"john@email.co",density:"compact"}),t(X,{class:"align-self-end rounded-s-0",height:"40"},{default:n(()=>[C(" Subscribe ")]),_:1})]),_:1})],2)]),_:1}),t(L,{cols:"12",md:"2",sm:"4"},{default:n(()=>[e("div",null,[He,e("ul",Ze,[(u(),h(x,null,I(g,(s,a)=>e("li",{key:a,class:"mb-4"},[e("a",{href:s.to,target:"_blank",rel:"noopener noreferrer",class:f(m.$vuetify.theme.current.dark?"text-body-1":"text-white-variant")},y(s.title),11,Je)])),64))])])]),_:1}),t(L,{cols:"12",md:"2",sm:"4"},{default:n(()=>[e("div",null,[je,e("ul",We,[(u(),h(x,null,I(d,(s,a)=>e("li",{key:a,class:"mb-4"},[t(R,{class:f([m.$vuetify.theme.current.dark?"text-body-1":"text-white-variant","me-2"]),to:s.to},{default:n(()=>[C(y(s.name),1)]),_:2},1032,["class","to"]),s.isNew?(u(),K(ye,{key:0,color:"primary",variant:"elevated",label:""},{default:n(()=>[C(" New ")]),_:1})):ne("",!0)])),64))])])]),_:1}),t(L,{cols:"12",md:"3",sm:"4"},{default:n(()=>[e("div",null,[qe,e("div",null,[(u(!0),h(x,null,I([{image:i(_e),store:"App Store"},{image:i(Te),store:"Google Play"}],(s,a)=>(u(),K(X,{key:a,color:"#282C3E",size:"x-large",class:"mb-4 d-block"},{default:n(()=>[e("div",$e,[e("div",null,[t(H,{src:s.image,height:"34",width:"34"},null,8,["src"])]),e("div",et,[e("div",{class:f([m.$vuetify.theme.current.dark?"text-body-2":"text-white-variant text-base","font-weight-normal"])}," Download on the ",2),e("div",{class:f(["font-weight-medium text-start",m.$vuetify.theme.current.dark?"text-body-1":"text-white-variant text-base"])},y(s.store),3)])])]),_:2},1024))),128))])])]),_:1})]),_:1})]),_:1})],4),e("div",tt,[t(Z,null,{default:n(()=>[e("div",at,[e("span",ot,[C(" © "+y(new Date().getFullYear())+" ",1),st,C(", Made With "),t(V,{icon:"tabler-heart-filled",color:"error",size:"1.25rem",class:"mx-1"}),C(" for a better web. ")]),e("div",nt,[(u(!0),h(x,null,I([{title:"github",icon:i(U),href:"https://github.com/pixinvent"},{title:"facebook",icon:i(k),href:"https://www.facebook.com/pixinvents/"},{title:"twitter",icon:i(b),href:"https://twitter.com/pixinvents"},{title:"instagram",icon:i(p),href:"https://www.instagram.com/pixinvents/"}],(s,a)=>(u(),h("a",{key:a,href:s.href,target:"_blank",rel:"noopener noreferrer"},[t(F,{size:"16",class:"rounded-0"},{default:n(()=>[t(H,{src:s.icon,width:"16"},null,8,["src"])]),_:2},1024)],8,lt))),128))])])]),_:1})])])}}},qt=oe(it,[["__scopeId","data-v-56600d10"]]),rt="/assets/nav-item-col-img-4bcbe767.png";const At=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ct(o){let U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:b}=U;let k=0;const p=Y(null),r=_(0),d=_(0),g=_(0),m=_(!1),S=_(!1),v=B(()=>Number(o.scrollThreshold)),R=B(()=>ie((v.value-r.value)/v.value||0)),s=()=>{const a=p.value;!a||b&&!b.value||(k=r.value,r.value="window"in a?a.pageYOffset:a.scrollTop,S.value=r.value<k,g.value=Math.abs(r.value-v.value))};return Q(S,()=>{d.value=d.value||r.value}),Q(m,()=>{d.value=0}),re(()=>{Q(()=>o.scrollTarget,a=>{var E;const w=a?document.querySelector(a):window;w&&w!==p.value&&((E=p.value)==null||E.removeEventListener("scroll",s),p.value=w,p.value.addEventListener("scroll",s,{passive:!0}))},{immediate:!0})}),Ae(()=>{var a;(a=p.value)==null||a.removeEventListener("scroll",s)}),b&&Q(b,s,{immediate:!0}),{scrollThreshold:v,currentScroll:r,currentThreshold:g,isScrollActive:m,scrollRatio:R,isScrollingUp:S,savedScroll:d}}const dt=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:o=>["top","bottom"].includes(o)},...xe(),...ce(),...At(),height:{type:[Number,String],default:64}},"VAppBar"),mt=ee()({name:"VAppBar",props:dt(),emits:{"update:modelValue":o=>!0},setup(o,U){let{slots:b}=U;const k=Y(),p=de(o,"modelValue"),r=B(()=>{var c;const A=new Set(((c=o.scrollBehavior)==null?void 0:c.split(" "))??[]);return{hide:A.has("hide"),inverted:A.has("inverted"),collapse:A.has("collapse"),elevate:A.has("elevate"),fadeImage:A.has("fade-image")}}),d=B(()=>{const A=r.value;return A.hide||A.inverted||A.collapse||A.elevate||A.fadeImage||!p.value}),{currentScroll:g,scrollThreshold:m,isScrollingUp:S,scrollRatio:v}=ct(o,{canScroll:d}),R=B(()=>o.collapse||r.value.collapse&&(r.value.inverted?v.value>0:v.value===0)),s=B(()=>o.flat||r.value.elevate&&(r.value.inverted?g.value>0:g.value===0)),a=B(()=>r.value.fadeImage?r.value.inverted?1-v.value:v.value:void 0),w=B(()=>{var D,z;if(r.value.hide&&r.value.inverted)return 0;const A=((D=k.value)==null?void 0:D.contentHeight)??0,c=((z=k.value)==null?void 0:z.extensionHeight)??0;return A+c});me(B(()=>!!o.scrollBehavior),()=>{ue(()=>{r.value.hide?r.value.inverted?p.value=g.value>m.value:p.value=S.value||g.value<m.value:p.value=!0})});const{ssrBootStyles:E}=Ee(),{layoutItemStyles:l}=pe({id:o.name,order:B(()=>parseInt(o.order,10)),position:P(o,"location"),layoutSize:w,elementSize:_(void 0),active:p,absolute:P(o,"absolute")});return te(()=>{const[A]=J.filterProps(o);return t(J,ae({ref:k,class:["v-app-bar",{"v-app-bar--bottom":o.location==="bottom"},o.class],style:[{...l.value,"--v-toolbar-image-opacity":a.value,height:void 0,...E.value},o.style]},A,{collapse:R.value,flat:s.value}),b)}),{}}}),ut=ee()({name:"VAppBarTitle",props:Ue(),setup(o,U){let{slots:b}=U;return te(()=>t(ke,ae(o,{class:"v-app-bar-title"}),b)),{}}}),pt=o=>(W("data-v-d0611bcb"),o=o(),q(),o),gt={class:"d-flex flex-column gap-y-4 pa-4"},vt={class:"font-weight-medium cursor-pointer"},ht={class:"d-flex align-center gap-x-3 mb-4"},ft={class:"text-body-1 text-high-emphasis font-weight-medium"},bt={class:"mb-6"},wt={class:"front-page-navbar"},yt={class:"d-flex align-center"},Ct={class:"d-flex gap-x-3 align-center"},Bt={class:"text-h4 text-capitalize text-truncate font-weight-bold"},xt={class:"text-base align-center d-none d-md-flex"},Ut={class:"nav-menu"},kt={class:"d-flex align-center gap-x-3 mb-6"},St={class:"text-body-1 text-high-emphasis font-weight-medium"},It={class:"d-flex align-center"},Rt=["src","width","height"],Vt={class:"d-flex gap-x-4"},Et=pt(()=>e("span",{class:"d-none d-lg-block ms-2"},"Purchase Now",-1)),_t={__name:"front-page-navbar",props:{activeId:String},setup(o){const U=o,b=ge(),{y:k}=ve(),p=he(),r=fe(),d=Y(!1);Q(()=>b,()=>b.mdAndUp?d.value=!1:d.value,{deep:!0});const g=Y(!1),m=Y(!1),S=[{listTitle:"Page",listIcon:"tabler-layout-grid",navItems:[{name:"Pricing",to:{name:"front-pages-pricing"}},{name:"Payment",to:{name:"front-pages-payment"}},{name:"Checkout",to:{name:"front-pages-checkout"}},{name:"Help Center",to:{name:"front-pages-help-center"}}]},{listTitle:"Auth Demo",listIcon:"tabler-lock-open",navItems:[{name:"Login (Basic)",to:{name:"pages-authentication-login-v1"}},{name:"Login (Cover)",to:{name:"pages-authentication-login-v2"}},{name:"Register (Basic)",to:{name:"pages-authentication-register-v1"}},{name:"Register (Cover)",to:{name:"pages-authentication-register-v2"}},{name:"Register (Multi-steps)",to:{name:"pages-authentication-register-multi-steps"}},{name:"Forgot Password (Basic)",to:{name:"pages-authentication-forgot-password-v1"}},{name:"Forgot Password (Cover)",to:{name:"pages-authentication-forgot-password-v2"}},{name:"Reset Password (Basic)",to:{name:"pages-authentication-reset-password-v1"}},{name:"Reset Password (cover  )",to:{name:"pages-authentication-reset-password-v2"}}]},{listTitle:"Other",listIcon:"tabler-photo",navItems:[{name:"Under Maintenance",to:{name:"pages-misc-under-maintenance"}},{name:"Coming Soon",to:{name:"pages-misc-coming-soon"}},{name:"Not Authorized",to:{path:"/not-authorized"}},{name:"Verify Email (Basic)",to:{name:"pages-authentication-verify-email-v1"}},{name:"Verify Email (Cover)",to:{name:"pages-authentication-verify-email-v2"}},{name:"Two Steps (Basic)",to:{name:"pages-authentication-two-steps-v1"}},{name:"Two Steps (Cover)",to:{name:"pages-authentication-two-steps-v2"}}]}],v=s=>p.matched.some(a=>a.path===r.resolve(s).path),R=B(()=>S.some(s=>s.navItems.some(a=>v(a.to))));return(s,a)=>{const w=M("RouterLink"),E=M("IconBtn");return u(),h(x,null,[t(Be,{modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=l=>G(d)?d.value=l:null),width:"275","disable-resize-watcher":""},{default:n(()=>[e("div",null,[e("div",gt,[(u(),h(x,null,I(["Home","Features","Team","FAQ","Contact us"],(l,A)=>{var c;return t(w,{key:A,to:{name:"front-pages-landing-page",hash:`#${l.toLowerCase().replace(" ","-")}`},class:f(["nav-link font-weight-medium",[((c=U.activeId)==null?void 0:c.toLocaleLowerCase().replace("-"," "))===l.toLocaleLowerCase()?"active-link":""]])},{default:n(()=>[C(y(l),1)]),_:2},1032,["to","class"])}),64)),e("div",vt,[e("div",{class:f([[i(g)?"mb-6 active-link":"",i(R)?"active-link":""],"page-link"]),style:{color:"rgba(var(--v-theme-on-surface))"},onClick:a[0]||(a[0]=l=>g.value=!i(g))},[C(" Pages "),t(V,{icon:i(g)?"tabler-chevron-up":"tabler-chevron-down"},null,8,["icon"])],2),e("div",{class:f(["px-4",i(g)?"d-block":"d-none"])},[(u(),h(x,null,I(S,(l,A)=>e("div",{key:A},[e("div",ht,[t(F,{variant:"tonal",color:"primary",rounded:"",icon:l.listIcon},null,8,["icon"]),e("div",ft,y(l.listTitle),1)]),e("ul",bt,[(u(!0),h(x,null,I(l.navItems,c=>(u(),h("li",{key:c.name,style:{"list-style":"none"},class:"text-body-1 mb-4 text-no-wrap"},[t(w,{to:c.to,target:l.listTitle==="Page"?"_self":"_blank",class:f(["mega-menu-item",v(c.to)?"active-link":"text-high-emphasis"])},{default:n(()=>[t(V,{icon:"tabler-circle",size:10,class:"me-2"}),e("span",null,y(c.name),1)]),_:2},1032,["to","target","class"])]))),128))])])),64))],2)]),t(w,{to:"/",target:"_blank",class:"font-weight-medium nav-link"},{default:n(()=>[C(" Admin ")]),_:1})])]),t(V,{id:"navigation-drawer-close-btn",icon:"tabler-x",size:"20",onClick:a[1]||(a[1]=l=>d.value=!i(d))})]),_:1},8,["modelValue"]),e("div",wt,[t(mt,{color:s.$vuetify.theme.current.dark?"rgba(var(--v-theme-background))":"rgba(255,255,255, 0.38)",class:f([i(k)>10?"app-bar-scrolled":[s.$vuetify.theme.current.dark?"app-bar-dark":"app-bar-light","elevation-0"],"navbar-blur"])},{default:n(()=>[t(E,{id:"vertical-nav-toggle-btn",class:"ms-n3 me-2 d-inline-block d-md-none",onClick:a[3]||(a[3]=l=>d.value=!i(d))},{default:n(()=>[t(V,{size:"26",icon:"tabler-menu-2",color:"rgba(var(--v-theme-on-surface))"})]),_:1}),e("div",yt,[t(ut,{class:"me-6"},{default:n(()=>[t(w,{to:"/",class:f(["d-flex gap-x-4",s.$vuetify.display.mdAndUp?"d-none":"d-block"])},{default:n(()=>[e("div",Ct,[t(i(j),{nodes:i(N).app.logo},null,8,["nodes"]),e("h4",Bt,y(i(N).app.title),1)])]),_:1},8,["class"])]),_:1}),e("div",xt,[(u(),h(x,null,I(["Home","Features","Team","FAQ","Contact us"],(l,A)=>{var c;return t(w,{key:A,to:{name:"front-pages-landing-page",hash:`#${l.toLowerCase().replace(" ","-")}`},class:f(["nav-link font-weight-medium py-2 px-2 px-lg-4",[((c=U.activeId)==null?void 0:c.toLocaleLowerCase().replace("-"," "))===l.toLocaleLowerCase()?"active-link":""]])},{default:n(()=>[C(y(l),1)]),_:2},1032,["to","class"])}),64)),e("span",{class:f(["font-weight-medium cursor-pointer px-2 px-lg-4 py-2",i(R)||i(m)?"active-link":""]),style:{color:"rgba(var(--v-theme-on-surface))"}},[C(" Pages "),t(V,{icon:"tabler-chevron-down",size:"12"}),t(Se,{modelValue:i(m),"onUpdate:modelValue":a[4]||(a[4]=l=>G(m)?m.value=l:null),"open-on-hover":"",activator:"parent",transition:"slide-y-transition",location:"bottom center",offset:"16","content-class":"mega-menu","location-strategy":"static","close-on-content-click":""},{default:n(()=>[t(Ie,{"max-width":"1000"},{default:n(()=>[t(Re,{class:"pa-8"},{default:n(()=>[e("div",Ut,[(u(),h(x,null,I(S,(l,A)=>e("div",{key:A},[e("div",kt,[t(F,{variant:"tonal",color:"primary",rounded:"",icon:l.listIcon},null,8,["icon"]),e("div",St,y(l.listTitle),1)]),e("ul",null,[(u(!0),h(x,null,I(l.navItems,c=>(u(),h("li",{key:c.name,style:{"list-style":"none"},class:"text-body-1 mb-4 text-no-wrap"},[t(w,{class:f(["mega-menu-item",v(c.to)?"active-link":"text-high-emphasis"]),to:c.to,target:l.listTitle==="Page"?"_self":"_blank"},{default:n(()=>[e("div",It,[t(V,{icon:"tabler-circle",color:"primary",size:10,class:"me-2"}),e("span",null,y(c.name),1)])]),_:2},1032,["to","target","class"])]))),128))])])),64)),e("img",{src:i(rt),alt:"Navigation Image",class:"d-inline-block rounded-lg",style:{border:"10px solid rgb(var(--v-theme-background))"},width:s.$vuetify.display.lgAndUp?"330":"250",height:s.$vuetify.display.lgAndUp?"330":"250"},null,8,Rt)])]),_:1})]),_:1})]),_:1},8,["modelValue"])],2),t(w,{to:"/",target:"_blank",class:"nav-link font-weight-medium px-2 px-lg-4 py-2"},{default:n(()=>[C(" Admin ")]),_:1})])]),t(Ve),e("div",Vt,[t(Ce),t(X,{variant:"elevated",color:"primary",href:"https://themeforest.net/item/vuexy-vuejs-html-laravel-admin-dashboard-template/23328599?irgwc=1&clickid=T9302WQDcxyNR6%3AwXJ3nw0x2UkFyW3Xmfwd-V00&iradid=275988&irpid=1244113&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1244113&utm_medium=affiliate&utm_source=impact_radius",target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[t(V,{icon:"tabler-shopping-cart",size:"18"}),Et]),_:1})])]),_:1},8,["color","class"])])],64)}}},$t=oe(_t,[["__scopeId","data-v-d0611bcb"]]);export{qt as F,$t as N};
