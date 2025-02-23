// stores/language.ts
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'uk', // Язык по умолчанию
  }),
  actions: {
    setLanguage(lang: string) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang); // Сохранить язык в localStorage
    },
    loadLanguage() {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        this.currentLanguage = savedLanguage; // Загрузить язык из localStorage
      }
    },
  },
});
