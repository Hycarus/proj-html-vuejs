<template>
    <div class="card" v-for="img in store.firstSection">
        <div>
            <img :src="img.img" :alt="img.title">
        </div>
        <h4>{{ img.title }}</h4>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.card {
    margin: 30px 10px;
    background-color: $bg_very_light_blue;
    width: 200px;
    height: 200px;
    border-radius: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover img {
        translate: 0 -10px;
    }

    img {
        transition: all 0.3s;
    }
}

h4 {
    padding-top: 30px;
}
</style>