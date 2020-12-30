/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,o,c,a,r,s,i,l,u,m,d,v,f,h,p,y,g=function(e,t,n){var o=document.createElement(n),c=document.querySelector(t);return o.classList.add(e),c.append(o),o},L=function(e,t){var n,o=Math.round(e/10/2),c=0;t.textContent=0,n=requestAnimationFrame((function a(){c<=e?(t.textContent=c,n=requestAnimationFrame(a),c+=o):(t.textContent=e,cancelAnimationFrame(n))}))},q=function(e){var t=document.getElementById(e),n=document.createElement("h3"),o=document.createElement("div");o.classList.add("loader"),n.classList.add("status-msg"),t.addEventListener("input",(function(e){var t=e.target;(t.matches("input[name=user_name]")||t.matches("input[name=user_message]"))&&(t.value=t.value.replace(/[^аА-яёЯЁ ]/,"")),t.matches("input[name=user_phone]")&&(t.value=t.value.replace(/[^+\d]/,"")),t.matches("input[name=user_email]")&&(t.value=t.value.replace(/[^a-z-0-9@.]/i,""))})),t.addEventListener("submit",(function(e){e.preventDefault();var c,a=new FormData(t),r={};t.appendChild(o),t.appendChild(n),o.classList.add("active"),a.forEach((function(e,t){return r[t]=e})),(c=r,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).then((function(e){if(o.classList.remove("active"),200!==e.status)throw new Error("status network not 200");n.classList.add("active"),n.textContent="Спасибо! Мы скоро с Вами свяжемся"})).catch((function(e){n.classList.add("active"),n.textContent="Что-то пошло не так...",console.error(e)})).finally((function(){t.reset(),setTimeout((function(){n.classList.remove("active")}),2e3)}))}))};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1 january 2021",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#timer-hours",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#timer-minutes",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#timer-seconds",c=document.querySelector(t),a=document.querySelector(n),r=document.querySelector(o),s=function(){var t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60);return{timeToStop:t,hours:Math.floor(t/60/60),minutes:o,seconds:n}},i=function e(){var t=s();c.textContent=t.hours<10?"0".concat(t.hours):t.hours,a.textContent=t.minutes<10?"0".concat(t.minutes):t.minutes,r.textContent=t.seconds<10?"0".concat(t.seconds):t.seconds,t.timeToStop<0?(c.textContent="00",a.textContent="00",r.textContent="00",clearInterval()):setInterval(e,1e3)};i()}(),e=document.querySelector(".menu"),t=document.querySelector("menu"),n=function(){t.classList.toggle("active-menu"),t.classList.contains("active-menu")?e.style.display="none":e.style.display="block"},document.querySelector("html").addEventListener("click",(function(o){var c,a=o.target;if(a.classList.contains("close-btn")&&n(),t.classList.contains("active-menu")&&!a.classList.contains("active-menu")&&n(),a.closest(".menu")&&(screen.width>768?(c=-100,t.classList.contains("active-menu")&&t.classList.remove("active-menu"),requestAnimationFrame((function n(){t.style.transform="translateX(".concat(c,"%)"),(c+=1.5)<100?requestAnimationFrame(n):(t.style.transform="translateX(100%)",t.classList.add("active-menu"),t.style.transform="",e.style.display="none")}))):n()),a.closest('main a[href="#service-block"]')){o.preventDefault();var r=a.closest('main a[href="#service-block"]').getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"center"})}if(a.closest("menu li")){o.preventDefault();var s=a.closest("menu li a").getAttribute("href");document.querySelector(s).scrollIntoView({behavior:"smooth",block:"center"})}})),o=document.querySelector(".popup"),document.querySelectorAll(".popup-btn").forEach((function(e){return e.addEventListener("click",(function(){return o.style.display="block"}))})),o.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")&&(o.style.display="none"),(t=t.closest(".popup-content"))||(o.style.display="none")})),h=document.querySelector(".service-header"),p=document.querySelectorAll(".service-header-tab"),y=document.querySelectorAll(".service-tab"),h.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&p.forEach((function(e,n){e===t&&function(e){for(var t=0;t<y.length;t++)e===t?(p[t].classList.add("active"),y[t].classList.remove("d-none")):(p[t].classList.remove("active"),y[t].classList.add("d-none"))}(n)}))})),r=document.querySelectorAll(".portfolio-item"),s=document.querySelector(".portfolio-content"),i=function(e,t,n,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"li",a=document.querySelectorAll(t);g(o,e,"ul");for(var r=0;r<a.length;r++)g(n,".".concat(o),c);var s=document.querySelectorAll(".".concat(n));return s[0].classList.add("".concat(n,"-active")),s}(".portfolio-content",".portfolio-item","dot","portfolio-dots"),l=0,u=0,m=function(e,t,n){e[t].classList.remove(n)},d=function(e,t,n){e[t].classList.add(n)},v=function(){m(r,l,"portfolio-item-active"),m(i,l,"dot-active"),++l>=r.length&&(l=0),d(r,l,"portfolio-item-active"),d(i,l,"dot-active")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;u=setInterval(v,e)},s.addEventListener("click",(function(e){e.preventDefault();var t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&(m(r,l,"portfolio-item-active"),m(i,l,"dot-active"),t.matches("#arrow-right")?l++:t.matches("#arrow-left")?l--:t.matches(".dot")&&i.forEach((function(e,n){e===t&&(l=n)})),l>=r.length&&(l=0),l<0&&(l=r.length-1),d(r,l,"portfolio-item-active"),d(i,l,"dot-active"))})),s.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(u)})),s.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&f()})),f(1500),(a=document.getElementById("command")).addEventListener("mouseover",(function(e){e.target.matches(".command__photo")&&(c=e.target.src,e.target.src=e.target.dataset.img)})),a.addEventListener("mouseout",(function(e){e.target.matches(".command__photo")&&(e.target.src=c)})),document.querySelector(".calc-block").addEventListener("input",(function(e){e.target.matches(".calc-block input[type=text]")&&(e.target.value=e.target.value.replace(/\D/,""))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),r=document.getElementById("total"),s=function(){var t=0,s=1,i=1,l=+n.value,u=+o.value;c.value>1&&(s+=(c.value-1)/10),a.value&&a.value<5?i*=2:a.value&&a.value<10&&(i*=1.5),l&&u&&(t=Math.ceil(e*l*u*s*i)),t>0?L(t,r):r.textContent=t};t.addEventListener("change",(function(e){(e.target.matches("select")||e.target.matches("input"))&&s()}))}(100),q("form1"),q("form2"),q("form3")})();