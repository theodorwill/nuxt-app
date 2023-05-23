<template>
<v-row>
  <v-card fluid width="100%">
    <div class="div-flex-row justify-space-between pr-3">
      <v-card-title class="py-4">My Profile</v-card-title>
      <v-btn @click="signOut" class="bg-red">Sign Out</v-btn>

    </div>
  </v-card>
  <v-card fluid width="100%">
    <v-card-title class="py-4">My Orders</v-card-title>
    <v-list v-if="orderStore.orders" class="mx-auto" width="100%">
      <v-list-group
        class="mx-auto py-5"
        v-for="order in orderStore.orders"
        :key="order.id"
        no-action
      >
        <template v-slot:activator="{ props }">
          <v-list-item-content v-bind="props">
            <v-list-item>
              <div class="div-flex-row">
                <h4>Order nr:</h4>
                <p class="text-primary">&nbsp;{{ order.id }}</p>
              </div>
              <v-divider class="mx-4 my-2"></v-divider>
              <div class="div-flex-row">
                <h4>Date:</h4>
                <p class="text-primary">
                  &nbsp;{{ convertIdToDate(order.id) }}
                </p>
              </div>
              <v-divider class="mx-4 my-2"></v-divider>
              <div class="div-flex-row">
                <h4>Email:</h4>
                <p class="text-primary">&nbsp;{{ order.email }}</p>
              </div>
              <v-divider class="mx-4 my-2"></v-divider>
              <div class="div-flex-row">
                <h4>Total:</h4>
                <p>&nbsp;${{ order.total }}</p>
              </div>
            </v-list-item>
          </v-list-item-content>
        </template>

        <v-list-item-content
          v-for="product in order.products"
          :key="product.id"
        >
          <v-list-item>
            <v-list-item-title class="text-primary">{{
              product.title
            }}</v-list-item-title>
            <v-list-item-subtitle
              >Quantity: {{ product.quantity }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Price: ${{
                product.price * product.quantity
              }}</v-list-item-subtitle
            >
          </v-list-item>
        </v-list-item-content>
      </v-list-group>
    </v-list>

    <!-- <div>
        <h1>Profile</h1>
        <button @click="signOut()">Sign Out</button>
    
        <div v-if=(orderStore.orders) v-for="order in orderStore.orders">
            <p>{{ order }}</p>
        </div>
      </div>
 -->
  </v-card>
</v-row>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/orderStore'

definePageMeta({
  middleware: ['auth'],
})

const client = useSupabaseClient()
const orderStore = <any>useOrderStore()

const signOut = async () => {
  const { error } = await client.auth.signOut()
  if (error) {
    console.log('error', error)
  } else {
    navigateTo('/')
  }
}
const {
  data: { user },
} = await client.auth.getUser()

orderStore.getOrdersByEmail(user?.email)

//function that converts id to date
function convertIdToDate(id: number) {
  let d = new Date(id)
  return d
}
</script>

<style lang="scss" scoped>
.div-flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h4 {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
