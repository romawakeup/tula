const swiperNews = new Swiper(".news-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 35,
  freeMode: true,
  // breakpoints: {
  //   20: {
  //     slidesPerView: 2,
  //     spaceBetween: 15,
  //     slideToClickedSlide: true,
  //   },

  //   1000: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //     slideToClickedSlide: true,
  // },
  //   1300: {
  //     slidesPerView: 4,
  //     spaceBetween: 35,
  //     slideToClickedSlide: true,
  // },
  // },
  navigation: {
    nextEl: ".btn-next-news",
    prevEl: ".btn-prev-news",
  },
});

const swiperPlaces = new Swiper(".places-swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".btn-next-places",
    prevEl: ".btn-prev-places",
  },
  breakpoints: {
    20: {
      slidesPerView: 2,
      spaceBetween: 15,
      slideToClickedSlide: true,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    1300: {
      slidesPerView: 4,
      spaceBetween: 35,
      slideToClickedSlide: true,
  },
  },
});

const swiperExc = new Swiper(".excursions-swiper", {
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".btn-next-exc",
    prevEl: ".btn-prev-exc",
  },
  breakpoints: {
    20: {
      slidesPerView: 2,
      spaceBetween: 15,
      slideToClickedSlide: true,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    1300: {
      slidesPerView: 4,
      spaceBetween: 35,
      slideToClickedSlide: true,
  },
  },
});

const swiperEvents = new Swiper(".events-swiper", {
  loop: true,
  slidesPerView: 4.5,
  breakpoints: {
    20: {
      slidesPerView: 2,
      spaceBetween: 15,
      slideToClickedSlide: true,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideToClickedSlide: true,
  },
    1300: {
      slidesPerView: 4,
      spaceBetween: 35,
      slideToClickedSlide: true,
  },
  },
});
