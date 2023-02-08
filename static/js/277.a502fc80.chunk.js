"use strict";(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[277],{4757:function(t,e,n){var o=n(3329);e.Z=function(){return(0,o.jsxs)("svg",{width:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("title",{}),(0,o.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,o.jsx)("path",{d:"M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"})})]})}},9285:function(t,e,n){n.d(e,{u:function(){return l}});var o=n(2791),i=n(4164),r=n(4324),c=n(3329),l=function(t){var e=t.controlled,n=t.active,l=t.title,s=t.onConfirm,a=t.onClose,d=t.children,u=o.useRef(document.body).current;if(o.useEffect((function(){return n?(0,r.Qp)(u):(0,r.tG)(u),function(){return(0,r.tP)()}}),[n]),!n)return null;var m=document.querySelector("#root");return m?i.createPortal((0,c.jsx)("div",{className:"modal",onClick:a,children:(0,c.jsxs)("div",{className:e?"modal__content--controlled":"modal__content",onClick:function(t){return t.stopPropagation()},children:[(0,c.jsx)("div",{className:"modal__top",children:(0,c.jsx)("h2",{className:"modal__title",children:l})}),(0,c.jsx)("div",{className:"modal__body",children:d}),e&&(0,c.jsx)("div",{className:"modal__footer",children:s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:s,children:"YES"}),(0,c.jsx)("button",{onClick:a,children:"NO"})]}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{onClick:a,children:"OK"})})})]})}),m):void 0}},5277:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=n(9439),i=n(2791),r=n(9434),c=n(7689),l=n(7324),s=n(9272),a=n(891),d=n(1087),u=n(9285),m=n(3329),v=function(t){var e=t.isbn13,n=t.title,c=t.subtitle,l=t.image,a=t.price,v=(0,r.I0)(),f=i.useState(!1),h=(0,o.Z)(f,2),p=h[0],b=h[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.u,{controlled:!0,active:p,title:"Confirm",onConfirm:function(){b((function(t){return!t})),v((0,s.QR)(e))},onClose:function(){b(!1)},children:"Delete from card?"}),(0,m.jsxs)("div",{className:"cartbook",onClick:function(){return v((0,s.gI)(""))},children:[(0,m.jsx)("div",{className:"cartbook__present",children:(0,m.jsx)(d.rU,{to:"/Book-Store/".concat(e),className:"cartbook__link",children:(0,m.jsx)("div",{className:"cartbook__image",children:(0,m.jsx)("img",{src:l,alt:n})})})}),(0,m.jsxs)("div",{className:"cartbook__info",children:[(0,m.jsx)("h2",{className:"cartbook__title",children:n}),(0,m.jsx)("p",{className:"cartbook__subtitle",children:c||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam!"})]}),(0,m.jsxs)("div",{className:"cartbook__market",children:[(0,m.jsx)("button",{className:"cartbook__remove",onClick:function(){b((function(t){return!t}))},children:"X"}),(0,m.jsx)("div",{className:"cartbook__price",children:a})]})]})]})},f=n(558),h=n(4757);function p(){var t=(0,r.I0)(),e=(0,c.s0)(),n=i.useContext(l.N).theme,d=(0,r.v9)((function(t){return t.users})).user,p=(0,r.v9)((function(t){return t.books})).books,b=(0,r.v9)((function(t){return t.books})).cart,y=null===p||void 0===p?void 0:p.filter((function(t){var e=t.isbn13;return null===b||void 0===b?void 0:b.includes(e)})),g=null===y||void 0===y?void 0:y.map((function(t){var e;return null===(e=t.price)||void 0===e?void 0:e.slice(1)})),w=null===g||void 0===g?void 0:g.map((function(t){return+t})).reduce((function(t,e){return t+e}),0).toFixed(2),x=i.useState(!1),_=(0,o.Z)(x,2),j=_[0],k=_[1];return i.useEffect((function(){t((0,a.jo)())}),[]),null==d?(0,m.jsx)(f.o,{}):(0,m.jsxs)("section",{className:"cart cart--".concat(n),children:[(0,m.jsx)(u.u,{controlled:!0,active:j,title:"Confirm",onConfirm:function(){k((function(t){return!t})),t((0,s.LL)([]))},onClose:function(){k(!1)},children:"Pay $".concat(w," for you order?")}),(0,m.jsx)("div",{className:"wrapper",children:(0,m.jsxs)("div",{className:"cart__body",children:[(0,m.jsx)("div",{className:"cart__button-back",onClick:function(){return e(-1)},children:(0,m.jsx)(h.Z,{})}),(0,m.jsxs)("div",{className:"cart__container",children:[(0,m.jsx)("h3",{className:"cart__title",children:"Cart"}),(0,m.jsx)("div",{className:"cart__total",children:(0,m.jsxs)("button",{className:"cart__order",onClick:function(){"0.00"!==w&&k((function(t){return!t}))},children:["To order :",(0,m.jsxs)("span",{children:["$",w]})]})}),(0,m.jsx)("div",{className:"cart__list",children:y.length?y.map((function(t){var e=t.title,n=t.subtitle,o=t.isbn13,i=t.price,r=t.image;return(0,m.jsx)(v,{title:e,subtitle:n,isbn13:o,price:i,image:r},o)})):(0,m.jsx)("div",{className:"cart__null",children:"Your cart is empty. Choose the product you like!"})})]})]})})]})}},4324:function(t,e,n){n.d(e,{Qp:function(){return p},tG:function(){return y},tP:function(){return b}});var o=!1;if("undefined"!==typeof window){var i={get passive(){o=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var r="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],l=!1,s=-1,a=void 0,d=void 0,u=void 0,m=function(t){return c.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},v=function(t){var e=t||window.event;return!!m(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},f=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},h=function(){if(void 0!==d){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(e,t),d=void 0}},p=function(t,e){if(t){if(!c.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};c=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(c),[n]),r?window.requestAnimationFrame((function(){if(void 0===d){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,o=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=o-window.innerHeight;t&&e>=o&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===u){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(e),r&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(s=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-s;!m(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?v(t):t.stopPropagation())}(e,t)},l||(document.addEventListener("touchmove",v,o?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=function(){r&&(c.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),l=!1),s=-1),r?h():f(),c=[]},y=function(t){t?(c=c.filter((function(e){return e.targetElement!==t})),r&&(t.ontouchstart=null,t.ontouchmove=null,l&&0===c.length&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),l=!1)),r?h():f()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}}]);
//# sourceMappingURL=277.a502fc80.chunk.js.map