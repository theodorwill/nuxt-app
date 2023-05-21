<template>
    <v-card fluid>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">{{ product.category }}</v-card-title>

          <v-card-subtitle>{{ product.title }}</v-card-subtitle>

          <v-card-text>{{ product.quantity * product.price }}</v-card-text>

          <v-card-actions>
            <slot/>
            <QuantitySelector :product="product" />
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" rounded="0">
          <v-img
            v-bind:src="product.image ? product.image : src"
            v-bind:lazy-src="product.image ? product.image : src"
          ></v-img>
        </v-avatar>
      </div>
    </v-card>
</template>

<script setup lang="ts">
import QuantitySelector from './atoms/QuantitySelector.vue';

const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped></style>
