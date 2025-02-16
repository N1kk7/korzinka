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


//   console.log('DB URL:', process.env.DATABASE_URL);
// console.log('Direct_URL:', process.env.DIRECT_URL);
// console.log('Supabase URL:', process.env.SUPABASE_URL);
// console.log('Supabase KEY:', process.env.SUPABASE_KEY);

// console.log('DB URL:', config.databaseUrl);
// console.log('Direct_URL:', config.directUrl);
// console.log('Supabase URL:', config.supabaseUrl);
// console.log('Supabase KEY:', config.supabaseKey);
// console.log(process.env, 'log process-env')


// const config = useRuntimeConfig()
// console.log(config.public.apiBaseUrl)
// console.log(config.public.apiBaseToken)
// console.log(config.apiSecretPath)
// console.log(config.apiSecretKey)

</script>
