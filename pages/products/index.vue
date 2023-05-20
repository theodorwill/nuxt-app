<template>
  <div>
    <h2>Products</h2>
    <ProductList :url="url" />
    
  </div>
</template>

<script setup lang="ts">
import ProductList from '../../components/ProductList.vue'

const url = 'https://fakestoreapi.com/products'
</script>

<style scoped></style>
