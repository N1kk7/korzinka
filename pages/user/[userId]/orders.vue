<template>
    <div class="mx-6 pt-12 pb-28">
      <div class="head flex items-center justify-between px-5 py-5">
        <h1
          class="text-2xl font-semibold text-[var(--bg-color)] dark:text-white sm:text-3xl"
        >Замовлення</h1>
        <AdminBurger />
      </div>
      <section
        class="bg-white rounded-lg py-8 mt-20 antialiased dark:bg-gray-900 md:py-16"
      >
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mx-auto max-w-5xl">
            <div class="gap-4 sm:flex sm:items-center sm:justify-between">
                <div class="divide-y w-full divide-gray-200 dark:divide-gray-700">

                    <div v-if="orders.length === 0"> 
                        <h2 class="text-red-500">
                            Поки що ми не отримували Ваших замовлень ...
                        </h2>
                    </div>
                    
                    <div 
                        class="flex flex-wrap items-center gap-y-4 py-6"
                        v-else
                        v-for="(order, index) in orders"
                        :key="index"
                    >
                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt
                            class="text-base font-medium text-gray-500 dark:text-gray-400"
                        >
                            Order ID:
                        </dt>
                        <dd
                            class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                        >
                            <!-- <a href="#" class="hover:underline">{{ order.id }}</a> -->
                        </dd>
                        </dl>

                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt
                            class="text-base font-medium text-gray-500 dark:text-gray-400"
                        >
                            Дата:
                        </dt>
                        <dd
                            class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                        >
                            <!-- {{ order.createdAt.slice(0, 10) }} -->
                        </dd>
                        </dl>

                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt
                            class="text-base font-medium text-gray-500 dark:text-gray-400"
                        >
                            Ціна:
                        </dt>
                        <dd
                            class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                        >
                            <!-- {{ order.totalPrice }} грн. -->
                        </dd>
                        </dl>

                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt
                            class="text-base font-medium text-gray-500 dark:text-gray-400"
                        >
                            Статус:
                        </dt>
                        <dd
                            class="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        >
                            <svg
                            class="me-1 h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                            />
                            </svg>
                            {{ order.status }}
                        </dd>
                        </dl>

                        <div
                        class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
                        >
                        <button
                            type="button"
                            class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                        >
                            Cancel order
                        </button>
                        <a
                            href="#"
                            class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                            >View details</a
                        >
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
        </div>
      </section>
    </div>
  </template>

<script setup>

  import { onMounted, ref } from 'vue'
  import { useModalStore, useAuthStore } from '#imports';

  const modalStore = useModalStore();
  const authStore = useAuthStore();

  const orders = ref([]);


  onMounted(async () => {


    try{
        const getOrders = await $fetch(`/api/orders?orderId=${authStore.user.id}`, {
            method: 'GET'
        })

        orders.value = getOrders.data;


        console.log(getOrders.data, 'getOrders')



    } catch {
        console.log(error)

    }




  })




    definePageMeta({
        layout: 'user'
    })

</script>



<style lang="scss">

</style>