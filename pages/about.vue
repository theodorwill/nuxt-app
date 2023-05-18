<template>
    <div>
        <h2>About</h2>
        <div>{{ data }}</div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<style scoped>
    
</style>