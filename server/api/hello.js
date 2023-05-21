export default defineEventHandler(async (event) => {


    const url = `https://fakestoreapi.com/products/category/jewelery`

    const data = await $fetch(url)

    return { data }
})