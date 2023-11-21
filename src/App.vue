<template>
  <header class="position-fixed w-100">
    <HeaderComponent/>
  </header>
  <div id="carousel">
    <Carousel
    :images="store.carouselTopList"
    />
  </div>
  <main>
    <div id="section1">
      <section class="container" >
        <div class="d-flex">
          <CardComponent/>
        </div>
        <div class="d-flex align-items-center justify-content-center w-100">
          <div class="w-50">
            <h2>The Trusted Name for In-Home Tutoring.</h2>
            <p class="my-text-dark-grey">
              Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.
            </p>
            <p>
              <a class="text-uppercase text-decoration-none my-text-light-blue" href="">
                Learn More
              </a>
            </p>
          </div>
          <div>
            <img class="w-100" src="/images/h5-img-1.jpg" alt="">
          </div>
        </div>
      </section>
    </div>
    <section class="container">
      <div class="d-flex align-items-center justify-content-center"> 
        <div>
          <img class="w-100" src="/images/h5-img-2.jpg" alt="">
        </div>
        <div class="w-50">
          <h2>
            Empowering Children to Reach Their Potential.
          </h2>
          <p class="my-text-dark-grey">
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate.
          </p>
          <div class="d-flex w-100">
            <p class="my-text-light-blue w-50 d-flex flex-column ">
              <span class="fs-1">168</span>
              <span class="fs-4">User Story</span>
            </p>
            <p class="my-text-light-blue w-50 d-flex flex-column">
              <span class="fs-1">347</span>
              <span class="fs-4">Events</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>  
</template>

<script>
  import CardComponent from './components/CardComponent.vue';
  import Carousel from './components/Carousel.vue';
  import {store} from './data/store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components:{
    Carousel,
    HeaderComponent,
    CardComponent,
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
@use './assets/styles/partials/_variables.scss' as *;
.my-text-white{
  color: $text_white;
}
.my-text-light-blue{
  color: $text_light_blue;
}
.my-text-dark-grey{
  color: $text_dark_grey;
}
header{
  z-index: 1000;
  margin-top: 10px;
  height: 100px;
}
#section1{
  border-bottom: 1px solid $text_light_grey;
  margin-bottom: 100px;
}
</style>