<template>
  <div>
    <v-container>
      <v-row justify="center">
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
    </v-container>
  </div>
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
