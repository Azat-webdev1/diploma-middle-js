<<<<<<< HEAD
(()=>{"use strict";const e=(e,l,o,s)=>{const t=document.querySelectorAll(l),n=document.querySelector(o),c=document.querySelector(s),d=document.querySelector(e);t.forEach((e=>{e.addEventListener("click",(()=>{d.style.display="block",c.style.display="block"}))})),c.addEventListener("click",(()=>{d.style.display="none",c.style.display="none"})),n.addEventListener("click",(()=>{d.style.display="none",c.style.display="none"}))};e(".header-modal","a.btn-warning",".header-modal__close",".overlay"),e(".services-modal","a.btn-success",".services-modal__close",".overlay"),(()=>{const e=document.querySelector(".smooth-scroll"),l=document.documentElement;e.style.display="none",window.addEventListener("scroll",(()=>{window.scrollY>700?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{l.scrollTo({top:0,behavior:"smooth"})}))})()})();
=======
(()=>{"use strict";const e=(e,t,n,o)=>{const l=document.querySelectorAll(t),s=document.querySelector(n),c=document.querySelector(o),r=document.querySelector(e);l.forEach((e=>{e.addEventListener("click",(()=>{r.style.display="block",c.style.display="block"}))})),c.addEventListener("click",(()=>{r.style.display="none",c.style.display="none"})),s.addEventListener("click",(()=>{r.style.display="none",c.style.display="none"}))},t=(e,t,n,o,l,s)=>{let c=0;const r=document.querySelector(t);let a=r.querySelector(n),d=r.querySelector(o),i=r.querySelector(l),u=r.querySelector(s);const y=e=>1===String(e).length?"0"+e:String(e),m=()=>{let t=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=0,o=0,l=0,s=0;return t>0&&(n=Math.floor(t%60),o=Math.floor(t/60%60),l=Math.floor(t/60/60%24),s=Math.floor(t/86400)),{timeRemaining:t,days:s,hours:l,minutes:o,seconds:n}})();a.textContent=y(t.days),d.textContent=y(t.hours),i.textContent=y(t.minutes),u.textContent=y(t.seconds),t.timeRemaining<=0&&clearInterval(c)};m(),c=setInterval(m,1e3)};e(".header-modal","a.btn-warning",".header-modal__close",".overlay"),e(".services-modal","a.btn-success",".services-modal__close",".overlay"),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.documentElement;e.style.display="none",window.addEventListener("scroll",(()=>{window.scrollY>700?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{t.scrollTo({top:0,behavior:"smooth"})}))})(),t("20 Sep 2021","#order_1",".count_1 span",".count_2 span",".count_3 span",".count_4 span"),t("20 Sep 2021","#order_2",".count_1 span",".count_2 span",".count_3 span",".count_4 span")})();
>>>>>>> coutn-timer
