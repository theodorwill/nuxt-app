<template>
    <v-card fluid>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">{{ category }}</v-card-title>

          <v-card-subtitle>{{ title }}</v-card-subtitle>

          <v-card-text>{{ quantity * price }}</v-card-text>

          <v-card-actions>
            <v-btn class="ms-2" variant="outlined" size="small"> Remove </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" rounded="0">
          <v-img
            v-bind:src="image ? image : src"
            v-bind:lazy-src="image ? image : src"
          ></v-img>
        </v-avatar>
      </div>
    </v-card>
</template>

<script setup lang="ts">
const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  id: {
    required: true,
    type: Number,
  },
  title: {
    required: false,
    type: String,
  },
  price: {
    required: true,
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
  quantity: {
    required: true,
    type: Number,
  },
})
</script>

<style scoped></style>
