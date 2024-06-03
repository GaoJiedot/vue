<template>
  <p>搜索内容：{{ search }}</p>
  <searchDemo @searchEvent="getSearch"/>
</template>

<script>
import searchDemo from './searchDemo.vue'
export default {
  data(){
    return{
      search:""
}

  },
  components:{
    searchDemo
  },
  methods:{
    getSearch(data){
      this.search=data;
    }
  }


}
</script>


