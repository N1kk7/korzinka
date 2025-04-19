
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        darkMode: true,
    }),
    actions: {
        toggleTheme() {
            this.darkMode = !this.darkMode
            if (this.darkMode) {
                document.documentElement.classList.remove('light') ;
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light')
            }
        }
    }
  


})