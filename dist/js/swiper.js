const swiperNews = new Swiper(".news-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 4,
  spaceBetween: 35,
  freeMode: true,

});

const swiperPlaces = new Swiper(".places-swiper", {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 4.5,
  spaceBetween: 20,
});

const swiperExc = new Swiper(".excursions-swiper", {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 4.5,
  spaceBetween: 20,
});

const swiperEvents = new Swiper(".events-swiper", {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 4.5,
});
