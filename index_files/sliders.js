const tocSwiper = new Swiper(".toc-swiper", {
    slidesPerView: "auto",
    slidesOffsetAfter: 24,
    slidesOffsetBefore: 0,
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    padding: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: false,
        dragSize: 206,
    },
    breakpoints: {
        750: {
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
        },
    },
});

