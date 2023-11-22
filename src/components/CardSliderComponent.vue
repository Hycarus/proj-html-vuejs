<template>
    <div class="my-border mb-5">
        <div>
            <img class="w-100" :src="image" :alt="role">
        </div>
        <div class="p-4">
            <div class="d-flex justify-content-between ">
                <h4>{{ role }}</h4>
                <span class="my-text-white" :class="(price === 'Free' ? 'yellow-pill' : 'blue-pill')">{{ price }}</span>
            </div>
            <div class="my-text-grey">{{ name }}</div>
            <p class="my-text-grey">{{ description }}</p>
            <div class="my-text-grey">
                <i class="fa-solid fa-user"></i>
                <span class="pe-3 ps-1">0</span>
                <i class="fa-solid fa-tag"></i>
                <span class="pe-3 ps-1">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CardSliderComponent',
    props: {
        image: String,
        name: String,
        role: String,
        description: String,
        price: String,
        category: String,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.my-border {
    border: 1px solid $text_light_grey;
    background-color: $bg_white;
}

.my-text-white {
    color: $text_white;
}

.my-text-grey {
    color: $text_grey;
}

.blue-pill {
    background-color: $bg_light_blue;
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
}

.yellow-pill {
    background-color: $bg_yellow;
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
}
</style>