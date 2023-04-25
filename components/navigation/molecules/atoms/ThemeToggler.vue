<template>
  <v-btn icon="" @click="toggleTheme">
    <v-icon :color="theme.global.current.value.dark ? 'white' : 'black'">
      {{ switchIcon() }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  setup() {
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

    return { theme, toggleTheme, switchIcon }
  },
})
</script>

<style scoped></style>
