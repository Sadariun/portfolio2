document.addEventListener("DOMContentLoaded", function () {
    if (swiper) {
        var swiper = new Swiper(".toc__container", {
            slidesPerView: "auto",
            spaceBetween: 24,
        });
        var swiper = new Swiper(".results", {
            slidesPerView: "6",
            spaceBetween: 20,
            draggable: true,
            loop: true,
            navigation: {
                nextEl: ".swiperResultArrowRight",
                prevEl: ".swiperResultArrowLeft",
                disabledClass: "disabled",
            },
            // autoplay: {
            //     delay: 1000,
            // },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    initialSlide: 1,
                },
                769: {
                    slidesPerView: "3",
                },
                1024: {
                    slidesPerView: "6",
                },
            },
        });
        var swiper = new Swiper(".reviews__container", {
            slidesPerView: "3",
            spaceBetween: 20,
            draggable: true,
            loop: true,
            navigation: {
                nextEl: ".results_right",
                prevEl: ".results_letf",
                disabledClass: "disabled",
            },
            breakpoints: {
                300: {
                    slidesPerView: "1",
                },
                480: {
                    slidesPerView: "1",
                },
                768: {
                    slidesPerView: "2",
                },
                1024: {
                    slidesPerView: "2",
                },
                1025: {
                    slidesPerView: "3",
                },
            },
        });
        var swiper = new Swiper(".swiperMain", {
            slidesPerView: 3,
            spaceBetween: 20,
            draggable: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiperMainArrowRight",
                prevEl: ".swiperMainArrowLeft",
                disabledClass: "disabled",
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                },
                768: {
                    slidesPerView: 3,
                },
            },

            on: {
                slideChange: function () {
                    updatePagination();
                },
            },
        });
        function updatePagination() {
            var currentSlide = swiper.realIndex + 1;
            var totalSlides = swiper.slides.length;
            document.getElementById("swiperCounter").textContent =
                currentSlide + "/" + totalSlides;
        }
        updatePagination();
    }
});
