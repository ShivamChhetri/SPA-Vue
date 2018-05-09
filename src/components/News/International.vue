<template>
  <div>
      <div class="row"> 
        <div class="col-md-8">
          <h2>Recent News</h2>
          <button  @click="descrip=!descrip" class="btn-default float-right">Description</button>
          <br>
          <ul v-for="article in articles" class="list-group">
            <li v-if="article.urlToImage" class="list-group-item">
              <div class="media">
                <img class="d-flex mr-3" :src="article.urlToImage" alt="No Image">
                <div class="media-body">
                  <h5 class="mt-0"><a :href="article.url" target="_blank">{{article.title}}</a></h5>
                  <span class="text-secondary">{{article.source.name}}</span>
                  <p v-if="descrip">{{article.description}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-2 offset-md-1">
          <h3>Channels</h3>
          <ul class="list-unstyled">
          <li @click="selectChannel()">All</li>
            <div v-for="source in sources">
            <li @click="selectChannel(source.id)">{{source.name}}</li>
            </div>
          </ul>
        </div>  
      </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles:[],
      categories:[],
      sources:[],
      news:"",
      apiKey:"6b5d252eeca9483c986ca6797de81efb",
      descrip:false
    }
  },
  methods:{
    getarticles(){
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+ this.apiKey)
         .then(response=>{
           this.articles=response.data.articles;
    });
    },
    selectChannel(id){
      if(id != null){
      axios.get('https://newsapi.org/v2/top-headlines?sources='+id+'&apiKey='+ this.apiKey)
         .then(response=>{
           this.articles=response.data.articles;
      }); 
      }else{ this.getarticles();}
    }  
  },
  created(){
    this.getarticles();
    axios.get('https://newsapi.org/v2/sources?country=us&apiKey='+ this.apiKey)
         .then(response=>{
          this.sources=response.data.sources;
          console.log(response);
    });
  }
}
</script>

<style scoped>
ul{
  margin: 20px auto;
}
.media img{
  height: 100px;
  width:150px;
}
.list-unstyled li{
    cursor: pointer;
}
</style>

