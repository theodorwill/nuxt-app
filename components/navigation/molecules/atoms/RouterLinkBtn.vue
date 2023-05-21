<template>
  <v-btn :to="to">
    <v-icon v-if="icon">
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
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
})
</script>

<style scoped></style>
