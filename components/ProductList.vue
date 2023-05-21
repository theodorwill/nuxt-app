<template>
    
      <v-row class="fill-height" fluid>
        <v-col
          cols="12"
          xs="6"
          sm="4"
          md="4"
          l="3"
          xl="3"
          xxl="3"
          v-for="product in products"
          :key="product"
        >
          <ProductCard
            :product="product"
          >
          </ProductCard>
        </v-col>
      </v-row>
     
</template>

<script setup lang="ts">
import ProductCard from './store/molecules/ProductCard.vue'

const props = defineProps({
  url: {
    required: true,
    type: String,
  },
})

const { data: products } = await useFetch(props.url)

if (!products.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}
</script>

<style scoped></style>
