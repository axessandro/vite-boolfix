<script>
import {store} from "../store"
import AppCard from "./AppCard.vue";

export default{
    name: "AppMain",
    data(){
        return{
            store
        }
    },
    components:{
        AppCard,
    }
}
</script>

<template>
    <main>
        <div class="container">

            <!-- movies -->
            <div class="row row-cols-md-6 g-3">

                <div class="col" v-for="(movie, index) in store.movies" :key="index">
                    <!-- <div class="ms-card">
                        <div class="text-wrapper">
                            <h2>{{movie.title}}</h2>
                            <h4>{{movie.original_title}}</h4>
                        </div>
                        
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
                    </div> -->
                    <AppCard :movie="movie"/>
                </div>
            
            </div>
            <!-- /movies -->

            <!-- shows -->
            <div class="row row-cols-md-3 g-3">

                <div class="col" v-for="(show, index) in store.shows" :key="index">
                    <AppCard :show="show"/>
                    
                </div>

            </div>
            <!-- /shows -->


        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

</style>
