<template>
  <div class="container">
    <p>点击增加{{ store.add }}</p>
    <button @click="store.AddNum">+</button>
  <p>点击减少{{ store.sub }}</p>
    <button @click="store.SubNum">-</button>
  </div>
</template>

<script setup>

import  {UseMainStore} from '../store/index.js'
//引入pinia，并使用
import { storeToRefs } from 'pinia';
const store = UseMainStore()




</script>



