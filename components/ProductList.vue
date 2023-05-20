<template>
    <v-card max-width="1440"  class="mx-auto fill-height" color="transparent" fluid justify="center" align="center" >
      <v-row class="fill-height" fluid dense>
        <v-col
          cols="12"
          xs="2"
          sm="6"
          md="4"
          l="3"
          xl="2"
          xxl="1"
          v-for="p in products"
          :key="p"
        >
          <ProductCard
            :id="p['id']"
            :title="p['title']"
            :image="p['image']"
            :description="p['description']"
          >
            <RouterLinkBtn :to="`/products/${p['id']}`" :text="'see more'" />
          </ProductCard>
        </v-col>
      </v-row>
    </v-card> 
</template>

<script setup lang="ts">
import ProductCard from './store/molecules/ProductCard.vue'
import RouterLinkBtn from './navigation/molecules/atoms/RouterLinkBtn.vue'

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
