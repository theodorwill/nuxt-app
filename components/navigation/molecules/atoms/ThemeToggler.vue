<template>
  <v-btn icon="" @click="toggleTheme">
    <v-icon :color="theme.global.current.value.dark ? 'white' : 'black'">
      {{ switchIcon() }}
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
const themeCookie = useCookie('theme')

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark
    ? 'myCustomLightTheme'
    : 'dark'

  themeCookie.value = theme.global.name.value
}

const switchIcon = () => {
  //change to switch if there are more than 2 themes
  if (theme.global.name.value === 'dark') {
    return 'mdi-weather-night'
  } else {
    return 'mdi-weather-sunny'
  }
}
</script>

<style scoped></style>
