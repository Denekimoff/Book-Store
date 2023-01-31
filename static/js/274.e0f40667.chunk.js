"use strict";(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[274,556],{3539:function(s,e,n){n.d(e,{z:function(){return a}});n(2791);var i=n(184),a=function(s){var e=s.type,n=void 0===e?"button":e,a=s.className,c=void 0===a?"button":a,r=s.disabled,l=s.children,t=s.onClick;return(0,i.jsx)("button",{type:n,className:c,disabled:r,onClick:t,children:l})}},9793:function(s,e,n){n.d(e,{G:function(){return t}});n(2791);var i=n(9434),a=n(1087),c=n(9272),r=n(6427),l=n(184),t=function(s){var e=s.isbn13,n=s.title,t=s.subtitle,o=s.image,d=s.price,u=(0,i.I0)();return(0,l.jsxs)("div",{className:"cardbook cardbook--sm",onClick:function(){return u((0,c.gI)(""))},children:[(0,l.jsx)("div",{className:"cardbook__present",children:(0,l.jsx)(a.rU,{to:"/Book-Store/".concat(e),children:(0,l.jsx)("div",{className:"cardbook__image",children:(0,l.jsx)("img",{src:o,alt:"book"})})})}),(0,l.jsxs)("div",{className:"cardbook__mini-info",children:[(0,l.jsx)("h2",{className:"cardbook__title",children:n}),(0,l.jsx)("div",{className:"cardbook__info",children:(0,l.jsx)("span",{className:"cardbook__subtitle",children:t||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!"})}),(0,l.jsxs)("div",{className:"cardbook__market",children:[(0,l.jsx)("div",{className:"cardbook__price",children:d}),(0,l.jsx)(r.i,{})]})]})]})}},6427:function(s,e,n){n.d(e,{i:function(){return a}});n(2791);var i=n(184),a=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{className:"cardbook__rating",children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"1"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"2"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"3"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"4"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"radio",name:"stars",value:"5"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"}),(0,i.jsx)("span",{className:"icon",children:"\u2605"})]})]})})}},8556:function(s,e,n){n.r(e),n.d(e,{default:function(){return l}});var i=n(2791),a=n(7324),c=n(3539),r=n(184);function l(){var s=i.useContext(a.N).theme;return(0,r.jsx)("section",{className:"subscribe subscribe--".concat(s),children:(0,r.jsxs)("div",{className:"subscribe__body",children:[(0,r.jsx)("h3",{className:"subscribe__title",children:"Subscribe to newsletter"}),(0,r.jsx)("p",{className:"subscribe__description",children:"Be the firth to know about new IT books, upcoming releases, exclusive offers and more."}),(0,r.jsxs)("form",{className:"subscribe__form",method:"post",children:[(0,r.jsx)("input",{type:"text",placeholder:"Your e-mail"}),(0,r.jsx)(c.z,{className:"button button--".concat(s),type:"submit",children:"Subscribe"})]})]})})}},7274:function(s,e,n){n.r(e),n.d(e,{default:function(){return d}});var i=n(2791),a=n(9434),c=n(1087),r=n(7324),l=n(9793),t=n(8556),o=(n(241),n(184));function d(){var s=i.useContext(r.N).theme,e=(0,a.v9)((function(s){return s.books})).books,n=(0,a.v9)((function(s){return s.books})).favorites,d=e.filter((function(s){var e=s.isbn13;return n.includes(e)}));return(0,o.jsx)("main",{className:"main main--".concat(s),children:(0,o.jsx)("div",{className:"wrapper",children:(0,o.jsxs)("div",{className:"main__body",children:[(0,o.jsx)("h2",{className:"main__title",children:"Favorites"}),n.length?(0,o.jsx)("div",{className:"main__list",children:d.map((function(s){var e=s.title,n=s.subtitle,i=s.isbn13,a=s.price,c=s.image;return(0,o.jsx)(l.G,{title:e,subtitle:n,isbn13:i,price:a,image:c},i)}))}):(0,o.jsxs)("div",{className:"main__null",children:[(0,o.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043b\u044e\u0431\u0438\u043c\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 :("}),(0,o.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a \u0441\u0435\u0431\u0435 \u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043a\u043d\u0438\u0433\u0438 \u0438\u0437 ",(0,o.jsx)(c.rU,{to:"/Book-Store",children:"\u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f"}),"."]})]}),(0,o.jsx)(t.default,{})]})})})}},241:function(){}}]);
//# sourceMappingURL=274.e0f40667.chunk.js.map