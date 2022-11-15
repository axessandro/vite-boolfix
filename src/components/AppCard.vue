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
    },
    methods:{
        aviableFlags: ['it', 'en', 'fr', 'de'],
        flagLang(){
            if (this.movie.original_language === 'it') {
                this.movie.original_language = '🇮🇹';
            }else if (this.movie.original_language === 'en') {
                this.movie.original_language = '🇺🇸';   
            }else if (this.movie.original_language === 'fr') {
                this.movie.original_language = '🇫🇷';   
            }else if (this.movie.original_language === 'de') {
                this.movie.original_language = '🇩🇪';   
            }
        }, 

    },
    created(){
        this.flagLang();
    }
}
</script>


<template>
    
    <div class="ms-card">
        <div class="text-wrapper">
            <p><span>Titolo:</span> {{movie.title}}</p>
            <p v-if="movie.title != movie.original_title"><span>Titolo originale:</span> {{movie.original_title}}</p>
            <div class="stars-wrapper">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star" v-if="movie.vote_average >= 3.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="movie.vote_average >= 5.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="movie.vote_average >= 7.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="movie.vote_average >= 9.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <span>{{movie.vote_average * 10}}%</span>
            </div>

            <p><span>Lingua originale:</span> {{movie.original_language}}</p>
            
            <p><span>Overview:</span> {{movie.overview}}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
    </div>
   
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.ms-card{
    height: 100%;
    
    &:hover .text-wrapper{
        display: block;
        height: 100%;
        overflow-y: auto;
    }
    
    &:hover img{
        display: none;
    }
    
    .text-wrapper{
        display: none;
        height: 100%;
        font-size: 1rem;
        padding: .5rem;
        background-color: black;
        p{
            font-weight: 200;
            font-size: 0.9rem;
            margin-bottom: 0;
            padding: .5rem 0;
        }
        span{
            font-weight: 600;
        }
        .stars-wrapper{
            span{
                padding-left: .5rem;
            }
        }
    }
    
    img{
        max-width: 100%;
    }
}
</style>