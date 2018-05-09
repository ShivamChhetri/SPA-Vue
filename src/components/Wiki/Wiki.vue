<template>
    <div>
        <div v-if="section">
            <a href="/"><button class="btn btn-secondary">Back</button></a>
            <h1>{{search}}</h1>
            <br>
            <ol>
                <div v-for="title in titles">
                    <li @click="article(title)"><h5>{{title}}</h5></li>   
                </div>
            </ol>
        </div>

        <div v-if="!section">
          <button  @click="section=!section" class="btn btn-default">Back</button>
          <h1>{{heading}}</h1>
          <p v-html="content"></p>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          section: true,
          search:"",
          titles:[],
          heading:'',
          content:''
      }
  },
  created(){
      this.search=this.$route.params.search;
       axios.get('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search='+this.search)
           .then(response=>{
               this.titles= response.data[1];
           });
  },
  methods:{
      article(title){
        this.section=false;
        axios.get('https://en.wikipedia.org/w/api.php?action=query&origin=*&titles='+title+'&prop=extracts&format=json&formatversion=2')
            .then(response=>{
                this.heading= title;
                this.content=response.data.query.pages[0].extract;
           });     
      }
  }
}
</script>

<style scoped>
ol li{
    cursor: pointer;
}
/* div p{
    padding: 20px;
}
@media(max-width:480px){
    div p{
        margin: 10px 50px;
    }
} */
</style>


