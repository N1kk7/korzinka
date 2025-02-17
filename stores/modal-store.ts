import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
    state: () => ({

        isVisible: false,
        currentModal: '',
        modalProps: {},

    }),
    actions: {
        showModal(modalName: string, props: Object) {
            this.isVisible = true;
            this.currentModal = modalName;
            this.modalProps = props;
            
        },
        closeModal() {
            this.isVisible = false;
            this.currentModal = '';
            this.modalProps = {};
        }
    }
})