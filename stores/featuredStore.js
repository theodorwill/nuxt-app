import { defineStore } from 'pinia'

export const useFeaturedStore = defineStore('featured', {
    state: () => ({
        featured: []
    }),

    getters: {
        //get featured products
        featuredProducts() {
            return this.featured
        }
    },

    actions: {
        async getFeaturedProducts() {
            const data = await $fetch('http://localhost:4000/featured-products')
            this.featured = data
            console.log(this.featured)
        }
    }
})