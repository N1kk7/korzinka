import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),

    
    getters: {},
    actions: {
        addProduct(product: any) {

            this.cart.push(product); 
            this.saveCart();

        },
        removeProduct(product: any) {

            this.cart = this.cart.filter(item => item.id !== product.id);
            this.saveCart();

        },
        updateProduct(product: any, newPrice: number, newQuantity: number) {

            const foundProduct = this.cart.find((item) => item.id === product.id)

            if (foundProduct) {
                foundProduct.totalPrice = newPrice,
                foundProduct.quantityProducts = newQuantity

                this.saveCart();
            }

        },
        clearCart() {
            this.cart = [];
            this.saveCart();
        },
        loadProducts() {
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