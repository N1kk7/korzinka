<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
      <!-- <p>Current Modal: {{ currentModal }}</p>
      <p>Modal Props: {{ modalProps }}</p> -->
        <slot :openModal="openModal" :closeModal="closeModal" />
        <component
          v-if="currentModal"
          :is="modalComponents[currentModal]"
          v-bind="modalProps"
          :openModal="openModal"
          :closeModal="closeModal"
          @addNewItem="addNewItem"
        />
      </div>
    </div>
  </template>

<script setup>
// import { useModalStore } from '@/stores/modal-store';
import { defineEmits} from 'vue';
import { useModalStore } from '#imports';

import LangModal from '~/components/Modals/LangModal.vue';
import ThemeModal from '~/components/Modals/ThemeModal.vue';
// import ProductModal from '~/components/Modals/admin/AddProduct.vue';

// ADMIN

import AddProduct from '~/components/Modals/admin/AddProduct.vue';

const modalStore = useModalStore();
const isVisible = computed(() => modalStore.isVisible);
const currentModal = computed(() => modalStore.currentModal);
const modalProps = computed(() => modalStore.modalProps);

const emit = defineEmits(['addNewItem']);

const modalComponents = {
  LangModal,
  ThemeModal,
  AddProduct,
}

const addNewItem = (obj) => {
        emit('addNewItem', obj);

    };





const closeModal = () => {
  modalStore.closeModal();
};


const openModal = (modalName, props = {}) => {
  modalStore.showModal(modalName, props);
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
}
</style>