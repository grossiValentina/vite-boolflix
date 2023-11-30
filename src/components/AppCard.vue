<script>

export default {

    props: {
        movieObject: Object,
    },

    data(){
        return{
            flag: ["it", "en"],
        };

    },

    methods:{
        getImage(language){
            return new URL(`../assets/img/${language}.png`, import.meta.url).href
        }

    }
};
</script>

<template>

    <div class="card" style="width: 10rem;">
        <div class="card-body">
            <h4 class="card-title">{{ movieObject.title }}</h4>

            <h5 class="card-title">{{ movieObject.original_title }}</h5>

            <img class="w-25" v-if="flag.includes(movieObject.original_language)" :src="getImage(movieObject.original_language)" alt="">

            <p v-else class="card-text">{{ movieObject.original_language }}</p>

            <p class="card-text">{{ movieObject.vote_everage }}</p>
        </div>
    </div>

</template>

<style scoped lang="scss"></style>