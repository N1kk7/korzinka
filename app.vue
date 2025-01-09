<template>
<NuxtLayout>
  <NuxtPage/>
  <IconLibrary/>
  
</NuxtLayout> 


 
</template>

<script setup>
  import IconLibrary from './components/shared/IconLibrary.vue';

  import { supabase } from '../utils/supabase'
  const todos = ref([])

  async function getTodos() {
    const { data } = await supabase.from('todos').select()
    todos.value = data
  }

  onMounted(() => {
    getTodos()
  })

</script>
