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
            <h2>Movies</h2>

            <div class="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-3">

                <div class="col" v-for="(movie, index) in store.movies" :key="index">
                    <AppCard :movie="movie"/>
                </div>
            
            </div>
            <!-- /movies -->

            <!-- shows -->
            <h2>Shows</h2>

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
