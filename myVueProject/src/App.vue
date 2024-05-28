<template>
  <div id="app">
    <button @click="toggleView">Toggle View</button>
    <div v-if="showProductList">
      <product-list />
    </div>
    <div v-else>
      <cart-list />
    </div>
  </div>
</template>

<script>
import ProductList from "./components/productList.vue";
import CartList from "./components/cartList.vue";

export default {
  components: {
    ProductList,
    CartList
  },
  data() {
    return {
      showProductList: true
    };
  },
  methods: {
    toggleView() {
      this.showProductList = !this.showProductList;
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
