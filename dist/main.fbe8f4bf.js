(self.webpackChunk=self.webpackChunk||[]).push([[179],{786:function(){var e=document.querySelector("#anchor-navigation");function n(e){void 0===e&&(e=window.location.hash),document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((function(n){var t=n.parentElement;n.classList.remove("text-gray-900"),n.classList.add("text-indigo-500"),t.classList.remove("bg-indigo-500"),e===n.hash&&(n.classList.remove("text-indigo-500"),n.classList.add("text-white"),t.classList.add("bg-indigo-500"))}))}!function(){var n=document.querySelector("#anchor-navigation ul"),t=document.querySelectorAll("a.anchor");if(0===t.length)return void e.remove();e.classList.add("md:block"),t.forEach((function(e){e.parentElement.classList.add("px-6","rounded"),e.classList.add("leading-loose");var t=document.createElement("a");t.href=e.hash,t.innerText=e.innerText,t.classList.add("leading-loose","text-md","w-full","text-indigo-500");var i=document.createElement("li");i.classList.add("px-6","rounded","w-full"),i.appendChild(t),n.appendChild(i)}))}(),n(),document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),window.location.hash=e.hash,n(e.hash)}))}))},635:function(){var e=document.querySelectorAll(".prev-next"),n=document.getElementById("main-navigation").querySelectorAll("a"),t=void 0,i=void 0,o=void 0;function a(e,n){document.querySelectorAll(e).forEach((function(e){e.querySelector("span").innerHTML=n.innerHTML.replace(/\d+\. /,"").replace(/<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/,""),e.href=n.href,e.classList.remove("hidden"),e.classList.remove("sm:hidden")}))}n.forEach((function(e){void 0===i&&!1!==e.href.includes("/docs/")&&(e.classList.contains("text-white")?o=e:void 0===o?t=e:void 0===i&&(i=e))})),void 0!==o&&(e.forEach((function(e){e.classList.remove("hidden")})),t&&a(".link-previous",t),i&&a(".link-next",i))},76:function(e,n,t){"use strict";var i=document.getElementById("menu-toggle"),o=document.getElementById("main-navigation"),a=document.getElementById("main-article");function c(e,n){e.classList.contains(n)?e.classList.remove(n):e.classList.add(n)}i.addEventListener("click",(function(e){e.preventDefault(),c(i,"menu-closed"),c(o,"hidden"),c(a,"hidden")}));t(635);document.querySelectorAll("pre.highlight").forEach((function(e){var n=document.createElement("button");n.className="copy",n.type="button",n.ariaLabel="Copy code to clipboard",n.innerText="Copy",e.append(n),n.addEventListener("click",(function(){var t=e.querySelector("code").innerText.trim();window.navigator.clipboard.writeText(t),n.innerText="Copied",setTimeout((function(){n.innerText="Copy"}),1e3)}))}));t(786)}},function(e){e.O(0,[28],(function(){return n=76,e(e.s=n);var n}));e.O()}]);