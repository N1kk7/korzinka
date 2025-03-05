import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        totalPrice: 0
    }),

    
    getters: {},
    actions: {
        addProduct(product: any) {

            this.cart.push(product); 
            this.totalPrice = this.cart.reduce((acc, product) => acc + product.totalPrice, 0);
            this.saveCart();

        },
        removeProduct(product: any) {

            this.cart = this.cart.filter(item => item.id !== product.id);
            this.totalPrice = this.cart.reduce((acc, product) => acc + product.totalPrice, 0);
            this.saveCart();

        },
        updateProduct(product: any, newPrice: number, newQuantity: number) {

            const foundProduct = this.cart.find((item) => item.id === product.id)

            if (foundProduct) {
                foundProduct.totalPrice = newPrice,
                foundProduct.quantityProducts = newQuantity

                this.totalPrice = this.cart.reduce((acc, product) => acc + product.totalPrice, 0);

                this.saveCart();
            }

        },
        clearCart() {
            this.cart = [];
            this.totalPrice = 0;
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