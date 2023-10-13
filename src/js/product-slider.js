const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 0,
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
  });