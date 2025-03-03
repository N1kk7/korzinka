// stores/language.ts
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'uk',
  }),
  actions: {
    setLanguage(lang: string) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
    },
    loadLanguage() {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        this.currentLanguage = savedLanguage;
      }
    },
  },
});
