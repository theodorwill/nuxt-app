<template>
  <v-card
    min-width="200"
    width="400"
    class="mx-auto px-6 py-8"
    align="center"
    fluid
  >
    <h1 class="pb-6">{{ isSignUp ? 'Sign Up' : 'Login' }}</h1>
    <v-spacer></v-spacer>
    <v-form
      v-model="form"
      @submit.prevent="() => (isSignUp ? signUp() : signIn())"
    >
      <v-text-field
        
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        hide-details="auto"
        placeholder="johndoe@gmail.com"
        type="email"
        class="pb-6"
        clearable
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        type="password"
        class="pb-6"
        clearable
        label="Password"
        hide-details="auto"
        placeholder="Enter your password"
      ></v-text-field>
      <v-btn
        :disabled="!form"
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      >
        {{ isSignUp ? 'Sign Up' : 'Log In' }}
      </v-btn>
    </v-form>
    <v-divider v-if="!isSignUp" class="mx-4 mb-1"></v-divider>
    <br v-if="isSignUp">
    <p v-if="!isSignUp">or</p>
    <v-btn
    v-if="!isSignUp"
    @click="signInWithGoogle"
    class="primary-text"
    prepend-icon="mdi-google"
    variant="text"
    >
    Log In with Google
</v-btn>
<v-divider class="mx-4 mb-1"></v-divider>
<div class="toggle-container">
<p>{{ isSignUp ?  'Already have an account?' : `Don't have an account?` }}</p>
<v-btn @click="toggle" variant="text">{{ isSignUp ?  'Login!' : 'Sign Up!' }}</v-btn>
</div>
  </v-card>
</template>

<script setup lang="ts">
const loading = ref(false)
const form = ref(false)

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const required = (value: string) => !!value || 'Required.'
const client = useSupabaseClient()

const toggle = () => {
  isSignUp.value = !isSignUp.value
}

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log('error', error)
  } else {
    console.log('user', data)
  }
}

const signIn = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log('error', error)
  } else {
    console.log('user', data)
  }
}

const signInWithGoogle = async () => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) {
    console.log('error', error)
  } else {
    console.log('user', data)
  }
}
</script>

<style scoped>

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
</style>
