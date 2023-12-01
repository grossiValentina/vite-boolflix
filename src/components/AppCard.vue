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

        vote(){
            return Math.ceil(this.movieObject.vote_average / 2)
        }
    }
};
</script>

<template>
    <div class="my-card card" style="width: 7.5rem;">

        <img class="my-image" v-if="movieObject.poster_path" :src="`${imageCover}${movieObject.poster_path}`" alt="">

        <img class="img-defoult" v-else
            src="https://c8.alamy.com/compit/2f8975j/nessun-simbolo-vettoriale-contorno-immagine-icona-mancante-nessuna-galleria-per-questo-momento-2f8975j.jpg"
            alt="">

         <div class="my-content  text-center mt-4">

            <h4 class="overlay-text">{{ movieObject.title ? movieObject.title : movieObject.name }}</h4>

            <h5 class="card-title">{{ movieObject.original_title ? movieObject.original_title : movieObject.original_name }}
            </h5>

            <img class="w-25" v-if="flag.includes(movieObject.original_language)"
                :src="getImage(movieObject.original_language)" alt="">

            <p v-else class="card-text">{{ movieObject.original_language }}</p>

            <p class="card-text">{{ movieObject.vote_everage }}</p>

            <p>{{ Math.ceil(movieObject.vote_average / 2) }}</p>

            <div>
                <i v-for="num in 5" class="fa-star" :class="num <= vote ? `fa-solid` : `fa-regular`"></i>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
.my-card{
    width: 7rem;
    height: 100%;
    position: relative;
    background-color: black;

    &:hover .my-image{
         display: none;
    }
        
    &:hover .my-content{
         display: block;
        
    }
    
}
.my-image {
  display: block;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0.375rem;
}

.my-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  color: white;
  text-align: center;
}

.overlay-text {
  font-size: 20px;
  margin-top: 20px;
}

.card-title {
  font-size: 16px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
}


    


</style>