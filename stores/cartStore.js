import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },

    cartQuantity() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },

    getQuantity: (state) => (id) => {
      const product = state.cart.find(p => p.id === id)
      return product ? product.quantity : 0
    }

  },

  actions: {
    async getCart() {
      const data = await $fetch('http://localhost:4000/cart')
      this.cart = data
      console.log(this.cart)
    },

    async deleteFromCart(product) {
      this.cart = this.cart.filter(p => {
        return p.id !== product.id
      })

      //make a delete request to the server
      await $fetch(`http://localhost:4000/cart/${product.id}`, {
        method: 'DELETE'
      })
    },

    async updateQuantity(product, action) {
      let updatedProduct;

      switch (action) {
        case 'increase':
          this.cart = this.cart.map(p => {
            if (p.id === product.id) {
              p.quantity++
              updatedProduct = p;
            }
            return p
          })
          break;
        case 'decrease':
          this.cart = this.cart.map(p => {
            if (p.id === product.id && p.quantity > 1) {
              p.quantity--
              updatedProduct = p;
            }
            return p
          })
          break;
      }

      //make a put request to the server
      if (updatedProduct) {
        await $fetch(`http://localhost:4000/cart/${product.id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedProduct)
        })
      }
    },

    async addToCart(product) {
      const exists = this.cart.find(p => p.id === product.id)

      if (exists) {
        this.updateQuantity(product, 'increase')
      }

      if (!exists) {
        this.cart.push({
          ...product,
          quantity: 1
        })

        //make a post request to the server
        await $fetch('http://localhost:4000/cart', {
          method: 'POST',
          body: JSON.stringify({ ...product, quantity: 1 })
        })
      }
    }
  }
})