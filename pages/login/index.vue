<template>
    <div>

        <form @submit.prevent="() => (isSignUp ? signUp() : signIn())">
            <input type="email" placeholder="Email" v-model="email"/>
            <input type="password" placeholder="Password" v-model="password"/>
            <button type="submit">{{ isSignUp ? 'Sign Up' : 'Login' }}</button>

        </form>

    </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()

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

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/account/profile')
        }
    })
})

</script>

<style scoped>

</style>