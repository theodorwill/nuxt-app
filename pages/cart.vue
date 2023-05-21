<template>
  <v-card
    max-width="1440"
    class="mx-auto fill-height"
    color="transparent"
    fluid
    justify="center"
    align="center"
  >
    <v-row v-if="cartStore.cart" class="fill-height" fluid dense>
      <v-col cols="12"
        v-for="p in cartStore.cart"
      >
        <CartCard
          :id="p.id"
          :title="p.title"
          :image="p.image"
          :description="p.description"
          :category="p.category"
          :price="p.price"
          :quantity="p.quantity"
        >
        </CartCard>
      </v-col>
    </v-row>
    <div v-else></div>
    <v-card fluid> 
        <v-card-title>Total: {{ cartStore.cartTotal }}</v-card-title>
        <v-card-actions>
            <v-btn>Buy</v-btn>
        </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import CartCard from '@/components/store/molecules/CartCard.vue'
import { useCartStore } from '@/stores/cartStore'
import { Product } from '@/types/Types'

const cartStore = useCartStore()

</script>

<style lang="scss" scoped></style>
