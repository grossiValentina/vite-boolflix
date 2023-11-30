<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div v-for="movie in store.moviesList">

        <div class="card-body">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_everage }}</p>
           
        </div>

    </div>
</template>

<style scoped lang="scss"></style>