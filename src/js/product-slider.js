const productsSwiper = new Swiper('.products__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 18,
  
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 18,
        }
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableonInteraction: true,
    },
    freeMode: true,
    speed: 800,
    mousewheel: {
      invert: true,
      sensitivity: 0.2,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });