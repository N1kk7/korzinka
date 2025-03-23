<template>
    <section class="mx-6 pt-2 pb-28">
      <div class="head flex items-center justify-between px-5 py-5">
        <h1
          class="text-2xl font-semibold text-[var(--bg-color)] dark:text-white sm:text-3xl"
        >Повідомлення</h1>
        <DashBurger />
      </div>
      <div
        class="bg-white rounded-lg py-8 mt-20 antialiased dark:bg-[var(--dark-grey)] border border-[var(--bg-color)] dark:border-[var(--dark-border-color)] md:py-16"
      >
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mx-auto max-w-5xl">
            <div class="gap-4 sm:flex sm:items-center sm:justify-between">
            
            </div>
  
        </div>
        </div>
      </div>
    </section>
  </template>

<script setup>

  import DashBurger from '@/components/shared/DashBurger.vue';




    definePageMeta({
        layout: 'user'
    })

</script>



<style lang="scss">

</style>