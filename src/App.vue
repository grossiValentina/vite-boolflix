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
      axios.get(this.store.apiUrl, {
      params: {
        query: this.store.searchContent,
        api_key: "f639ba1a0b735006007235add8706369",

      }}).then((resp) => {
        this.store.moviesList = resp.data.results;
        console.log(resp.data.results)
    })
  
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
