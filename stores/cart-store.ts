import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),

    
    getters: {},
    actions: {
        addProduct(product: any) {
            // this.cart.push(product);
            this.cart.push(product); 
            this.saveCart();

            console.log(product)

        },
        removeProduct(product: any) {

            this.cart = this.cart.filter(item => item.id !== product.id);
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        clearCart() {
            this.cart = [];
            this.saveCart();
        },
        loadProducts() {
            // const savedCart = localStorage.getItem('cart');
            // if (savedCart) {
            //     this.cart = JSON.parse(savedCart);
            // }
            if (import.meta.client) { 
                const savedCart = localStorage.getItem('cart');
                if (savedCart) {
                  this.cart = JSON.parse(savedCart);
                }
              }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    },
});