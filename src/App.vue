<template>
  <header class="position-fixed w-100">
    <div class="container">
      <div>
        <img src="/images/logo-light.png" alt="logo header">
      </div>
      
    </div>
  </header>
  <div id="carousel">
    <Carousel
    :images="store.carouselTopList"
    />
  </div>  
</template>

<script>
  import Carousel from './components/Carousel.vue';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components:{
      Carousel,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      
    },
  }
</script>

<style lang="scss" scoped>
header{
  z-index: 1000;
  padding-top: 30px;
}
</style>