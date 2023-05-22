export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (!user.value && to.path === '/account/profile') {
        return navigateTo('/')
    } else if (user.value && to.path === '/') {
        return navigateTo('/account/profile')
    }
})