<script>
import {store} from "../store"

export default{
    name: "AppCard1",
    data(){
        return{
            store
        }
    },
    props:{
        show: Object,
    },
    methods:{
        flagLang(){
            if (this.show.original_language === 'it') {
                this.show.original_language = '🇮🇹';
            }else if (this.show.original_language === 'en') {
                this.show.original_language = '🇺🇸';   
            }else if (this.show.original_language === 'fr') {
                this.show.original_language = '🇫🇷';   
            }else if (this.show.original_language === 'de') {
                this.show.original_language = '🇩🇪';   
            }
        }, 
        rating(){
            const stars = Math.round(this.show.vote_average / 2);
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
            <p><span>Titolo:</span> {{show.name}}</p>
            <p><span>Titolo originale:</span> {{show.original_name}}</p>
            <p><span>Lingua originale:</span> {{show.original_language}}</p>
            <p><span>Overview:</span> {{show.overview}}</p>
            <div class="stars wrapper">

            </div>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w342${show.poster_path}`" alt="">
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
    }
    
    img{
        max-width: 100%;
    }
}
</style>