<template>
  <div class="mx-6 pt-12 pb-28">
    <div class="head flex items-center justify-between px-5 py-5">
      <h1
        class="text-2xl font-semibold text-[var(--bg-color)] dark:text-white sm:text-3xl"
      >
        Профіль
      </h1>
      <AdminBurger />
    </div>

    <div class="flex flex-col pt-5">
      <div class="mx-auto w-full pl-5 flex items-center justify-start">
        <div v-if="!authStore.user.userAvatar">
          <SvgIcon name="default-user-icon" size="large" />
        </div>

        <img
          v-else
          :src="authStore.user.userAvatar"
          alt="User Profile"
          class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] w-[7rem] h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative"
        />

        <h1
          class="w-full text-left my-4 sm:mx-4 pl-4 text-[var(--bg-color)] lg:text-4xl md:text-3xl sm:text-3xl text-xl font-serif"
        >
        {{ authStore.user.userFamily }}
        {{ authStore.user.username }}
        <br>
        <span class="text-lg">
            Користувач сайту з: {{dateOfCreate}}.
        </span>
        </h1>
        
      </div>
    </div>

    <section
      class="bg-white rounded-lg py-8 mt-20 antialiased dark:bg-gray-900 border border-[var(--bg-color)]"
    >
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <!-- {
              Имя: profile.firstName,
              Фамилия: profile.userFamily,
              Отчество: profile.lastName,
              Пол: profile.gender,
              Местоположение: profile.location,
              Телефон: profile.phone,
              Email: profile.email,
              Сайт: profile.website,
            }" -->
          <div
            v-for="(value, key) in userDataObj"
            :key="key"
            class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative"
          >
            <div
              class="font-bold text-lg mb-0 p-2 pl-0 bg-gray-100 dark:bg-gray-800 sticky top-0 z-10"
              
            >

              {{ value.tr.find((tr) =>  tr[$i18n.locale])?.[$i18n.locale] }}

            </div>
            <div class="flex justify-between items-center border-b pb-3">
              <dd class="text-base font-normal">
                
                <span>{{ value.value }}</span>
              </dd>
              <button
                @click.stop="modalStore.showModal('ChangeUserData', 
                  { 
                    id: userData.id,
                    key: key,
                    fieldName: value.tr.find((tr) =>  tr[$i18n.locale])?.[$i18n.locale] 
                     
                })"
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L6.75 19.864l-4.5 1.125 1.125-4.5L16.862 3.487z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-4 mt-6">
          <button
            @click="resetChanges"
            class="bg-[var(--bg-color)] text-[var(--dark-color)] px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition"
          >
            Сбросить изменения
          </button>
          <button
            @click="saveChanges"
            class="bg-[var(--dark-color)] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AdminBurger from "~/components/shared/AdminBurger.vue";

import SvgIcon from "@/components/shared/SvgIcon.vue";

import { useAuthStore, useModalStore } from "#imports";

const authStore = useAuthStore();
const modalStore = useModalStore();


const userData= authStore.user;
const dateOfCreate = userData.createdAt.slice(0, 10).split('-').reverse().join('.');

const profile = ref({
  firstName: userData.username,
  lastName: userData.userSurname,
  userFamily: userData.userFamily,
  phone: userData.phoneNumber,
  email: userData.email,
});

const userDataObj = {
  username: {
    tr: [
      {en: 'Name'},
      {uk: 'Імʼя'},
      {ru: 'Имя'}
  ],
    value: userData.username
  },
  userFamily: {
    tr: [
      {en: 'Family'},
      {uk: 'Прізвище'},
      {ru: 'Фамилия'}
  ],
    value: userData.userFamily
  },
  userSurname: {
    tr: [
      {en: 'Surname'},
      {uk: 'Прізвище'},
      {ru: 'Фамилия'}
    ],
    value: userData.userSurname
  },
  phoneNumber: {
    tr: [
      {en: 'Phone'},
      {uk: 'Телефон'},
      {ru: 'Телефон'}
  ],
    value: userData.phoneNumber
  },
  email: {
    tr: [
      {en: 'Email'},
      {uk: 'Електронна пошта'},
      {ru: 'Электронная почта'}
  ],
    value: userData.email
  },

}

console.log(userData, 'userData');



const editField = (key) => {
  const newValue = prompt(
    `Введите новое значение для ${key}:`,
    profile.value[key]
  );
  if (newValue !== null) {
    profile.value[key] = newValue;
  }
};

const resetChanges = () => {
  console.log("Сброс изменений");
};

const saveChanges = () => {
  console.log("Сохранение изменений", profile.value);
};

definePageMeta({
  layout: "user",
});
</script>
