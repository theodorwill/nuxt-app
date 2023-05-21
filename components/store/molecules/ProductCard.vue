<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" class="mx-auto" min-width="200" max-width="344">
      <v-img
        v-bind:src="product.image ? product.image : src"
        v-bind:lazy-src="product.image ? product.image : src"
        height="200px"
        cover
      >
        <v-overlay
          :model-value="isHovering"
          contained
          scrim="black"
          class="align-center justify-center"
        >
          <v-btn :to="`/products/${product.id}`" variant="flat">See more info</v-btn>
        </v-overlay>
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-card-title>{{ product.title ? product.title : 'loading...' }}</v-card-title>
      <v-card-subtitle>{{ product.description ? product.description : 'loading...' }}</v-card-subtitle>
      <v-card-actions>
      <RouterLinkBtn :to="`/products/${product.id}`" :text="'see more'"/>
        <v-spacer></v-spacer>
        <v-btn @click="cartStore.addToCart(product)">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
import RouterLinkBtn from '~/components/navigation/molecules/atoms/RouterLinkBtn.vue';
import { useCartStore } from '~/stores/cartStore';

const cartStore = <any>useCartStore()
const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')
const overlay = ref(false)

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped>
.random {
  background-color: #634494;
}
</style>
