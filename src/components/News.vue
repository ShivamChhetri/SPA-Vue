 <template>
  <div>
      <div class="buttons">
        <a href="/" class="btn btn-secondary">Back</a><hr>
        <button @click="component='national'" class="btn btn-warning">National</button>
        <button @click="component='international'" class="btn btn-primary">International</button>
      </div>
      <component :is="component"></component>
  </div>
</template>

<script>
import National from './News/National.vue';
import International from './News/International.vue';

export default {
  components:{
    'national':National,
    'international':International
  },
  data(){
    return{
      component: 'national'
    }
  }
}
</script>

<style scoped>
.buttons{
  margin: 25px auto;
}
</style>

