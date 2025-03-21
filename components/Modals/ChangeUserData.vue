<template>
    <section class="modal userData-modal">
        <div class="modal-wrapper">
            <div class="title flex justify-between items-end w-full bg-[var(--primary-color)] relative">
            <h2
                class="text-white"
            >
                Введіть нове значення для поля {{ props.fieldName }}
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
        <div class="modal-content w-11/12 m-5 flex items-end justify-between gap-5">
            <div class="relative flex-1">
                <label
                  for="your_name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                  {{ props.fieldName }}
                </label>
                <input
                  type="text"
                  id="your_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  :placeholder="`Введіть ${props.fieldName.toLowerCase()}`"
                  v-model="newValue"
                />
              </div>
            <!-- <button 
            
            >
                Зберегти
            </button> -->
            <DefaultBtn @click="fetchRequest">
                Зберегти
            </DefaultBtn>

        </div>
            
        </div>

    </section>


</template>


<script setup>
    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import DefaultBtn from '../shared/DefaultBtn.vue';
    import { useModalStore } from '#imports';
    import { ref, onMounted } from 'vue'


    const emit = defineEmits();



    const newValue = ref('');

    const modalStore = useModalStore();


    const props = modalStore.modalProps;


    const fetchRequest = async () => {
        try{

            if (newValue.value.length <= 0) {

                emit('tooltip', {
                    status: 'error',
                    message: 'Заповніть поле'
                })
                return;
            }

            const formData = new FormData();

            formData.append('data', JSON.stringify({
                id: props.id,
                field: props.key,
                newValue: newValue.value
            }));

            const fetchNewValue = await $fetch('/api/users', {
                method: 'PATCH',
                body: formData
            })

            if (fetchNewValue.status === 200) {
                emit('tooltip', {
                    status: 'success',
                    message: fetchNewValue.message
                })
                modalStore.closeModal();
            }

            // console.log(fetchNewValue, 'formData');

        } catch (err) {
            emit('tooltip', {
                status: 'error',
                message: 'Виникла помилка'
            })
            
        }
    }

    // const props = defineProps({
    //     userId: {
    //         type: Number,
    //         required: true,
    //     },
    //     field: {
    //         type: String,
    //         required: true
    //     },
    //     fieldName: {
    //         type: String,
    //         required: true
    //     }
    // })

    // onMounted(() => {
    //     console.log(modalStore.modalProps, props)
    // })

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
            min-width: 50%;
            border-radius: 1em;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            // min-width: 350px;
            justify-content: center;
            overflow: hidden;
            // gap: 1em;
            .title{
                padding: 1.5em 1em;
                z-index: 10;
            }
            h2{
                font-size: 1.5em;
            }
        }

        
    }

</style>