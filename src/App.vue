<template>
  <header class="position-fixed w-100" :class="{ 'my-bg-white': store.scrolled }">
    <HeaderComponent />
  </header>
  <div id="carousel">
    <CarouselTop :images="store.carouselTopList" />
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
              Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
              ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.
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
  </main>
</template>

<script>
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
  },
  data() {
    return {
      store,
      pallino1Flag: true,
      pallino2Flag: false,
      pallino3Flag: false,

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
  },
  created() {
    window.addEventListener('scroll', this.scrollHeader)
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/_variables.scss' as *;

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
</style>