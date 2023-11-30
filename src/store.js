import {reactive} from "vue"

export const store = reactive({

  apiUrl: "https://api.themoviedb.org/3",
  apiUrlImg: "https://image.tmdb.org/t/p/w342",
  myApiKey: "f639ba1a0b735006007235add8706369",

  
  searchContent: "", 
  moviesList: [],
  seriesList: [],

  });