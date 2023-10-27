const reviewSwiper = new Swiper('.review__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
  
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28,
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
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      sensitivity: 0.0001,
    },
  });