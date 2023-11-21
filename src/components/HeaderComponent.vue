<template>
    <div class="container d-flex align-items-center justify-content-evenly w-100">
        <div>
            <img class="w-50" src="/images/logo-light.png" alt="logo header">
        </div>
        <div class="d-flex align-items-center justify-content-center ">
            <ul class="d-flex text-uppercase my-text-white m-0">
                <li class="list-unstyled px-4 py-5" v-for="(item, index) in this.store.nav" id="nav-list">
                    <h6 class="m-0">{{ item.name }}</h6>
                    <div class="sub-menu position-absolute" :class="(item.submenu4.length > 0 ? 'my-width justify-content-center ' : '')">
                        <ul class="m-0 p-0" v-show="item.submenu1.length > 0">
                            <li class="list-unstyled" v-for="element in item.submenu1" id="sub-nav-list">
                                <div class="d-flex justify-content-between align-items-center position-relative">
                                    <a class="text-decoration-none my-text-white" :class="(element.title ? 'text-title text-uppercase' : '')" :href="element.url">
                                    {{ element.name }}
                                    </a>
                                    <span class="position-absolute chevron" v-show="element.name === 'Blog' || element.name === 'Forums' || element.name === 'Shop'">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </span>
                                </div>
                                <div class="sub-menu2 position-absolute" v-show="element.name === 'Forums' || element.name === 'Blog' || element.name === 'Shop'">
                                    <ul class="m-0 p-0">
                                        <li class="list-unstyled" v-for="subitem in element.dropDownMenu">
                                            <a class="text-decoration-none" :href="subitem.url">
                                                {{ subitem.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul class="m-0 p-0 my-border-left" v-show="item.submenu2.length > 0">    
                            <li class="list-unstyled" v-for="element in item.submenu2">
                                <a class="text-decoration-none my-text-white" :href="element.url" :class="(element.title ? 'text-title text-uppercase' : '')">
                                {{ element.name }}
                                </a>
                                <div v-show="element.img != ''">
                                    <img class="w-75" :src="element.img" :alt="element.name">
                                </div>
                                <div :class="{'blue-pill': element.price != 'Free' && element.prices, 'yellow-pill': element.price === 'Free'}">
                                    {{ element.price }}
                                </div>
                            </li>
                        </ul>
                        <ul class="m-0 p-0 my-border-right my-border-left" v-show="item.submenu3.length > 0">
                            <li class="list-unstyled" v-for="element in item.submenu3">
                                <div>
                                    <a class="text-decoration-none my-text-white" :href="element.url" :class="(element.title ? 'text-title text-uppercase' : '')">
                                    {{ element.name }}
                                    </a>
                                    <div v-show="element.img != ''">
                                        <img class="w-75" :src="element.img" :alt="element.name">
                                    </div>
                                </div>
                                <div class="text-end" :class="{'blue-pill': element.price != 'Free' && element.prices, 'yellow-pill': element.price === 'Free'}">
                                    {{ element.price }}
                                </div>
                            </li>
                        </ul>
                        <ul class="m-0 p-0" v-show="item.submenu4.length > 0">
                            <li class="list-unstyled" v-for="element in item.submenu4">
                                <a class="text-decoration-none my-text-white" :href="element.url" :class="(element.title ? 'text-title text-uppercase' : '')">
                                {{ element.name }}
                                </a>
                                <div v-show="element.img != ''">
                                    <img class="w-75" :src="element.img" :alt="element.name">
                                </div>
                                <div :class="{'blue-pill': element.price != 'Free' && element.prices, 'yellow-pill': element.price === 'Free'}">
                                    {{ element.price }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="my-text-white px-5 ">
                <i class="fa-solid fa-magnifying-glass px-2"></i>
                <i class="fa-solid fa-bag-shopping px-2"></i>
                <i class="fa-solid fa-bars px-2"></i>
            </div>
        
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;
.my-text-white{
  color: $text_white;
}
.text-title{
    color: $text_dark_grey !important;
}
.my-border-right{
    border-right: 1px solid $text_light_grey;
}
.my-border-left{
    border-left: 1px solid $text_light_grey;
}
.chevron{
    right: -60px;
    color: $text_grey;
    font-size: 10px;
}
.my-width{
    width: 80% !important;
    left: 10%;
}
.yellow-pill{
    margin-top: 5px;
    background-color: $bg_yellow;
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
}
#sub-nav-list{
    .sub-menu2{
        
        left: 200px;
        margin: -25px 0;
        width: 200px;
        background-color: $text_white;
        transition: all 0.3s linear;
        opacity: 0;
        visibility: hidden;
        display: flex;
        padding: 20px 0;
        border-top: 5px solid $text_light_blue;
        text-transform: none;
        ul{
            li{
                &:hover a{
                    color: $text_light_blue !important;
                    text-transform: none; 
                    transition: all 0.1s linear;
                   }
                a{
                   color: $text_grey !important;
                }
                
            }
        }
    }
    &:hover .sub-menu2{
        opacity: 1;
        visibility: visible;
    }
}

.blue-pill{
    margin-top: 5px;
    background-color: $bg_light_blue;
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
}
#nav-list{
    height: 100%;
    cursor: pointer;

    &:hover .sub-menu{
        opacity: 1;
        visibility: visible;
    }
    
    .sub-menu{
        top: 110px;
        width: 200px;
        background-color: $text_white;
        transition: all 0.3s linear;
        opacity: 0;
        visibility: hidden;
        display: flex;
        padding: 20px 0;
        border-top: 5px solid $text_light_blue;
        ul{
            li{
                text-transform: none; 
                transition: all 0.1s linear;
                padding: 10px 20px;
                &:hover a{
                    color: $text_light_blue;
                   }
                a{
                   color: $text_grey;
                }
                
            }
        }
    }
    
}    
</style>