<template>
    <div class="layout">
      <AppHeader/>
      <StickyHeader/>
      <MobileMenu/>
        <main>
          <slot />
        </main>
        <Modal>
          <template #default="{ openModal, closeModal}">
            <component
              :is="currentModal"
              v-bind="modalProps"
              :openModal="openModal"
              :closeModal="closeModal"
            />
          </template>
        </Modal>
        <Chat/>
      <AppFooter/>

    </div>
  </template>
  
  <script setup>
  // import AppHeader from '~/components/AppHeader.vue'
  // import AppFooter from '~/components/AppFooter.vue'
  // import StickyHeader from "~/components/StickyHeader.vue"

    import Modal from '~/components/Modals/Modal.vue';
    // import { useModalStore } from "@/stores/modal-store";
    import { useModalStore } from "#imports";
    // import { MobileMenu } from './components/MobileMenu.vue';
// import { MobileMenu } from '@/.nuxt/components/';

    const modalStore = useModalStore();
    const currentModal = computed(() => modalStore.currentModal);
    const modalProps = computed(() => modalStore.modalProps);


  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;  

  }
  main {
    flex: 1;
  }
  </style>
  