<template>
  <v-list density="compact" nav>
    <RouterLinkListItem :icon="'mdi-home'" :text="'Home'" :to="'/'" />

    <v-list-group value="Products">
      <template v-slot:activator="{ props }">
        <v-list-item :prepend-icon="'mdi-shopping'" v-bind="props" title="Products"> </v-list-item>
      </template>
      <RouterLinkListItem
        v-for="category in categories"
        :key="category"
        :icon="'mdi-shopping'"
        :text="category"
        :to="`/products/category/${category}`"
      />
    </v-list-group>

    <RouterLinkListItem
      :icon="'mdi-information-variant'"
      :text="'About'"
      :to="'/about'"
    />
  </v-list>
</template>

<script setup lang="ts">
import RouterLinkListItem from '../molecules/atoms/RouterLinkListItem.vue'

const { data: categories } = await useFetch(
  'https://fakestoreapi.com/products/categories'
)
</script>

<style scoped></style>
