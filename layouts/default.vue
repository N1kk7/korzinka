<template>
  <div class="layout">
    <AppHeader />
    <StickyHeader />
    <MobileMenu />
    <main>
      <slot />
    </main>
    <Tooltips v-if="showTooltip" :tooltipStatus="tooltipStatus">
      {{ tooltipMessage }}
    </Tooltips>
    <Modal @tooltip="tooltip">
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
  import Tooltips from "~/components/shared/Tooltips.vue";
  import { useModalStore, useAuthStore } from "#imports";
  import { onMounted } from "vue";

  const modalStore = useModalStore();
  const authStore = useAuthStore();
  const currentModal = computed(() => modalStore.currentModal);
  const modalProps = computed(() => modalStore.modalProps);

  const showTooltip = ref(false);
  const tooltipStatus = ref("");
  const tooltipMessage = ref("");

  const tooltip = (obj) => {

    const { status, message } = obj;

    tooltipStatus.value = status;
    tooltipMessage.value = message;
    showTooltip.value = true;
    setTimeout(() => {
      showTooltip.value = false;
    }, 3000);
  };

  onMounted(() => {
    authStore.fetchUser();
    console.log(authStore.user);
  })
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
