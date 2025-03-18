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
      

      <AdminBurger />
    </div>
<!-- <section class="bg-white rounded-lg py-8 mt-20 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mx-auto max-w-5xl space-y-8 h-[500px] overflow-y-auto">
      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
        <h2 class="font-bold text-lg mb-4">Налаштування оплати</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Тема застосунку</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Light</button>
          </div>
          <div class="flex justify-between items-center">
            <span>Мова застосунку</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Українська</button>
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
        <h2 class="font-bold text-lg mb-4">Персоналізація</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Шрифт</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Стандартний</button>
          </div>
          <div class="flex justify-between items-center">
            <span>Розмір тексту</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Звичайний</button>
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
        <h2 class="font-bold text-lg mb-4">Повідомлення</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Push-сповіщення</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Увімкнено</button>
          </div>
          <div class="flex justify-between items-center">
            <span>Email-сповіщення</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Вимкнено</button>
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
        <h2 class="font-bold text-lg mb-4">Безпека</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Двоетапна перевірка</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Увімкнено</button>
          </div>
          <div class="flex justify-between items-center">
            <span>Блокування паролем</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Вимкнено</button>
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
        <h2 class="font-bold text-lg mb-4">Доставка</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <span>Стандартна доставка</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Активно</button>
          </div>
          <div class="flex justify-between items-center">
            <span>Експрес-доставка</span>
            <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Неактивно</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->


<!-- <section class="bg-white rounded-lg py-8 mt-20 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl h-[500px] overflow-y-auto space-y-8 relative">
        <div
          v-for="(section, index) in ['Оплата', 'Персоналізація', 'Повідомлення', 'Безпека', 'Доставка']"
          :key="index"
          class="settings-section p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative"
        >
          <h2 
            class="font-bold text-lg mb-4 p-2 bg-gray-100 dark:bg-gray-800 sticky top-0 z-10"
            :class="{ 'shadow-lg': activeIndex === index }"
          >
            {{ section }}
          </h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b pb-3">
              <span>Опція {{ index + 1 }}</span>
              <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Змінити</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="bg-white rounded-lg py-8 mt-5 antialiased dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl h-[700px] overflow-y-auto space-y-4 relative">
        <div v-for="(section, index) in [
          { title: 'Налаштування оплати', options: ['Спосіб оплати', 'Збережені карти' ] },
          { title: 'Персоналізація', options: ['Тема застосунку','Мова застосунку'] },
          { title: 'Повідомлення', options: ['Повідомлення про знижки', 'Повідомлення про стан замовлення', 'Повідомлення про замовлення' ]},
          { title: 'Безпека', options: ['Двоетапна перевірка', 'Блокування паролем', 'Зміна паролю',] },
          { title: 'Доставка', options: ['Нова Пошта', 'Укрпошта'] }
        ]" :key="index" class="settings-section  p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative">
          <h2 class="font-bold text-lg mb-4 p-2 pb-0 pl-0 left bg-gray-100 dark:bg-gray-800 sticky top-0 z-10">
            {{ section.title }}
          </h2>
          <div class="space-y-4">
            <div v-for="(option, optIndex) in section.options" :key="optIndex" class="flex justify-between items-center border-b pb-3">
              <span>{{ option }}</span>
              <button class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">Змінити</button>
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

const sections = ref([])
const activeIndex = ref(0)
let observer // Объявляем observer в более широком контексте

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIndex.value = sections.value.indexOf(entry.target)
        }
      })
    },
    { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  )

  sections.value = document.querySelectorAll('.settings-section')
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
