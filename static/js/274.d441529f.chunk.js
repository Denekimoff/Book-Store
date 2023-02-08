"use strict";(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[274],{3539:function(e,s,n){n.d(s,{z:function(){return a}});n(2791);var i=n(3329),a=function(e){var s=e.type,n=void 0===s?"button":s,a=e.className,c=void 0===a?"button":a,r=e.disabled,o=e.children,t=e.onClick;return(0,i.jsx)("button",{type:n,className:c,disabled:r,onClick:t,children:o})}},1943:function(e,s,n){n.d(s,{G:function(){return t}});n(2791);var i=n(9434),a=n(1087),c=n(9272),r=n(6427),o=(n(4243),n(3329)),t=function(e){var s=e.isbn13,n=e.title,t=e.subtitle,l=e.image,d=e.price,u=e.variant,m=(0,i.I0)();return(0,o.jsxs)("div",{className:"cardbook cardbook--sm cardbook--".concat(u),onClick:function(){return m((0,c.gI)(""))},children:[(0,o.jsx)("div",{className:"cardbook__present",children:(0,o.jsx)(a.rU,{to:"/Book-Store/".concat(s),children:(0,o.jsx)("div",{className:"cardbook__image",children:(0,o.jsx)("img",{src:l,alt:"book"})})})}),(0,o.jsxs)("div",{className:"cardbook__mini-info",children:[(0,o.jsx)("h2",{className:"cardbook__title",children:n}),(0,o.jsx)("div",{className:"cardbook__info",children:(0,o.jsx)("span",{className:"cardbook__subtitle",children:t||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!"})}),(0,o.jsxs)("div",{className:"cardbook__market",children:[(0,o.jsx)("div",{className:"cardbook__price",children:d}),(0,o.jsx)(r.i,{})]})]})]})}},4757:function(e,s,n){var i=n(3329);s.Z=function(){return(0,i.jsxs)("svg",{width:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("title",{}),(0,i.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,i.jsx)("path",{d:"M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"})})]})}},9285:function(e,s,n){n.d(s,{u:function(){return c}});var i=n(4164),a=n(3329),c=function(e){var s=e.controlled,n=e.active,c=e.title,r=e.onConfirm,o=e.onClose,t=e.children;if(!n)return null;console.log(r);var l=document.querySelector("#root");return l?i.createPortal((0,a.jsx)("div",{className:"modal",onClick:o,children:(0,a.jsxs)("div",{className:s?"modal__content--controlled":"modal__content",onClick:function(e){return e.stopPropagation()},children:[(0,a.jsx)("div",{className:"modal__top",children:(0,a.jsx)("h2",{className:"modal__title",children:c})}),(0,a.jsx)("div",{className:"modal__body",children:t}),s&&(0,a.jsx)("div",{className:"modal__footer",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{onClick:r,children:"YES"}),(0,a.jsx)("button",{onClick:o,children:"NO"})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:o,children:"OK"})})})]})}),l):void 0}},6427:function(e,s,n){n.d(s,{i:function(){return a}});var i=n(3329),a=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{className:"cardbook__rating",children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"1"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"2"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"3"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"4"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"5"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]})]})})}},8556:function(e,s,n){n.d(s,{Z:function(){return l}});var i=n(9439),a=n(2791),c=n(7324),r=n(3539),o=n(9285),t=n(3329);function l(){var e=a.useContext(c.N).theme,s=a.useState(!1),n=(0,i.Z)(s,2),l=n[0],d=n[1],u=a.useState(""),m=(0,i.Z)(u,2),h=m[0],x=m[1];return(0,t.jsxs)("section",{className:"subscribe subscribe--".concat(e),children:[(0,t.jsxs)(o.u,{controlled:!0,active:l,title:"Success",onClose:function(){d(!1)},children:["You subscribed to NEW releases and NEWS from the BookStore! Mailing will be send to your ",h," e-mail."]}),(0,t.jsxs)("div",{className:"subscribe__body",children:[(0,t.jsx)("h3",{className:"subscribe__title",children:"Subscribe to newsletter"}),(0,t.jsx)("p",{className:"subscribe__description",children:"Be the firth to know about new IT books, upcoming releases, exclusive offers and more."}),(0,t.jsxs)("form",{name:"formmail",className:"subscribe__form",method:"post",onSubmit:function(e){e.preventDefault(),d((function(e){return!e})),e.target.reset()},children:[(0,t.jsx)("input",{type:"email",placeholder:"Your e-mail",required:!0,onChange:function(e){x(e.target.value)}}),(0,t.jsx)(r.z,{className:"button button--".concat(e),type:"submit",children:"Subscribe"})]})]})]})}},7274:function(e,s,n){n.r(s),n.d(s,{default:function(){return j}});var i=n(2791),a=n(9434),c=n(7689),r=n(1087),o=n(7324),t=n(9272),l=n(891),d=n(1943),u=n(558),m=n(4757),h=n(8556),x=(n(241),n(3329));function j(){var e=(0,a.I0)(),s=(0,c.s0)(),n=i.useContext(o.N).theme,j=(0,a.v9)((function(e){return e.users})).user,b=(0,a.v9)((function(e){return e.books})).books,f=(0,a.v9)((function(e){return e.books})).favorites,v=b.filter((function(e){var s=e.isbn13;return f.includes(s)}));return i.useEffect((function(){e((0,l.jo)()),e((0,t.gI)(""))}),[]),null==j?(0,x.jsx)(u.o,{}):(0,x.jsx)("main",{className:"main main--".concat(n),children:(0,x.jsx)("div",{className:"wrapper",children:(0,x.jsxs)("div",{className:"main__body",children:[(0,x.jsx)("div",{className:"main__button-back",onClick:function(){return s(-1)},children:(0,x.jsx)(m.Z,{})}),(0,x.jsx)("h2",{className:"main__title",children:"Favorites"}),f.length?(0,x.jsx)("div",{className:"main__list",children:v.map((function(e){var s=e.title,n=e.subtitle,i=e.isbn13,a=e.price,c=e.image;return(0,x.jsx)(d.G,{title:s,subtitle:n,isbn13:i,price:a,image:c},i)}))}):(0,x.jsxs)("div",{className:"main__null",children:[(0,x.jsx)("p",{children:"You dont have any favorite book :("}),(0,x.jsxs)("p",{children:["Take advantage of the ",(0,x.jsx)(r.rU,{to:"/Book-Store",children:"new coolection"})," of book."]})]}),(0,x.jsx)(h.Z,{})]})})})}},4243:function(){},241:function(){}}]);
//# sourceMappingURL=274.d441529f.chunk.js.map