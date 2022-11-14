<script>
import {store} from "../store"

export default{
  name: "AppHeader",
  data(){
    return{
        store,
        
    }
  },
  methods:{
    
  }
}

</script>

<template>
  <header>
    <div class="title">
        <h1>BOOLFLIX</h1>
    </div>

    <div class="searchbar">
        <input type="text" placeholder="Cerca serie tv o film" @keyup.enter="$emit('searchEnter')" v-model="store.search">
        <button @click.prevent="$emit('searchClick')"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
header{
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

}


</style>
