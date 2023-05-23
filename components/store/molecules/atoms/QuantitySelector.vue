<template>
  <div class="counter-container">
    <v-btn
      icon="mdi-minus"
      @click="cartStore.updateQuantity(product, 'decrease')"
      v-bind:variant="checkQuantity(product)"
      density="compact"
    ></v-btn>
    <h3>{{ cartStore.getQuantity(product.id) }}</h3>
    <v-btn
      icon="mdi-plus"
      @click="cartStore.updateQuantity(product, 'increase')"
      variant="flat"
      density="compact"
    ></v-btn>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'

const cartStore = <any>useCartStore()

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})

const checkQuantity = (product: any) => {
  if (cartStore.getQuantity(product.id) === 1) {
    return 'tonal'
  } else {
    return 'flat'
  }
}
</script>

<style lang="scss" scoped>
.counter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 1rem;

  h3 {
    margin: 0;
    padding: 0;
  }
}
</style>
