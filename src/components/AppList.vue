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
                <div v-for="movie in store.moviesList">
                    <AppCard :movieObject="movie" />
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss"></style>