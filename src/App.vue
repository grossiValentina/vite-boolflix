<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import AppButton from "./components/AppButton.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store.js";


export default {
  data() {
    return {
      store
    };
  },
    
  

  methods: {
    handleSearch(){
      // chiamata per ricerca film
      axios.get(`${this.store.apiUrl}/search/movie`, {
      params: {
        query: this.store.searchContent,
        api_key: this.store.myApiKey,

      }}).then((resp) => {
        this.store.moviesList = resp.data.results;
        console.log(resp.data.results)
    });

    // chiamata per ricerca serie tv
    axios.get(`${this.store.apiUrl}/search/tv`, {
      params: {
        query: this.store.searchContent,
        api_key: this.store.myApiKey,

      }}).then((resp) => {
        this.store.seriesList = resp.data.results;
        console.log(resp.data.results)
    });

    }


    },
  components :{
    AppHeader,
    AppSearch,
    AppButton,
    AppList,
}
}

</script>

<template>
  <AppHeader />
  <AppSearch />
  <AppButton @btnClick="handleSearch()"/>
  <AppList />
 
</template>

<style lang="scss">
@use "./components/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

</style>
