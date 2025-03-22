
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
    
    // actions: {
    //     setTheme(theme: ITheme) {
            
    //         this.currentTheme = theme.name;

    //         Object.keys(theme.colors).forEach((elem, idx) => {

    //             // console.log(elem, )

    //             document.documentElement.style.setProperty(
    //                 `--${elem}-color`,
    //                 Object.values(theme.colors)[idx]
    //             )
                
    //         })

    //     },
    //     // loadTheme() {
    //     //     const savedTheme = localStorage.getItem('theme');
    //     //     if (savedTheme) {
    //     //         this.currentTheme = savedTheme;
    //     //     }
    //     // },
    // },


})