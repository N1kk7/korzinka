<template>
    <section class="modal lang-modal">
      <div class="modal-wrapper">
        <div class="title flex justify-between items-end w-full bg-[var(--primary-color)] relative">
            <h2
                class="text-white"
            >
                Оберіть мову
            </h2>
            <button @click="modalStore.closeModal">
                <!-- Закрити -->
            <SvgIcon  
                name="close-btn" 
                size="big" 
                fill="white" 
                class="border border-white p-1 rounded-full absolute top-4 right-4"
            />
            </button>
        </div>
        <hr>
        <ul class="flex flex-col items-start justify-start pb-5 px-5 w-full relative">
          <li 
            v-for="lang in langs" 
            :key="lang.id" 
            @click="selectLanguage(lang.locale)"
            class="text-bold uppercase py-4 px-2 w-full rounded-lg text-[var(--dark-color)] text-xl flex flex-start items-center gap-4"
        >
            <SvgIcon name="burger-menu" size="big" fill="var(--dark-color)"/>
            {{ lang.title }}
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
    import { useLanguageStore } from "#imports";
    import { useI18n } from "vue-i18n";
    import { useModalStore } from "#imports";
    import SvgIcon from "../shared/SvgIcon.vue";

  
  const { setLocale } = useI18n();
  const languageStore = useLanguageStore();
  const modalStore = useModalStore();
  
  const langs = [
    { id: 1, title: "English", locale: "en" },
    { id: 2, title: "Русский", locale: "ru" },
    { id: 3, title: "Українська", locale: "uk" },
  ];
  
  const selectLanguage = (lang) => {
    languageStore.setLanguage(lang);
    setLocale(lang);
    localStorage.setItem("selectedLanguage", lang);
    modalStore.closeModal();
  };
  </script>
  

<style lang="scss" scoped>

    .modal{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--dark-color);
        padding: 2em;
        border-radius: 1em;
        z-index: 100;
        .modal-wrapper{
            background: var(--bg-color);
            border-radius: 1em;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 350px;
            justify-content: center;
            overflow: hidden;
            gap: 1em;
            .title{
                padding: 1.5em 1em;
                z-index: 10;
            }
            h2{
                font-size: 1.5em;
            }
        }

        li{
            cursor: pointer;
            border: 1px solid transparent;

        }
        li:hover{
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: var(--bg-color);
            box-shadow:  20px 20px 60px #bebebe,
                        -20px -20px 60px #ffffff;
        }
    }


</style>