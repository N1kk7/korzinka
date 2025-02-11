

// import { GoogleMap } from "vue3-google-map";
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(GoogleMap)
//   nuxtApp.vueApp.component('GoogleMap', GoogleMap)
//   nuxtApp.vueApp.component('Marker', GoogleMap)

//   // nuxtApp.vueApp.component('GoogleMarker', Marker);
//   // nuxtApp.vueApp.component('GoogleMarker', Marker)

//   return {
//     provide: {
//       GoogleMap,
//       // GoogleMarker: Marker,
//     },
//   }
// })

import { defineNuxtPlugin } from '#app';
import { GoogleMap, Marker } from 'vue3-google-map';

export default defineNuxtPlugin((nuxtApp) => {
  // Регистрируем компоненты глобально
  nuxtApp.vueApp.component('GoogleMap', GoogleMap);
  nuxtApp.vueApp.component('GoogleMarker', Marker);
});

