<template> 
    <ProductList :url="uri" />
</template>

<script setup lang="ts">
import ProductList from '~/components/ProductList.vue'
const { category } = useRoute().params


const uri = `https://fakestoreapi.com/products/category/${category}`
</script>

<style scoped></style>