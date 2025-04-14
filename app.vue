<template>
  <NuxtLayout>
  <NuxtPage/>
  <IconLibrary/>
  
</NuxtLayout> 


 
</template>

<script setup>
  import IconLibrary from './components/shared/IconLibrary.vue';

  import { useIndexStore } from '#imports';

  const indexStore = useIndexStore();

  // const config = useRuntimeConfig();

</script>
