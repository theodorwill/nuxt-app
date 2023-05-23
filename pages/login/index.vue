<template>
  <LoginForm />
</template>

<script setup lang="ts">
import LoginForm from '~/components/user/molecules/LoginForm.vue'

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/account/profile')
    }
  })
})
</script>

<style scoped></style>
