<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" class="mx-auto" min-width="200" max-width="344">
      <v-img
        v-bind:src="image ? image : src"
        v-bind:lazy-src="image ? image : src"
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
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
      <v-card-title>{{ title ? title : 'loading...' }}</v-card-title>
      <v-card-subtitle>{{ description ? description : 'loading...' }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
        <v-spacer></v-spacer>
        <v-btn>Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')
const overlay = ref(false)

const props = defineProps({
  title: {
    required: false,
    type: String,
  },
  price: {
    required: false,
    type: Number,
  },
  category: {
    required: false,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
})
</script>

<style scoped>
.random {
  background-color: #634494;
}
</style>
