<template>

    <div class="add-product-wrapper flex items-center justify-center w-full h-[100vh]">
            <div class="grid grid-cols-[1fr_2fr] gap-5  height-[90vh] relative">
                <div class="add-image flex relative flex-col gap-5 h-[90vh]">
                    <div class="add-image-content border-[2px] border-dashed border-[var(--main-dark-color)] rounded-lg p-5  w-full h-full flex items-center justify-center">
                        <div class="add-image-wrapper flex items-center justify-center flex-col relative top-10 w-4/5">
                            <div class="picture-container relative mb-5">
                                <div class="picture first"> </div>
                                <div class="picture second"> </div>
                                <div class="picture third"> </div>
                            </div>
                            <h2 class="img-title text-center">
                                Завантажте файли зображення
                            </h2>
                            <span class="text-center">
                                Зображення повинні бути в форматі .jpg, .png, .jpeg
                            </span>
                            <label for="product-file" class="icon-label">
                                <div class="upload-btn">
                                    Вибрати
                                </div>
                            </label>
                            <!-- @change="handleFileUpload($event, 'product-files')" -->

                            <input 
                                type="file" 
                                id="product-file" 
                                class="hidden" 
                                multiple 
                                @change="handleFileUpload($event, 'product', productFileState, productFileState.productFiles.value.length)"
                            >
                            
                        </div>
                    </div>
                    
                    <div class="prewiev-block flex justify-center items-center gap-5">
                        <SvgIcon 
                            name="default-picture" 
                            size="large" 
                            fill="var(--dark-color)"
                            v-if="productFileState.productFilesPreview.value.length === 0"
                        />
                        <div 
                            class="preview-wrapper w-[50px] h-[50px] relative flex items-center justify-center gap-5"
                            v-for="(file, index) in productFileState.productFilesPreview.value"
                            :key="index"
                            v-else
                        >
                            <div 
                                class="remove-btn rounded-full bg-red-500 w-5 h-5 absolute top-[-5px] right-[-5px] flex items-center justify-center cursor-pointer"
                                @click="removeProductImg(index)"
                            >
                                <SvgIcon name="close-btn" size="micro" fill="white"/>
                            </div>
                            <img 
                                class="w-[40px] h-[40px] object-cover"
                                :src="file" 
                                alt="preview"
                            >
                        </div>
                        
                        

                    </div>
                </div>
                <div class="add-info h-[90vh]">
                    <div class="top-content flex items-center justify-between ">
                        <h2 class="
                            text-[var(--dark-color)]
                            font-bold
                            text-2xl
                        ">
                            Інформація про товар
                        </h2>
                        <button
                        @click="closeModal"
                        >
                            <SvgIcon name="close-btn" size="micro" fill="var(--dark-color)"/>
                        </button>
                    </div>
                    
                    <div class="header-description">
                        <span class="
                            text-[var(--dark-color)]
                            font-sm
                            text-base
                        ">

                            Основна інформація картки товару
                        <!-- </span>
                        <span class="
                            text-[var(--dark-color)]
                            font-sm
                            text-base
                        "> -->

                            Поля відмічені "
                            <strong
                                class="text-red-500"
                            >
                                *
                            </strong> 
                            "
                            обовʼязкові для заповнення
                        </span>
                    </div>
                    <div class="options mt-4 flex flex-col justify-between w-full h-auto max-h-[80%] overflow-y-scroll gap-3 border-[1px] border-[var(--dark-color)] rounded-lg px-4 pb-6 pt-4">
                        <div class="option">
                            <h4 class="option-title">
                                Оберіть категорію товару:<strong
                                class="text-red-500"
                            >
                                *
                            </strong> 
                            </h4>
                            <select name="wholesaleType" id="wholesaleType" v-model="productCategory">
                                <option disabled selected value> -- Виберіть категорію -- </option>
                                <option
                                    v-for="(category, index) in fetchedCategories" 
                                    :key="index"
                                    :value="category.id"
                                    
                                    
                                >
                                    {{ category.itemLanguage.title }}
                                </option>
                            </select>
                        </div>
                        <div class="option">
                            <h4 class="option-title">
                                Назва товару:
                                <strong
                                    class="text-red-500"
                                >
                                    *
                                </strong> 
                            </h4>
                            <div class="text-wrapper">
                                <div class="wrapper">
                                    <span>
                                        Українська
                                    </span>
                                    <input v-model="productNameUk" type="text" placeholder="Введіть назву товару">

                                </div>
                                <div class="wrapper">
                                    <span>
                                        Англійська
                                    </span>
                                    <input v-model="productNameEn" type="text" placeholder="Введіть назву товару">
                                </div>
                                <div class="wrapper">
                                    <span>
                                        Російська
                                    </span>
                                    <input v-model="productNameRu" type="text" placeholder="Введіть назву товару">
                                </div>
                            </div>
                        
                        </div>
                        <div class="option">
                            <h4 class="option-title">
                                Опис товару:
                            </h4>
                            <div class="text-wrapper">
                                <div class="wrapper">
                                    <span >
                                        Українська
                                    </span>
                                    <textarea v-model="productDescriptionUk" name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                                </div>
                                <div class="wrapper">
                                    <span>
                                        Англійська
                                    </span>
                                    <textarea v-model="productDescriptionEn" name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                                </div>
                                <div class="wrapper">
                                    <span >
                                        Російська
                                    </span>
                                    <textarea v-model="productDescriptionRu" name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                                </div>
                            </div>
                        
                        </div>
                        <div class="option">
                            <h4 class="option-title">
                                Кількість товару на складі
                                <strong
                                    v-if="productAvailability"
                                    class="text-red-500"
                                >
                                    *
                                </strong> 
                            </h4>
                            <div class="checkbox flex items-center justify-start gap-5">
                                <span>
                                    Відображати кількість товару на складі
                                </span>
                                <input v-model="productStockState" type="checkbox" value="false" @change="productAvailability = !productAvailability">
                            </div>
                            <input v-if="productAvailability" v-model="productStockValue" type="number" placeholder="Введіть наявну кількість товару на складі">
                        </div>
                        <div class="price-option flex items-center justify-between gap-2">
                            <div class="el flex-1">
                                <h4>
                                    Роздрібна ціна
                                    <strong
                                        class="text-red-500"
                                    >
                                        *
                                    </strong> 
                                </h4>
                                <input v-model="price" type="number" placeholder="Введіть роздрібну ціну товару.">
                            </div>
                            <div class="el flex-1">
                                <h4>
                                    Оптова ціна
                                </h4>
                                <input type="number" v-model="wholesalePrice" placeholder=" Введіть оптову ціну товару.">
                            </div>
                            <div class="el flex-1">
                                <h4>
                                    Оптова ціна діє від ...
                                </h4>
                                <input type="number" v-model="wholesalePriceFrom" placeholder="Введіть кількість від якої оптова ціна діє">
                                
                            </div>
                        </div>
                        <div class="option">
                            <h4 class="option-title">
                                Введіть примітку для оптової ціни
                            </h4>
                            <div class="text-wrapper">
                                <div class="wrapper">
                                    <span>
                                        Українська
                                    </span>
                                    <input v-model="wholesaleDescriptionUk" class="" type="text" placeholder="Введіть примітку">

                                </div>
                                <div class="wrapper">
                                    <span>
                                        Англійська
                                    </span>
                                    <input v-model="wholesaleDescriptionEn" class="" type="text" placeholder="Введіть примітку">

                                </div>
                                <div class="wrapper">
                                    <span>
                                        Російська
                                    </span>
                                    <input v-model="wholesaleDescriptionRu" class="" type="text" placeholder="Введіть примітку">

                                </div>
                                <div class="wrapper">
                                    <span>
                                        Продавати товар тільки оптом
                                    </span>
                                    <div class="checkbox-wrap flex items-center justify-start">
                                        <input class="checkbox" type="checkbox" v-model="wholesaleOnly">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="option">
                            <h4 class="option-title">
                                Параметри товару
                            </h4>
                            <div class="text-wrapper items-stretch">
                                <div class="wrapper">
                                    <span>
                                        Вкажіть тип фасування товару
                                    </span>
                                    <select name="wholesaleType" id="wholesaleType" v-model="packageType">
                                        <option selected value="Bag">Мішок</option>
                                        <option value="Role">Рулон</option>
                                        <option value="Package">Упаковка</option>
                                    </select>
                                </div>
                                <div class="wrapper">
                                    <span>
                                        Відображати товар на сайті
                                    </span>
                                    <div class="checkbox-wrap flex items-center justify-start">
                                        <input v-model="productVisibility" value="false" class="checkbox" type="checkbox">

                                    </div>
                                </div>
                                <div class="wrapper">
                                    <span>
                                        Мінімальна кількість придбання товару
                                        <strong
                                            class="text-red-500"
                                        >
                                            *
                                        </strong> 
                                    </span>
                                    <div class="checkbox-wrap flex items-center justify-start">
                                        <input v-model="counterQuantity" class="checkbox" type="number" placeholder="Введіть значення цифрами">

                                    </div>
                                </div>
                                <div class="wrapper">
                                    <span>
                                        Акційний товар
                                    </span>
                                    <div class="checkbox-wrap flex items-center justify-start">
                                        <input class="checkbox" type="checkbox" @change="discountState = !discountState">

                                    </div>
                                </div>
                                <div v-if="discountState" class="wrapper">
                                    <span>
                                        Відсоток знижки
                                    </span>
                                    <div class="checkbox-wrap flex items-center justify-start">
                                        <input v-model="productDiscountPersent" class="discount-price" type="number" placeholder="%">

                                    </div>
                                </div>
                                
                                
                                
                            </div>
                        
                        </div>
                       
                        <div class="option">
                                    <h4>
                                        Додати опцію товару (макс. 10)
                                    </h4>
                                    <div class="add-option-wrap flex flex-col gap-5">
                                        <div class="add-option flex flex-col">
                                            <span class="text-[0.8rem] text-nowrap">
                                                Додати файл
                                            </span>
                                            <div class="label-wrapper flex basis-10 items-center justify-start gap-5">
                                                <label for="option-upload" class="icon-label">
                                                    <span>
                                                        Оберіть файл
                                                    </span>
                                                    <SvgIcon name="download-btn" size="micro" fill="var(--dark-color)"/>
                                                </label>
                                                <div class="preview px-2 py-1 rounded-lg border-[1px] border-[var(--dark-color)]">
                                                    <img v-if="optionFileState.optionFiles.value.length === 0" class="file-preview w-5" src="../../../public/img/bag.png" alt="preview"/>
                                                    <img v-else :src="optionFileState.optionFilesPreview.value[0]" alt="preview" class="w-5">

                                                </div>


                                                <input type="file" id="option-upload" class="icon-file" 
                                                    @change="handleFileUpload($event, 'option', optionFileState)"
                                                >

                                            </div>
                                            
                                        </div>
                                        <div class="add-option flex items-center justify-start flex-wrap gap-2">
                                            <div class="option-lang flex flex-col flex-grow">
                                                <span class="text-[0.8rem] text-nowrap"> 
                                                    Короткий опис
                                                </span>
                                                <input v-model="addOptionTextUk" type="text" placeholder="Введіть короткий опис">
                                            </div>
                                            <div class="option-lang flex flex-col flex-grow">
                                                <span class="text-[0.8rem] text-nowrap"> 
                                                    Короткий опис
                                                </span>
                                                <input v-model="addOptionTextEn" type="text" placeholder="Введіть короткий опис">
                                            </div>
                                            <div class="option-lang flex flex-col flex-grow">
                                                <span class="text-[0.8rem] text-nowrap"> 
                                                    Короткий опис
                                                </span>
                                                <input v-model="addOptionTextRu" type="text" placeholder="Введіть короткий опис">
                                            </div>
                                            
                                        </div>
                                        <div class="add-option flex flex-col gap-2">
                                            <span>
                                                Додати ціну для опційного товару
                                            </span>
                                            <div class="checkbox-wrap flex items-center justify-start">
                                                <input v-model="addOptionPrice" value="false" class="checkbox" type="checkbox">

                                            </div>
                                        </div>
                                        <div class="add-option" v-if="addOptionPrice">
                                            <input 
                                                type="number" 
                                                placeholder="Введіть ціну на опційний товар"
                                                v-model="optionPrice"
                                            >
                                        </div>
                                        <div class="add-option flex items-center justify-end">

                                            <button 
                                                class="bg-[var(--dark-color)] h-[40px] px-5 rounded-lg text-white font-bold"
                                                @click="addNewOption('text', 'value')"

                                                
                                            >
                                            <!-- @click="addTestData" -->

                                            <!-- @click="addNewOption('text', 'value')" -->


                                                Додати опцію
                                            </button>
                                        </div>
                                        

                                    </div>

                                    <div class="added-options pt-3" v-if="addOptionsRef.length > 0">
                                        <ul class="flex items-center justify-start gap-2 flex-wrap">
                                            <li 
                                                v-for="(option, index) in addOptionsRef"
                                                :key="index"
                                                class="bg-[var(--bg-color)] rounded-lg w-fit flex items-center justify-between p-2 gap-2">
                                                <img :src="option.fileImg" alt="img" width="25px">
                                                <!-- <img v-else :src="optionFileState.optionFilePreview" alt="preview"> -->
                                                <div class="separator w-[1px] h-[25px] bg-[var(--light-color)]"></div>
                                                <span >
                                                    {{ option.translations[0].optionInfo }}
                                                    <!-- {{ option.translation.forEach((elem) => {
                                                        if (elem.language === 'uk') {
                                                            return optionInfo
                                                        }
                                                    }) }} -->

                                                    <!-- {{ console.log(option.file) }} -->
                                                </span>
                                                <div class="separator w-[1px] h-[25px] bg-[var(--light-color)]"></div>
                                                <span v-if="option.optionPrice !== 0">
                                                    {{ option.optionPrice }}
                                                    UAH

                                                    <!-- {{ console.log(option.file) }} -->
                                                </span>
                                                <div v-if="option.optionPrice !== 0" class="separator w-[1px] h-[25px] bg-[var(--light-color)]"></div>

                                                <button
                                                    @click="removeOption(index)"
                                                >
                                                    <SvgIcon name="close-btn" size="micro" fill="var(--dark-color)"/>
                                                </button>
                                            </li>
                                            
                                        </ul>
                                        
                                    </div>
                            
                                </div>
                    </div>
                    <div class="button-group">
                        <button class="clearForm">
                            Очистити форму
                        </button>
                        <button 
                            class="addItem bg-[var(--dark-color)]"
                            @click="addNewProduct"
                        >
                            Додати товар
                        </button>
                    </div>

                </div>
           
           
          

        </div>

        
    </div>

</template>

<script setup>
    import {ref, defineEmits, onMounted, toRaw} from 'vue';

    import bagImg from '@/public/img/bag.png';

    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import { useModalStore } from '#imports';
    // import { useTooltipStore } from '@/stores/tooltip-store.ts';


    const modalStore = useModalStore();
    // const tooltipStore = useTooltipStore();

    const emit = defineEmits(['addNewItem', 'tooltip']);
    // const emit = defineEmits(['tooltip']);

    // helpers 
    import { useFileUpload } from '../../../helpers/uploadFiles';
    const {handleFileUpload} = useFileUpload(emit);

    const fetchedCategories = ref([]);

    const productCategory = ref('');
    const productNameUk = ref('');
    const productNameEn = ref('');
    const productNameRu = ref('');
    const productVisibility = ref(false);   // Показывать товар на сайте
    const productDescriptionUk = ref('');  
    const productDescriptionEn = ref('');
    const productDescriptionRu = ref('');
    const productStockState = ref(false);    // Показывать колличество товарв на сайте 
    const productStockValue = ref(0)        // Значение колличества товаров на сайте
    const counterQuantity = ref(1);         // Значение минимального колличества единиц
    const price = ref(0);                  // Стандартная цена
    const wholesaleOnly = ref(false);   // Значение продажи товара только оптом
    const wholesalePrice = ref(0);      // Оптовая цена
    const wholesalePriceFrom = ref(0); // Оптовая цена действует от
    const wholesaleDescriptionUk = ref('');
    const wholesaleDescriptionEn = ref('');
    const wholesaleDescriptionRu = ref('');
    const packageType = ref('Bag');            // Значение типа упаковки
    const noteForWholesale = ref('');
    const productAvailability = ref(false);
    const productDiscountPersent = ref(0); // процент скидки
    // const mediaArray = ref([]);

    // в схеме добавить дефолтное значение 1 для Значение минимального колличества единиц
    // добавить в опцию цену опционально
    //изменить значение price на Int
    // убрать тайтл из модели продукт
    // добавить переводы для опций
    // add wholesale description


    // ADD OPTION
    const addOptionsRef = ref([]);
    const discountState = ref(false);
    // const filePreview = ref(null)
    const addOptionTextUk = ref('');
    const addOptionTextEn = ref('');
    const addOptionTextRu = ref('');
    const addOptionPrice = ref(false);
    const optionPrice = ref(0);

    // PATH

    const productImgPath = ref([]);
    const optionImgPath = ref([]);
    // const fileReady = ref(false);
    // const file = ref(null);

    // option file

    const productFileState = {
        // product files
        productFilesPreview: ref([]),
        productFiles: ref([]),
        productReady: ref(false),
      
    }

    const optionFileState = {
        optionFilesPreview: ref([]),
        optionFiles: ref([]),
        optionReady: ref(false),

    }

    watch(productImgPath, () => {
        console.log(productImgPath.value, 'log from component')
    })

    

    // product image

    // const productFilesPreview = ref([]);
    // const productFiles = ref([])
    // const productReady = ref(false);

    // category files
    // const categoryFilesPreview = ref([]);
    // const categoryFiles = ref([])
    // const categoryReady = ref(false);

    // console.log(productFilesPreview.value, 'productFilesPreview')


    // watch(productCategory, () => {
    //     console.log(productCategory.value, 'value product cat')
    // })

    // const setProductCategory = (category) => {

    //     console.log('click select prod')

    //     productCategory.value = category

    //     console.log(productCategory.value, 'category value from set')

    // }

    const removeProductImg = (index) => {
        productFileState.productFiles.value.splice(index, 1);
        productFileState.productFilesPreview.value.splice(index, 1)

    }


    const closeModal = () => {
        modalStore.closeModal();
    }

    const clearForm = () => {


    }

    // const handleFileUpload = (event, type) => {

    //     console.log(event.target.files, type, 'handleFileUpload')
    //     const accessedFormat = ['svg', 'png'];
    //     const files = Array.from(event.target.files)

    //     // event.target.files.forEach((elem) => {
    //     // const accessedFile = accessedFormat.some(item => elem.name.includes(item));

    //     let typeFiles, typePreview, typeReady;
    //     switch (type) {
    //         case 'product-files':
    //             typeFiles = productFiles;
    //             typePreview = productFilesPreview;
    //             typeReady = productReady;

    //     break;
    //         case 'option-files':

    //             typeFiles = optionFiles;
    //             typePreview = optionFilesPreview;
    //             typeReady = optionReady;
    //     break;
    //         case 'category-files':
    //             typeFiles = categoryFiles;
    //             typePreview = categoryFilesPreview;
    //             typeReady = categoryReady;
    //         break;
    //     default:
    //         console.error("Неизвестный тип файла:", type);
    //         return;
    //     };

    //     typeReady.value = false;

    //     files.forEach((file) => {

    //         const fileExtension = file.name.split(".").pop().toLowerCase();
    //             if (!accessedFormat.includes(fileExtension)) {
    //                 emit("tooltip", {
    //                     status: "error",
    //                     message: "Файл повинен бути формату .svg .png",
    //                 });
    //                 return;
    //             }

    //             typeFiles.value.push(file);

    //             const reader = new FileReader();
    //             reader.onload = () => {
    //                 typePreview.value.push(reader.result);
    //             };
    //             reader.readAsDataURL(file);
    //     });

    //     typeReady.value = true;

    //     return;



    //         // if (accessedFile) {

                


                

            

    //             // categoryFile.value = elem;
    //             // fileReady.value = false;
    //             // // uploadProgress.value = 0;
    //             // // uploadStatus.value = '';

    //             // const reader = new FileReader();
    //             // reader.onload = () => {
    //             //     filePreview.value = reader.result;
    //             // };
    //             // reader.readAsDataURL(selectedFile);
    //             // fileReady.value = true;



    //         // } else {
    //         //     emit('tooltip', {
    //         //         status: 'error',
    //         //         message: 'Файл повинен бути формату .svg .png'
    //         //     })
    //         //     resetForm();
    //         //     return;

    //         // }


    //     // })

        

        


    //     // const selectedFile = event.target.files[0];
    //     // const accessedFile = accessedFormat.some(item => selectedFile.name.includes(item));

    //     // if (accessedFile) {
    //     //     file.value = selectedFile;
    //     //     fileReady.value = false;
    //     //     // uploadProgress.value = 0;
    //     //     // uploadStatus.value = '';

    //     //     const reader = new FileReader();
    //     //     reader.onload = () => {
    //     //     filePreview.value = reader.result;
    //     //     };
    //     //     reader.readAsDataURL(selectedFile);
    //     //     fileReady.value = true;
            
    //     // } else {
    //     //     // console.error('Файл повинен бути формату .svg .png');
    //     //     emit('tooltip', {
    //     //         status: 'error',
    //     //         message: 'Файл повинен бути формату .svg .png'
    //     //     })
    //     //     resetForm();
    //     //     return;
    //     // }
        
    // }

    // const addTestData = ( ) => {

    //     const data = [{
    //         file: bagImg,
    //         textUk: 'ololo',
    //         textEn: 'ololo',
    //         textRu: 'ololo',

    //     },
    //     {
    //         file: bagImg,
    //         textUk: 'ololo',
    //         textEn: 'ololo',
    //         textRu: 'ololo',

    //     },
    //     {
    //         file: bagImg,
    //         textUk: 'ololo',
    //         textEn: 'ololo',
    //         textRu: 'ololo',

    //     },
    //     {
    //         file: bagImg,
    //         textUk: 'ololo',
    //         textEn: 'ololo',
    //         textRu: 'ololo',

    //     },
    //     {
    //         file: bagImg,
    //         textUk: 'ololo',
    //         textEn: 'ololo',
    //         textRu: 'ololo',

    //     },

    // ]
    //     data.forEach(item => {
    //         addOptionsRef.value.push(item)
    //     })
    // }

    const addNewOption = () => {

        // if ()
        // console.log(addOptionsRef.value.length)
        if (addOptionsRef.value.length > 9) {
            emit('tooltip', {
                status: 'error',
                message: 'Максимальна кількість опцій 10'
            })
            return
        }

        console.log(optionFileState.optionFiles.value, 'optionFiles')

        if (optionFileState.optionFilesPreview.value.length > 0) {

            if (addOptionTextUk.value && addOptionTextEn.value && addOptionTextRu.value) {
                addOptionsRef.value.push({
                    file: toRaw(optionFileState.optionFiles.value),
                    fileImg: optionFileState.optionFilesPreview.value,
                    optionPrice: optionPrice.value,
                    translations: [
                        {
                            language: 'uk',
                            optionInfo: addOptionTextUk.value,

                        },
                        {
                            language: 'en',
                            optionInfo: addOptionTextEn.value,
                        },
                        {
                            language: 'ru',
                            optionInfo: addOptionTextRu.value,
                        },
                    ],
                    // textUk: addOptionTextUk.value,
                    // textEn: addOptionTextEn.value,
                    // textRu: addOptionTextRu.value,

                })
            }
            // console.log('option true')
             
            optionFileState.optionFiles.value = [];
            optionFileState.optionFilesPreview.value = [];
            // file.value = null;
            addOptionTextUk.value = '';
            addOptionTextEn.value = '';
            addOptionTextRu.value = '';
            addOptionPrice.value = false;
            optionPrice.value = 0;



        }
        
        // console.log(addOptionsRef.value, 'optionsref value')

    }

    const removeOption = (index) => {
        addOptionsRef.value.splice(index, 1)

    }

    const addNewProduct =  async () => {

        if (!productCategory.value) {
            emit('tooltip', {
                status: 'error',
                message: 'Оберіть категорію товару'
            })
            return;
        }
        if (!productNameUk.value || !productNameRu.value || !productNameEn.value) {
            emit('tooltip', {
                status: 'error',
                message: 'Введіть назву товару'
            })
            return;
        }
        if (!price.value) {
            emit('tooltip', {
                status: 'error',
                message: 'Введіть роздрібну ціну товару'
            })
            return;
        }
        // console.log(addOptionsRef.value, 'add new product')

        // const optionRaw = toRaw(addOptionsRef.value)
        // console.log(optionRaw)

        //ADD OPTIONS

        const categoryData = fetchedCategories.value.filter((item) => item.id === productCategory.value);
        const categoryName = categoryData[0].group.trim().replace(' ', '-');

        const translitProductName = transliterate(productNameUk.value);

        const productName = translitProductName.replaceAll(' ', '-').toLowerCase().trim();

        // const fileData = new FormData();

        // fileData.append('files-data', addOptionsRef.value)


        // console.log('getData', categoryName)

        try {



            // UPLOAD PRODUCT FILE

        

            // const uploadProduct = async () => {
            const uploadProductFiles = async () => {

                // const productFiles = toRaw(productFileState.productFiles.value);
                const formData = new FormData();
                // console.log(toRaw(productFileState.productFiles.value))

                toRaw(productFileState.productFiles.value).map((item) => {
                    console.log(item, 'item')
                    if (item instanceof File) {
                        formData.append(`${categoryName}/${productName}`, item);

                    } else {
                        console.error('Ошибка: elem.file не является File-объектом', item);
                    }
                })
                // console.log(formData, 'formdata')
                const productFileUpload = await $fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                })

                // console.log(productFileUpload)

                return (
                    productFileUpload.map((elem) => {
                        console.log(elem)
                        productImgPath.value.push(elem.filePath)
                    })
                    // console.log(productImgPath.value)
                )

             

                // console.log(productFiles)
                console.log(productImgPath.value, 'product file upload')

            }

            // UPLOAD PRODUCT OPTIONS
            const uploadOptions = async () => {
                const formData = new FormData();


                toRaw(addOptionsRef.value).map((elem) => {
                    console.log(elem.file);
                    
                    const rawFile = elem.file[0];

                    if (rawFile instanceof File) {
                        formData.append(`${categoryName}/${productName}/optionsImg`, rawFile);

                    } else {
                    console.error('Ошибка: elem.file не является File-объектом', rawFile);
                    }
                });

                const optionFileUpload = await $fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                })

                console.log(optionFileUpload, 'option file upload')
            }

            const uploadData = async () => {
                
                console.log('enter upload');
                
                const formData = new FormData();

                const jsonData = {
                    category: productCategory.value,
                    // productName: {
                    //     uk: productNameUk.value,
                    //     en: productNameEn.value,
                    //     ru: productNameRu.value,
                    // },
                    // productDescription: {
                    //     uk: productDescriptionUk.value,
                    //     en: productDescriptionEn.value,
                    //     ru: productDescriptionRu.value,
                    // },
                    
                    visibility: productVisibility.value,
                    img: toRaw(productImgPath.value),
                    price: price.value,
                    
                    stockState: productStockState.value,
                    stockValue: productStockValue.value,
                    discountPersent: productDiscountPersent.value,
                    wholesalePrice: wholesalePrice.value,
                    // wholesaleInfo: 
                    wholesaleFrom: wholesalePriceFrom.value,
                    counterQuantity: counterQuantity.value,
                    packageType: packageType.value,
                    wholesaleOnly: wholesaleOnly.value,
                    translations: [
                        {
                            language: 'uk',
                            title: productNameUk.value,
                            description: productDescriptionUk.value,
                            wholesaleDescription: wholesaleDescriptionUk.value,
                        },
                        {
                            language: 'en',
                            title: productNameEn.value,
                            description: productDescriptionEn.value,
                            wholesaleDescription: wholesaleDescriptionEn.value,
                        },
                        {
                            language: 'ru',
                            title: productNameRu.value,
                            description: productDescriptionRu.value,
                            wholesaleDescription: wholesaleDescriptionRu.value,
                        },
                    ],
                    options: toRaw(addOptionsRef.value)
                    // options:





                }

                formData.append('data', JSON.stringify(jsonData))

                const res = await $fetch('/api/products', {
                    method: 'POST',
                    body: formData,
                })


                console.log(res, 'jsonData')
                return {
                    data: res
                }

            }


            const resultUploads = await Promise.all(
                [
                    uploadProductFiles(),
                    // uploadOptions(),
                    // uploadData()
                ]
            )

            console.log(resultUploads)

            return {
                resultUploads
            }

               


            // }

            // const resultUpload = await Promise.all(uploadProduct)

            // console.log(resultUpload);

            // return {
            //     result: resultUpload,
            // }
            
            


            //UPLOAD PRODUCT INFORMATION

        } catch (error) {
            return {
                message: error
            }
        }


        // try {
        // console.log(fileData)
        

        // console.log(addOptionsRef.value);

        


       

// optionFile.append('groupName', categoryName);

        // formData.append('groupName', categoryName)
        // console.log(formData);


        

        







        //     const resFileData = await $fetch('/api/upload', {
        //         method: 'POST',
        //         body: fileData,

        //     })

        //     console.log(resFileData)

        // } catch (error) {
        //     console.log(error.message)

        // }


        

        // uploadFiles(`${categoryName}/options`, addOptionsRef.value);


        try{


            // if (!productCategory.value) {
            //     emit('tooltip', {
            //         status: 'error',
            //         message: 'Оберіть категорію товару'
            //     })
            //     return
            // }
            // if (!productNameUk.value || !productNameEn.value || !productNameRu.value ) {
            //     emit('tooltip', {
            //         status: 'error',
            //         message: 'Введіть назву товару'
            //     })
            //     return
            // }


            // const formData = new FormData();
            // formData.append('files', mediaArray);
            // formData.append('productNameUk', productNameUk.value.toLowerCase());
            // formData.append('productNameEn', productNameEn.value.toLowerCase());
            // formData.append('productNameRu', productNameRu.value.toLowerCase());
            // formData.append('productDescriptionUk', productDescriptionUk.value.toLowerCase());
            // formData.append('productDescriptionEn', productDescriptionEn.value.toLowerCase());
            // formData.append('productDescriptionRu', productDescriptionRu.value.toLowerCase());
            // formData.append('quantityProduct', quantityProduct.value.toLowerCase());
            // formData.append('retailPrice', retailPrice.value);
            // formData.append('wholesalePrice', wholesalePrice.value);
            // formData.append('wholesalePriceFrom', wholesalePriceFrom);
            // formData.append('typePackage', typePackage.value);
            // formData.append('noteForWholesale', noteForWholesale.value);
            // formData.append('productAvailability', productAvailability);

            // OPTION

            // console.log(addOptionsRef.value)

            // formData.append('addOptionsRef', addOptionsRef.value)







            // const response = await $fetch('/api/products', {
            //     method: 'POST',
            //     body: formData,
            // })
            // console.log(response, 'log responce')


        } catch (error) {


        }


        // emit('tooltip', {
        //     status: 'errbsdor',
        //     message: 'Товар успішно додано'
        // });
    // try {
    //     console.log('add new item', tooltipStore);
        
    //     tooltipStore.showTooltip({
    //         tooltipStatus: 'success',
    //         tooltipMessage: 'Товар успішно додано',
    //         showTooltip: true
    //     });
    // } catch (error) {
    //     console.error('Error adding new item:', error);()
    // }
    };

    // const addProduct = async () => {
 

    // }


    onMounted(async() => {
            try{
                const getData = await $fetch('/api/category')
                console.log(getData.data);
                
                if (getData.data.length > 0) {
                    fetchedCategories.value = getData.data.map((item) => 
                    
                    ({
                        ...item,
                        itemLanguage: item.translations.find(translation => translation.language === 'uk')

                    }))
                }

            } catch (error) {
                console.log(error.message, 'error from getData')
            }

    })
    console.log(fetchedCategories.value, 'fetchedCategories');



</script>


<style scoped lang="scss">


    @use './/styles/mixins.scss' as mixins;
   
    span{
        color: var(--dark-color);
    }
   
    .add-image{
        // width: 50%;
        h2{
            @include mixins.cardText;
            margin-bottom: 15px;
        }

        span{
            @include mixins.descriptionText(400, var(--dark-color));
            // white-space: nowrap;
        }
        .upload-btn{
            margin: 50px 0 20px;
            @include mixins.defaultShadow;
            @include mixins.descriptionText(500, var(--dark-color));
            padding: 10px 20px;
            cursor: pointer;
        }

    }

    h4{
        @include mixins.cardText;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        margin-bottom: 15px;
    }

    .picture{
        width: clamp(50px, 10vw, 100px);
        height: clamp(70px, 12vw, 200px);
        max-height: clamp(70px, 15vh, 200px);
        border: 1px solid var(--dark-color);
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) rotate(-10deg);

    }
    .second{
        transform: translateX(-30%) translateY(-5%) rotate(-5deg);

    }
    .third{
        transform: translateX(-10%) translateY(-10%) rotate(0deg);

    }
    input{
            border: 1px solid var(--dark-color);
            border-radius: 10px;
            padding: 5px 10px;
            width: 100%;
            color: var(--dark-color);
        }
        textarea{
            border: 1px solid var(--dark-color);
            border-radius: 10px;
            padding: 5px 10px;
            width: 100%;
            color: var(--dark-color);
            resize: none;
        }

    .option{
        display: flex;
        flex-direction: column;
        z-index: 1;
        span{
            padding-bottom: 5px;
        }
       
    }

    select{
        width: fit-content;
        height: auto;
        border: 1px solid var(--dark-color);
        border-radius: 10px;
        padding: 5px 10px;
        // margin: 10px 0;
        color: var(--dark-color);
        margin-top: 0;
    }
    select:focus-visible{
        border: 1px solid var(--active-btn);
    }
  

    .text-wrapper{
        display: flex;
        justify-content: flex-start;
        // align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .wrapper{
            // flex: 1;
            min-width: 250px;
            flex-grow: 1;
            flex-basis: 0;
            display: flex;
            flex-direction: column;
            // align-items: ;
            justify-content: space-between;

        }
    }

    .checkbox{
        width: auto;
        height: auto;
    }
    .add-option{
        display: flex;
        // flex-direction: column;
        flex: 1;

    }
    .label-wrapper{
        @include mixins.labelFile
    }
    .button-group{
        padding-top: 30px;
        padding-bottom: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        button{
            @include mixins.defaultShadow;
            @include mixins.descriptionText(500, var(--dark-color));
            padding: 10px 20px;
        }
        .addItem{
            color: var(--bg-color);
        }
    }



</style>