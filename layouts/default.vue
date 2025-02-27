<template>
  <div class="layout">
    <AppHeader />
    <StickyHeader />
    <MobileMenu />
    <main>
      <slot />
    </main>
    <Modal>
      <template #default="{ openModal, closeModal }">
        <component
          :is="currentModal"
          v-bind="modalProps"
          :openModal="openModal"
          :closeModal="closeModal"
        />
      </template>
    </Modal>
    <Chat />
    <AppFooter />
  </div>
</template>

<script setup>
import Modal from "~/components/Modals/Modal.vue";
import { useModalStore } from "#imports";

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
