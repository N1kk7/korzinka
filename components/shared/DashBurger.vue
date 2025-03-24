<template>
     <button 
                  class="dash-burger flex items-center justify-center w-[30px] border border-solid rounded-lg border-[var(--light-color)] p-2"
                  @click="toggleSidebar"
                >
                 <div class="flex items-end justify-between flex-col gap-1">
                  <div 
                    class="top  h-[2px] bg-[var(--light-color)] rounded-lg duration-100 ease-in"
                    :class=" burgerActive ? 'w-4' :  'w-5' "
                  ></div>
                  <div class="middle h-[2px] bg-[var(--light-color)] rounded-lg duration-100 ease-in"
                    :class=" burgerActive ? 'w-3' :  'w-5' "

                  ></div>
                  <div 
                    class="bottom h-[2px] bg-[var(--light-color)] rounded-lg duration-100 ease-in"
                    :class=" burgerActive ? 'w-2' :  'w-5' "

                  ></div>
                 </div>
                  

                </button>
</template>


<script setup>

    import { ref, defineEmits } from 'vue';
    import { useIndexStore } from '#imports';

    const indexStore = useIndexStore();


    const burgerActive = ref(false);
    const emit = defineEmits(['toggle-sidebar'])

    const toggleSidebar = () => {
        burgerActive.value = !burgerActive.value;
        indexStore.setAdminBurgerBtn(burgerActive.value);
    }

</script>