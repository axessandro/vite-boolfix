<script>
import {store} from "../store"

export default{
    name: "AppCard",
    data(){
        return{
            store,
            aviableFlags: ['it', 'en', 'fr', 'de'],
        }
    },
    props:{
        item: Object,
    },

    computed:{
        getFlag(){
            if (this.item.original_language === 'it') {
                 return this.item.original_language = '🇮🇹';
            }else if (this.item.original_language === 'en') {
                 return this.item.original_language = '🇺🇸';   
            }else if (this.item.original_language === 'fr') {
                 return this.item.original_language = '🇫🇷';   
            }else if (this.item.original_language === 'de') {
                 return this.item.original_language = '🇩🇪';   
            } else {
                return this.item.original_language
            }
        },
        getTitle(){
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle(){
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getDateRelese(){
            return this.item.release_date ? this.item.release_date : this.item.first_air_date;
            
        }
    }
}
</script>


<template>
    
    <div class="ms-card">
        <div class="text-wrapper">
            <p><span>Titolo:</span> {{getTitle}}</p>
            <p v-if="item.title != item.original_title"><span>Titolo originale:</span> {{getOriginalTitle}}</p>
            <p v-if="getDateRelese">{{getDateRelese.slice(0, 4)}}</p>
            <div class="stars-wrapper">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star" v-if="item.vote_average >= 3.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="item.vote_average >= 5.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="item.vote_average >= 7.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="item.vote_average >= 9.5"></i>
                <i class="fa-regular fa-star" v-else></i>
                <span>{{item.vote_average * 10}}%</span>
            </div>

            <p><span>Lingua originale:</span> {{getFlag}}</p>
            
            <p><span>Overview:</span> {{item.overview}}</p>
        </div>

        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="">
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