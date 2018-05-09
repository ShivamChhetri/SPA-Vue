<template>
  <div>
      <span>It's {{weather}} {{day}}</span>
      <h4>{{temp}}°C</h4>
  </div>
</template>

<script>
export default {
  props:['day'],
 data(){
    return{
      weather:'',
      temp:'',
    }
  },
  created(){
 
    axios.get('https://freegeoip.net/json/')
         .then((response) => {
           return axios.get('http://openweathermap.org/data/2.5/weather?lat='+response.data.latitude+'&lon='+response.data.longitude+'&appid=b6907d289e10d714a6e88b30761fae22');
         })
         .then((response) => {
           this.weather=response.data.weather[0].description;
           this.temp=response.data.main.temp;
         });
  }
  
}
</script>

<style scoped>
div h1{
  font-size: 50px;
}
div span{
  font-size: 25px;
}
</style>


