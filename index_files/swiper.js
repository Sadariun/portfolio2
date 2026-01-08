
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") return;

  const swiperReviews = new Swiper("#reviews .swiper", {
    loop: true,
    loopAdditionalSlides: 6,       // больше клонов — стабильнее loop
    spaceBetween: 20,
    slidesPerView: 3,              // ровно 3 на экране
    centeredSlides: true,          // активный по центру
    speed: 550,

    // управление
    navigation: {
      nextEl: "#reviews .rev-btn.next",
      prevEl: "#reviews .rev-btn.prev",
      disabledClass: "is-disabled",
    },
    mousewheel: { enabled: true, forceToAxis: true },  // скролл колёсиком
    keyboard:   { enabled: true, onlyInViewport: true },

    // адаптив
    breakpoints: {
      981:  { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
      621:  { slidesPerView: 2, spaceBetween: 18, centeredSlides: true },
      0:    { slidesPerView: 1 , spaceBetween: 16, centeredSlides: true }
    },

    // чтобы корректно пересчитаться, если контейнер был скрыт/изменён
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
  });
});

