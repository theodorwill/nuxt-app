<template>
  <ProductList :url="url" />
</template>

<script setup lang="ts">
import ProductList from '../../components/ProductList.vue'

const url = 'https://fakestoreapi.com/products'
</script>

<style scoped></style>
