(this["webpackJsonpreact-examples"]=this["webpackJsonpreact-examples"]||[]).push([[0],{101:function(e,a,t){e.exports=t(138)},106:function(e,a,t){},131:function(e,a,t){},136:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),c=t.n(l),i=(t(106),t(95)),o=t(21),s=t(22),m=t(23),d=t(24),u=t(96),p=t(8),h=t(159),g=t(5),f=t.n(g),E=t(166),b=t(42),v=t(158),y=f()((function(e){return{button:{backgroundColor:"#01CAFF",borderRadius:20,color:"#091E4B",padding:"10px 20px","&:hover":{backgroundColor:"#a71ce6",color:"#fff"}}}}));var x=Object(E.a)()((function(e){var a=e.children,t=Object(b.a)(e,["children"]),r=y();return n.a.createElement(v.a,Object.assign({classes:{root:r.button}},t),a)})),C=f()((function(e){return{grid:{backgroundColor:"#090d40"},msg:{position:"absolute",top:100,width:"100%",textAlign:"center",color:"#fff"},button:{margin:"20px 0"}}}));var w=Object(E.a)()((function(e){var a=C();return n.a.createElement(h.a,{item:!0,justify:"center",alignItems:"center",className:a.grid},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593611464/react-examples/maintenance.png",alt:"under maintenance"}),n.a.createElement("div",{className:a.msg},n.a.createElement("h1",null,"Good things are on the way"),n.a.createElement("p",null,"Our site is improving all content and soon we'll update our content. Thanks, you are our motivation!!!"),n.a.createElement(x,{className:a.button,onClick:function(){return e.history.push("/")}},"Go Home")))})),j=t(71),k=t(160),N=t(161),O=t(162),D=t(94),S=t.n(D),z=t(164),B=t(55),M=t(93),T=t.n(M),F=(t(131),f()((function(e){return{card:{color:"#2ba0e4",cursor:"pointer","&:hover":{color:"#fff",backgroundColor:"#12b4e4",boxShadow:"#288ce6 0px 0px 8px 2px"}}}})));var L=Object(E.a)()((function(e){var a=F(),t=["xs"].includes(e.width),l=Object(r.useState)(""),c=Object(j.a)(l,2),i=(c[0],c[1],Object(r.useState)("")),o=Object(j.a)(i,2),s=o[0],m=o[1],d=Object(r.useState)(null),u=Object(j.a)(d,2),p=u[0],g=u[1],f=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&m(e)}},E=function(e){return b&&b.cancel&&b.cancel(),g(e)},b=T.a.debounce((function(e){g(null)}),200),v=function(){return n.a.createElement("ul",{className:"headerMenu"},n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#",onMouseEnter:function(){return E("ui")},onMouseLeave:function(){return b(null)}},"UI")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#",onMouseEnter:function(){return E("media")},onMouseLeave:function(){return b(null)}},"Media")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#",onMouseEnter:function(){return E("element")},onMouseLeave:function(){return b(null)}},"Elements")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#",onMouseEnter:function(){return E("input")},onMouseLeave:function(){return b(null)}},"Input")),n.a.createElement("li",null,n.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"},n.a.createElement("input",{type:"hidden",name:"cmd",value:"_donations"}),n.a.createElement("input",{type:"hidden",name:"business",value:"UCKCNTK53N6TC"}),n.a.createElement("input",{type:"hidden",name:"item_name",value:"You are our motivation and if you think that you can contribute please feel free. Thanks. "}),n.a.createElement("input",{type:"hidden",name:"currency_code",value:"BRL"}),n.a.createElement("input",{type:"image",src:"https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_147/v1593789136/react-examples/Donate-now.png",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),n.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_BR/i/scr/pixel.gif",width:"1",height:"1"}))))};return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"inner"},t&&n.a.createElement(S.a,{className:{root:a.menu},onClick:f(!0)}),n.a.createElement("div",{className:"logoContainer"},n.a.createElement(B.a,{component:t?"h1":"p",className:"logo"},n.a.createElement("svg",{width:"35px",height:"auto",viewBox:"0 0 256 230",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet"},n.a.createElement("path",{d:"M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z",fill:"transparent"}),n.a.createElement("path",{d:"M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z",fill:"#e60cf3"}),n.a.createElement("path",{d:"M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z",fill:"#442c4f"}),n.a.createElement("path",{d:"M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177",fill:"#e60cf3"})),"Black React Examples"),n.a.createElement("small",null,"Black Lives Matter")),t?n.a.createElement(z.a,{open:s,onClose:function(){return f(!1)},ModalProps:{onBackdropClick:f(!1)}},v()):n.a.createElement(n.a.Fragment,null,v(),p&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"subMenu",onMouseEnter:function(){return E(p)},onMouseLeave:b},n.a.createElement("div",{className:"content"},n.a.createElement(h.a,{container:!0,spacing:2},{ui:{active:!1,list:[{name:"Material Design",url:"/ui/material-design"},{name:"List",url:"/ui/lists"},{name:"Cards",url:"/ui/cards"},{name:"Infinite Scroll",url:"/ui/infinite-scroll"},{name:"Bootstrap",url:"/ui/bootstrap"},{name:"Table",url:"/ui/table"},{name:"Layout",url:"/ui/layout"},{name:"Scroll",url:"/ui/scroll"},{name:"Single Page",url:"/ui/single-pages"},{name:"Responsive",url:"/ui/responsive"},{name:"Style",url:"/ui/style"},{name:"All",url:"/ui/all"}]},media:{active:!1,list:[{name:"media"}]},element:{active:!1,list:[{name:"elements"}]},input:{active:!1,list:[{name:"inputs"}]},menu:{"&&":{color:"#fff"}}}[p].list.map((function(t,r){return n.a.createElement(h.a,{item:!0,key:r,xs:12,lg:3,onClick:function(){return a=t.url,g(null),void e.history.push(a);var a}},n.a.createElement(k.a,{classes:{root:a.card}},n.a.createElement(N.a,{title:t.name}),n.a.createElement(O.a,null)))})))))))))})),R=t(54),A=t(26),I=t.n(A),P=f()((function(e){return{container:{borderRadius:5,padding:"10px 20px",backgroundColor:"#442c4f",height:"100vh"},grid:{height:"100vh",zIndex:10},ads:{margin:"10px 0",cursor:"pointer"},title:{color:"#D6D4DB"},titleAds:{color:"#fff",padding:"2px 10px",borderRadius:"5px"},media:{height:0,paddingTop:"56.25%"}}})),_=[{description:"Dribbble is the world\u2019s leading community for creatives to share, grow, and get hired.",link:"https://dribbble.com/",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593744103/react-examples/dribbble.jpg"},{description:"A JavaScript library for building user interfaces",link:"https://reactjs.org/",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593745091/react-examples/react-logo.jpg"},{description:"Everything you need to get creative projects done",link:"https://themeforest.net/category/ui-templates",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593745418/react-examples/theme-forest.png"}];var H=Object(E.a)()((function(){var e=P();return Object(r.useEffect)((function(){}),[]),n.a.createElement(h.a,{item:!0,xs:12,lg:3,className:e.grid},n.a.createElement("div",{className:e.container},n.a.createElement("h3",{className:e.titleAds},"You'll like (ADS)"),n.a.createElement(h.a,{container:!0},_.map((function(a,t){return n.a.createElement(h.a,{key:t,item:!0,xs:12,className:e.ads,onClick:function(){return window.open(a.link,"_blank")}},n.a.createElement(I.a,{key:t},n.a.createElement(O.a,{image:a.cover,className:e.media}),n.a.createElement(B.a,null,a.description)))})))))})),q=f()((function(e){return{container:Object(R.a)({padding:40,paddingTop:100},e.breakpoints.down("xs"),{padding:15}),title:{color:"#D6D4DB"},media:{height:0,paddingTop:"56.25%"},card:{cursor:"pointer",transition:"all 0.1s","&:hover":{transform:"scale(1.1)",boxShadow:"#af14ec 1px 1px 15px 0px"}}}})),Y=[{name:"E-commerce Cards",url:"/ui/cards/ecommerceCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593692814/react-examples/ecommerce-cards.png"},{name:"Airbnb Cards",url:"/ui/cards/airbnbCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593610079/react-examples/airbnb-cover-cards.jpg"},{name:"Simple Card",url:"/ui/cards/simpleCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593522879/react-examples/example01.png"},{name:"Simple Lists",url:"/ui/lists/simpleList",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593781609/react-examples/simple-list.png"}];var U=Object(E.a)()((function(e){var a=q();return Object(r.useEffect)((function(){}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement("h3",{className:a.title},"Recent Content"),n.a.createElement(h.a,{container:!0,spacing:2},Y.map((function(t,r){return n.a.createElement(h.a,{item:!0,xs:12,lg:4},n.a.createElement(I.a,{key:r,classes:{root:a.card},onClick:function(){return e.history.push(t.url)}},n.a.createElement(N.a,{title:t.name,subheader:t.desc}),n.a.createElement(O.a,{image:t.cover,className:a.media})))})))),n.a.createElement(H,null)))})),W=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},ads:{backgroundColor:"#fff",borderRadius:5,padding:5}}})),G=[{name:"Ecommerce Cards",subtTitle:"Learn how to create amazing e-commerce cards",url:"/ui/cards/ecommerceCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593692814/react-examples/ecommerce-cards.png"},{name:"Airbnb Cards",subtTitle:"Learn how to create amazing airbnb cards",url:"/ui/cards/airbnbCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593610079/react-examples/airbnb-cover-cards.jpg"},{name:"Simple Card",subtTitle:"Learn how to create amazing simple cards",url:"/ui/cards/simpleCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593522879/react-examples/example01.png"},{name:"Review Card",subtTitle:"Learn how to create amazing review cards",url:"/ui/cards/reviewCard",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593692569/react-examples/review-card.png.png"}];var J=Object(E.a)()((function(e){var a=W();return n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement("h3",{className:a.title},"UI Cards"),n.a.createElement(h.a,{container:!0,spacing:2},G.map((function(t,r){return n.a.createElement(h.a,{item:!0,lg:4,key:r},n.a.createElement(I.a,{classes:{root:a.card},onClick:function(){return e.history.push(t.url)}},n.a.createElement(N.a,{title:t.name,subheader:t.subtTitle}),n.a.createElement(O.a,{image:t.cover,className:a.media})))})))),n.a.createElement(H,null)))})),K=t(165),V=t(163),$=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px"},bread:{color:"#fff"},breadCurrent:{color:"#01CACF"}}}));var Q=Object(E.a)()((function(e){var a=$();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");return a.src="//jsfiddle.net/dslaurindo/56ebwg08/49/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a),function(){return e.removeChild(a)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/cards"},"Cards"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Simple Card")),n.a.createElement("h1",{className:a.title},"Simple Card"),n.a.createElement("p",{className:a.title},"You will learn how to create this awesome Card"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593522879/react-examples/example01.png",alt:"example simple card"})),n.a.createElement("div",{id:"content"})),n.a.createElement(H,null)))})),X=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px",overflow:"hidden"},bread:{color:"#fff"},breadCurrent:{color:"#01CACF"}}}));var Z=Object(E.a)()((function(e){var a=X();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");a.src="//jsfiddle.net/dslaurindo/Lqmd9c2g/3/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a);var t=document.querySelector("#content2"),r=document.createElement("script");return r.src="//jsfiddle.net/dslaurindo/dr2eLm8x/61/embed/js,html,css,result/dark/",r.async=!0,t.appendChild(r),function(){e.removeChild(a),t.removeChild(r)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/cards"},"Cards"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Airbnb Card")),n.a.createElement("h1",{className:a.title},"Airbnb Cards"),n.a.createElement("p",{className:a.title},"You will learn how to create this awesome Cards"),n.a.createElement("h3",{className:a.title},"Model 01"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593604106/react-examples/cards-airbnb2.png",alt:"example airbnb card"})),n.a.createElement("div",{id:"content"}),n.a.createElement("hr",null),n.a.createElement("h3",{className:a.title},"Model 02"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593608447/react-examples/airbnb-cards03.png",alt:"example airbnb card model 02"})),n.a.createElement("div",{id:"content2"})),n.a.createElement(H,null)))})),ee=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px"},bread:{color:"#fff"},breadCurrent:{color:"#01CACF"}}}));var ae=Object(E.a)()((function(e){var a=ee();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");return a.src="//jsfiddle.net/dslaurindo/4y8jz2sg/7/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a),function(){return e.removeChild(a)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/cards"},"Cards"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Simple Card")),n.a.createElement("h1",{className:a.title},"Review Card"),n.a.createElement("p",{className:a.title},"You will learn how to create this awesome Card"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593692569/react-examples/review-card.png.png",alt:"example review card"})),n.a.createElement("div",{id:"content"})),n.a.createElement(H,null)))})),te=f()((function(e){return{container:Object(R.a)({padding:40,paddingTop:100},e.breakpoints.down("xs"),{padding:15}),title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px"},exampleImg:Object(R.a)({},e.breakpoints.down("xs"),{width:"100%"}),bread:{color:"#fff"},breadCurrent:{color:"#01CACF"}}}));var re=Object(E.a)()((function(e){var a=te();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");a.src="//jsfiddle.net/dslaurindo/7s1arjp9/61/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a);var t=document.querySelector("#content-furniture"),r=document.createElement("script");return r.src="//jsfiddle.net/dslaurindo/tzwj98s2/90/embed/js,html,css,result/dark/",r.async=!0,t.appendChild(r),function(){e.removeChild(a),t.removeChild(r)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/cards"},"Cards"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Simple Card")),n.a.createElement("h1",{className:a.title},"Review Card"),n.a.createElement("p",{className:a.title},"You will learn how to create these awesome Cards"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{className:a.exampleImg,src:"https://res.cloudinary.com/luneswallet/image/upload/v1593692814/react-examples/ecommerce-cards.png",alt:"example e-commerce card"})),n.a.createElement("div",{id:"content"}),n.a.createElement("p",{className:a.title},"Model 02"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{className:a.exampleImg,src:"https://res.cloudinary.com/luneswallet/image/upload/v1593743782/react-examples/furniture-card.png",alt:"example e-commerce model2 card"})),n.a.createElement("div",{id:"content-furniture"})),n.a.createElement(H,null)))})),ne=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"24.25%"},ads:{backgroundColor:"#fff",borderRadius:5,padding:5}}})),le=[{name:"Simple Lists",subtTitle:"Learn how to create amazing list cards",url:"/ui/lists/simpleList",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593781609/react-examples/simple-list.png"}];var ce=Object(E.a)()((function(e){var a=ne();return n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement("h3",{className:a.title},"UI Lists"),n.a.createElement(h.a,{container:!0,spacing:2},le.map((function(t,r){return n.a.createElement(h.a,{item:!0,lg:4,key:r},n.a.createElement(I.a,{classes:{root:a.card},onClick:function(){return e.history.push(t.url)}},n.a.createElement(N.a,{title:t.name,subheader:t.subtTitle}),n.a.createElement(O.a,{image:t.cover,className:a.media})))})))),n.a.createElement(H,null)))})),ie=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px",overflow:"hidden"},bread:{color:"#fff"},breadCurrent:{color:"#01CACF"}}}));var oe=Object(E.a)()((function(e){var a=ie();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");return a.src="//jsfiddle.net/dslaurindo/pbLqjux4/20/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a),function(){e.removeChild(a)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/lists"},"Lists"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Simple Lists")),n.a.createElement("h1",{className:a.title},"Airbnb Cards"),n.a.createElement("p",{className:a.title},"You will learn how to create this awesome Lists"),n.a.createElement("h3",{className:a.title},"Model 01"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593781609/react-examples/simple-list.png",alt:"example simple list"})),n.a.createElement("div",{id:"content"})),n.a.createElement(H,null)))})),se=f()((function(e){return{container:{padding:40,paddingTop:100},card:{cursor:"pointer"},title:{color:"#D6D4DB"},media:{height:0,padding:"24.25%"},ads:{backgroundColor:"#fff",borderRadius:5,padding:5}}})),me=[{subtTitle:"Delivery Food Examples",url:"/ui/single-pages/delivery-food",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png"}];var de=Object(E.a)()((function(e){var a=se();return n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement("h3",{className:a.title},"UI Single Pages"),n.a.createElement(h.a,{container:!0,spacing:2},me.map((function(t,r){return n.a.createElement(h.a,{item:!0,lg:4,key:r},n.a.createElement(I.a,{classes:{root:a.card},onClick:function(){return e.history.push(t.url)}},n.a.createElement(N.a,{title:t.name,subheader:t.subtTitle}),n.a.createElement(O.a,{image:t.cover,className:a.media})))})))),n.a.createElement(H,null)))})),ue=f()((function(e){return{container:{padding:40,paddingTop:100},card:{cursor:"pointer"},title:{color:"#D6D4DB"},media:{height:0,padding:"24.25%"},ads:{backgroundColor:"#fff",borderRadius:5,padding:5},bread:{color:"#9863af",fontSize:"12px"},breadCurrent:{color:"#9863af",fontSize:"12px",fontWeight:"bold"}}})),pe=[{url:"/ui/single-pages/delivery-food/details/01",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png"},{url:"/ui/single-pages/delivery-food/details/02",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593917848/react-examples/delivery-food-02.png"},{url:"/ui/single-pages/delivery-food/details/03",cover:"https://res.cloudinary.com/luneswallet/image/upload/v1593918266/react-examples/delivery-food-03.png"}];var he=Object(E.a)()((function(e){var a=ue();return n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/single-pages"},"Single Pages"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Delivery Food Pages")),n.a.createElement("h3",{className:a.title},"Delivery Food - Single Pages"),n.a.createElement(h.a,{container:!0,spacing:2},pe.map((function(t,r){return n.a.createElement(h.a,{item:!0,lg:4,key:r},n.a.createElement(I.a,{classes:{root:a.card},onClick:function(){return e.history.push(t.url)}},n.a.createElement(O.a,{image:t.cover,className:a.media})))})))),n.a.createElement(H,null)))})),ge=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px",overflow:"hidden"},bread:{color:"#9863af",fontSize:"12px"},breadCurrent:{color:"#9863af",fontSize:"12px",fontWeight:"bold"}}}));var fe=Object(E.a)()((function(e){var a=ge();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");return a.src="//jsfiddle.net/dslaurindo/cjp0y7u5/13/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a),function(){e.removeChild(a)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/single-pages"},"Single Pages"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/single-pages/delivery-food"},"Delivery Food Pages"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Model 01")),n.a.createElement("h1",{className:a.title},"Delivery Food"),n.a.createElement("h3",{className:a.title},"Model 01"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593909378/react-examples/delivery-food.png",alt:"example simple list"})),n.a.createElement("div",{id:"content"})),n.a.createElement(H,null)))})),Ee=f()((function(e){return{container:{padding:40,paddingTop:100},title:{color:"#D6D4DB"},media:{height:0,padding:"56.25%"},example:{padding:5,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:5,marginBottom:20,boxShadow:"#e219c7 0px 1px 11px 0px",overflow:"hidden"},bread:{color:"#9863af",fontSize:"12px"},breadCurrent:{color:"#9863af",fontSize:"12px",fontWeight:"bold"}}}));var be=Object(E.a)()((function(e){var a=Ee();return Object(r.useEffect)((function(){var e=document.querySelector("#content"),a=document.createElement("script");return a.src="//jsfiddle.net/dslaurindo/0g4m95up/10/embed/js,html,css,result/dark/",a.async=!0,e.appendChild(a),function(){e.removeChild(a)}}),[]),n.a.createElement("div",{className:a.container},n.a.createElement(h.a,{container:!0,spacing:4},n.a.createElement(h.a,{item:!0,xs:12,lg:9},n.a.createElement(K.a,{"aria-label":"breadcrumb",classes:{root:a.bread}},n.a.createElement(V.a,{color:"inherit",href:"/"},"Home"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/single-pages"},"Single Pages"),n.a.createElement(V.a,{color:"inherit",href:"#/ui/single-pages/delivery-food"},"Delivery Food Pages"),n.a.createElement(B.a,{classes:{root:a.breadCurrent},onClick:function(){return e.history.back()}},"Model 02")),n.a.createElement("h1",{className:a.title},"Delivery Food"),n.a.createElement("h3",{className:a.title},"Model 02"),n.a.createElement("div",{className:a.example},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593917848/react-examples/delivery-food-02.png",alt:"example simple list"})),n.a.createElement("div",{id:"content"})),n.a.createElement(H,null)))})),ve=(t(136),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.width,t=void 0===a?512:a,r=e.height,l=void 0===r?512:r,c=e.color;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Capa_1","enable-background":"new 0 0 512 512",height:"".concat(l,"px"),viewBox:"0 0 512 512",width:"".concat(t,"px")},n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("path",{d:"m449.649 307.262-18.956-101.095h29.976v-30h-35.601l-5.625-30.002h-117.452v30h31.907l25.911 190.012h-84.69l-28.814-65.109c14.379-7.521 24.22-22.576 24.22-39.896 0-24.814-20.188-45.002-45.002-45.002h-35.173v-160.35h-190.35v190.349h50.173v60.004h51.771c-19.485 19.073-31.598 45.648-31.598 75.003v15h31.509c6.968 34.194 37.273 60.004 73.495 60.004s66.526-25.81 73.495-60.004h114.658c6.968 34.194 37.273 60.004 73.494 60.004 41.357 0 75.004-33.646 75.004-75.004-.001-37.043-27.002-67.88-62.352-73.914zm-419.649-91.093v-130.349h130.349v130.349zm50.173 60.004v-30.004h145.349c8.272 0 15.002 6.73 15.002 15.002s-6.73 15.002-15.002 15.002zm95.176 30h40.408l26.555 60.003h-140.46c6.967-34.196 37.274-60.003 73.497-60.003zm0 120.007c-19.557 0-36.232-12.543-42.424-30.004h84.848c-6.192 17.461-22.867 30.004-42.424 30.004zm219.196-250.015 24.775 132.132c-13.215 3.206-25.068 9.917-34.523 19.096l-20.622-151.227h30.37zm42.451 250.015c-24.815 0-45.003-20.188-45.003-45.004 0-24.815 20.188-45.003 45.003-45.003s45.004 20.188 45.004 45.003c0 24.816-20.188 45.004-45.004 45.004z","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:c||"#FFFFFF"}))))}}]),t}(n.a.Component)),ye=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"delivery-container"},this.props.children)}}]),t}(n.a.Component),xe=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"delivery-content"},this.props.children)}}]),t}(n.a.Component),Ce=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={address:""},r}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.placeholder,r=a.onClick;return n.a.createElement("div",{className:"delivery-address"},n.a.createElement("input",{type:"text",value:this.state.address,placeholder:t,onChange:function(a){return e.setState({address:a.target.value})}}),n.a.createElement(we,{color:"blue",onClick:r},"OK"))}}]),t}(n.a.Component),we=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.variant,t=void 0===a?"filled":a,r=e.color,l=e.children,c=Object(b.a)(e,["variant","color","children"]);return n.a.createElement("button",Object.assign({className:"btn ".concat(t," ").concat(r)},c),l)}}]),t}(n.a.Component),je=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=Object(b.a)(e,["children"]);return n.a.createElement("div",Object.assign({className:"horizontal-scroll-wrapper"},t),a)}}]),t}(n.a.Component),ke=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=(e.children,Object(b.a)(e,["children"]));return n.a.createElement("footer",Object.assign({className:"delivery-footer"},a),n.a.createElement("div",{className:"social-media"}),n.a.createElement("div",{className:"delivery-links"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Delivery Food")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Privacy")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Contact Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Help Center")))),n.a.createElement("p",{className:"delivery-copyright"},"\xa9 2020 Delivery Food - All reserved."))}}]),t}(n.a.Component),Ne=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=(e.className,Object(b.a)(e,["children","className"]));return n.a.createElement("div",Object.assign({className:"delivery-grid ".concat(this.props.className)},t),a)}}]),t}(n.a.Component),Oe=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"delivery-header"},n.a.createElement("div",{className:"delivery-header-top"},n.a.createElement("div",{className:"logo"},n.a.createElement("p",null,"Happy Food"),n.a.createElement(ve,{width:40,height:40,color:"#68aae4"})),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/restaurant"},"Restaurant")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/careers"},"Careers")),n.a.createElement(we,{variant:"outlined"},"BE PART"))),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"absolute-left"},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593914085/react-examples/Pngtree_green_food_parsley_food_4406517.png",alt:"food meal"})),n.a.createElement("div",{className:"center"},n.a.createElement("h1",null,"Are you hungry? We can help you right now :)"),n.a.createElement(Ce,{placeholder:"Enter your delivery address"}),this.props.children),n.a.createElement("div",{className:"absolute-right"},n.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1593881577/react-examples/FAVPNG_pepper-steak-meat-food_MF6Sfmnk.png",alt:"food meal"}))))}}]),t}(n.a.Component),De=(n.a.Component,function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(u.a,{history:this.props.history},n.a.createElement(p.d,null,n.a.createElement(p.b,{component:L})),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",component:U}),n.a.createElement(p.b,{exact:!0,path:"/ui/cards",component:J}),n.a.createElement(p.b,{exact:!0,path:"/ui/cards/simpleCard",component:Q}),n.a.createElement(p.b,{exact:!0,path:"/ui/cards/airbnbCard",component:Z}),n.a.createElement(p.b,{exact:!0,path:"/ui/cards/reviewCard",component:ae}),n.a.createElement(p.b,{exact:!0,path:"/ui/cards/ecommerceCard",component:re}),n.a.createElement(p.b,{exact:!0,path:"/ui/lists",component:ce}),n.a.createElement(p.b,{exact:!0,path:"/ui/lists/simpleList",component:oe}),n.a.createElement(p.b,{exact:!0,path:"/ui/single-pages",component:de}),n.a.createElement(p.b,{exact:!0,path:"/ui/single-pages/delivery-food",component:he}),n.a.createElement(p.b,{exact:!0,path:"/ui/single-pages/delivery-food/details/01",component:fe}),n.a.createElement(p.b,{exact:!0,path:"/ui/single-pages/delivery-food/details/02",component:be}),n.a.createElement(p.a,{to:"/notfound"})),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/notfound",component:w})))}}]),t}(n.a.Component)),Se=Object(i.a)();var ze=function(){return n.a.createElement(De,{history:Se})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.6e5deb96.chunk.js.map