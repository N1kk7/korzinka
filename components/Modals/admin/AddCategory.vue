<template>
    <div class="w-[20vw]">
        <div class="top-row flex justify-between items-center ">
            <h2>
                Додати категорію
            </h2>
            <button @click="modalStore.closeModal">
                <SvgIcon name="close-btn" size="micro" fill="var(--dark-color)"/>
            </button>
        </div>
        <div class="main-modal flex flex-col gap-2 mt-5">

            <div class="add-icon">
                <span
                    class="
                        text-[var(--dark-color)]
                        font-sm
                        text-base
                    "
                >
                    Іконка категорії (не обов'язково)
                </span>
                <div class="icon-wrapper grid grid-cols-[4fr_1fr] pt-2">
                    <div class="label-wrapper">
                        <label for="file_out" class="icon-label">
                            <span>
                                Оберіть файл
                            </span>
                            <SvgIcon name="download-btn" size="micro" fill="var(--dark-color)"/>

                        </label>
                        <input type="file" id="file_out" class="icon-file" @change="handleFileUpload">
                    </div>
                    <div class="icon-preview flex items-center justify-center">
                        <!-- <SvgIcon name="default-picture" size="big" fill="var(--dark-color)"/> -->
                        <SvgIcon v-if="!fileReady" name="default-picture" size="big" fill="var(--dark-color)" />
                        <img v-if="fileReady" :src="filePreview" alt="Preview" class="h-10 w-10 object-cover" />
                    </div>
                  
                    <span
                        v-if="!fileReady"
                        class="
                            text-[var(--dark-color)]
                            font-sm
                            text-xs
                            py-1
                        "
                    >
                        Файл повинен бути формату .svg .png
                    </span>
                    <span 
                        v-if="fileReady"
                        class="
                            text-[var(--dark-color)]
                            font-bold
                            text-xs
                            py-1
                            text-green-600
                        "
                    >
                        Файл готовий для завантаження
                    </span>
                </div>
               
            </div>
            <div class="add-description flex flex-col">
                <span
                    class="
                         text-[var(--dark-color)]
                        font-sm
                        text-base
                        pb-2
                    "
                >
                    Назва категорії (англійською) 
                </span>
               
                <input v-model="categoryNameEn" class="" type="text" placeholder="Введіть назву категорії">

            </div>
            <div class="add-description flex flex-col">
                <span
                    class="
                         text-[var(--dark-color)]
                        font-sm
                        text-base
                        pb-2
                    "
                >
                    Назва категорії (російською) 
                </span>
               
                <input v-model="categoryNameRu" class="" type="text" placeholder="Введіть назву категорії">

            </div>
            
            <div class="add-description flex flex-col">
                <span
                    class="
                         text-[var(--dark-color)]
                        font-sm
                        text-base
                        pb-2
                    "
                >
                    Назва категорії (українською)
                </span>
               
                <input v-model="categoryNameUk" class="" type="text" placeholder="Введіть назву категорії">

            </div>
            <div class="flex flex-col">
                <span
                    class="
                         text-[var(--dark-color)]
                        font-sm
                        text-base
                        pb-2
                    "
                >
                    Показувати групу на сайті? (опціонально)
                </span>
               
                <input v-model="categoryVisible" class="checkbox-input" type="checkbox">

            </div>
        </div>
        <div class="button-group flex justify-end items-center gap-2 w-full">
            <button
                @click="getData"
            >
                get cat
            </button>
            <button
                @click="shareData"
            >
                Скасувати
            </button>
            <button class="addItem" @click="sendData">
                Додати
            </button>
        </div>

    </div>
    
</template>

<script setup>
    import { ref, defineEmits } from 'vue';
    import { useModalStore } from '#imports';
    import { useFetch, useAsyncData } from 'nuxt/app'

    import SvgIcon from '@/components/shared/SvgIcon.vue';


    // const asyncData = useAsyncData()


    const modalStore = useModalStore();
    const emit = defineEmits();

    const file = ref(null);
    const fileReady = ref(false);
    const filePreview = ref(null);
    const uploadProgress = ref(null);
    const uploadStatus = ref('');
    const categoryNameUk = ref('');
    const categoryNameEn = ref('');
    const categoryNameRu = ref('');

    // const categoryGroup = ref('');
    const categoryVisible = ref(false);

    // watch(categoryVisible, (newVal) => {
    //     console.log(newVal);
    // })






    const handleFileUpload = (event) => {
        const accessedFormat = ['svg', 'png'];
        const selectedFile = event.target.files[0];
        const accessedFile = accessedFormat.some(item => selectedFile.name.includes(item));

        if (accessedFile) {
            file.value = selectedFile;
            fileReady.value = false;
            uploadProgress.value = 0;
            uploadStatus.value = '';

            const reader = new FileReader();
            reader.onload = () => {
            filePreview.value = reader.result;
            };
            reader.readAsDataURL(selectedFile);
            fileReady.value = true;
            
        } else {
            // console.error('Файл повинен бути формату .svg .png');
            emit('tooltip', {
                status: 'error',
                message: 'Файл повинен бути формату .svg .png'
            })
            resetForm();
            return;
        }
    };


    const resetForm = () => {
        file.value = null;
        fileReady.value = false;
        filePreview.value = null;
        uploadProgress.value = null;
        uploadStatus.value = '';
    };

    const resetTextFields = () => {
        categoryNameUk.value = '';
        categoryNameEn.value = '';
        categoryNameRu.value = '';
        // categoryGroup.value = '';   
        categoryVisible.value = false;
    }

    const sendData = () => {
        resetForm();
        emit('tooltip', {
            status: 'success',
            message: 'Категорія успішно додана'
        })
        setTimeout(() => {
            modalStore.closeModal();
        }, 1000);
    }

    // console.log(categoryName, 'category name')



    const shareData = async () => {

        const translitString = transliterate(categoryNameUk.value)

        // const date = new Date()

        // console.log(date.getTime());
        // if (file.value) {
        //     console.log(file.value, 'file value true')

        // } else {
        //     console.log(file.value, 'file value false')

        // }


        // return 
        // CHECK DATA BLOCK

        if (categoryNameUk.value.length < 1 
            && 
            categoryNameEn.value.length < 1
            &&
            categoryNameRu.value.length < 1)
        {
            emit('tooltip', {
                status: 'error',
                message: 'Заповніть всі поля'
            });
            return;
        } else if (categoryNameUk.value.length < 1) {
            emit('tooltip', {
                status: 'error',
                message: 'Заповніть назву категорії Українською'
            });
            return;
        } else if (categoryNameEn.value.length < 1) {
            emit('tooltip', {
                status: 'error',
                message: 'Заповніть назву категорії Англійською'
            });
            return;
        } else if (categoryNameRu.value.length < 1) {
            emit('tooltip', {
                status: 'error',
                message: 'Заповніть назву категорії Російською'
            });
            return;
        } else if (!file.value) {
            emit('tooltip', {
                status: 'error',
                message: 'Оберіть іконку для обраної категорії'
            });
            return;
        }


        const formData = new FormData();
        formData.append('image', file.value);
        formData.append('group', translitString.toLowerCase());
        formData.append('titleUk', categoryNameUk.value.toLowerCase());
        formData.append('titleEn', categoryNameEn.value.toLowerCase());
        formData.append('titleRu', categoryNameRu.value.toLowerCase());
        formData.append('visible', categoryVisible.value);


        const res = await $fetch('/api/products',
        {
            method: 'POST',

            body: formData,

        })
        resetForm();

        resetTextFields();

        emit('tooltip', {
            status: res.tooltipStatus,
            message: `Категорія ${res.message} успішно створена`
        })

        console.log(res, 'res from client');



    }

    const getData = async () => {
        try {
            const resData = await $fetch('/api/category')
            console.log(resData, 'resData from getData');

        } catch (error) {
            console.log(error.message, 'error from getData')
        }
 
    }


</script>



<style scoped lang="scss">

    @use './/styles/mixins.scss' as mixins;

        h2{
            @include mixins.cardText;
            // margin-bottom: 15px;
        }
        .button-group{
            button{
                border: 1px solid var(--dark-color);
                margin: 20px 0 20px;
                @include mixins.defaultShadow;
                @include mixins.descriptionText(500, var(--dark-color));
                padding: 3px 6px;
                font-size: clamp(0.6rem, 1vw, 1rem);
            }
            .addItem{
                background: var(--dark-color);
                color: var(--bg-color);
            }
        }
        input{
            border: 1px solid var(--dark-color);
            border-radius: 10px;
            padding: 5px 10px;
            width: 100%;
            color: var(--dark-color);
        }
        .checkbox-input{
            width: fit-content;
        }
        .label-wrapper{
            .icon-label {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                height: 32px;
                padding: 8px 20px 7px;
                border-radius: 5px;
                font-size: 12px;
                text-align: center;
                background-color: #f5f6f7;
                border: 1px solid var(--dark-color);
                color: #282828;
                cursor: pointer;
            }

            .icon-file {
                display: none;
            }
        }
        



</style>