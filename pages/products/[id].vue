<template>
  <ProductDetails
    :id="product.id"
    :title="product.title"
    :price="product.price"
    :category="product.category"
    :description="product.description"
    :image="product.image"
  >
  </ProductDetails>
</template>

<script setup lang="ts">
import ProductDetails from '~/components/ProductDetails.vue'

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri, { key: id?.toString() })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>

<style scoped></style>
