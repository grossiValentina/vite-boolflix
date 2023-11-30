<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
    data() {
        return {
            store,
        }
    },
    components: { AppCard },
};

</script>

<template>
    <div class="container">

        <div class="row">
            <div class="col">

                <h2>Film</h2>
                <div v-for="movie in store.moviesList">
                    <AppCard :movieObject="movie" />
                </div>
                
                <div>
                    <h2>Serie TV</h2>
                    <div v-for="serie in store.seriesList" >
                        <AppCard :movieObject="serie"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss"></style>