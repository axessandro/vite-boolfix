<script>
import {store} from "./store"
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";

export default{
  data(){
    return{
      store,
      apis: {
        compiledMovieApi: "",
        compiledShowsApi: ""
      },
    }
  },
  components:{
    AppHeader,
    AppMain,
  },
  methods:{
    // axios calls
    axiosMovieSearch(){
      axios.get(`${this.apis.compiledMovieApi}`).then((resp)=>{
        this.store.movies = resp.data.results;
        console.log(this.store.movies);

      })
    },
    axiosShowsSearch(){
      axios.get(`${this.apis.compiledShowsApi}`).then((resp)=>{
        this.store.shows = resp.data.results;
        console.log(this.store.shows);
      })
    },
    apiCalls(){
      this.apis.compiledMovieApi = `${this.store.api.apiURL}${this.store.api.movieURL}${this.store.api.apiKey}${this.store.api.queryURL}${this.store.search}`;
      this.apis.compiledShowsApi = `${this.store.api.apiURL}${this.store.api.showsURL}${this.store.api.apiKey}${this.store.api.queryURL}${this.store.search}`;
      this.axiosMovieSearch();
      this.axiosShowsSearch();
    }
  }
}
</script>

<template>
  <AppHeader @searchEnter="apiCalls" @searchClick="apiCalls"/>
  <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;


</style>
