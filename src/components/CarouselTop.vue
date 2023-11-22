<template>
    <div class="d-flex align-items-center justify-content-center position-relative">
        <div class="btn-left" @click="prev">
        </div>
        <div>
            <div>
                <img class="w-100" :src="images[this.store.activeIndex]" alt="slider">
            </div>
        </div>
        <div class="btn-right" @click="next">
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store.js'
    export default {
        name: 'CarouselTop',
        data(){
            return{
                store,
            }
        },
        props: {
            images: Array,
            paragraph: String,
        },
        methods:{
            prev(){
                this.store.activeIndex = (this.store.activeIndex - 1 + this.images.length) % this.images.length
            },
            next(){
                this.store.activeIndex = (this.store.activeIndex + 1) % this.images.length
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.btn-left, .btn-right {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: -50px 0;
    position: absolute;
    bottom: 50%;
    cursor: pointer;
    z-index: 999;
}
.btn-right {
    right: 0;
    margin-right: 0;
}
.btn-left {
    left: 0;
    margin-left: 0;
}
.btn-left::after {
    content: '';
    width: 50px;
    height: 50px;
    border-top: 3px solid $text_white;
    border-left: 3px solid $text_white;
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%) rotate(-45deg);
    transition: all 0.3s;
}
.btn-left:hover::after{
    border-top: 3px solid $text_grey;
    border-left: 3px solid $text_grey;
}
.btn-right::before {
    content: '';
    width: 50px;
    height: 50px;
    border-top: 3px solid $text_white;
    border-left: 3px solid $text_white;
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%) rotate(135deg);
    transition: all 0.3s;
}
.btn-right:hover::before{
    border-top-color: $text_grey;
    border-left-color: $text_grey;
}
</style>