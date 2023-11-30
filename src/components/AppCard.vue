<script>

export default {

    props: {
        movieObject: Object,
        imageCover: String,
    },

    data() {
        return {
            flag: ["it", "en"],
        };

    },

    methods: {
        getImage(language) {
            return new URL(`../assets/img/${language}.png`, import.meta.url).href
        },

    }
};
</script>

<template>
    <div class="card" style="width: 15rem;">

        <img v-if="movieObject.poster_path" :src="`${imageCover}${movieObject.poster_path}`" alt="">

        <img v-else
            src="https://c8.alamy.com/compit/2f8975j/nessun-simbolo-vettoriale-contorno-immagine-icona-mancante-nessuna-galleria-per-questo-momento-2f8975j.jpg"
            alt="">

         <div class="card-img-overlay text-center mt-4" style="width: 100%; height: 100%; position: absolute">

            <h4 class="overlay-text">{{ movieObject.title ? movieObject.title : movieObject.name }}</h4>

            <h5 class="card-title">{{ movieObject.original_title ? movieObject.original_title : movieObject.original_name }}
            </h5>

            <img class="w-25" v-if="flag.includes(movieObject.original_language)"
                :src="getImage(movieObject.original_language)" alt="">

            <p v-else class="card-text">{{ movieObject.original_language }}</p>

            <p class="card-text">{{ movieObject.vote_everage }}</p>
        </div>

    </div>

</template>

<style scoped lang="scss">


</style>