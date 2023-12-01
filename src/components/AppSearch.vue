<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    emits: ["btnClick"]

}
</script>

<template>
    <div class="wrapper">
        <div class="container">

            <h1 class="text-center fw-bold p-1">BOOLFLIX</h1>
            <div class="d-flex">
                <input type="search" class="form-control" placeholder="cosa vuoi vedere"
                    v-model.trim="store.searchContent" />

                <button @click="$emit(`btnClick`)" type="button" class="btn btn-danger">Cerca</button>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 100%;
    background-color: black;
};

h1{
    color: red;

}
</style>