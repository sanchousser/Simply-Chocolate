(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();new Swiper(".products__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1}});function c(){for(var o=document.querySelectorAll(".reveal"),t=0;t<o.length;t++){var n=window.innerHeight,s=o[t].getBoundingClientRect().top,e=150;s<n-e?o[t].classList.add("active"):o[t].classList.remove("active")}}window.addEventListener("scroll",c);(()=>{const o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelector("[data-menu-close]");o.addEventListener("click",()=>{t.classList.toggle("is-open")}),n.addEventListener("click",()=>{t.classList.toggle("is-open")})})();new Swiper(".review__swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:1e-4}});(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(t){for(var n=this,s=(n.document||n.ownerDocument).querySelectorAll(t),e=0;s[e]&&s[e]!==n;)++e;return Boolean(s[e])}),typeof o.closest!="function"&&(o.closest=function(t){for(var n=this;n&&n.nodeType===1;){if(n.matches(t))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");o.forEach(function(s){s.addEventListener("click",function(e){e.preventDefault();var r=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+r+'"]');i.classList.add("active"),t.classList.add("active")})}),n.forEach(function(s){s.addEventListener("click",function(e){var r=this.closest(".modal");r.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(s){var e=s.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".modal__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:16}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:.01}});var l=[].slice.call(document.querySelectorAll(".input-js")),d=document.querySelector(".button-js");l.forEach(function(o){o.addEventListener("input",a,!1)});function a(){var o=l.filter(function(t){return t.value.trim()===""}).length;d.disabled=o!==0}a();
