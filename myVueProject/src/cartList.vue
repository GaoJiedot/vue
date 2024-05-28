<template>
    <div>
      <h2>Cart List</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  