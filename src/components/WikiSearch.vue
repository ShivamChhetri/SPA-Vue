<template>
  <div>
      <input type="text" v-model="search" placeholder="What you want to learn today?">
      <div v-if="search">
        <router-link :to="{ name: 'Wiki', params: { search } }">
            <button class="btn btn-primary">Get Results</button> 
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          search:'',
      }
  }
}
</script>

<style scoped>
input{
    margin-top: 30px;
    padding: 5px;
    width: 60%;
    border-radius: 5px;
}
</style>
