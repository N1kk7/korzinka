import { defineNuxtPlugin } from "#app";
import { useThemeStore } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) return;
  const themeStore = useThemeStore();

  console.log('themeStore.darkMode');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    console.log('dark init theme')
      themeStore.darkMode = true;
      document.documentElement.classList.add('dark');
  } else {
    console.log('light init theme')

      themeStore.darkMode = false;
      document.documentElement.classList.add('light');
  }
});
