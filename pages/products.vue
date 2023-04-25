<template>
  <div>
    <h2>Products</h2>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xs="2" sm="6" md="4" l="3" xl="2" xxl="1" v-for="n in 9" :key="n">
          <ProductCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '../components/store/molecules/ProductCard.vue'

export default defineComponent({
  components: {
    ProductCard,
  },

  setup() {
    return {}
  },
})
</script>

<style scoped></style>
