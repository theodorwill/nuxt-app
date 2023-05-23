<template>
  <div>
    <h1>Profile</h1>
    <button @click="signOut()">Sign Out</button>

    <div v-if=(orderStore.orders) v-for="order in orderStore.orders">
        <p>{{ order }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/orderStore';

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
const { data: { user } } = await client.auth.getUser()
orderStore.getOrdersByEmail(user?.email)



</script>

<style scoped></style>
