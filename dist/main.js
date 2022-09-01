(()=>{"use strict";var e,t,r,n,o,i,a,s,l,c,p,d,u,f,m={737:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(601),o=r.n(n),i=r(609),a=r.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Roboto:wght@300&display=swap);"]),a.push([e.id,'*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role=list],ol[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}body{background-color:#31202b;display:grid;place-items:center}a{text-decoration:none;color:inherit}button{all:initial;color:inherit;cursor:pointer}nav{display:flex;align-items:center;padding:.75rem 2rem;gap:8rem;font-family:"Poppins",sans-serif;background-color:#000;color:#fff}nav .link-wrapper{display:flex;gap:2rem;font-size:1.2rem}nav .link-wrapper button{font-family:inherit;font-size:inherit}nav .link-wrapper .dropdown{position:relative}nav .link-wrapper .dropdown button{position:relative}nav .link-wrapper .dropdown button::after{content:"";width:0;height:0;border-left:.35rem solid rgba(0,0,0,0);border-right:.35rem solid rgba(0,0,0,0);border-top:.35rem solid #fff;position:absolute;text-align:center;top:45%;left:110%}nav .link-wrapper .dropdown button::before{content:"";position:absolute;top:0;right:0;left:0;bottom:0;background-color:red;transform:skew(-25deg);z-index:-1}nav .link-wrapper .dropdown .dropdown-menu{position:absolute;left:0;top:calc(100% - .25rem);visibility:hidden;text-align:right;padding:1rem;transform:translateY(-0.25em);transition:all 250ms ease-in-out;pointer-events:none}nav .link-wrapper .dropdown .active-dropdown{visibility:visible;transform:translateY(0.75em);pointer-events:auto;background-color:#000}',""]);const s=a},609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);n&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},601:e=>{e.exports=function(e){return e[1]}},62:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var u=r(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var l=n(e,o),c=0;c<i.length;c++){var p=r(i[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=l}}},793:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},36:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function h(e){var t=v[e];if(void 0!==t)return t.exports;var r=v[e]={id:e,exports:{}};return m[e](r,r.exports,h),r.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.nc=void 0,e=h(62),t=h.n(e),r=h(36),n=h.n(r),o=h(793),i=h.n(o),a=h(892),s=h.n(a),l=h(173),c=h.n(l),p=h(464),d=h.n(p),u=h(737),(f={}).styleTagTransform=d(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("click",(e=>{const t=e.target.classList.contains("droppable");if(!t&&e.target.closest(".dropdown-menu"))return;let r;t&&(r=e.target.nextElementSibling,r.classList.toggle("active-dropdown")),document.querySelectorAll(".active-dropdown").forEach((e=>{e!==r&&e.classList.remove("active-dropdown")}))}))})();