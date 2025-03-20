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
  <section class="bg-white rounded-lg py-8 mt-5 antialiased dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl h-[700px] overflow-y-auto space-y-4 relative">
        <div v-for="(section, index) in [
          { title: 'Налаштування оплати', options: [{ title: 'Спосіб оплати', typeBtn: 'button', textBtn: ' Змінити'}, { title: 'Збережені карти', typeBtn: 'button', textBtn: ' Додати карту'} ] },
          { title: 'Персоналізація', options: [{title: 'Темна тема', typeBtn: 'switch', }, { title: 'Мова застосунку', typeBtn: 'button', textBtn: ' Українська'} ] },
          { title: 'Повідомлення', options: [{title: 'Повідомлення про знижки', typeBtn: 'switch', }, { title: 'Повідомлення про замовлення', typeBtn: 'switch'}, { title: 'Повідомлення статус замовлення', typeBtn: 'switch'} ]},
          { title: 'Безпека', options: [{title: 'Двоетапна перевірка', typeBtn: 'switch', }, { title:  'Блокування паролем', typeBtn: 'switch'}, { title: 'Зміна паролю', typeBtn: 'button', textBtn: ' Змінити пароль'},] },
          { title: 'Доставка', options: [{title: 'Нова Пошта', typeBtn: 'button', textBtn: ' Додати адресу'}, { title: 'Укрпошта', typeBtn: 'button', textBtn: ' Додати адресу'}] }
        ]" :key="index" class="settings-section  p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative">
          <h2 class="font-bold text-lg mb-4 p-2 pb-0 pl-0 left bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
            {{ section.title }}
          </h2>
          <div class="space-y-4">
            <div v-for="(option, optIndex) in section.options" :key="optIndex" class="flex justify-between items-center border-b pb-3">
              <span>{{ option.title }}</span>
              <ToggleBtn v-if="option.typeBtn === 'switch'" />
              <button v-else class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">{{ option.textBtn }}</button>
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
