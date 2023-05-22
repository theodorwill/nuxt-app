<template>
  <v-list density="compact" nav>
    <RouterLinkListItem :icon="'mdi-home'" :text="'Home'" :to="'/'" />
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-list-group v-if="categories" value="Products">
      <template v-slot:activator="{ props }">
        <v-list-item
          :prepend-icon="'mdi-shopping'"
          v-bind="props"
          title="Products"
        >
        </v-list-item>
      </template>
      <RouterLinkListItem
        v-for="category in categories"
        :key="category"
        :icon="'mdi-shopping'"
        :text="category"
        :to="`/products/category/${category}`"
      />
    </v-list-group>

    <v-divider class="mx-4 mb-1"></v-divider>
    <RouterLinkListItem
      :icon="'mdi-cart'"
      :text="'Cart' + (cartStore.cart.length > 0 ? ` (${cartStore.cart.length})` : '')"
      :to="'/cart'"
    />
    <v-divider class="mx-4 mb-1"></v-divider>
    <RouterLinkListItem
      v-if="user"
      :icon="'mdi-account-circle'"
      :text="'Profile'"
      :to="'/account/profile'"
    />
    <RouterLinkListItem
      v-else
      :icon="'mdi-login'"
      :text="'Login'"
      :to="'/login'"
    />
    <v-divider class="mx-4 mb-1"></v-divider>
    <RouterLinkListItem
      :icon="'mdi-information-variant'"
      :text="'About'"
      :to="'/about'"
    />
  </v-list>
</template>

<script setup lang="ts">
import RouterLinkListItem from '../molecules/atoms/RouterLinkListItem.vue'
import { useCartStore } from '~/stores/cartStore'

const cartStore = <any>useCartStore()

const { data: categories } = await useFetch(
  'https://fakestoreapi.com/products/categories'
)

const user = <any>useSupabaseUser()
</script>

<style scoped></style>
