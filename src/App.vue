<script>
import {store} from "./store"
import axios from "axios";
import AppHeader from './components/App.Header.vue';


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
  },
  methods:{
    axiosMovieSearch(){
      axios.get(`${this.apis.compiledMovieApi}`).then((resp)=>{
        console.log(resp.data.results);
      })
    },
    apiUrlComplied(){
        if (this.store.search){
            this.apis.compiledMovieApi = `${this.store.api.apiURL}${this.store.api.movieURL}${this.store.api.apiKey}${this.store.api.queryURL}${this.store.search}`;
            this.apis.compiledShowsApi = `${this.store.api.apiURL}${this.store.api.showsURL}${this.store.api.apiKey}${this.store.api.queryURL}${this.store.search}`;
        }
        console.log(this.apis);
        this.axiosMovieSearch()
    }
  }
}
</script>

<template>
  <AppHeader @searchEnter="apiUrlComplied"/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;


</style>
