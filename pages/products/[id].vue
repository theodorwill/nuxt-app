<template>
  <div>
    <v-card>
      <p>Product details for {{ product.title }}</p>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri, { key: id?.toString() })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>

<style scoped></style>
