(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();new Swiper(".products__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2300,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0},parallax:!0,keyboard:{enabled:!0,onlyInViewport:!1}});function i(){for(var o=document.querySelectorAll(".reveal"),t=0;t<o.length;t++){var r=window.innerHeight,s=o[t].getBoundingClientRect().top,e=150;s<r-e?o[t].classList.add("active"):o[t].classList.remove("active")}}window.addEventListener("scroll",i);(()=>{const o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),r=document.querySelector("[data-menu-close]");o.addEventListener("click",()=>{t.classList.toggle("is-open")}),r.addEventListener("click",()=>{t.classList.toggle("is-open")})})();new Swiper(".review__swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const o={openModalBtn:document.querySelector("[modal-button]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();