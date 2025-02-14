import { defineStore } from 'pinia';


export const useIndexStore = defineStore('index', {
    state: () => ({
        adminBurgerBtn: false,
    }),
    actions: {
        setAdminBurgerBtn() {
            this.adminBurgerBtn = !this.adminBurgerBtn
        },
    },
    // getters: {
    //     adminBurgerBtn(state) {
    //         return state.adminBurgerBtn
    //     }
    // }
});