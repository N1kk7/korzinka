<template>
  <div class="mx-6 pt-0 pb-28">
    <div class="head flex items-center justify-between px-5 py-5">
        <div class="text ">
            <h1
                class="text-2xl font-semibold text-[var(--bg-color)] dark:text-white sm:text-3xl mb-3"
            >
                Налаштування
            </h1>
            <p class="text-[var(--bg-color)] ">
                Настройте свой аккаунт, чтобы максимально выгодно использовать возможности нашего магазина. 
                Управляйте бонусами и отслеживайте баланс баллов для получения скидок, используйте промокоды для выгодных покупок, приглашайте друзей через реферальную программу и зарабатывайте бонусы. Также вы можете подписаться на VIP-статус, получая доступ к эксклюзивным скидкам и привилегиям, чтобы ваши покупки были еще более приятными и выгодными.
            </p>
        </div>
      

      <DashBurger />
    </div>
  <section class="bg-white rounded-lg py-8 mt-5 antialiased dark:bg-[var(--dark-grey)] border border-[var(--bg-color)] dark:border-[var(--dark-border-color)]">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl h-[700px] overflow-y-auto space-y-4 relative">
        <div v-for="(section, index) in [
          { title: 'Налаштування оплати', options: [{ title: 'Спосіб оплати', typeBtn: 'button', textBtn: ' Змінити'}, { title: 'Збережені карти', typeBtn: 'button', textBtn: ' Додати карту'} ] },
          { title: 'Персоналізація', options: [{title: 'Темна тема', typeBtn: 'switch', }, { title: 'Мова застосунку', typeBtn: 'button', textBtn: ' Українська'} ] },
          { title: 'Повідомлення', options: [{title: 'Повідомлення про знижки', typeBtn: 'switch', }, { title: 'Повідомлення про замовлення', typeBtn: 'switch'}, { title: 'Повідомлення статус замовлення', typeBtn: 'switch'} ]},
          { title: 'Безпека', options: [{title: 'Двоетапна перевірка', typeBtn: 'switch', }, { title:  'Блокування паролем', typeBtn: 'switch'}, { title: 'Зміна паролю', typeBtn: 'button', textBtn: ' Змінити пароль'},] },
          { title: 'Доставка', options: [{title: 'Нова Пошта', typeBtn: 'button', textBtn: ' Додати адресу'}, { title: 'Укрпошта', typeBtn: 'button', textBtn: ' Додати адресу'}] }
        ]" :key="index" class="settings-section  p-6 bg-gray-100 dark:bg-[var(--dark-light-grey)] dark:border dark:border-[var(--dark-border-color)]  rounded-lg shadow relative">
          <h2 class="font-bold text-lg mb-4 p-2 pb-0 pl-0 left dark:text-[var(--dark-font-color)] sticky top-0 z-10">
            {{ section.title }}
          </h2>
          <div class="space-y-4">
            <div v-for="(option, optIndex) in section.options" :key="optIndex" class="flex justify-between items-center border-b dark:border-[var(--dark-border-color)] pb-3">
              <span
                class="dark:text-[var(--light-color)]"
              >{{ option.title }}</span>
              <ToggleBtn v-if="option.typeBtn === 'switch'" />
              <!-- <button v-else class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">{{ option.textBtn }}</button> -->
              <!-- <button 
                  v-else 
                  class="px-4 py-2 rounded-lg 
                        bg-gray-200 text-gray-800 shadow-md 
                        dark:bg-[var(--dark-grey)] dark:text-gray-200 dark:shadow-lg 
                        dark:shadow-black/50 dark:hover:bg-gray-700 dark:active:shadow-inner">
                  {{ option.textBtn }}
              </button> -->
              <!-- <button
                v-else
                class="flex items-center justify-center px-4 py-2 rounded-md font-semibold cursor-pointer text-gray-300 
                dark:bg-[var(--dark-grey)] dark:border dark:border-[var(--dark-border-color)] 
                shadow-[inset_-4px_-4px_6px_rgba(255,255,255,0.1),inset_4px_4px_6px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.6)] transition-all duration-300
                 hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.15),inset_3px_3px_5px_rgba(0,0,0,0.5)] active:bg-[rgba(255,255,255,0.1)] 
                 active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.5)] active:scale-95"
              >
                {{ option.textBtn }}
              </button> -->
              <button
  v-else
  class="flex items-center justify-center px-4 py-2 rounded-md font-semibold cursor-pointer 
  text-gray-700 bg-[#ecf0f3] border border-[#d1d9e6] 
  shadow-[-8px_-4px_8px_#ffffff,8px_4px_12px_#d1d9e6,4px_4px_4px_#d1d9e6_inset,-4px_-4px_4px_#ffffff_inset] 
  transition-all duration-300
  hover:bg-[#f0f2f5] hover:shadow-[-6px_-3px_6px_#ffffff,6px_3px_9px_#d1d9e6,3px_3px_3px_#d1d9e6_inset,-3px_-3px_3px_#ffffff_inset] 
  active:bg-[#e2e6eb] active:shadow-[-4px_-2px_4px_#ffffff,4px_2px_6px_#d1d9e6,2px_2px_2px_#d1d9e6_inset,-2px_-2px_2px_#ffffff_inset] active:scale-95
  dark:text-gray-300 dark:bg-[var(--dark-grey)] dark:border dark:border-[var(--dark-border-color)] 
  dark:shadow-[inset_-4px_-4px_6px_rgba(255,255,255,0.1),inset_4px_4px_6px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.6)] 
  dark:hover:bg-[rgba(255,255,255,0.05)] dark:hover:shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.15),inset_3px_3px_5px_rgba(0,0,0,0.5)] 
  dark:active:bg-[rgba(255,255,255,0.1)] dark:active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.5)] dark:active:scale-95"
>
  {{ option.textBtn }}
</button>


           



            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import DashBurger from '~/components/shared/DashBurger.vue'
import ToggleBtn from '~/components/shared/ToggleBtn.vue'

const sections = ref([])
const activeIndex = ref(0)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIndex.value = Array.from(sections.value).indexOf(entry.target)
        }
      })
    },
    { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  )

  sections.value = Array.from(document.querySelectorAll('.settings-section'))
  sections.value.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  sections.value.forEach((section) => observer.unobserve(section))
})






definePageMeta({
  layout: "user",
});
</script>

<style lang="scss">
 


</style>
