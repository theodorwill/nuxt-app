import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: []
    }),
    getters: {
        cartTotal() {
            return this.cart.reduce((acc, curr) => acc + curr.price, 0)
        }
    },
    actions: {
        addToCart(product) {
            this.cart.push(product)
        },
        removeFromCart(product) {
            this.cart = this.cart.filter(item => item.id !== product.id)
        }
    }
})
