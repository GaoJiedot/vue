<script setup>

</script>

<template>
  <ul>
    <li>
      <a href="#">首页</a>
    </li>
    <li><a href="#/Movies">电影</a></li>
    <li><a href="#/About">关于</a></li>
  </ul>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

li {
  display: flex;
  margin: 8px;
}
</style>