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

        vote(movie){
            return Math.ceil(movie.vote_average / 2)
        }
    }
};
</script>

<template>
    <div class="my-card card" style="width: 9rem;">

        <img class="my-image" v-if="movieObject.poster_path" :src="`${imageCover}${movieObject.poster_path}`" alt="">

        <img class="img-defoult" v-else
            src="https://c8.alamy.com/compit/2f8975j/nessun-simbolo-vettoriale-contorno-immagine-icona-mancante-nessuna-galleria-per-questo-momento-2f8975j.jpg"
            alt="">

         <div class="my-content  text-center m-0 p-1 pt-4">

            <h4 class="overlay-text">{{ movieObject.title ? movieObject.title : movieObject.name }}</h4>

            <h5 class="card-title">{{ movieObject.original_title ? movieObject.original_title : movieObject.original_name }}
            </h5>

            <img class="w-25" v-if="flag.includes(movieObject.original_language)"
                :src="getImage(movieObject.original_language)" alt="">

            <p v-else class="card-text m-1">{{ movieObject.original_language }}</p>

            <p class="num-stars m-2" >{{ Math.ceil(movieObject.vote_average / 2) }}</p>

            <div class="stars">
                
                <i v-for="num in 5" class="fa-star" :class="num <= vote(movieObject) ? `fa-solid` : `fa-regular`"></i> 
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

    &:hover .img-defoult{
        display: none;
    }
    
}
.my-image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
}

.img-defoult{
    display: block;
    height: 100%;
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
  font-size: .7rem;
  margin-top: .2rem;
}

.card-title {
  font-size: .5rem;
  margin-bottom: .2rem;
}

.card-text {
  font-size: .5rem;
}
.num-stars{
    font-size: .7rem;
}

.stars{

}
</style>