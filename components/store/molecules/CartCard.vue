<template>
    <v-card min-width="200" fluid>
     
        
          <v-card-title >{{ product.title }}</v-card-title>

          <v-card-subtitle>{{ product.category }}</v-card-subtitle>

          <v-card-text>{{ product.quantity * product.price }}</v-card-text>

          
            <slot/>
            <QuantitySelector :product="product" />
         

        <v-avatar class="ma-3" size="20%" rounded="0">
          <v-img
            v-bind:src="product.image ? product.image : src"
            v-bind:lazy-src="product.image ? product.image : src"
          ></v-img>
        </v-avatar>
      
    </v-card>
</template>

<script setup lang="ts">
import QuantitySelector from './atoms/QuantitySelector.vue';

const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped></style>
