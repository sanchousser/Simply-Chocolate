(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();new Swiper(".products__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1}});function r(){for(var n=document.querySelectorAll(".reveal"),o=0;o<n.length;o++){var s=window.innerHeight,t=n[o].getBoundingClientRect().top,e=150;t<s-e?n[o].classList.add("active"):n[o].classList.remove("active")}}window.addEventListener("scroll",r);(()=>{const n=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),s=document.querySelector("[data-menu-close]");n.addEventListener("click",()=>{o.classList.toggle("is-open")}),s.addEventListener("click",()=>{o.classList.toggle("is-open")})})();new Swiper(".review__swiper",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:1e-4}});(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(o){for(var s=this,t=(s.document||s.ownerDocument).querySelectorAll(o),e=0;t[e]&&t[e]!==s;)++e;return Boolean(t[e])}),typeof n.closest!="function"&&(n.closest=function(o){for(var s=this;s&&s.nodeType===1;){if(s.matches(o))return s;s=s.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),s=document.querySelectorAll(".js-modal-close");n.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add("modal-open");var a=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+a+'"]');i.classList.add("active"),o.classList.add("active")})}),s.forEach(function(t){t.addEventListener("click",function(e){var a=this.closest(".modal");document.body.classList.remove("modal-open"),a.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(t){var e=t.keyCode;e==27&&(document.body.classList.remove("modal-open"),document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(t){t.target===t.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))}),$(document).ready(function(){$(function(){$("#js-buy-now-modal").submit(function(t){t.preventDefault(),$("#js-thanks-buy-now-modal").attr("data-modal","3").addClass("js-open-modal"),setTimeout(()=>{document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"),$(".thanks-buy-pop-up-modal").addClass("active")},300)})}),$(function(){$("#review-modal-form").submit(function(t){t.preventDefault(),$("#js-review-modal").attr("data-modal","4").addClass("js-open-modal"),setTimeout(()=>{document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"),$(".thanks-review-modal").addClass("active")},300)})})})});new Swiper(".modal__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:16}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800,mousewheel:{invert:!0,sensitivity:.2},keyboard:{enabled:!0,onlyInViewport:!1,sensitivity:.01}});
