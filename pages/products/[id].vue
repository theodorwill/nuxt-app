<template>
  <ProductDetails
    :id="data?.id"
    :title="data?.title"
    :price="data?.price"
    :category="data?.category"
    :description="data?.description"
    :image="data?.image"
  >
  </ProductDetails>
</template>

<script setup lang="ts">
import ProductDetails from '~/components/ProductDetails.vue'
import { Product } from '~/types/Types'

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data } = await useFetch<Product>(uri, { key: id?.toString() })

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>

<style scoped></style>
