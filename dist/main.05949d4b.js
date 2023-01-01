(self.webpackChunk=self.webpackChunk||[]).push([[179],{768:function(){const e=document.querySelector("#anchor-navigation");!function(){const t=document.querySelector("#anchor-navigation ul"),n=document.querySelectorAll("#main-article h3, #main-article h2, #main-article a.anchor");if(0===n.length)return void e.remove();e.classList.add("lg:block"),n.forEach((e=>{e.parentElement.classList.add("px-6","rounded"),e.classList.add("leading-loose");const n=document.createElement("a");n.href="A"===e.tagName?e.hash:"#"+e.getAttribute("id"),n.innerHTML="A"===e.tagName?e.innerText:'<i class="fa-duotone fa-angle-right"></i>'+e.innerText,n.classList.add("leading-loose","text-md","inline-block","w-full","text-indigo-500");const s=document.createElement("li");s.classList.add("px-6","rounded","w-full"),"A"===e.tagName&&(s.classList.remove("px-6"),s.classList.add("px-12")),s.appendChild(n),t.appendChild(s)}))}(),t(),function(){const e=document.querySelector("#main-article");document.querySelectorAll(".sticky").forEach((t=>{if(t.offsetHeight<=window.innerHeight||e.clientHeight<=t.offsetHeight)return;const n=document.createElement("div");n.classList.add("h-screen","overflow-y-auto"),n.innerHTML=t.innerHTML,t.innerHTML=n.outerHTML}))}();function t(e){void 0===e&&(e=window.location.hash);document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((t=>{const n=t.parentElement;t.classList.remove("text-gray-900"),t.classList.add("text-indigo-500"),n.classList.remove("bg-indigo-500"),e===t.hash&&(t.classList.remove("text-indigo-500"),t.classList.add("text-white"),n.classList.add("bg-indigo-500"))}))}document.querySelectorAll("a.anchor, #anchor-navigation ul li a").forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault(),window.location.hash=e.hash,t(e.hash)}))}))},594:function(){const e=document.querySelectorAll(".prev-next");let t,n,s;function o(e,t){document.querySelectorAll(e).forEach((function(e){e.querySelector("span").innerHTML=t.innerHTML.replace(/\d+\. /,"").replace(/<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/,""),e.href=t.href,e.classList.remove("hidden"),e.classList.remove("sm:hidden")}))}document.getElementById("main-navigation").querySelectorAll("a").forEach((function(e){void 0===n&&!1!==e.href.includes("/docs/")&&(e.classList.contains("text-white")?s=e:void 0===s?t=e:void 0===n&&(n=e))})),void 0!==s&&(e.forEach((function(e){e.classList.remove("hidden")})),t&&o(".link-previous",t),n&&o(".link-next",n))},280:function(e,t,n){"use strict";const s=document.getElementById("menu-toggle"),o=document.getElementById("main-navigation"),i=document.getElementById("main-article");function r(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}s.addEventListener("click",(function(e){e.preventDefault(),r(s,"menu-closed"),r(o,"hidden"),r(i,"hidden")}));n(594);document.querySelectorAll("pre > code").forEach((function(e){const t=document.createElement("button");t.classList.add("copy","text-indigo-500"),t.type="button",t.ariaLabel=t.title="Copy code to clipboard";const n='<i class="fa-duotone fa-clipboard"></i>';t.innerHTML=n;const s=e.parentElement;s.classList.add("copyable"),s.append(t),t.addEventListener("click",(function(){let s=e.innerText.trim();if(s.startsWith("#")){const e=s.split("\n");e.shift(),s=e.join("\n")}window.navigator.clipboard.writeText(s),t.innerHTML='<i class="fa-duotone fa-clipboard-check"></i>',setTimeout((function(){t.innerHTML=n}),1e3)}))}));n(768);var c=n(543),a=n.n(c),l=n(245),u=n.n(l);const d={success:["Success!","Operation completed successfully.","Task completed successfully.","Your request was processed successfully.","The operation was successful.","Great success!","The action was completed successfully.","Your submission has been received successfully.","The process was completed successfully.","The operation completed successfully."],error:["Error!","An error occurred.","There was a problem processing your request.","Something went wrong.","The operation failed.","Sorry, something went wrong.","Oops, something went wrong.","An error has occurred.","We're sorry, but an error occurred.","An unexpected error occurred."],warning:["Warning: This cannot be undone.","Caution: May have unintended consequences.","Exercise caution when performing this action.","This may have unintended consequences. Proceed with caution.","Warning: This may be irreversible.","Caution: May have unintended results.","Warning: Proceed with caution."],info:["Heads up: This may take a while.","This may take some time. Please be patient.","This may take a while. Do not refresh the page.","Heads up: This may take a while. Be patient.","This may take some time. Do not refresh the page."]};function h(e){const t=d[e];return t[Math.floor(Math.random()*t.length)]}const m={"# General usage":function(){a().success("Book has been created successfully!")},"# success":function(){a().success(h("success"))},"# error":function(){a().error(h("error"))},"# warning":function(){a().warning(h("warning"))},"# info":function(){a().info(h("info"))},"# notification builder with toastr":function(){u().success("The action was completed successfully.","Great!",{timeOut:1e4})},"# example with type":function(){a().error("An error has occurred please try again later.")},"# success type with title":function(){a().success(h("success"),"Congratulations!")},"# error message":function(){a().error("This may take some time. Do not refresh the page.")},"# error message with title":function(){a().error("This may take some time. Do not refresh the page.","Oops!")},"# error message with options":function(){a().error("This may take some time. Do not refresh the page.","Oops!",{timeout:1e4,position:"top-center"})},"# success message with options":function(){a().success("The action was completed successfully.","Congratulations!",{timeout:1e4,position:"top-center"})},"# Message with priority":function(){a().warning("Message with priority 4"),a().success("Message with priority 3"),a().info("Message with priority 2"),a().error("Message with priority 1")},"# Translated message":function(){a().success("تمت العملية بنجاح.","تهانينا!",{rtl:!0,position:"top-right"})},"# Translated message top-left":function(){a().success("تمت العملية بنجاح.","تهانينا!",{rtl:!0,position:"top-left"})}};document.querySelectorAll("pre > code").forEach((function(e){const t=e.innerText.trim();if(!t.startsWith("#"))return;const n=document.createElement("button");n.classList.add("tryit","text-indigo-500"),n.type="button",n.ariaLabel=n.title="Try it!";const s='<i class="fa-duotone fa-play"></i>';n.innerHTML=s;const o=e.parentElement;o.classList.add("tryable"),o.append(n),n.addEventListener("click",(function(){n.innerHTML='<i class="fa-duotone fa-spinner-third spin"></i>';const e=t.split("\n")[0].trim();try{m[e]()}catch(t){console.error(t),console.log(`${e} example doest not exist`)}setTimeout((function(){n.innerHTML=s}),500)}))}))}},function(e){e.O(0,[245,857],(function(){return t=280,e(e.s=t);var t}));e.O()}]);