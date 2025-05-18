const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
