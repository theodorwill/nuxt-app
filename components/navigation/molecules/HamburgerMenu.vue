<template>
  <v-list density="compact" nav>
    <RouterLinkListItem :icon="'mdi-home'" :text="'Home'" :to="'/'" />
    <RouterLinkListItem
      :icon="'mdi-shopping'"
      :text="'Products'"
      :to="'/products'"
    />
    <RouterLinkListItem
      :icon="'mdi-information-variant'"
      :text="'About'"
      :to="'/about'"
    />
  </v-list>
</template>

<script setup lang="ts">
import RouterLinkListItem from '../molecules/atoms/RouterLinkListItem.vue'
import RouterLinkBtn from '../molecules/atoms/RouterLinkBtn.vue'
</script>

<style scoped></style>
