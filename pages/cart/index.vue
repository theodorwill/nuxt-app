<template>
  <v-row v-if="cartStore.cart.length > 0">
    <v-col  cols="12" sm="12" md="8">
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
              <v-btn
                class="text-red"
                icon="mdi-delete-forever"
                @click="cartStore.deleteFromCart(product)"
                variant="text"
              >
              </v-btn>
            </CartCard>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <OrderSummary :totalPrice="cartStore.cartTotal" />
    </v-col>

  </v-row>
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
      <v-icon size="100">mdi-cart-off</v-icon>
    </v-row>
  </v-card>
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
