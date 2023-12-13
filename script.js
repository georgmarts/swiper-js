window.onload = function () {
  const swiper1 = new Swiper(".swiper-1", {
    direction: "horizontal",
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });

  const swiper2 = new Swiper(".swiper-2", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
