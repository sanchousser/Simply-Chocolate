(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();new Swiper(".products__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.1},keyboard:{enabled:!0,onlyInViewport:!1}});function a(){for(var n=document.querySelectorAll(".reveal"),t=0;t<n.length;t++){var o=window.innerHeight,s=n[t].getBoundingClientRect().top,e=150;s<o-e?n[t].classList.add("active"):n[t].classList.remove("active")}}window.addEventListener("scroll",a);(()=>{const n=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-menu-close]");n.addEventListener("click",()=>{t.classList.toggle("is-open")}),o.addEventListener("click",()=>{t.classList.toggle("is-open")})})();new Swiper(".review__swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:1e-4}});(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(t){for(var o=this,s=(o.document||o.ownerDocument).querySelectorAll(t),e=0;s[e]&&s[e]!==o;)++e;return Boolean(s[e])}),typeof n.closest!="function"&&(n.closest=function(t){for(var o=this;o&&o.nodeType===1;){if(o.matches(t))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");n.forEach(function(s){s.addEventListener("click",function(e){e.preventDefault();var r=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+r+'"]');i.classList.add("active"),t.classList.add("active")})}),o.forEach(function(s){s.addEventListener("click",function(e){var r=this.closest(".modal");r.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(s){var e=s.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".modal__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:16}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:.01}});
