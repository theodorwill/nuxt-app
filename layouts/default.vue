<template>
  <v-app>
    <Navbar>
      <template v-slot:left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:right>
        <RouterLinkBtn
          to="/cart"
          :icon="'mdi-cart'"
          :text="cartStore.cartQuantity"
        />
        <ThemeToggler />
      </template>
    </Navbar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <HamburgerMenu />
    </v-navigation-drawer>
    <v-main class="mx-4 mb-4">
      <v-container max-width="1440" class="primary fill-height align-start justify-center" fluid ma-0 pa-0>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import Navbar from '@/components/navigation/Navbar.vue'
import ThemeToggler from '@/components/navigation/molecules/atoms/ThemeToggler.vue'
import HamburgerMenu from '@/components/navigation/molecules/HamburgerMenu.vue'
import RouterLinkBtn from '@/components/navigation/molecules/atoms/RouterLinkBtn.vue'
import { useCartStore } from '@/stores/cartStore'
import { useFeaturedStore } from '@/stores/featuredStore'

const cartStore = <any>useCartStore()
const featuredStore = <any>useFeaturedStore()

cartStore.getCart()
featuredStore.getFeaturedProducts()

const drawer = ref(false)

const theme = useTheme()
const currentTheme = useCookie('theme')
currentTheme.value
  ? (theme.global.name.value = currentTheme.value)
  : (theme.global.name.value = 'myCustomLightTheme')
</script>

<style scoped>
.v-container {
  max-width: 1080px;
}
</style>
