<template>
  <v-app>
    <Navbar>
      <template v-slot:left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:right>
        <ThemeToggler />
      </template>
    </Navbar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <HamburgerMenu />
    </v-navigation-drawer>
    <v-main class="mx-4 mb-4">
      <v-container ma-0 pa-0 fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/navigation/Navbar.vue'
import ThemeToggler from './components/navigation/molecules/atoms/ThemeToggler.vue'
import HamburgerMenu from './components/navigation/molecules/HamburgerMenu.vue'

export default defineComponent({
  components: {
    Navbar,
    ThemeToggler,
    HamburgerMenu,
  },

  data() {
    return {
      drawer: false,
    }
  },

  setup() {
    const theme = useTheme()
    const currentTheme = useCookie('theme')
    currentTheme.value
      ? (theme.global.name.value = currentTheme.value)
      : (theme.global.name.value = 'myCustomLightTheme')

    return {}
  },
})
</script>

<style scoped></style>
