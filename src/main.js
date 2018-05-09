import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("../sw.js")
  .then(()=>{
     console.log('SW registered'); 
  })
}

Vue.use(VueRouter);
window.axios=axios;

const router= new VueRouter({
  routes: Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
