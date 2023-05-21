<template>
    <v-row class="fill-height" fluid>
      <v-col cols="12" xs="12" sm="12" md="6" l="6" xl="6" xxl="6" fluid>
        <v-card class="fill-height" color="white" fluid>
          <v-img
            class="fill-height"
            v-bind:src="product.image ? product.image : src"
            v-bind:lazy-src="product.image ? product.image : src"
            fluid
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" l="6" xl="6" xxl="6" fluid>
        <v-card class="fill-height" fluid>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ product.category ? product.category : 'loading...' }}
              </div>
              <div class="text-h6 mb-1">
                {{ product.title ? product.title : 'loading...' }}
              </div>
              <div class="text-caption">
                {{ product.description ? product.description : 'loading...' }}
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn @click="cartStore.updateQuantity(product, 'decrease')" variant="outlined"> - </v-btn>
            <div>{{ cartStore.getQuantity(product.id) }}</div>
            <v-btn @click="cartStore.updateQuantity(product, 'increase')" variant="outlined"> + </v-btn>
            <v-btn @click="cartStore.a" variant="outlined">
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'

const cartStore = <any>useCartStore()

const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped></style>
