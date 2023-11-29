<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store.js";

export default {
  data() {
    return {
      store
    };
  },
  components :{
    AppHeader,
    AppList,
}
}

</script>

<template>

  <AppHeader />
  <AppList />
 
</template>

<style lang="scss">
@use "./components/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

</style>
