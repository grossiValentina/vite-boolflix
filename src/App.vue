<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue"
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
  created(){
    axios.get(this.store.apiUrl, {
      params: {
        query: "Ciao",
        api_key: "f639ba1a0b735006007235add8706369",

      }}).then((resp) => {
        this.store.list = 
        console.log(this.store.list)
    })
  },

  methods: {
    handleSearch(){
        console.log(cercaa)
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
  <AppButton @btnClick="handleSearch"/>
  <AppList />
 
</template>

<style lang="scss">
@use "./components/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

</style>
