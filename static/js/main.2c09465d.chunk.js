(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{147:function(e,t,a){},148:function(e,t,a){},152:function(e,t,a){e.exports={paginator:"utils_paginator__dA7GI"}},153:function(e,t,a){e.exports={formSearch:"ImageForm_formSearch__2Pk_A"}},173:function(e,t,a){},174:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),i=a(53),s=(a(173),a(16)),u=(a(174),a(12)),l=a(338),j=a(356),d=a(340),b=a(342),O=a(343),g=a(147),f=a.n(g),m=a(2),p=Object(l.a)((function(e){return Object(j.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:"14px"}})})),h=function(){var e=p(),t=c.a.useState(!0),a=Object(u.a)(t,2),n=(a[0],a[1],c.a.useState(null)),o=Object(u.a)(n,2),r=o[0];o[1],Boolean(r);return Object(m.jsx)("div",{id:"footer",className:"".concat(e.root," ").concat(f.a.footer),children:Object(m.jsx)(d.a,{position:"static",children:Object(m.jsx)(b.a,{children:Object(m.jsx)(O.a,{variant:"h6",className:e.title,children:"Copyrights"})})})})},v=a(344),x=a(149),S=a.n(x),C=a(346),I=a(354),y=a(148),_=a.n(y),N=Object(l.a)((function(e){return Object(j.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),w=function(){var e=N(),t=c.a.useState(!0),a=Object(u.a)(t,2),n=a[0],o=(a[1],c.a.useState(null)),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Boolean(i),j=function(){s(null)};return Object(m.jsx)("div",{id:"header",className:"".concat(e.root," ").concat(_.a.header),children:Object(m.jsx)(d.a,{position:"static",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(O.a,{variant:"h6",className:e.title,children:"Image Finder"}),n&&Object(m.jsxs)("div",{children:[Object(m.jsx)(v.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(m.jsx)(S.a,{})}),Object(m.jsxs)(I.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:j,children:[Object(m.jsx)(C.a,{onClick:j,children:"Profile"}),Object(m.jsx)(C.a,{onClick:j,children:"My account"})]})]})]})})})},k=a(24),P=a(67),T=a(46),B=a(108),E=a.n(B),F=a(151),J=a(109),L=a.n(J),R=L.a.create({baseURL:"https://www.flickr.com/services/rest/"}),z=function(e,t,a){return R.get("?method=flickr.photos.search&api_key=".concat("ebd38066d5f0ccb4c766685e03dce652","&text=").concat(e,"&page=").concat(t,"&per_page=").concat(a,"&format=json&nojsoncallback=1")).then((function(e){return e.data}))},G="SET_IMAGES",A="RESET",M="SAVE_COUNT",D=function(e){return{type:M,count:e}},Q={photos:null,totalCount:null,currentPageCount:null,pages:null,count:0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(T.a)(Object(T.a)({},e),{},{photos:Object(P.a)(t.payload.photo.map((function(e){return{id:e.id,owner:e.owner,farm:e.farm,title:e.title,ispublic:e.ispublic,isfriend:e.isfriend,isfamily:e.isfamily,src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}}))),totalCount:t.payload.total,currentPageCount:t.payload.page,pages:t.payload.pages});case A:return Object(T.a)(Object(T.a)({},e),{},{photos:null,totalCount:null,currentPageCount:null,pages:null});case M:return Object(T.a)(Object(T.a)({},e),{},{count:t.count});default:return e}},W=a(309),V=a(68),X=a.n(V),Y=function(e){var t=e.tags,a=e.setTags,c=e.someTags,o=Object(n.useState)(!1),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Object(n.useState)(t),j=Object(u.a)(l,2),d=j[0],b=j[1];Object(n.useEffect)((function(){a(d)}),[d]);return i?Object(m.jsx)("div",{children:Object(m.jsx)("input",{autoFocus:!0,onChange:function(e){b(e.currentTarget.value)},onBlur:function(){s(!1),a&&a(d)},type:"text",value:d})}):Object(m.jsx)("div",{children:Object(m.jsx)("span",{onDoubleClick:function(){s(!0)},children:t||c})})},Z=function(e){var t=e.title,a=e.src,c=e.deleteButton,o=e.id,r=e.setRemove,i=e.someTags,s=e.setSaveCount,l=e.count,j=Object(n.useState)(!1),d=Object(u.a)(j,2),b=d[0],O=d[1],g=Object(n.useState)(!1),f=Object(u.a)(g,2),p=f[0],h=f[1],v=Object(n.useState)(o),x=Object(u.a)(v,2),S=x[0],C=(x[1],Object(n.useState)(!1)),I=Object(u.a)(C,2),y=(I[0],I[1],Object(n.useState)(t)),_=Object(u.a)(y,2),N=_[0],w=_[1],k=Object(n.useState)(localStorage.getItem("countLocalSave")),T=Object(u.a)(k,2);T[0],T[1];Object(n.useEffect)((function(){var e=localStorage.getItem("savedPhotos");if("string"===typeof e&&(e=JSON.parse(e)),b){var t={tags:N,src:a,id:o};e?localStorage.setItem("savedPhotos",JSON.stringify([].concat(Object(P.a)(e),[t]))):localStorage.setItem("savedPhotos",JSON.stringify([{tags:N,src:a,id:o}])),O(!1)}else if(p&&r){r(!1),h(!1);var n=o;localStorage.setItem("savedPhotos",JSON.stringify(Object(P.a)(e.filter((function(e){return e.id!==n})))))}}),[b,p,S,w,N,l]);return Object(m.jsxs)("div",{className:X.a.cardContainer,children:[Object(m.jsx)("img",{className:X.a.cardImg,src:a}),Object(m.jsx)("div",{className:X.a.button,children:Object(m.jsx)(W.a,{onClick:function(){if(c&&r){if(r(!0),h(!0),void 0!==l&&null!==l&&s){var e=l-1;s(e),localStorage.setItem("countLocalSave",JSON.stringify(e))}}else if(O(!0),s&&void 0!==l&&null!==l){var t=l+1;s(t),localStorage.setItem("countLocalSave",JSON.stringify(t))}},variant:"contained",color:"primary",children:c?"Remove it!":"Bookmark it!"})}),Object(m.jsx)("div",{className:X.a.title,children:Object(m.jsx)(Y,{someTags:i,tags:N,setTags:w})})]})},q=a(50),H=a.n(q),K=function(e){var t,a=e.photos,n=e.deleteButton,c=(e.remove,e.setRemove),o=e.setSaveCount,r=e.count,i=Number(localStorage.getItem("countLocalSave"));return i&&o&&o(i),(null===a||void 0===a?void 0:a.length)&&(t=a.map((function(e){return Object(m.jsx)(Z,{count:r,setSaveCount:o,setRemove:c,deleteButton:n,id:e.id,src:e.src?e.src:"",someTags:e.tags?e.tags:null,title:e.title?e.title:""},e.id)}))),Object(m.jsx)("div",{className:H.a.page,children:t})},$=a(152),ee=a.n($),te=a(347),ae=Object(l.a)((function(e){return Object(j.a)({root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}})})),ne=function(e){var t=e.currentPageCount,a=e.setCurrentPageCount,n=e.pages;ae();return Object(m.jsx)("div",{className:ee.a.paginator,children:Object(m.jsxs)(te.a,{color:"primary","aria-label":"contained primary button group",children:[Object(m.jsx)(W.a,{disabled:1===t,onClick:function(){return a(t-1)},children:"<Back"}),Object(m.jsx)(W.a,{children:"".concat(t," of ").concat(n)}),Object(m.jsx)(W.a,{disabled:t===n,onClick:function(){return a(t+1)},children:"Forward>"})]})})},ce=a(352),oe=a(351),re=a(153),ie=a.n(re),se=Object(oe.a)({form:"image"})((function(e){var t=e.handleSubmit;return Object(m.jsx)("form",{className:ie.a.formSearch,onSubmit:t,children:Object(m.jsx)(ce.a,{name:"image",component:"input"})})})),ue=function(e){var t=e.setSearchText,a=e.setCurrentPageCount;return Object(m.jsx)("div",{children:Object(m.jsx)(se,{onChange:function(e){a(1),t(e.image)}})})},le=a(357),je=a(348),de=Object(l.a)((function(e){return Object(j.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})})),be=Object(k.b)((function(e){return{photos:e.images.photos,pages:e.images.pages,count:e.images.count}}),{getImages:function(e,t,a){return function(){var n=Object(F.a)(E.a.mark((function n(c){var o;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(e,t,a);case 2:"ok"===(o=n.sent).stat&&c((r=o.photos,{type:G,payload:r})),console.log(o.photos);case 5:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},reset:function(){return{type:A}},setSaveCount:D})((function(e){var t=e.photos,a=e.getImages,c=e.pages,o=e.reset,r=e.setSaveCount,i=e.count,s=Object(n.useState)(1),l=Object(u.a)(s,2),j=l[0],d=l[1],b=Object(n.useState)(30),O=Object(u.a)(b,2),g=O[0],f=(O[1],Object(n.useState)("")),p=Object(u.a)(f,2),h=p[0],v=p[1],x=Object(n.useState)(!1),S=Object(u.a)(x,2),C=S[0],I=S[1];Object(n.useEffect)((function(){if(a){if(""!==h){var e=setTimeout((function(){I(!0),a(h,j,g).then((function(){return I(!1)}))}),500);return function(){clearTimeout(e)}}o&&o()}}),[j,h]);var y=de();return Object(m.jsxs)("div",{className:H.a.container,children:[Object(m.jsx)(le.a,{className:y.backdrop,open:C,children:Object(m.jsx)(je.a,{color:"inherit"})}),Object(m.jsx)(ue,{setCurrentPageCount:d,setSearchText:v}),""===h||null===t||0===c?Object(m.jsx)("div",{children:"No images here. Would you try search for anything else?"}):Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsx)(ne,{pages:c,currentPageCount:j,setCurrentPageCount:d}),Object(m.jsx)(K,{count:i,setSaveCount:r,photos:t})]})]})})),Oe=Object(k.b)((function(e){return{count:e.images.count}}),{setSaveCount:D})((function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!1),i=Object(u.a)(r,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("savedPhotos");"string"===typeof e&&o(JSON.parse(e))}),[s,e.count]),console.log(e.count),Object(m.jsx)("div",{className:H.a.container,children:Object(m.jsx)(K,{count:e.count,setSaveCount:e.setSaveCount,remove:s,setRemove:l,deleteButton:!0,photos:c})})})),ge=a(358),fe=a(156),me=a.n(fe),pe=a(345),he=a(308),ve=a(349),xe=a(157),Se=a.n(xe),Ce=a(350),Ie=a(87),ye=a.n(Ie),_e=Object(l.a)((function(e){return Object(j.a)({root:{display:"flex",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:60,flexShrink:0},drawerPaper:{width:60,position:"relative"},drawerContainer:{overflow:"none",width:"60px",height:"100%",marginTop:"64px",position:"fixed"},drawerItem:{display:"flex",justifyContent:"center",padding:"8px 0"},iconItem:{minWidth:"auto"},content:{flexGrow:1,padding:e.spacing(3)}})})),Ne=Object(k.b)((function(e){return{count:e.images.count}}),{})((function(e){var t=e.count,a=_e(),c=Object(n.useState)(localStorage.getItem("countLocalSave")),o=Object(u.a)(c,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){s(localStorage.getItem("countLocalSave"))}),[t]),Object(m.jsx)("div",{id:"nav",className:"".concat(a.root," ").concat(ye.a.nav),children:Object(m.jsx)(ge.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},children:Object(m.jsx)("div",{className:a.drawerContainer,children:Object(m.jsx)(pe.a,{children:["",""].map((function(e,t){return Object(m.jsx)(he.a,{className:a.drawerItem,button:!0,children:Object(m.jsx)(ve.a,{className:a.iconItem,children:t%2===0?Object(m.jsx)(i.b,{activeClassName:ye.a.active,to:"/search",children:Object(m.jsx)(me.a,{})}):Object(m.jsxs)(i.b,{activeClassName:ye.a.active,to:"/save_image",children:[" ",Object(m.jsx)(Ce.a,{badgeContent:r,color:"secondary",children:Object(m.jsx)(Se.a,{})})]})})},e)}))})})})})})),we=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{}),Object(m.jsx)(Ne,{}),Object(m.jsxs)("div",{id:"content",className:"content",children:[Object(m.jsx)(s.a,{exact:!0,path:"/",component:be}),Object(m.jsx)(s.a,{exact:!0,path:"/search",component:be}),Object(m.jsx)(s.a,{exact:!0,path:"/save_image",component:Oe})]}),Object(m.jsx)(h,{})]})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,360)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))},Pe=a(19),Te=a(158),Be=a(355),Ee=Object(Pe.c)({images:U,form:Be.a}),Fe=Object(Pe.d)(Ee,Object(Pe.a)(Te.a));r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k.a,{store:Fe,children:Object(m.jsx)(i.a,{children:Object(m.jsx)(we,{})})})}),document.getElementById("root")),ke()},50:function(e,t,a){e.exports={container:"ImagePage_container__yQvQF",page:"ImagePage_page__67Yr_"}},68:function(e,t,a){e.exports={cardContainer:"ImageCard_cardContainer__3iI71",cardImg:"ImageCard_cardImg__3BMv0",button:"ImageCard_button__1Z9Ty",title:"ImageCard_title__3PuX2"}},87:function(e,t,a){e.exports={active:"Nav_active__3N5D-"}}},[[305,1,2]]]);
//# sourceMappingURL=main.2c09465d.chunk.js.map