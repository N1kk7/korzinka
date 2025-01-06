import { defineStore } from 'pinia';

interface ITheme{
    id: number,
    name: string,
    colors: {
        dark: string,
        primary: string,
        secondary: string,
        light: string,
        bg: string,
    }
}

export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentTheme: 'satin-bright', // Тема по умолчанию
        themes: [
            {
                id: 1,
                name: 'satin-bright',
                colors: {
                    dark: '#474745',
                    primary: '#889293',
                    secondary: '#B7C1C3',
                    light: '#CCD6D8',
                    bg: '#E3E8EB',
                }
            },
            {
                id: 2,
                name: 'berry-blue',
                colors: {
                    dark: '#1E1F26',
                    primary: '#283655',
                    secondary: '#4D648D',
                    light: '#A9BDD4',
                    bg: '#D0E1F9',
                }
            },
            {
                id: 3,
                name: 'megapolice-fog',
                colors: {
                    dark: '#2C4A52',
                    primary: '#537072',
                    secondary: '#8E9B97',
                    light: '#F4EBDB',
                    bg: '#E6F2F0',
                }
            },
            {
                id: 4,
                name: 'green-forest',
                colors: {
                    dark: '#04202C',
                    primary: '#3040404',
                    secondary: '#5B7065',
                    light: '#C9D1C8',
                    bg: '#E5ECE9',
                }
            },
            {
                id: 5,
                name: 'forest-fog',
                colors: {
                    dark: '#040402',
                    primary: '#242621',
                    secondary: '#59584c',
                    light: '#bfb6a4',
                    bg: '#f5ecda',
                }
            },
            {
                id: 6,
                name: 'light-white',
                colors: {
                    dark: '#262526',
                    primary: '#7f8084',
                    secondary: '#afb2b7',
                    light: '#d7d8da',
                    bg: '#f3f3f3',
                }
            },
            {
                id: 7,
                name: 'satin-dark',
                colors: {
                    dark: '#18181f',
                    primary: '#323844',
                    secondary: '#565c68',
                    light: '#e1cfa9',
                    bg: '#f5eee2',
                }
            },
            // {
            //     id: 8,
            //     name: 'korzinka-theme',
            //     colors: {
            //         dark: 'rgb(30, 55, 82)',
            //         primary: 'rgb(20, 45, 65)',
            //         secondary: 'rgb(44, 78, 114)',
            //         light: 'rgb(100, 128, 157)',
            //         bg: 'rgb(150, 180, 200)',
            //     }
            // }
              {
                id: 8,
                name: 'korzinka-theme',
                colors: {
                    dark: 'rgb(34, 60, 88)',
                    primary: 'rgb(26, 50, 74)',
                    secondary: 'rgb(44, 78, 114)',
                    light: 'rgb(80, 110, 140)',
                    bg: 'rgb(120, 150, 180)',
                }
            },
            {
                "id": 9,
                "name": "ocean-mist",
                "colors": {
                    "dark": "#102A43",
                    "primary": "#1C3D5A",
                    "secondary": "#406E8E",
                    "light": "#7EA9C8",
                    "bg": "#D4E4F7"
                }
            },
            {
                "id": 10,
                "name": "harmonic-blue",
                "colors": {
                    "dark": "#1C2E40",       // Темный оттенок, близкий к морской глубине.
                    "primary": "#2C4E72",    // Ваш основной цвет — насыщенный синий.
                    "secondary": "#567A9A",  // Средний оттенок, более мягкий и нейтральный.
                    "light": "#A5BDD3",      // Светлый оттенок, приятный для глаз.
                    "bg": "#E5EFF5"          // Очень светлый цвет, подходящий для фона.
                }
            },
            {
                "id": 11,
                "name": "harmonious-set",
                "colors": {
                    "dark": "#1F3A54",       // Тёмно-синий оттенок, темнее основного цвета.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#B6C5D1",  // Светлый серо-голубой оттенок, хорошо гармонирует с синим.
                    "light": "#FF9F00",      // Тёплый оранжевый цвет для контраста.
                    "bg": "#F5F5F5"          // Очень светлый серый цвет для фона.
                }
            } ,
            {
                "id": 12,
                "name": "yellow-green-contrast",
                "colors": {
                    "dark": "#1C3A4B",      // Тёмно-синий оттенок, более насыщенный для глубины.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#A8D84C",  // Яркий жёлто-зелёный для контраста.
                    "light": "#FFD700",      // Ярко-жёлтый для акцентов.
                    "bg": "#F5F5F5"          // Светлый фон для общей лёгкости.
                }
            },
            {
                "id": 13,
                "name": "red-contrast",
                "colors": {
                    "dark": "#1D2A3B",      // Тёмно-синий для глубины.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#E74C3C",  // Яркий красный для контраста.
                    "light": "#F1C40F",      // Золотисто-жёлтый для акцентов.
                    "bg": "#F9F9F9"          // Очень светлый фон.
                }
            },
            {
                "id": 14,
                "name": "purple-contrast",
                "colors": {
                    "dark": "#283A53",      // Тёмно-синий для глубины.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#8E44AD",  // Яркий фиолетовый для контраста.
                    "light": "#9B59B6",      // Светлый фиолетовый для акцентов.
                    "bg": "#F3F3F3"          // Нейтральный светлый фон.
                }
            },
            {
                "id": 15,
                "name": "sand-contrast",
                "colors": {
                    "dark": "#1E3A52",      // Тёмно-синий для контекста.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#D4AC6E",  // Песочный для контраста.
                    "light": "#F5CBA7",      // Светлый бежевый для акцентов.
                    "bg": "#FBFBFB"          // Очень светлый фон.
                }
            },
            {
                "id": 16,
                "name": "mint-contrast",
                "colors": {
                    "dark": "#1F3A54",      // Тёмно-синий для контекста.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#48C9B0",  // Мятный зелёный для контраста.
                    "light": "#76D7C4",      // Светлый мятный зелёный для акцентов.
                    "bg": "#E8F6F3"          // Очень светлый фон с мятным оттенком.
                }
            },
            {
                "id": 17,
                "name": "coral-contrast",
                "colors": {
                    "dark": "#263A4B",      // Тёмно-синий для основы.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#E67E22",  // Тёплый коралловый для контраста.
                    "light": "#F39C12",      // Ярко-жёлтый для акцентов.
                    "bg": "#F8F8F8"          // Светлый фон для общего оформления.
                }
            },
            {
                "id": 18,
                "name": "milk-beige-contrast",
                "colors": {
                    "dark": "#2A3D56",      // Тёмно-синий для контекста.
                    "primary": "#2C4E72",    // Ваш основной синий цвет.
                    "secondary": "#F1C27D",  // Молочно-бежевый для контраста.
                    "light": "#F5CBA7",      // Светлый бежевый для акцентов.
                    "bg": "#F9F9F9"          // Очень светлый фон.
                }
            },
            
            
            
            
            
            
            
            
            
        ]
    }),
    actions: {
        setTheme(theme: ITheme) {
            
            this.currentTheme = theme.name;

            Object.keys(theme.colors).forEach((elem, idx) => {

                // console.log(elem, )

                document.documentElement.style.setProperty(
                    `--${elem}-color`,
                    Object.values(theme.colors)[idx]
                )
                
            })

        },
        // loadTheme() {
        //     const savedTheme = localStorage.getItem('theme');
        //     if (savedTheme) {
        //         this.currentTheme = savedTheme;
        //     }
        // },
    },


})