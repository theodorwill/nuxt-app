<template>
  <v-text-field
    :loading="loading"
    density="compact"
    variant="outlined"
    label="Search templates"
    append-inner-icon="mdi-magnify"
    class="search-bar"
    single-line
    hide-details
    @click:append-inner="onClick"
  ></v-text-field>
</template>

<script setup lang="ts">
let loaded = ref(false)
let loading = ref(false)

const onClick = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>

<style scoped></style>
