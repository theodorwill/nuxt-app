<template>
  <v-carousel-item v-if="props" :to="`/products/${product.id}`">
    <v-hover v-slot="{ isHovering, props }">
      <v-row class="fill-height" v-bind="props">
        <v-img v-bind:src="product.image" v-bind:lazy-src="product.image" cover>
        </v-img>
        <v-overlay
          :model-value="isHovering"
          contained
          scrim="black"
          class="align-center justify-center"
        >
          <h2>
            {{ product.title ? product.title : 'loading...' }}
          </h2>
          <v-btn
            align="center"
            :to="`/products/${product.id}`"
            variant="outlined"
            >See more info</v-btn
          >
        </v-overlay>
      </v-row>
    </v-hover>
  </v-carousel-item>
</template>

<script setup lang="ts">
const props = defineProps({
  ['product']: {
    required: true,
    type: Object,
  },
})
</script>

<style scoped>
.button {
  align-self: center;
  justify-self: center;
}
</style>
