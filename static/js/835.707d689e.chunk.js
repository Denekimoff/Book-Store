(self.webpackChunkbook_store=self.webpackChunkbook_store||[]).push([[835],{4324:function(t,e,n){"use strict";n.d(e,{Qp:function(){return y},tG:function(){return g},tP:function(){return h}});var o=!1;if("undefined"!==typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],c=!1,l=-1,a=void 0,s=void 0,d=void 0,f=function(t){return u.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},v=function(t){var e=t||window.event;return!!f(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},m=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},p=function(){if(void 0!==s){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(e,t),s=void 0}},y=function(t,e){if(t){if(!u.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};u=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(u),[n]),i?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,o=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=o-window.innerHeight;t&&e>=o&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===d){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(e),i&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(l=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-l;!f(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?v(t):t.stopPropagation())}(e,t)},c||(document.addEventListener("touchmove",v,o?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(){i&&(u.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),c=!1),l=-1),i?p():m(),u=[]},g=function(t){t?(u=u.filter((function(e){return e.targetElement!==t})),i&&(t.ontouchstart=null,t.ontouchmove=null,c&&0===u.length&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),c=!1)),i?p():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},5095:function(t,e,n){var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,a="object"==typeof self&&self&&self.Object===Object&&self,s=l||a||Function("return this")(),d=Object.prototype.toString,f=Math.max,v=Math.min,m=function(){return s.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var o,r,i,u,c,l,a=0,s=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function w(t){return a=t,c=setTimeout(E,e),s?g(t):u}function b(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-a>=i}function E(){var t=m();if(b(t))return O(t);c=setTimeout(E,function(t){var n=e-(t-l);return d?v(n,i-(t-a)):n}(t))}function O(t){return c=void 0,h&&o?g(t):(o=r=void 0,u)}function T(){var t=m(),n=b(t);if(o=arguments,r=this,l=t,n){if(void 0===c)return w(l);if(d)return c=setTimeout(E,e),g(l)}return void 0===c&&(c=setTimeout(E,e)),u}return e=y(e)||0,p(n)&&(s=!!n.leading,i=(d="maxWait"in n)?f(y(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),T.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=l=r=c=void 0},T.flush=function(){return void 0===c?u:O(m())},T}},8820:function(t,e,n){"use strict";n.d(e,{oHP:function(){return r}});var o=n(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(t)}},7692:function(t,e,n){"use strict";n.d(e,{fdF:function(){return r}});var o=n(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"}}]})(t)}},9983:function(t,e,n){"use strict";n.d(e,{w_:function(){return a}});var o=n(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.createContext&&o.createContext(r),u=function(){return u=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},u.apply(this,arguments)},c=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};function l(t){return t&&t.map((function(t,e){return o.createElement(t.tag,u({key:e},t.attr),l(t.child))}))}function a(t){return function(e){return o.createElement(s,u({attr:u({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var n,r=t.attr,i=t.size,l=t.title,a=c(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),o.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,a,{className:n,style:u(u({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),t.children)};return void 0!==i?o.createElement(i.Consumer,null,(function(t){return e(t)})):e(r)}}}]);
//# sourceMappingURL=835.707d689e.chunk.js.map