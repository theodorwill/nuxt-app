<template>
  <v-card class="fill-height" fluid ma-0 pa-0>
    <v-row class="fill-height" fluid ma-0 pa-0>
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
        <v-card class="fill-height mx-auto" flat fluid>
          <v-card-item>
            <v-card-title>
              {{ product.title ? product.title : 'loading...' }}
            </v-card-title>
            <v-card-subtitle>
              {{ product.category ? product.category : 'loading...' }}
            </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                v-if="product.rating"
                :model-value="product.rating.rate"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
              <div class="text-grey ms-4">
                {{ product.rating.rate }} ({{ product.rating.count }})
              </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
              $ {{ product.price ? product.price : 'loading...' }}
            </div>
            <div>
              {{ product.description ? product.description : 'loading...' }}
            </div>
          </v-card-text>
          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-btn @click="cartStore.addToCart(product)" variant="outlined">
              Add to cart
            </v-btn>
          </v-card-actions>
          <v-card-text v-if="cartStore.getQuantity(product.id) > 0"
            >{{ `${cartStore.getQuantity(product.id)} in cart` }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
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

<style scoped>
.left-container {
  padding: 24px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 100%;
}
</style>
