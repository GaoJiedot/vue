<script setup>

</script>

<template>
  <h1>关于</h1>
  <div>
    <router-link to="/about/tab1">Tab1</router-link>
    <router-link to="/about/tab2">Tab2</router-link>
  </div>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>