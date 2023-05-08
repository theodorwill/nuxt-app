<template>
  <v-app-bar density="compact">
    <slot name="left" />
    <v-spacer />
    <SearchBar />
    <v-spacer />
    <slot name="right" />
  </v-app-bar>
</template>

<script setup lang="ts">
import RouterLinkBtn from './molecules/atoms/RouterLinkBtn.vue'
import SearchBar from './molecules/SearchBar.vue'
</script>

<style scoped></style>
