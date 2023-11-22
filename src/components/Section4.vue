<template>
    <div class="container w-100 d-flex">
        <div class="w-25 left-side">
            <ul class=" list-unstyled h-100 my-text-dark-grey">
                <li class="h-calc ps-3" :class="{ 'active': liFlag1 }"
                    @click="liFlag1 = true, liFlag2 = false, liFlag3 = false, liFlag4 = false, liFlag5 = false, liFlag6 = false">
                    What We Do</li>
                <li class="h-calc ps-3" :class="{ 'active': liFlag2 }"
                    @click="liFlag1 = false, liFlag2 = true, liFlag3 = false, liFlag4 = false, liFlag5 = false, liFlag6 = false">
                    Degree Programme</li>
                <li class="h-calc ps-3" :class="{ 'active': liFlag3 }"
                    @click="liFlag1 = false, liFlag2 = false, liFlag3 = true, liFlag4 = false, liFlag5 = false, liFlag6 = false">
                    Career Achievements</li>
                <li class="h-calc ps-3" :class="{ 'active': liFlag4 }"
                    @click="liFlag1 = false, liFlag2 = false, liFlag3 = false, liFlag4 = true, liFlag5 = false, liFlag6 = false">
                    Personal Management</li>
                <li class="h-calc ps-3" :class="{ 'active': liFlag5 }"
                    @click="liFlag1 = false, liFlag2 = false, liFlag3 = false, liFlag4 = false, liFlag5 = true, liFlag6 = false">
                    Steps To Success</li>
                <li class="h-calc ps-3" :class="{ 'active': liFlag6 }"
                    @click="liFlag1 = false, liFlag2 = false, liFlag3 = false, liFlag4 = false, liFlag5 = false, liFlag6 = true">
                    Knowledge Transfer</li>
            </ul>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag1">
            <div>
                <h2>Learning Possibilities</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2 ">We enrich lives through learning.</li>
                    <li class="lista-personalizzata py-2">Maximizing potential through individual attention.</li>
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-1.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag2">
            <div>
                <h2>Inspiring Minds</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2 ">Maximizing potential through individual attention.</li>
                    <li class="lista-personalizzata py-2">We enrich lives through learning.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-2.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag3">
            <div>
                <h2>Investing in Knowledge</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2">Maximizing potential through individual attention.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                    <li class="lista-personalizzata py-2 ">We enrich lives through learning.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-3.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag4">
            <div>
                <h2>Secure Your Future</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2 ">We enrich lives through learning.</li>
                    <li class="lista-personalizzata py-2">Maximizing potential through individual attention.</li>
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-4.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag5">
            <div>
                <h2>Where Learning Begins</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                    <li class="lista-personalizzata py-2 ">We enrich lives through learning.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                    <li class="lista-personalizzata py-2">Maximizing potential through individual attention.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-5.png" alt="">
                </div>
            </div>
        </div>
        <div class="w-75 right-side ps-5 fs-5" v-show="liFlag6">
            <div>
                <h2>Knowledge is Power</h2>
                <p class="my-text-dark-grey pt-2">
                    Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis
                    sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                    Nam
                    nec tellus a odio tincidunt
                </p>
            </div>
            <div class="d-flex pt-5 ">
                <ul class="list-unstyled my-text-dark-grey pe-5 ">
                    <li class="lista-personalizzata py-2">Maximizing potential through individual attention.</li>
                    <li class="lista-personalizzata py-2">The trusted name for specialized training.</li>
                    <li class="lista-personalizzata py-2">People teach. People learn. This is where they connect.</li>
                    <li class="lista-personalizzata py-2 ">We enrich lives through learning.</li>
                </ul>
                <div>
                    <img src="/images/h12-tabs-icon-6.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section4',
    data() {
        return {
            liFlag1: true,
            liFlag2: false,
            liFlag3: false,
            liFlag4: false,
            liFlag5: false,
            liFlag6: false,
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.h-calc {
    height: calc(100% / 6);
    line-height: 58px;
    border: 1px solid $text_light_grey;
    padding: 10px 0;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: $text_light_blue;
        border-left: 7px solid $text_light_blue;
    }
}

.active {
    color: $text_light_blue;
    border-left: 7px solid $text_light_blue;
}

.lista-personalizzata::before {
    content: '\2713';
    color: $text_light_blue;
    padding-right: 15px;
}

.my-text-dark-grey {
    color: $text_dark_grey;
}
</style>