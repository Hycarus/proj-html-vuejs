<template>
  <body>
    <header class="position-fixed w-100" :class="{ 'my-bg-white my-border-bottom': store.scrolled }">
      <HeaderComponent />
    </header>
    <div id="fixed-icon">
      <div id="fixed-square" class="my-text-white" v-show="store.scrolled" @click="scrollTop()">
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
          <i class="fa-solid fa-chevron-up"></i>
          <div class="text-uppercase">top</div>
        </div>
      </div>
      <div class="small-square1">
        <img class="w-100" src="/images/60699165_459440804828391_7177805742290763776_o.png" alt="">
      </div>
      <div class="small-square2 d-flex align-items-center justify-content-center ">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    <div id="carousel">
      <CarouselTop />
    </div>
    <main>
      <div id="section1">
        <section class="container">
          <div class="d-flex">
            <CardComponent />
          </div>
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="w-50">
              <h2>The Trusted Name for In-Home Tutoring.</h2>
              <p class="my-text-dark-grey">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit
                consequat
                ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.
              </p>
              <p>
                <a class="text-uppercase text-decoration-none my-text-light-blue" href="">
                  Learn More
                  <i class="fa-solid fa-chevron-right ps-2"></i>
                </a>
              </p>
            </div>
            <div>
              <img class="w-100" src="/images/h5-img-1.jpg" alt="">
            </div>
          </div>
        </section>
      </div>
      <section id="section2" class="container">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <img class="w-100" src="/images/h5-img-2.jpg" alt="">
          </div>
          <div class="w-50">
            <h2>
              Empowering Children to Reach Their Potential.
            </h2>
            <p class="my-text-dark-grey">
              Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
              ipsutis sem nibh id eis sed odio sit amet nibh vulputate.
            </p>
            <div class="d-flex w-100">
              <p class="my-text-light-blue w-50 d-flex flex-column ">
                <span class="fs-1"><vue3-autocounter ref='firstCounter' :startAmount='0' :endAmount='168' :duration='1'
                    :autoinit='false' /></span>
                <span class="fs-4">User Story</span>
              </p>
              <p class="my-text-light-blue w-50 d-flex flex-column">
                <span class="fs-1">
                  <vue3-autocounter ref='secondCounter' :startAmount='0' :endAmount='347' :duration='1'
                    :autoinit='false' />
                </span>
                <span class="fs-4">Events</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section3" class="w-100 ">
        <div class="container h-100 position-relative ">
          <div class="row flex-nowrap h-100 overflow-x-hidden" ref="carousel">
            <CarouselMid :name="person.name" :role="person.role" :paragraph="person.description" :images="person.img"
              v-for="(person, index) in store.thirdSection" />
          </div>
          <div class="pallino primo"
            @click.stop="scroll(0, 0), this.pallino1Flag = true, this.pallino2Flag = false, this.pallino3Flag = false"
            :class="{ 'active': this.pallino1Flag }">
          </div>
          <div class="pallino secondo"
            @click.stop="scroll(1320, 0), this.pallino2Flag = true, this.pallino1Flag = false, this.pallino3Flag = false"
            :class="{ 'active': this.pallino2Flag }">
          </div>
          <div class="pallino terzo"
            @click.stop="scroll(2640, 0), this.pallino3Flag = true, this.pallino2Flag = false, this.pallino1Flag = false"
            :class="{ 'active': this.pallino3Flag }">
          </div>
        </div>
      </section>
      <section id="section4" class="py-5 w-100 fs-5">
        <Section4 />
      </section>
      <section id="section5" class="py-5">
        <div class="container">
          <h1 class="text-center">
            Popular Online Courses
          </h1>
          <p class="text-center fs-5 pb-5">
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
            ipsutis sem nibh id elit
          </p>
          <swiper id="my-pagination" :modules="modules" slides-per-view="3" :space-between="40"
            :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }" :grabCursor="true" :loop="true"
            :navigation="true">
            <swiper-slide class="d-flex" v-for="element in store.section5Card">
              <CardSliderComponent :description="element.description" :category="element.category" :name="element.name"
                :role="element.role" :price="element.price" :image="element.img" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <section id="section6">
        <div class="container py-5">
          <div class="text-center py-5">
            <h1>The Best Tutors in Town</h1>
            <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
              ipsutis sem nibh id elit</p>
          </div>
          <div class="d-flex justify-content-between align-items-center ">
            <CardSection6 v-for="person in store.section6Card" :image="person.img" :name="person.name" :role="person.role"
              :description="person.description" />
          </div>
        </div>
      </section>
      <section id="section7" class="py-5">
        <div class="container">
          <h1 class="text-center">
            Pricing Plans
          </h1>
          <p class="text-center pb-5">
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci
          </p>
        </div>
        <div>
          <TabComponent />
        </div>
      </section>
      <section id="section8" class="py-5">
        <div class="container">
          <swiper slidesPerView="5" :grabCursor="true" :spaceBetween="30" :speed="2000" :loop="true" :navigation="true"
            :modules="modules" :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }">
            <swiper-slide v-for="client in store.sectionClient">
              <div><img :src="client" alt=""></div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </main>
    <footer id="footer">
      <div class="container py-5 w-100 my-border-bottom">
        <FooterComponent />
      </div>
      <div class="d-flex justify-content-between align-items-center my-text-grey container py-4">
        <div>
          <span>&#xa9;</span>
          <span>2017 Qode Interactive, All Rights Reserved</span>
        </div>
        <div class="text-uppercase">
          <span class="px-3">Call +44 300 303 0266</span>
          <span class="px-3">follow us</span>
          <span>
            <i class="fa-brands fa-twitter px-2"></i>
            <i class="fa-brands fa-instagram px-2"></i>
            <i class="fa-brands fa-facebook-f ps-2"></i>
          </span>
        </div>
      </div>
    </footer>
  </body>
</template>

<script>
import Vue3Autocounter from 'vue3-autocounter';
import FooterComponent from './components/FooterComponent.vue';
import TabComponent from './components/TabComponent.vue'
import CardSection6 from './components/CardSection6.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import CardSliderComponent from './components/CardSliderComponent.vue';
import Section4 from './components/Section4.vue'
import CarouselMid from './components/CarouselMid.vue';
import CardComponent from './components/CardComponent.vue';
import CarouselTop from './components/CarouselTop.vue';
import { store } from './data/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    CarouselTop,
    HeaderComponent,
    CardComponent,
    CarouselMid,
    Section4,
    CardSliderComponent,
    Swiper,
    SwiperSlide,
    CardSection6,
    TabComponent,
    FooterComponent,
    Vue3Autocounter,
  },
  data() {
    return {
      store,
      pallino1Flag: true,
      pallino2Flag: false,
      pallino3Flag: false,
      modules: [Pagination, Autoplay, Navigation],
      click: false,
      startCounter: false,
    }
  },
  methods: {
    scroll(x, y) {
      const slider = this.$refs.carousel
      slider.scrollTo({
        top: y,
        left: x,
        behavior: "smooth"
      });
    },
    scrollHeader() {
      if (window.scrollY >= 790) {
        this.store.scrolled = true
      } else if (window.scrollY < 790) {
        this.store.scrolled = false
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    startMyCounter() {
      const scrollYPosition = window.scrollY;
      if (scrollYPosition >= 1200 && !this.startCounter) {
        this.$refs.firstCounter.start()
        this.$refs.secondCounter.start()
        this.startCounter = true;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollHeader)
    window.addEventListener('scroll', this.startMyCounter)
  },
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/_variables.scss' as *;

body {
  background-image: url('/images/page-background-img.png');
  background-repeat: repeat;
  background-size: contain;
}

.my-text-white {
  color: $text_white;
}

.my-bg-white {
  background-color: $bg_white;
}

.my-text-light-blue {
  color: $text_light_blue;
}

.my-text-dark-grey {
  color: $text_dark_grey;
}

.my-text-grey {
  color: $text_grey;
}

.my-border-bottom {
  border-bottom: 1px solid $text_light_grey;
}

header {
  z-index: 1000;
  padding-top: 10px;
  height: 100px;
}

#section1 {
  border-bottom: 1px solid $text_light_grey;
  margin-bottom: 100px;
}

#section3 {
  background-image: url('/images/h5-parallax-img-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 60px;
  height: 700px;
}

#section4 {
  background-color: $bg_white;
}

.pallino {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: $text_white;
  position: absolute;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
}

.active {
  opacity: 1;
}

.pallino.primo {
  bottom: 50px;
  left: 47%;
}

.pallino.secondo {
  bottom: 50px;
  left: 50%;
}

.pallino.terzo {
  bottom: 50px;
  left: 53%;
}

#section5 {
  border-top: 1px solid $text_light_grey;

  border-bottom: 1px solid $text_light_grey;
}

#my-pagination {

  --swiper-pagination-bullet-inactive-color: #188fc6 !important;
  // --swiper-pagination-color: #ff0000;
  // Colore dei pallini 
  // --swiper-theme-color: #00ff00;
  // Colore del pallino attivo 
  --swiper-pagination-margin: 5px;
  // Margine tra i pallini 
  --swiper-pagination-opacity: 0.7;
  // Opacità dei pallini 
  --swiper-pagination-opacity-active: 1;
  // Opacità del pallino attivo 
  --swiper-pagination-bullet-size: 10px;
  // Dimensioni dei pallini 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}


#section6 {
  border-bottom: 1px solid $text_light_grey;
  background-color: $bg_white;
}

#section8 {
  background-color: $bg_white;
}

#footer {
  background-color: $bg_footer;

  .my-border-bottom {
    border-bottom: 1px solid $text_dark_grey;
  }

  i {
    cursor: pointer;

    &:hover {
      color: $text_light_blue;
    }
  }

  .my-text-grey {
    span {
      cursor: pointer;
    }
  }
}

#fixed-square {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: $bg_dark_blue;
  cursor: pointer;
}

.small-square1 {
  position: fixed;
  right: 0;
  bottom: 150px;
  width: 30px;
  height: 30px;
  box-shadow: -2px 2px 6px 2px #888888;
  z-index: 400;
}

.small-square2 {
  position: fixed;
  right: 0;
  bottom: 100px;
  width: 30px;
  height: 30px;
  box-shadow: -2px 2px 6px 2px #888888;
  z-index: 400;
  background-color: $bg-white;

  i {
    color: $text_pink;
  }
}

a {
  &:hover i {
    opacity: 1;
    translate: 2px 0;
  }

  i {
    opacity: 0;
    transition: all 0.3s;
  }
}
</style>