var clc;!function(e){function n(e){if("undefined"==typeof e||null===e)return!1;var n=de(e)?ce(e):e;return le(n.innerHTML).length>0}function t(e,n){var t=ie.createElement(e);return n&&n(t),t}function r(e,n){var t=ie.createEvent("Event");t.initEvent(n,!0,!1),e.dispatchEvent(t)}function o(e,n){return e.split(/&/g).filter(function(e){return""!==e}).reduce(function(e,n){var t=n.split("=");return e[oe(t[0])]=oe(t[1]),e},n||{})}function i(e){return X(e).map(function(n){return[re(n),re(e[n])]}).filter(function(e){return!!e[1]}).map(function(e){return e[0]+"="+e[1]}).join("&")}function c(e){return!!(e||document.body).querySelector("#careersadsdoublehigh")}function a(){var n=[].slice.call(fe()),t=function(e){return!!e},r=e.options.d.tlb.map(se).filter(t),o=e.options.d.mlb.map(se).filter(t),i=e.options.d.sb.map(se).filter(t);return n.concat(r,o,i)}function s(n){var t=n.parentNode,r=n.getAttribute("id");if(e.options.d.tlb.indexOf(r)!==-1)return 1;if(e.options.d.mlb.indexOf(r)!==-1)return 2;if(e.options.d.sb.indexOf(r)!==-1)return location.hostname.indexOf("codinghorror")!==-1?128:c()||0===pe()?4:16;switch(t.getAttribute("id")){case"question":return 1;case"answers":return 2;case"sidebar":return c()?0:8;default:return 0}}function u(e){return e.className.indexOf("adzerk")!==-1||e.id.indexOf("adzerk")!==-1}function l(e){return e.reduce(function(e,n){return n.prefilled?e|n.zone:e},0)}function d(){var e=a();return e.map(function(e){return{element:e,zone:s(e),prefilled:u(e)}})}function f(e){return e.reduce(function(e,n){return e|n.zone},0)}function p(e){var n=d(),t={};(G.clc_request||G.clcfl_request)&&(t.omni=G.clc_request||G.clcfl_request),t.lw=e,t.zc=f(n),t.pf=l(n);var r=o(location.hash.substr(1)),c=v(r);K(t,c),te=n,ve=ue();var a=i(t),s=V+"?"+a;h(s)}function v(e){var n=/^ads:/,t=clc.overrides?Object.keys(clc.overrides).reduce(function(e,t){return e[n.test(t)?t:"ads:"+t]=clc.overrides[t],e},{}):{};for(var r in e)0===r.indexOf("ads:")&&(t[r]=e[r]);return t}function m(e,t,r){var o=ce(e);if(null===o)return function(){};var i=ue(),c=setInterval(function(){n(o)&&(clearInterval(c),r(ue()-i))},t);return function(){return clearInterval(c)}}function h(e,n,r,o){void 0===n&&(n=!0),void 0===r&&(r=!0),void 0===o&&(o=null);var i=t("script",function(t){t.src=e,t.async=r;var i=!1;t.onreadystatechange=t.onload=function(){if(!i){var e=t.readyState;e&&"loaded"!==e&&"complete"!==e||(i=!0,o&&o(t),n&&(t.parentNode||t.parentElement)&&(t.parentNode||t.parentElement).removeChild(t))}}});ie.body.appendChild(i)}function y(e,n,t){void 0===n&&(n=!0);var r=e.length;e.forEach(function(e){h(e,!1,!1,function(){r--,0===r&&t()})})}function g(){var e=pe();if(0===e)return void p(0);var r="#sidebar "+ne,o=function(){};W?o=m(r,20,p):p(0),setTimeout(function(){var e=ce(r);n(e)||(o(),Y&&ie.body.appendChild(t("img",function(e){e.src="//"+ee+"/timeout.gif",e.style.display="none"})))},Q)}function b(e){var n="stylesheet";/\.less$/.test(e)&&(n+="/less",me&&setTimeout(N,10));var r=t("link",function(t){t.rel=n,t.href=e,t.type="text/css"});ie.head.appendChild(r),me||(G.less=G.less||{},G.less.sheets=G.less.sheets||[],G.less.sheets.push(r),"function"==typeof G.less.refresh&&G.less.refresh())}function N(){me&&h("//"+ee+"/content/third-party/less.js")}function w(e){return Object.keys(e.zones).some(function(n){return!!e.zones[n].az})}function O(e){te&&(e.st.length>0,e.st.forEach(b),te.forEach(function(n){if(!n.prefilled){var t=e.zones[n.zone];t&&T(n.zone,n.element,t)}}),w(e)&&S(e.tags),r(document,"clc:ads-loaded"))}function T(e,n,t){t.cn?(A(n,t),_(n,"mousedown",C),_(n,"click",L)):t.az?k(n,t.az):t.bg&&(q(document.body,t.bg),t.bgc&&t.bgc.length>0&&E(t.bgc))}function x(){return[].map.call(ae(".post-taglist .post-tag"),function(e){return e.textContent})}function z(e){var n=G.ados||(G.ados={});n.run=n.run||[],n.run.push(e)}function j(e){return e.replace(/^\||\|$/g,"").replace(/\|/g,",")}function S(e){he||(z(function(){setTimeout(function(){e=e?j(e):x().map(re).join(","),ados_setKeywords(e),ados_load()},0)}),setTimeout(function(){var e="https:"===location.protocol?"https":"http",n="https:"===location.protocol?"engine":"static",t=e+"://"+n+".adzerk.net/ados.js";h(t)},0),he=!0)}function k(e,n){z(function(){var t=n.s,r=n.z,o=n.w,i=e.getAttribute("id");if(i){var c=t.length>1?t:t[0];ados_add_placement(22,o,i,c).setZone(r)}})}function q(e,n){e.appendChild(t("img",function(e){e.src=n.replace("&md=0","&md="+(ue()-ve)),e.style.display="none",e.className="impression"}))}function E(e){var n=Math.floor(Math.random()*e.length);D(e[n],null,function(e,n,t){})}function C(e){var n=H(e);if(null!=n){var t=I(n);t.click&&(t["meta-target"]||(n.href=t.click))}}function L(e){var n=H(e);if(null!=n){var t=I(n);if(t.click&&t["meta-target"]){e.preventDefault();var r=t["meta-target"];if(!(r>=0)){var o=ye[r];"function"==typeof o&&o(e,n,function(e,n){return R(t.click,"",e,n)})}}}}function H(e){for(var n=e.target;"A"!==n.tagName&&n!==e.currentTarget;)n=n.parentNode;return n!==e.currentTarget?n:null}function I(e){return[].filter.call(e.attributes,function(e){return/^data-clc-/.test(e.name)}).reduce(function(e,n){return e[n.name.replace(/^data-clc-/,"")]=n.value,e},{})}function _(e,n,t){var r="on"+n;e.addEventListener?e.addEventListener(n,t):e.attachEvent?e.attachEvent(r,t):e[r]=t}function A(e,n){var t=n.cl,r=n.cn;t&&(e.className=t.join(" ")),e.style.minHeight=null;var o=ue()-ve;e.innerHTML=r.replace("&md=0","&md="+(o||0))}function M(e,n,t,r,o){var i=new XMLHttpRequest;i.open(e,n,!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.withCredentials=!0,i.onreadystatechange=function(){4===i.readyState&&(200===i.status?r&&r(P(i)):o&&o(i.status,i.responseText,i))},t?("[object Object]"===Object.prototype.toString.call(t)&&(t=Object.keys(t).map(function(e){return re(e)+"="+re(t[e])}).join("&")),i.send(t)):i.send()}function R(e,n,t,r){return M("POST",e,n,t,r)}function D(e,n,t){return M("GET",e,null,n,t)}function P(e){var n=e.getResponseHeader("content-type");if(!n)return e.responseText;switch(n=n.substr(0,n.indexOf(";"))){case"application/json":return JSON.parse(e.responseText);default:return e.responseText}}function $(e,n,t){var r=e.target;if(r.className.indexOf("error")===-1){var o=r.querySelector(".clc-tooltip");o.style.display="none",r.className="clc-dismiss spinner",t(function(e){r.className="clc-dismiss",r.style.display="none",U(r,e)},function(){r.className="clc-dismiss error",r.title=J})}}function F(e,n,t){var r=e.target,o=r.parentNode.querySelector(".clc-spinner");o.className.indexOf("error")===-1&&(o.className="clc-spinner",t(function(){o.className="clc-spinner hidden",B(r)},function(){for(var e=r;e.className.indexOf("clc-dismissed-overlay")===-1;)e=e.parentNode;e.className+=" error",e.innerHTML="<div>Oops! Something went wrong. Don't worry, our best people are on it!</div>"}))}function U(e,n){for(var r=e.parentNode;"LI"!==r.tagName;)r=r.parentNode;if(r=r.querySelector(".job-wrap")){var o=t("div",function(e){e.className="clc-dismissed-overlay hidden",e.innerHTML=n.content});r.appendChild(o);var i=function(){o.className="clc-dismissed-overlay"};"function"==typeof G.requestAnimationFrame?G.requestAnimationFrame(i):setTimeout(i,20)}}function B(e){for(;e.className.indexOf("clc-dismissed-overlay")===-1;)e=e.parentNode;return e.className="clc-dismissed-overlay hidden",setTimeout(function(){for(var n=e;"LI"!==n.tagName;)n=n.parentNode;if(n=n.querySelector(".clc-dismiss")){n.style.display="";var t=n.querySelector(".clc-tooltip");t.style.display=""}e.parentNode.removeChild(e)},210),!1}var G=window,J="Oops! Something went wrong. Don't worry, our best people are on it!",K=Object.assign||function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var r=0,o=n.length;r<o;++r){var i=n[r];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},X=Object.keys||function(e){var n=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n},Z={lib:null,u:null,azw:!0,kt:2e3,tto:!0,d:null,h:null,autoload:!1,allowed:["*"]};e.options=K(Z,clc.options||{}),e.overrides=clc.overrides||{};var Q=e.options.kt,V=e.options.u,W=e.options.azw,Y=e.options.tto,ee=e.options.h,ne="[id^=adzerk].everyonelovesstackoverflow",te=null;e.init=clc.init||[];var re=encodeURIComponent,oe=decodeURIComponent,ie=G.document,ce=function(e){return ie.querySelector(e)},ae=function(e){return ie.querySelectorAll(e)},se=function(e){return ie.getElementById(e)},ue=function(){return(new Date).getTime()},le=function(e){return e.replace(/^\s+|\s+$/g,"")},de=function(e){return"string"==typeof e},fe=function(){return ae(ne)},pe=function(){return fe().length},ve=0;e.addScript=h,e.addScripts=y,e.load=g;var me=!G.less;e.addStyle=b,e.place=O;var he=!1;o(location.hash?location.hash.substr(1):"",e.options);var ye=(ge={},ge[-1]=$,ge[-2]=F,ge);e.init.forEach(function(e){return e(clc)}),e.init.length=0;var ge}(clc||(clc={}));