<template>
    <div class="px-5">
        <div class="my-card">
            <img class="w-100" :src="image" :alt="name">
        </div>
        <h3 class="text-center m-0 pt-4">{{ name }}</h3>
        <div class="text-center pt-1 pb-3 text-uppercase my-text-grey">{{ role }}</div>
        <p class="text-center my-text-grey">{{ description }}</p>
        <div class="text-center my-text-grey">
            <i class="fa-brands fa-twitter px-2 "></i>
            <i class="fa-brands fa-instagram px-2 "></i>
            <i class="fa-brands fa-facebook-f px-2 "></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardSection6',
    props: {
        image: String,
        name: String,
        role: String,
        description: String,
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.my-card {
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

.my-text-grey {
    color: $text_grey;
}

i:hover {
    color: $text_light_blue;
    cursor: pointer;
}
</style>