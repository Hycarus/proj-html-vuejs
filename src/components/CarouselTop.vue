<template>
    <div class="d-flex align-items-center justify-content-center position-relative">

        <swiper slidesPerView="1" :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }"
            :grabCursor="true" :speed="2000" :preload="false" :lazyLoading="true" :loop="true" :navigation="true"
            :modules="modules" :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
            }">
            <swiper-slide v-for="element in store.carouselTopInfo">
                <div class="position-relative">
                    <div>
                        <img class="w-100" :src="element.img" alt="slider">
                    </div>
                    <div class="position-absolute" id="info">
                        <h1 class="py-4 my-title">
                            {{ element.title }}
                        </h1>
                        <p class="py-4 my-description">
                            {{ element.description }}
                        </p>
                        <button class="btn my-btn" v-show="element.button != ''">
                            {{ element.button }}
                        </button>
                        <div class=" my-btn justify-content-center m-auto align-items-center my-circle"
                            v-show="element.button === ''">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>

            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { store } from '../data/store.js'
export default {
    name: 'Carousel',
    data() {
        return {
            store,
            modules: [Pagination, Autoplay, Navigation],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

#info {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: $text_white;
}

.my-btn {
    text-align: center;
    opacity: 0;
    animation: appaer 0.3s linear forwards;
    animation-delay: 2.6s;
}

.my-description {
    text-align: center;
    opacity: 0;
    animation: appaer 0.3s linear forwards;
    animation-delay: 2.3s;
}

.my-title {
    font-size: 70px;
    text-align: center;
    opacity: 0;
    animation: appaer 0.3s linear forwards;
    animation-delay: 2s;
}

@keyframes appaer {
    from {
        transform: translate(0, 50%);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
}

.btn {
    background-color: $bg_blue;
    border-radius: 0;
    color: $text_white;
    padding: 10px 30px;
}

.my-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $bg_white;
    color: $text_dark;
    font-size: 30px;
    display: flex;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1) !important;
    }

}

button {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: $bg_dark_blue;
    }
}
</style>