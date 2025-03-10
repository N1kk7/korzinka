import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as {id: number, email: string, username: string} | null
    }),

    actions: {
        // async fetchUser() {
        //     console.log('enter');
            
        //     try{
        //         const { data } = await $fetch('/api/auth?auth=me', {
        //            method: 'GET',
        //            credentials: 'include' 
        //         })

        //         console.log(data, 'data');

        //         this.user = data
        //         console.log(this.user, 'this.user');

        //     } catch {
        //         this.user = null
        //     }
        // },
        
        async fetchUser() {
            console.log('enter fetchUser');
        
            try {
                const response = await $fetch('/api/auth?auth=me', {
                    method: 'GET',
                    credentials: 'include' // Убеждаемся, что куки передаются
                });
        
                console.log(response, 'response from server');
        
                if (!response) {
                    console.log('No response from server');
                    this.user = null;
                    return;
                }
        
                this.user = response;
                console.log(this.user, 'this.user after update');
        
            } catch (error) {
                console.error('Error in fetchUser:', error);
                this.user = null;
            }
        },
        
        async refreshToken() {
            try{
                await $fetch('/api/auth?auth=refresh', {
                    method: 'POST',
                    credentials: 'include'
                })
                await this.fetchUser()
            } catch {
                this.user = null
            }
        },

        async logout() {
            const logout = await $fetch('/api/auth?auth=logout', {
                method: 'POST',
                credentials: 'include'
            })

            console.log(logout, 'logout message')
            this.user = null
        }
    }
})