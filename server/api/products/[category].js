export default defineEventHandler(async (event) => {
    const { category } = event.context.params

    const uri = `https://fakestoreapi.com/products/category/${category}`

    const { data } = await $fetch(uri)

    return data
})