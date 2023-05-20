<template>
  <v-card max-width="1440"  class="mx-auto fill-height" color="transparent" dense fluid>
    <v-row class="fill-height" dense fluid>
      <v-col cols="12" xs="12" sm="12" md="12" l="6" xl="6" xxl="6">
        <v-card class="fill-height" color="white" dense fluid>
          <v-img
            class="fill-height"
            v-bind:src="image ? image : src"
            v-bind:lazy-src="image ? image : src"
            fluid
          ></v-img>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="12" l="6" xl="6" xxl="6">
        <v-card color="#1F7087" class="fill-height" dense fluid>
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
            <v-btn variant="outlined"> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
const src = ref('https://cdn.vuetifyjs.com/images/cards/desert.jpg')

const props = defineProps({
  id: {
    required: true,
    type: String,
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
