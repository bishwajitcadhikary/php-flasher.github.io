(self.webpackChunk=self.webpackChunk||[]).push([[179],{710:function(t,e,n){t.exports=function(t){"use strict";var e=[],n=[];function o(t,o){if(t&&"undefined"!=typeof document){var i,a=!0===o.prepend?"prepend":"append",r=!0===o.singleTag,s="string"==typeof o.container?document.querySelector(o.container):document.getElementsByTagName("head")[0];if(r){var c=e.indexOf(s);-1===c&&(c=e.push(s)-1,n[c]={}),i=n[c]&&n[c][a]?n[c][a]:n[c][a]=f()}else i=f();65279===t.charCodeAt(0)&&(t=t.substring(1)),i.styleSheet?i.styleSheet.cssText+=t:i.appendChild(document.createTextNode(t))}function f(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),o.attributes)for(var e=Object.keys(o.attributes),n=0;n<e.length;n++)t.setAttribute(e[n],o.attributes[e[n]]);var i="prepend"===a?"afterbegin":"beforeend";return s.insertAdjacentElement(i,t),t}}o('.notyf__icon--info,.notyf__icon--warning{background:#fff;border-radius:50%;box-sizing:border-box;display:block;height:1em;margin:0 auto;position:relative;width:1em}.notyf__icon--info:after,.notyf__icon--info:before,.notyf__icon--warning:after,.notyf__icon--warning:before{border-width:0;box-sizing:border-box;content:"";position:absolute;transition:all 1s}.notyf__icon--info:after,.notyf__icon--info:before{background-color:currentColor;border-radius:.03em;left:50%;transform:translateX(-50%);width:.15em}.notyf__icon--info:before{height:.38em;top:.4em}.notyf__icon--info:after{box-shadow:-.06em .19em,-.06em .44em,.06em .44em;height:.13em;top:.21em}.notyf__icon--warning:after,.notyf__icon--warning:before{background-color:currentColor;border-radius:.03em;left:50%;transform:translateX(-50%);width:.15em}.notyf__icon--warning:before{height:.38em;top:.21em}.notyf__icon--warning:after{height:.13em;top:.65em}',{});var i,a=function(){return a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},r=function(){return r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},s=function(){function t(t){this.options=t,this.listeners={}}return t.prototype.on=function(t,e){var n=this.listeners[t]||[];this.listeners[t]=n.concat([e])},t.prototype.triggerEvent=function(t,e){var n=this;(this.listeners[t]||[]).forEach((function(t){return t({target:n,event:e})}))},t}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(i||(i={}));var c,f=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,i.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];return this.updateFn(n,i.Remove,this.notifications),n},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onUpdate=function(t){this.updateFn=t},t}();!function(t){t.Dismiss="dismiss",t.Click="click"}(c||(c={}));var d={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},l=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),e=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.on=function(t,e){var n;this.events=r(r({},this.events),((n={})[t]=e,n))},t.prototype.update=function(t,e){e===i.Add?this.addNotification(t):e===i.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,o=this,i=this._popRenderedNotification(t);i&&((e=i.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(o.animationEndEventName,n),o.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e,n=this._buildNotificationCard(t),o=t.options.className;return o&&(e=n.classList).add.apply(e,o.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype.getXPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.x)||"right"},t.prototype.getYPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.y)||"bottom"},t.prototype.adjustContainerAlignment=function(t){var e=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],o=this.container.style;o.setProperty("justify-content",n),o.setProperty("align-items",e)},t.prototype._buildNotificationCard=function(t){var e=this,n=t.options,o=n.icon;this.adjustContainerAlignment(n);var i=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),a=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),r=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),s=this._createHTMLElement({tagName:"div",className:"notyf__message"});s.innerHTML=n.message||"";var f=n.background||n.backgroundColor;if(o){var d=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if(("string"==typeof o||o instanceof String)&&(d.innerHTML=new String(o).valueOf()),"object"==typeof o){var l=o.tagName,p=void 0===l?"i":l,u=o.className,m=o.text,y=o.color,h=void 0===y?f:y,g=this._createHTMLElement({tagName:p,className:u,text:m});h&&(g.style.color=h),d.appendChild(g)}r.appendChild(d)}if(r.appendChild(s),i.appendChild(r),f&&(n.ripple?(a.style.background=f,i.appendChild(a)):i.style.background=f),n.dismissible){var _=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),v=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});_.appendChild(v),r.appendChild(_),i.classList.add("notyf__toast--dismissible"),v.addEventListener("click",(function(n){var o,i;null===(i=(o=e.events)[c.Dismiss])||void 0===i||i.call(o,{target:t,event:n}),n.stopPropagation()}))}i.addEventListener("click",(function(n){var o,i;return null===(i=(o=e.events)[c.Click])||void 0===i?void 0:i.call(o,{target:t,event:n})}));var b="top"===this.getYPosition(n)?"upper":"lower";return i.classList.add("notyf__toast--"+b),i},t.prototype._createHTMLElement=function(t){var e=t.tagName,n=t.className,o=t.text,i=document.createElement(e);return n&&(i.className=n),i.textContent=o||null,i},t.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout((function(){e.a11yContainer.textContent=t}),100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),p=function(){function t(t){var e=this;this.dismiss=this._removeNotification,this.notifications=new f,this.view=new l;var n=this.registerTypes(t);this.options=r(r({},d),t),this.options.types=n,this.notifications.onUpdate((function(t,n){return e.view.update(t,n)})),this.view.on(c.Dismiss,(function(t){var n=t.target,o=t.event;e._removeNotification(n),n.triggerEvent(c.Dismiss,o)})),this.view.on(c.Click,(function(t){var e=t.target,n=t.event;return e.triggerEvent(c.Click,n)}))}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);return this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);return this.open(e)},t.prototype.open=function(t){var e=this.options.types.find((function(e){return e.type===t.type}))||{},n=r(r({},e),t);this.assignProps(["ripple","position","dismissible"],n);var o=new s(n);return this._pushNotification(o),o},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(t,e){var n=this;t.forEach((function(t){e[t]=null==e[t]?n.options[t]:e[t]}))},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=void 0!==t.options.duration?t.options.duration:this.options.duration;n&&setTimeout((function(){return e._removeNotification(t)}),n)},t.prototype._removeNotification=function(t){var e=this.notifications.indexOf(t);-1!==e&&this.notifications.splice(e,1)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=r(r({},n),e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice(),n=d.types.map((function(t){var n=-1;e.forEach((function(e,o){e.type===t.type&&(n=o)}));var o=-1!==n?e.splice(n,1)[0]:{};return r(r({},t),o)}));return n.concat(e)},t}();o('@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{align-items:flex-end;box-sizing:border-box;color:#fff;display:flex;flex-direction:column;height:100%;justify-content:flex-end;left:0;padding:20px;pointer-events:none;position:fixed;top:0;width:100%;z-index:9999}.notyf__icon--error,.notyf__icon--success{background:#fff;border-radius:50%;display:block;height:21px;margin:0 auto;position:relative;width:21px}.notyf__icon--error:after,.notyf__icon--error:before{background:currentColor;border-radius:3px;content:"";display:block;height:12px;left:9px;position:absolute;top:5px;width:3px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{background:currentColor;border-radius:3px;content:"";display:block;position:absolute;width:3px}.notyf__icon--success:after{height:6px;left:6px;top:9px;transform:rotate(-45deg)}.notyf__icon--success:before{height:11px;left:10px;top:5px;transform:rotate(45deg)}.notyf__toast{-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;border-radius:2px;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-sizing:border-box;display:block;flex-shrink:0;max-width:300px;overflow:hidden;padding:0 15px;pointer-events:auto;position:relative;transform:translateY(25%)}.notyf__toast--disappear{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;transform:translateY(0)}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards;border-radius:50%;height:400px;position:absolute;right:0;top:0;transform:scale(0) translateY(-51%) translateX(13%);transform-origin:bottom right;width:400px;z-index:5}.notyf__wrapper{align-items:center;border-radius:3px;display:flex;padding-bottom:17px;padding-right:15px;padding-top:17px;position:relative;z-index:10}.notyf__icon{-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;font-size:1.3em;margin-right:13px;opacity:0;text-align:center;width:22px}.notyf__dismiss{-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;height:100%;margin-right:-15px;opacity:0;position:absolute;right:0;top:0;width:26px}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;height:100%;opacity:.35;outline:none;transition:opacity .2s ease,background-color .2s ease;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{background:#fff;border-radius:3px;content:"";height:12px;left:calc(50% - 1px);position:absolute;top:calc(50% - 5px);width:2px}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{background-color:rgba(0,0,0,.15);opacity:.7}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em;opacity:0;position:relative;vertical-align:middle}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{-webkit-animation-duration:.5s;animation-duration:.5s;height:600px;width:600px}.notyf__toast{border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);max-width:none;width:100%}.notyf__dismiss{width:56px}}',{});var u=new(function(){function t(){}return t.prototype.success=function(t,e,n){this.flash("success",t,e,n)},t.prototype.info=function(t,e,n){this.flash("info",t,e,n)},t.prototype.warning=function(t,e,n){this.flash("warning",t,e,n)},t.prototype.error=function(t,e,n){this.flash("error",t,e,n)},t.prototype.flash=function(t,e,n,o){var i=this.createNotification(t,e,n,o);this.renderOptions({}),this.render({notification:i})},t.prototype.createNotification=function(t,e,n,o){if("object"==typeof t?(t=(o=t).type,e=o.message,n=o.title):"object"==typeof e?(e=(o=e).message,n=o.title):"object"==typeof n&&(n=(o=n).title),void 0===e)throw new Error("message option is required");return{type:t||"info",message:e,title:n,options:o}},t.prototype.render=function(t){var e=t.notification;e.type=e.type||"info";var n=a(a({},e),e.options);this.notyf=this.notyf||new p,this.notyf.open(n),this.notyf.view.container.dataset.turboCache="false",this.notyf.view.a11yContainer.dataset.turboCache="false"},t.prototype.renderOptions=function(t){var e=a({duration:t.duration||5e3},t);e.types=e.types||[],e.types.push({type:"info",className:"notyf__toast--info",background:"#5784E5",icon:{className:"notyf__icon--info",tagName:"i"}}),e.types.push({type:"warning",className:"notyf__toast--warning",background:"#E3A008",icon:{className:"notyf__icon--warning",tagName:"i"}}),this.notyf=this.notyf||new p(e)},t}());return t.addFactory("notyf",u),u}(n(951))},544:function(){const t=document.querySelector("#anchor-navigation");!function(){const e=document.querySelector("#anchor-navigation ul"),n=document.querySelectorAll("#main-article h3, #main-article h2, #main-article a.anchor");if(0===n.length)return void t.remove();t.classList.add("lg:block"),n.forEach((t=>{t.parentElement.classList.add("px-6","rounded"),t.classList.add("leading-loose");const n=document.createElement("a");n.href="A"===t.tagName?t.hash:"#"+t.getAttribute("id"),n.innerHTML="A"===t.tagName?t.innerText:'<i class="fa-duotone fa-angle-right"></i>'+t.innerText,n.classList.add("leading-loose","text-md","inline-block","w-full","text-indigo-500");const o=document.createElement("li");o.classList.add("px-6","rounded","w-full"),"A"===t.tagName&&(o.classList.remove("px-6"),o.classList.add("px-12")),o.appendChild(n),e.appendChild(o)}))}(),e(),function(){const t=document.querySelector("#main-article");document.querySelectorAll(".sticky").forEach((e=>{if(e.offsetHeight<=window.innerHeight||t.clientHeight<=e.offsetHeight)return;const n=document.createElement("div");n.classList.add("h-screen","overflow-y-auto"),n.innerHTML=e.innerHTML,e.innerHTML=n.outerHTML}))}();function e(t){void 0===t&&(t=window.location.hash);document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((e=>{const n=e.parentElement;e.classList.remove("text-gray-900"),e.classList.add("text-indigo-500"),n.classList.remove("bg-indigo-500"),t===e.hash&&(e.classList.remove("text-indigo-500"),e.classList.add("text-white"),n.classList.add("bg-indigo-500"))}))}document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),window.location.hash=t.hash,e(t.hash)}))}))},584:function(){const t=document.querySelectorAll(".prev-next");let e,n,o;function i(t,e){document.querySelectorAll(t).forEach((function(t){t.querySelector("span").innerHTML=e.innerHTML.replace(/\d+\. /,"").replace(/<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/,""),t.href=e.href,t.classList.remove("hidden"),t.classList.remove("sm:hidden")}))}document.getElementById("main-navigation").querySelectorAll("a").forEach((function(t){void 0===n&&!1!==t.href.includes("/docs/")&&(t.classList.contains("text-white")?o=t:void 0===o?e=t:void 0===n&&(n=t))})),void 0!==o&&(t.forEach((function(t){t.classList.remove("hidden")})),e&&i(".link-previous",e),n&&i(".link-next",n))},312:function(t,e,n){"use strict";const o=document.getElementById("menu-toggle"),i=document.getElementById("main-navigation"),a=document.getElementById("main-article");function r(t,e){t.classList.contains(e)?t.classList.remove(e):t.classList.add(e)}o.addEventListener("click",(function(t){t.preventDefault(),r(o,"menu-closed"),r(i,"hidden"),r(a,"hidden")}));n(584);document.querySelectorAll("pre > code").forEach((function(t){const e=document.createElement("button");e.classList.add("copy","text-indigo-500"),e.type="button",e.ariaLabel=e.title="Copy code to clipboard";const n='<i class="fa-duotone fa-clipboard"></i>';e.innerHTML=n;const o=t.parentElement;o.classList.add("copyable"),o.append(e),e.addEventListener("click",(function(){let o=t.innerText.trim();if(o.startsWith("#")){const t=o.split("\n");t.shift(),o=t.join("\n")}window.navigator.clipboard.writeText(o),e.innerHTML='<i class="fa-duotone fa-clipboard-check"></i>',setTimeout((function(){e.innerHTML=n}),1e3)}))}));n(544);var s=n(951),c=n.n(s),f=n(624),d=n.n(f),l=n(339),p=n.n(l),u=n(710),m=n.n(u),y=n(538),h=n.n(y);window.flasher=c(),window.toastr=d(),window.noty=p(),window.notyf=m(),window.sweetalert=h();const g=window.messages,_=t=>{let{handler:e,type:n,message:o,title:i,options:a}=t;const r=c().create(e);r&&(i?r.flash(n,o,i,a):r.flash(n,o,a))};document.querySelectorAll("pre > code").forEach((function(t){const e=t.innerText.trim();if(!e.startsWith("#/"))return;const n=document.createElement("button");n.classList.add("tryit","text-indigo-500"),n.type="button",n.ariaLabel=n.title="Try it!";const o='<i class="fa-duotone fa-play"></i>';n.innerHTML=o;const i=t.parentElement;i.classList.add("tryable"),i.append(n),n.addEventListener("click",(function(){n.innerHTML='<i class="fa-duotone fa-spinner-third spin"></i>';const t=e.split("\n")[0].trim();try{if("#/ flasher darkMode"===t){document.documentElement.classList.add("dark");const e=c().create("flasher");e.renderOptions(g[t].options),e.flash(g[t].type,g[t].message,g[t].options),setTimeout((function(){document.documentElement.classList.remove("dark")}),5e3)}else Array.isArray(g[t])?g[t].forEach(_):_(g[t])}catch(t){console.error(t)}setTimeout((function(){n.innerHTML=o}),500)}))}))}},function(t){t.O(0,[624,538,339,717],(function(){return e=312,t(t.s=e);var e}));t.O()}]);