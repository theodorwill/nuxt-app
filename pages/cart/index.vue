<template>
  <v-row>
    <v-col cols="8">
      <v-card
        min-width="50"
        class="mx-auto fill-height"
        fluid
        justify="center"
        align="center"
      >
        <v-card-title>Cart</v-card-title>
        <v-list class="fill-height" fluid dense>
      <v-list-item v-for="product in cartStore.cart">
        <CartCard :product="product">
          <v-btn @click="cartStore.deleteFromCart(product)" variant="outlined">
            -
          </v-btn>
        </CartCard>
      </v-list-item>
    </v-list>
        
      </v-card>
    </v-col>
    <v-col cols="4">
      <OrderSummary :totalPrice="cartStore.cartTotal" />
    </v-col>

    <!--   <v-card
    v-if="cartStore.cart.length > 0"
    min-width="200"
    width="1440"
    class="mx-auto fill-height"
    color="transparent"
    fluid
    justify="center"
    align="center"
  >
    <v-list class="fill-height" fluid dense>
      <v-list-item v-for="product in cartStore.cart">
        <CartCard :product="product">
          <v-btn @click="cartStore.deleteFromCart(product)" variant="outlined">
            -
          </v-btn>
        </CartCard>
      </v-list-item>
      <v-list-item>
        <v-card fluid>
          <v-card-actions>
            <v-card-title>Total: ${{ cartStore.cartTotal }}</v-card-title>
            <v-btn @click="checkout">checkout</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-card>

  <v-card
    v-else
    min-width="200"
    width="1440"
    class="mx-auto fill-height"
    fluid
    justify="center"
    align="center"
  >
    <v-row
      min-width="200"
      width="1440"
      class="mx-auto fill-height"
      fluid
      justify="center"
      align="center"
    >
      <h2>Cart is empty</h2>
    </v-row>
  </v-card> -->
  </v-row>
</template>

<script setup lang="ts">
import CartCard from '../../components/store/molecules/CartCard.vue'
import OrderSummary from '../../components/store/molecules/OrderSummary.vue'
import { useCartStore } from '../../stores/cartStore'
import { useOrderStore } from '../../stores/orderStore'

const cartStore = <any>useCartStore()
const orderStore = <any>useOrderStore()
const client = useSupabaseClient()

const checkout = async () => {
  const {
    data: { user },
  } = await client.auth.getUser()

  console.log(user?.email)

  orderStore.createOrder(user?.email, cartStore.cartTotal, cartStore.cart)
}
</script>

<style lang="scss" scoped></style>
