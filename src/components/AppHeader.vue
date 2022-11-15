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
    <div class="container">
      
      <div class="title">
          <h1>BOOLFLIX</h1>
      </div>
  
      <div class="searchbar">
          <input type="text" placeholder="Cerca serie tv o film" @keyup.enter="$emit('searchEnter')" v-model="store.search">
          <button @click.prevent="$emit('searchClick')"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
header{
  width: 100%;
  .container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  h1{
    color: red;
  }

  .searchbar{
    padding: .5rem 1rem;
    background-color: rgb(23, 23, 23);
    border-radius: 20px;
    input{
      background-color: rgb(23, 23, 23);
      border: 0;
      color: white;
      
    }
    button{
      background-color: rgb(23, 23, 23);
      border: 0;
      color: gray;
    }
  }

  }
}


</style>
