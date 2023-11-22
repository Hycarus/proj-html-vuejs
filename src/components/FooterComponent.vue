<template>
    <div class="d-flex">
        <div class="my-text-white  w-25 px-2" v-for="element in store.footerTop1">
            <div class="py-5">
                <img class="w-50" :src="element.img" :alt="element.title">
            </div>
            <p class="my-text-grey">{{ element.description }}</p>
            <div class="py-2 hover"><i class="fa-solid fa-phone-volume px-1"></i> {{ element.telephone }}</div>
            <div class="hover"> <i class="fa-regular fa-clock px-1"></i> {{ element.time }}</div>
        </div>
        <div class="my-text-white w-25 px-2" v-for="element in store.footerTop2">
            <div class="pt-5 pb-4">
                <h3>{{ element.title }}</h3>
            </div>
            <div>
                <ul>
                    <li v-for="item in element.submenu" class="list-unstyled py-2 my-text-grey ">
                        <h5 class="hover">{{ item.subtitle }}</h5>
                        <div class="hover-grey">{{ item.name }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="my-text-white w-25 px-2" v-for="element in store.footerTop3">
            <div class="pb-4 pt-5">
                <h3>{{ element.title }}</h3>
            </div>
            <div>
                <ul>
                    <li v-for="item in element.submenu" class="list-unstyled py-2 my-text-grey hover">
                        {{ item.subtitle }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="my-text-white w-25 px-2 d-flex flex-column align-items-center justify-content-center "
            v-for="element in store.footerTop4">
            <div class="py-5">
                <h3>{{ element.title }}</h3>
            </div>
            <div>
                <img class="w-100" :src="element.img" :alt="element.title">
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'FooterComponent',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.my-text-white {
    color: $text_white;
}

.my-text-grey {
    color: $text_grey;
}

.my-text-dark-grey {
    color: $text_dark_grey;
}

.my-text-light-blue {
    color: $text_light_blue;
}

h3,
h5 {
    margin: 0;
}

ul {
    margin: 0;
    padding: 0;
}

.hover {
    cursor: pointer;

    i {
        transition: all 0.2s;

    }

    &:hover i {
        color: $text_light_blue;
    }

    &:hover {
        color: $text_light_blue;
    }
}

.hover-grey {
    cursor: pointer;

    &:hover {
        color: $text_dark_grey;
    }
}


.hover img {
    cursor: pointer;
}
</style>