import { defineStore } from 'pinia'


export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: []
    }),

    getters: {

    },

    actions: {
        //get orders based on email
        async getOrdersByEmail(email) {
            const data = await $fetch(`http://localhost:4000/orders?email=${email}`)
            this.orders = data
            console.log(this.orders)
        },

        async createOrder(email, total, cart) {


            //create order with unique id
            const order = {
                id: Date.now(),
                email: email,
                products: cart,
                total: total
            }

            const data = await $fetch('http://localhost:4000/orders', {
                method: 'POST',
                body: order
            })
        }
    }
})