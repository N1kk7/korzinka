<!-- <template>

    <section class="modal lang-modal">
        <div class="modal-wrapper">
            <div class="title">
                <h2>
                    Оберіть мову
                </h2>
                <button @click="closeModal">Закрити</button>
            </div>
            

            <hr>

            <ul>
                <li v-for="lang in langs" :key="lang.id" @click="selectLanguage(lang.locale)">
                    {{ lang.title }}
                </li>

            </ul>
        </div>

        


    </section>
    

</template>

<script setup>


    import { useLanguageStore } from "#imports";

    import { useI18n } from 'vue-i18n';
    const { setLocale } = useI18n()
    // import { useModalStore } from "@/stores/modal-store";
    import { useModalStore } from "#imports";


    const languageStore = useLanguageStore();
    languageStore.loadLanguage();

    const modalStore = useModalStore();



    defineProps(['openModal', 'closeModal']);

    const langs = [{
        id: 1,
        title: 'English',
        locale: 'en',    
    },
    {
        id: 2,
        title: 'Русский',
        locale: 'ru',    
    },
    {
        id: 3,
        title: 'Українська',
        locale: 'uk',    
    },
    ]

    const currentLanguage = ref(languageStore.currentLanguage);


    const selectLanguage = (lang) => {
        languageStore.setLanguage(lang);
        // setLocale(currentLanguage);
        setLocale(lang);
        modalStore.closeModal();

    }

    const changeLanguage = (lang) => {

        languageStore.setLanguage(lang);
    }


</script> -->

<template>
    <section class="modal lang-modal">
      <div class="modal-wrapper">
        <div class="title">
          <h2>Оберіть мову</h2>
          <button @click="closeModal">Закрити</button>
        </div>
        <hr>
        <ul>
          <li v-for="lang in langs" :key="lang.id" @click="selectLanguage(lang.locale)">
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
  

<style lang="scss">

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
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1em;
            h2{
                font-size: 1.5em;

            }
        }

        li{
            cursor: pointer;
        }
        li:hover{
            background: var(--dark-color);
        }
    }


</style>