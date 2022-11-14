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
        rating(){
            const stars = Math.round(this.movie.vote_average / 2);
            console.log(stars);
            for(let i = 0; i < stars; i++){

            }
        }
    },
    created(){
        this.flagLang();
        this.rating();
    }
}
</script>


<template>
    <div class="ms-card">
        <div class="text-wrapper">
            <p><span>Titolo:</span> {{movie.title}}</p>
            <p><span>Titolo originale:</span> {{movie.original_title}}</p>
            <p><span>Lingua originale:</span> {{movie.original_language}}</p>
            <p><span>Overview:</span> {{movie.overview}}</p>
            <div class="stars wrapper">

            </div>
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
        max-height: 100%;
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
        }
        span{
            font-weight: 600;
        }
    }
    
    img{
        max-width: 100%;
    }
}
</style>