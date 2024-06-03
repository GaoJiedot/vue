<template>
  搜索：<input type="text" v-model="search">
</template>

<script >
import {watch} from "vue";

export default {
  data(){
    return{
      search:""
    }
  },
  watch:{
    search(newValue,oldValue){
      this.$emit("searchEvent",newValue)
    }
  }
}
</script>
<style scoped>

</style>