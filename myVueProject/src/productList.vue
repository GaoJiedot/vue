<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 },
          { id: 3, name: 'Product 3', price: 30 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  