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


<template>
    <div class="ms-card">
        <div class="text-wrapper">
            <h2>{{movie.title}}</h2>
            <h4>{{movie.original_title}}</h4>
            <div class="stars wrapper">
                
            </div>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.ms-card{
    border: 1px solid white;
    img{
        max-width: 100%;
    }
}
</style>