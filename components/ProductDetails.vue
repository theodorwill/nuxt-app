<template>
  <v-card
    max-width="1440"
    class="mx-auto fill-height"
    color="transparent"
    fluid
    flat
  >
    <v-row class="fill-height" fluid>
      <v-col cols="12" xs="12" sm="12" md="6" l="6" xl="6" xxl="6" fluid>
        <v-card class="fill-height" color="white" fluid>
          <v-img
            class="fill-height"
            v-bind:src="image ? image : src"
            v-bind:lazy-src="image ? image : src"
            fluid
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" l="6" xl="6" xxl="6" fluid>
        <v-card class="fill-height" fluid>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ category ? category : 'loading...' }}
              </div>
              <div class="text-h6 mb-1">
                {{ title ? title : 'loading...' }}
              </div>
              <div class="text-caption">
                {{ description ? description : 'loading...' }}
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn @click="increment" variant="outlined"> + </v-btn>
            <div>{{ count }}</div>
            <v-btn @click="decrement" variant="outlined"> - </v-btn>
            <v-btn variant="outlined"> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')
const count = ref(1)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 1) {
    count.value--
  }
}

const props = defineProps({
  id: {
    required: false,
    type: Number,
  },
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

<style scoped></style>
