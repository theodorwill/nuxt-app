<template>
  <div class="counter-container">
    <h4>Quantity</h4>
    <v-btn
      @click="cartStore.updateQuantity(product, 'decrease')"
      v-bind:variant="checkQuantity(product)"
      >-</v-btn
    >
    <h3>{{ cartStore.getQuantity(product.id) }}</h3>
    <v-btn @click="cartStore.updateQuantity(product, 'increase')" variant="flat"
      >+</v-btn
    >
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

//function that checks if quantity is 0 and returns tonal variant if true
const checkQuantity = (product: any) => {
  if (cartStore.getQuantity(product.id) === 1) {
    return 'tonal'
  } else {
    return 'flat'
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
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

  .v-btn {
    min-width: 0;
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin: 0;
    border-radius: 50%;
  }
}
</style>
