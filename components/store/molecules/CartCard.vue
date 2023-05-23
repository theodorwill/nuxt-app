<template>
  <v-card min-width="50" class="mx-auto py-4 px-4" fluid>
    <v-row>
      <v-col cols="12" sm="10" md="10" lg="10" xl="10">
        <div class="d-flex flex-column">
          <h4 class="text-styling">{{ product.title }}</h4>
          <p class="text-primary text-styling">{{ product.category }}</p>
        </div>
        <h4 class="text-styling">Quantity</h4>
        <div class="d-flex justify-space-between align-center">
          <QuantitySelector :product="product" />
          <slot />
        </div>
        <v-divider class="mx-4 my-2"></v-divider>
        <div class="d-flex align-center justify-space-between">
          <p>Price per</p>
          <p class="text-primary">${{ product.price }}</p>
        </div>
        <div class="d-flex align-center justify-space-between">
          <p>Total</p>
          <p class="text-primary">${{ product.quantity * product.price }}</p>
        </div>
      </v-col>
      <v-col cols="12" sm="2" md="2" lg="2" xl="2">
        <div class="div-property">
          <v-img
            min-height="50px"
            max-height="100px"
            height="100px"
            aspect-ratio="1/1"
            cover
            v-bind:src="product.image ? product.image : src"
            v-bind:lazy-src="product.image ? product.image : src"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import QuantitySelector from './atoms/QuantitySelector.vue'

const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped>
.div-property {
  background-color: white;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-styling {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
