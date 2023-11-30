<script>
import {store} from "../store";
export default {
   data(){
    return{
        store
    }
   }

}
</script>

<template>

    <div class="container">

        <div class="d-flex">
            <input type="search" class="form-control" placeholder="cosa vuoi vedere" v-model.trim="store.searchContent"/>
        </div>

    </div>

</template>

<style scoped lang="scss"></style>