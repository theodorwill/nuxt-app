<template>
  <v-card
    max-width="1440"
    class="mx-auto fill-height"
    color="transparent"
    fluid
    justify="center"
    align="center"
  >
    <v-list v-if="cartStore.cart" class="fill-height" fluid dense>
      <v-list-item v-for="product in cartStore.cart">
        <CartCard :product="product">
          <v-btn @click="cartStore.deleteFromCart(product)" variant="outlined">
            -
          </v-btn>
        </CartCard>
      </v-list-item>
      <v-list-item>
        <v-card fluid>
          <v-card-title>Total: {{ cartStore.cartTotal }}</v-card-title>
          <v-card-actions>
            <v-btn @click="checkout">checkout</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
    <div v-else></div>
  </v-card>
</template>

<script setup lang="ts">
import CartCard from '../../components/store/molecules/CartCard.vue'
import { useCartStore } from '../../stores/cartStore'
import { useOrderStore } from '../../stores/orderStore'

const cartStore = <any>useCartStore()
const orderStore = <any>useOrderStore()
const client = useSupabaseClient()


const checkout = async() => {
  
  
  const { data: { user } } = await client.auth.getUser()

  console.log(user?.email)

  orderStore.createOrder(user?.email, cartStore.cartTotal, cartStore.cart)
} 
</script>

<style lang="scss" scoped></style>
