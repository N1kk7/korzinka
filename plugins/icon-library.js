import { defineNuxtPlugin } from '#app';
import IconLibrary from '~/components/shared/IconLibrary.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('IconLibrary', IconLibrary);
});