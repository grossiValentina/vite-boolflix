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
    <div class="wrapper">
        <div class="my-container">

            <div class="row mt-4">
                <h2>Film</h2>
                <div class="col d-flex" style="overflow: auto;">
                    <div v-for="movie in store.moviesList">
                        <AppCard :movieObject="movie" :imageCover="store.apiUrlImg" />
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <h2>Serie TV</h2>
                <div class="col d-flex" style="overflow: auto;">
                    <div v-for="serie in store.seriesList">
                        <AppCard :movieObject="serie" :imageCover="store.apiUrlImg" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-container {
    width: 95%;
    margin: auto;
}

.wrapper {
    width: 100%
}

;
</style>