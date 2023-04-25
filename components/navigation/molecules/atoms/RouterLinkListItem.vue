<template>
  <v-list-item :value="text" active-color="primary" :to="to">
    <template v-slot:prepend>
      <v-icon :icon="icon"></v-icon>
    </template>
    <v-list-item-title v-text="text" />
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      required: false,
      type: String,
    },
    text: {
      required: false,
      type: String,
    },
    to: {
      required: true,
      type: String,
    },
  },

  setup() {
    return {}
  },
})
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
