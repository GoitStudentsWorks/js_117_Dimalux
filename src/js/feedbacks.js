import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const feedbacksSwiper = new Swiper('.feedbacks .swiper', {
    modules: [Navigation, Pagination, Keyboard],

    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".feedbacks .swiper-button-next",
        prevEl: ".feedbacks .swiper-button-prev"
    },
    pagination: {
        el: ".feedbacks .swiper-pagination"
    },
    keyboard: {
        enabled: true
    }
});

feedbacksSwiper.on("keyPress", (swiper, keyCode) => {
    if (keyCode === 9) {
        swiper.slideNext();
    }
});