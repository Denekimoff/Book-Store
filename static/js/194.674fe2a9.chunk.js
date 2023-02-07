"use strict";(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[194],{3539:function(s,e,i){i.d(e,{z:function(){return c}});i(2791);var r=i(3329),c=function(s){var e=s.type,i=void 0===e?"button":e,c=s.className,n=void 0===c?"button":c,a=s.disabled,t=s.children,o=s.onClick;return(0,r.jsx)("button",{type:i,className:n,disabled:a,onClick:o,children:t})}},1943:function(s,e,i){i.d(e,{G:function(){return o}});i(2791);var r=i(9434),c=i(1087),n=i(9272),a=i(6427),t=(i(4243),i(3329)),o=function(s){var e=s.isbn13,i=s.title,o=s.subtitle,l=s.image,d=s.price,x=(0,r.I0)();return(0,t.jsxs)("div",{className:"cardbook cardbook--sm",onClick:function(){return x((0,n.gI)(""))},children:[(0,t.jsx)("div",{className:"cardbook__present",children:(0,t.jsx)(c.rU,{to:"/Book-Store/".concat(e),children:(0,t.jsx)("div",{className:"cardbook__image",children:(0,t.jsx)("img",{src:l,alt:"book"})})})}),(0,t.jsxs)("div",{className:"cardbook__mini-info",children:[(0,t.jsx)("h2",{className:"cardbook__title",children:i}),(0,t.jsx)("div",{className:"cardbook__info",children:(0,t.jsx)("span",{className:"cardbook__subtitle",children:o||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!"})}),(0,t.jsxs)("div",{className:"cardbook__market",children:[(0,t.jsx)("div",{className:"cardbook__price",children:d}),(0,t.jsx)(a.i,{})]})]})]})}},4757:function(s,e,i){var r=i(3329);e.Z=function(){return(0,r.jsxs)("svg",{width:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{}),(0,r.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,r.jsx)("path",{d:"M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"})})]})}},9285:function(s,e,i){i.d(e,{u:function(){return n}});var r=i(4164),c=i(3329),n=function(s){var e=s.controlled,i=s.active,n=s.title,a=s.onConfirm,t=s.onClose,o=s.children;if(!i)return null;var l=document.querySelector("#root");return l?r.createPortal((0,c.jsx)("div",{className:"modal",onClick:t,children:(0,c.jsxs)("div",{className:e?"modal__content--controlled":"modal__content",onClick:function(s){return s.stopPropagation()},children:[(0,c.jsx)("div",{className:"modal__top",children:(0,c.jsx)("h2",{className:"modal__title",children:n})}),(0,c.jsx)("div",{className:"modal__body",children:o}),e&&(0,c.jsxs)("div",{className:"modal__footer",children:[(0,c.jsx)("button",{onClick:a,children:"YES"}),(0,c.jsx)("button",{onClick:t,children:"NO"})]})]})}),l):void 0}},6427:function(s,e,i){i.d(e,{i:function(){return c}});var r=i(3329),c=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:"cardbook__rating",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"stars",value:"1"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"stars",value:"2"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"stars",value:"3"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"stars",value:"4"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"stars",value:"5"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"}),(0,r.jsx)("span",{className:"icon",children:"\u2605"})]})]})})}},8556:function(s,e,i){i.d(e,{Z:function(){return o}});var r=i(9439),c=i(2791),n=i(7324),a=i(3539),t=i(3329);function o(){var s=c.useContext(n.N).theme,e=c.useState(""),i=(0,r.Z)(e,2),o=i[0],l=i[1];return(0,t.jsx)("section",{className:"subscribe subscribe--".concat(s),children:(0,t.jsxs)("div",{className:"subscribe__body",children:[(0,t.jsx)("h3",{className:"subscribe__title",children:"Subscribe to newsletter"}),(0,t.jsx)("p",{className:"subscribe__description",children:"Be the firth to know about new IT books, upcoming releases, exclusive offers and more."}),(0,t.jsxs)("form",{name:"formmail",className:"subscribe__form",method:"post",onSubmit:function(s){s.preventDefault(),alert("Email ".concat(o," post on server")),s.target.reset()},children:[(0,t.jsx)("input",{type:"email",placeholder:"Your e-mail",required:!0,onChange:function(s){l(s.target.value)}}),(0,t.jsx)(a.z,{className:"button button--".concat(s),type:"submit",children:"Subscribe"})]})]})})}},3657:function(s,e,i){i.r(e),i.d(e,{default:function(){return L}});var r=i(9439),c=i(2791),n=i(7689),a=i(9434),t=i(9272),o=i(8175),l=i(3329),d=function(){return(0,l.jsxs)(o.ZP,{speed:2,width:1170,height:500,viewBox:"0 0 1200 500",backgroundColor:"#f3f3f3",foregroundColor:"#c2c2c2",children:[(0,l.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"1200",height:"80"}),(0,l.jsx)("rect",{x:"55",y:"110",rx:"0",ry:"0",width:"299",height:"349"}),(0,l.jsx)("rect",{x:"635",y:"110",rx:"0",ry:"0",width:"70",height:"30"}),(0,l.jsx)("rect",{x:"1000",y:"110",rx:"0",ry:"0",width:"165",height:"30"}),(0,l.jsx)("rect",{x:"635",y:"150",rx:"0",ry:"0",width:"531",height:"40"}),(0,l.jsx)("rect",{x:"635",y:"200",rx:"0",ry:"0",width:"531",height:"40"}),(0,l.jsx)("rect",{x:"635",y:"250",rx:"0",ry:"0",width:"531",height:"40"}),(0,l.jsx)("rect",{x:"635",y:"300",rx:"0",ry:"0",width:"531",height:"40"}),(0,l.jsx)("rect",{x:"835",y:"360",rx:"0",ry:"0",width:"130",height:"35"}),(0,l.jsx)("rect",{x:"665",y:"405",rx:"0",ry:"0",width:"225",height:"60"}),(0,l.jsx)("rect",{x:"910",y:"405",rx:"0",ry:"0",width:"225",height:"60"})]})},x=i(8683),h=i(5717),u=i(1943),j=(i(3037),i(8688),i(4243),function(){var s=(0,a.v9)((function(s){return s.books})).books;return(0,l.jsxs)("section",{className:"myslider",children:[(0,l.jsx)("div",{className:"myslider__top",children:(0,l.jsx)("h3",{className:"myslider__title",children:"Similar book"})}),(0,l.jsx)("div",{className:"myslider__body",children:(0,l.jsx)(h.Z,(0,x.Z)((0,x.Z)({},{dots:!1,infinite:!0,speed:400,slidesToShow:3,slidesToScroll:3,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:650,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}}]}),{},{children:s.map((function(s){var e=s.title,i=s.subtitle,r=s.isbn13,c=s.price,n=s.image;return(0,l.jsx)(u.G,{title:e,subtitle:i,isbn13:r,price:c,image:n},r)}))}))})]})}),m=i(4757),_=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("title",{}),(0,l.jsx)("g",{id:"Layer_54",children:(0,l.jsx)("path",{d:"M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"})})]})})},b=i(9285),v=i(6427),p=function(){var s=(0,a.I0)(),e=(0,a.v9)((function(s){return s.books.activeBook})),i=(0,r.Z)(e,1)[0],n=c.useRef(null),o=(0,a.v9)((function(s){return s.books})).favorites.includes(i.isbn13),d=(0,a.v9)((function(s){return s.books})).cart.includes(i.isbn13),x=c.useState(!1),h=(0,r.Z)(x,2),u=h[0],j=h[1];return(0,l.jsxs)("section",{className:"cardbook--bg",children:[(0,l.jsxs)("h2",{className:"cardbook__title",children:[i.title,"Lorem ipsum dolor sit amet consectetur, adipisicing elit."]}),(0,l.jsxs)("div",{className:"cardbook__main",children:[(0,l.jsxs)("div",{className:"cardbook__present",children:[(0,l.jsx)("div",{className:"cardbook__image",onClick:function(){j((function(s){return!s}))},children:(0,l.jsx)("img",{src:i.image,alt:"book"})}),(0,l.jsx)("div",{className:o?"cardbook__like cardbook__like--active":"cardbook__like",children:(0,l.jsx)("div",{className:"cardbook__like-button",onClick:function(){return e=i.isbn13,void s(o?(0,t.iz)(e):(0,t.Jh)(e));var e},children:(0,l.jsx)(_,{})})})]}),(0,l.jsxs)("div",{className:"cardbook__info",ref:n,children:[(0,l.jsxs)("div",{className:"cardbook__market",children:[(0,l.jsx)("div",{className:"cardbook__price",children:i.price}),(0,l.jsx)(v.i,{})]}),(0,l.jsxs)("div",{className:"cardbook__about",children:[(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Subtitle:"}),(0,l.jsx)("span",{children:i.subtitle})]}),(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Authors:"}),(0,l.jsx)("span",{children:i.authors})]}),(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Publisher:"}),(0,l.jsx)("span",{children:"".concat(i.publisher,", ").concat(i.year)})]}),(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Language:"}),(0,l.jsx)("span",{children:i.language})]}),(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Format:"}),(0,l.jsx)("span",{children:"Paper book / ebook (PDF)"})]}),(0,l.jsxs)("div",{className:"cardbook__about__text",children:[(0,l.jsx)("span",{children:"Pages:"}),(0,l.jsx)("span",{children:i.pages})]})]}),(0,l.jsx)("div",{className:"cardbook__more",onClick:function(){n.current.classList.toggle("info--active")},children:"More details"}),(0,l.jsxs)("div",{className:"cardbook__buttons",children:[(0,l.jsx)("button",{className:"cardbook__add",onClick:function(){return e=i.isbn13,void s(d?(0,t.QR)(e):(0,t.Xq)(e));var e},children:d?"Remove from cart":"Add to cart"}),(0,l.jsx)("button",{className:"cardbook__previews",children:(0,l.jsx)("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",children:"Previews book"})})]})]})]}),(0,l.jsx)(b.u,{controlled:!1,active:u,onClose:function(){j((function(s){return!1}))},children:(0,l.jsx)("img",{src:i.image,alt:"book"})})]})},k=i(4423),g=i(8158),f=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{id:"Layer_1",version:"1.1",viewBox:"0 0 1000 1000",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,l.jsx)("title",{}),(0,l.jsxs)("g",{children:[(0,l.jsx)("g",{id:"Dark_Blue",children:(0,l.jsx)("path",{className:"st0",d:"M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z"})}),(0,l.jsxs)("g",{id:"Logo_FIXED",children:[(0,l.jsx)("path",{className:"st1",d:"M384,754c235.8,0,364.9-195.4,364.9-364.9c0-5.5,0-11.1-0.4-16.6c25.1-18.2,46.8-40.6,64-66.4    c-23.4,10.4-48.2,17.2-73.6,20.2c26.8-16,46.8-41.2,56.4-70.9c-25.2,14.9-52.7,25.5-81.4,31.1c-48.6-51.6-129.8-54.1-181.4-5.6    c-33.3,31.3-47.4,78-37.1,122.5c-103.1-5.2-199.2-53.9-264.3-134c-34,58.6-16.7,133.5,39.7,171.2c-20.4-0.6-40.4-6.1-58.2-16    c0,0.5,0,1.1,0,1.6c0,61,43,113.6,102.9,125.7c-18.9,5.1-38.7,5.9-57.9,2.2c16.8,52.2,64.9,88,119.8,89.1    c-45.4,35.7-101.5,55.1-159.2,55c-10.2,0-20.4-0.6-30.5-1.9C246.1,734,314.4,754,384,753.9"}),(0,l.jsx)("path",{className:"st2",d:"M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z"})]})]})]})})},N=function(){return(0,l.jsx)("svg",{enableBackground:"new 0 0 128 128",id:"Social_Icons",version:"1.1",viewBox:"0 0 128 128",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,l.jsx)("g",{id:"_x31__stroke",children:(0,l.jsxs)("g",{id:"Facebook_1_",children:[(0,l.jsx)("rect",{fill:"none",height:"128",width:"128"}),(0,l.jsx)("path",{clipRule:"evenodd",d:"M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z",fill:"#4460A0",fillRule:"evenodd",id:"Facebook"})]})})})},w=function(){return(0,l.jsxs)("svg",{version:"1.1",viewBox:"0 0 64 64",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("style",{type:"text/css"}),(0,l.jsx)("g",{id:"guidlines"}),(0,l.jsx)("g",{id:"FB"}),(0,l.jsx)("g",{id:"ig"}),(0,l.jsx)("g",{id:"yt"}),(0,l.jsx)("g",{id:"twitter"}),(0,l.jsx)("g",{id:"snapchat"}),(0,l.jsx)("g",{id:"WA"}),(0,l.jsx)("g",{id:"Pinterrest"}),(0,l.jsx)("g",{id:"Layer_9"}),(0,l.jsx)("g",{id:"Layer_10"}),(0,l.jsx)("g",{id:"Layer_11"}),(0,l.jsx)("g",{id:"Layer_12"}),(0,l.jsx)("g",{id:"Layer_13"}),(0,l.jsx)("g",{id:"Layer_14"}),(0,l.jsx)("g",{id:"Layer_15"}),(0,l.jsx)("g",{id:"Layer_16",children:(0,l.jsxs)("g",{children:[(0,l.jsx)("circle",{className:"redditst18",cx:"32",cy:"32",r:"30"}),(0,l.jsx)("path",{className:"redditst2",d:"M52,32c0-2.210022-1.789978-4-4-4c-1.4500122,0-2.7199707,0.7699585-3.4199829,1.9299927    c-2.8978882-2.2456055-6.9917603-3.7012939-11.5726929-3.8917847l1.8012695-10.8057861l6.9492188,1.7373047    c0.0822754,0.020813,0.1628418,0.0117188,0.2440796,0.0114746C42.0018311,16.9876099,42,16.9935303,42,17    c0,1.6568604,1.3431396,3,3,3s3-1.3431396,3-3s-1.3431396-3-3-3c-0.9818726,0-1.845459,0.4785156-2.3927612,1.2077026    c-0.1055298-0.0809326-0.2277832-0.1431885-0.3650513-0.1774292l-8-2    c-0.2714844-0.0703125-0.5566406-0.0205078-0.7900391,0.1337891c-0.2333984,0.1523438-0.3925781,0.3964844-0.4384766,0.671875    l-2,12c-0.0115356,0.0690308,0.0042114,0.1339111,0.006897,0.2012329    c-4.5922241,0.1856689-8.6968384,1.6426392-11.6005859,3.8928223C18.7199707,28.7699585,17.4500122,28,16,28    c-2.210022,0-4,1.789978-4,4c0,1.9599609,1.4000244,3.5799561,3.2600098,3.9299927C15.0900269,36.5999756,15,37.289978,15,38    c0,6.6300049,7.6099854,12,17,12s17-5.3699951,17-12c0-0.710022-0.0900269-1.4000244-0.2600098-2.0700073    C50.5999756,35.5799561,52,33.9599609,52,32z M22,35c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3s-1.3431396,3-3,3    S22,36.6568604,22,35z M39.6171875,43.4970703C37.5566406,45.1113281,34.8515625,46,32,46    s-5.5566406-0.8886719-7.6171875-2.5029297c-0.4345703-0.3408203-0.5107422-0.96875-0.1699219-1.4042969    c0.3408203-0.4335938,0.96875-0.5117188,1.4042969-0.1699219C27.3261719,43.2626953,29.59375,44,32,44    s4.6738281-0.7373047,6.3828125-2.0771484c0.4355469-0.3417969,1.0634766-0.2636719,1.4042969,0.1699219    C40.1279297,42.5283203,40.0517578,43.15625,39.6171875,43.4970703z M39,38c-1.6568604,0-3-1.3431396-3-3s1.3431396-3,3-3    s3,1.3431396,3,3S40.6568604,38,39,38z"})]})}),(0,l.jsx)("g",{id:"Layer_17"})]})},y=function(){var s=(0,a.I0)(),e=(0,a.v9)((function(s){return s.setting})).activeTab,i=(0,a.v9)((function(s){return s.books.activeBook})),c=(0,r.Z)(i,1)[0];return(0,l.jsxs)("section",{className:"tabs",children:[(0,l.jsx)("div",{className:"tabs__list",children:Object.values(k.G).map((function(i,r){return(0,l.jsx)("div",{className:e===i?"tabs__item tabs__item--active":"tabs__item",onClick:function(){return s((0,g.r)(i))},children:i},r)}))}),(0,l.jsx)("div",{className:"tabs__info",children:(0,l.jsx)("p",{className:"tabs__text",children:e.includes("Description")?c.desc:e.includes("Authors")?c.authors:(0,l.jsx)("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:"Click me to view this product."})})}),(0,l.jsxs)("div",{className:"tabs__social",children:[(0,l.jsx)("div",{className:"tabs__icon",children:(0,l.jsx)("a",{className:"tabs__link",href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(f,{})})}),(0,l.jsx)("div",{className:"tabs__icon",children:(0,l.jsx)("a",{className:"tabs__link",href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(N,{})})}),(0,l.jsx)("div",{className:"tabs__icon",children:(0,l.jsx)("a",{className:"tabs__link",href:"https://www.reddit.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(w,{})})})]})]})},C=i(8556);function L(){var s=(0,n.s0)(),e=(0,a.I0)(),i=(0,a.v9)((function(s){return s.books})).books,o=c.useState(!0),x=(0,r.Z)(o,2),h=x[0],u=x[1],_=(0,n.UO)().isbn13;return c.useEffect((function(){_&&e((0,t.nv)(_,u,s))}),[_]),(0,l.jsx)("div",{className:"select-book",children:(0,l.jsx)("div",{className:"wrapper",children:(0,l.jsxs)("div",{className:"select-book__body",children:[(0,l.jsx)("div",{className:"select-book__link",onClick:function(){return s(-1)},children:(0,l.jsx)(m.Z,{})}),h?(0,l.jsx)(d,{}):(0,l.jsx)(p,{}),!h&&(0,l.jsx)(y,{}),(0,l.jsx)(C.Z,{}),i.length?(0,l.jsx)(j,{}):(0,l.jsx)(l.Fragment,{})]})})})}},4243:function(){}}]);
//# sourceMappingURL=194.674fe2a9.chunk.js.map