<template>
    <div class="d-flex align-items-center justify-content-center position-relative h-100 col-12">
        <div class="d-flex justify-content-center align-items-center flex-column my-text-white">
            <div class="img my-5">
                <img class="w-100" :src="images" alt="slider">
            </div>
            <p class="text-center w-50">
                {{ paragraph }}
            </p>
            <h2>
                {{ name }}
            </h2>
            <h4 class="text-uppercase">
                {{ role }}
            </h4>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'
export default {
    name: 'CarouselMid',
    data() {
        return {
            store,
        }
    },
    props: {
        images: String,
        paragraph: String,
        name: String,
        role: String,
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.img {
    width: 100px;
    height: 100px;
}

.my-text-white {
    color: $text_white;
}
</style>