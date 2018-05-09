<template>
  <div class="container-fluid">
    <div class="jumbotron text-center image-responsive" id="img">
      <h1>Good {{greet}} Shivam</h1>
      <weather :day="day"></weather>
      <a  class="btn btn-info" href="/news">News Headlines</a>
      <wiki-search></wiki-search>
    </div>
  </div>
</template>

<script>
import Weather from './Weather.vue';
import Wiki from './WikiSearch.vue';

export default {
  components:{
    'weather': Weather,
    'wiki-search' : Wiki
  },
  data(){
    return{
      time:new Date().getHours(),
      day:'today',
      greet:'Morning',
      image:[],
      interval:'',
      i:0
    }
  },
  created(){
    
    axios.get('https://api.unsplash.com/search/collections?page=1&query='+this.greet+'/&client_id=8815f888b9ffd8d05f67a8b9274a92d564ed3c24f1ac50d7551a1a458f2535a2')
         .then(response=>{
          let ran1=Math.floor(Math.random()*2);
          let ran2=Math.floor(Math.random()*2);
          this.image=response.data.results[ran1].preview_photos[ran2].urls.regular;
          document.getElementById('img').style.background = 'url('+this.image+')';
         });
  },
  mounted(){
      if(this.time>=12 && this.time<17){
        this.greet= 'Afternoon';
      }else if(this.time>=17 && this.time<20){
        this.greet='Evening';
      }else if(this.time>=20 || this.time<=5){
        this.greet="Night";
        this.day="tonight";
      }
    }
}
</script>

<style scoped>
#img{
  height:600px;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
}
</style>

