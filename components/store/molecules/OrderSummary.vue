<template>
  <v-card min-width="50" class="mx-auto py-4 px-4" fluid>
    <v-card-title class="pb-4">Order Summary</v-card-title>
    <div class="d-flex justify-space-between py-2 px-4">
      <p>Subtotal</p>
      <p class="text-primary">${{ totalPrice }}</p>
    </div>
    <div class="d-flex justify-space-between py-2 px-4">
      <p>Tax</p>
      <p class="text-primary">0</p>
    </div>
    <div class="d-flex justify-space-between py-2 px-4">
      <p>Shipping Price</p>
      <p class="text-primary">0</p>
    </div>

    <v-divider class="mx-4 my-2"></v-divider>
    <div class="d-flex justify-space-between py-2 px-4">
      <p>summary</p>
      <p class="text-primary">${{ totalPrice }}</p>
    </div>
    <div class="py-4 px-4">
      <slot/>
      
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  ['totalPrice']: {
    required: true,
    type: Number,
  },
})
</script>

<style scoped></style>
