<template>
  <v-app-bar density="compact">
    <slot name="left" />
    <v-spacer />
    <!-- <SearchBar /> -->
    <router-link style="text-decoration: none; color: inherit" to="/">
    <div class="logo-container">
      <p>NUXT</p>
      <p>//</p>
      <p>STORE</p>
    </div>
  </router-link>
    <v-spacer />
    <slot name="right" />
  </v-app-bar>
</template>

<script setup lang="ts">
import RouterLinkBtn from './molecules/atoms/RouterLinkBtn.vue'
import SearchBar from './molecules/SearchBar.vue'
</script>

<style scoped lang="scss">
  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;

    p:nth-child(1) {
      color: rgb(var(--v-theme-secondary));
    }
    p:nth-child(2) {
      color: rgb(var(--v-text-base-color));
    }
    p:nth-child(3) {
      color: rgb(var(--v-theme-primary));
    }
  }

</style>
