<template>
  <div class="error-container">
    <h1>{{ error.statusCode }}</h1>
    <h2>Oops something went wrong.</h2>
    <h3>{{ error.message }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
defineProps(['error'])

const theme = useTheme()
const currentTheme = useCookie('theme')
currentTheme.value
  ? (theme.global.name.value = currentTheme.value)
  : (theme.global.name.value = 'myCustomLightTheme')
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;



  h1 {
    font-size: 10rem;
    color: rgb(var(--v-theme-primary));
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 1.8rem;
    color: rgb(var(--v-theme-secondary-darken-1));
  }
}
</style>
