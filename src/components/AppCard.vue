<script>
import {store} from "../store"

export default{
    name: "AppCard",
    data(){
        return{
            store
        }
    },
    props:{
        movie: Object,
        show: Object,
    }
}
</script>
</script>

<template>
    <div class="ms-card">
        <div class="text-wrapper">
            <h2></h2>
            <h4></h4>
            <div class="stars wrapper">
                <i class="fa-solid fa-star"></i>
            </div>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
</style>