<template>
  <header class="position-fixed w-100">
    <HeaderComponent/>
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
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components:{
    Carousel,
    HeaderComponent
},
    data(){
      return{
        store,
      }
    },
    methods:{
      mouseOver(item){
        if(item === 'Home'){
          this.store.homeFlag = true
        }else if(item === 'Courses'){
          this.store.coursesFlag = true
        }else if(item === 'Instructors'){
          this.store.instructorsFlag = true
        }else if(item === 'Events'){
          this.store.eventsFlag = true
        }else if(item === 'Pages'){
          this.store.pagesFlag = true
        }else if(item === 'Elements'){
          this.store.elementsFlag = true
        }
      },
      mouseLeave(){
        this.store.homeFlag = false
        this.store.coursesFlag = false
        this.store.instructorsFlag = false
        this.store.eventsFlag = false
        this.store.pagesFlag = false
        this.store.elementsFlag = false
      }
    },
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/_variables.scss' as *;
.my-text-white{
  color: $text_white;
}
header{
  z-index: 1000;
  margin-top: 10px;
  height: 100px;
}
</style>