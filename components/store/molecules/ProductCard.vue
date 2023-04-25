<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" class="mx-auto" min-width="200" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        height="200px"
        cover
      >
      <v-overlay
        :model-value="isHovering"
        contained
        scrim="black"
        class="align-center justify-center"
      >
        <v-btn variant="flat">See more info</v-btn>
      </v-overlay>
      </v-img>
      <v-card-title> Top western road trips </v-card-title>
      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
        <v-spacer></v-spacer>
        <v-btn>Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')
    const overlay = ref(false)

    return {
      src,
      overlay,
    }
  },
})
</script>

<style scoped>
.random {
  background-color: #634494;
}
</style>
