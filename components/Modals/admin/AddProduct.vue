<template>

    <div class="add-product-wrapper grid grid-cols-[1fr_2fr] gap-5 h-[100vh] w-full py-10">
        <div class="add-image flex relative flex-col gap-5">
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
                    <button>
                        Вибрати
                    </button>
                </div>
            </div>
            
            <div class="prewiev-block flex justify-center items-center">
                <SvgIcon name="default-picture" size="large" fill="var(--dark-color)"/>
            </div>
            

        </div>
        <div class="add-info">
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
                </span>
            </div>
            <div class="options mt-4 flex flex-col justify-between w-full h-4/5 gap-3 border-[1px] border-[var(--dark-color)] rounded-lg px-4 pb-6 pt-4 overflow-scroll">
                <div class="option">
                    <h4 class="option-title">
                        Оберіть категорію товару:
                    </h4>
                    <select name="wholesaleType" id="wholesaleType">
                        <option disabled selected value> -- Виберіть категорію -- </option>
                        <option
                            v-for="(category, index) in fetchedCategories" 
                            :key="index"
                            :value="category.group">{{ category.itemLanguage.title }}</option>
                    </select>
                </div>
                <div class="option">
                    <h4 class="option-title">
                        Назва товару:
                    </h4>
                    <div class="text-wrapper">
                        <div class="wrapper">
                            <span>
                                Українська
                            </span>
                            <input type="text" placeholder="Введіть назву товару">

                        </div>
                        <div class="wrapper">
                            <span>
                                Англійська
                            </span>
                            <input type="text" placeholder="Введіть назву товару">
                        </div>
                        <div class="wrapper">
                            <span>
                                Російська
                            </span>
                            <input type="text" placeholder="Введіть назву товару">
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
                            <textarea name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                        </div>
                        <div class="wrapper">
                            <span>
                                Англійська
                            </span>
                            <textarea name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                        </div>
                        <div class="wrapper">
                            <span >
                                Російська
                            </span>
                            <textarea name="descriptionText" id="descriptionText" placeholder="Введіть опис товару максимум 500 символів"></textarea>

                        </div>
                    </div>
                  
                </div>
                <div class="option">
                    <h4 class="option-title">
                        Кількість товару на складі
                    </h4>
                    <input type="text" placeholder="Введіть наявну кількість товару на складі">
                </div>
                <div class="price-option flex items-center justify-between gap-2">
                    <div class="el flex-1">
                        <h4>
                            Роздрібна ціна
                        </h4>
                        <input type="text" placeholder="Введіть роздрібну ціну товару.">
                    </div>
                    <div class="el flex-1">
                        <h4>
                            Оптова ціна
                        </h4>
                        <input type="text" placeholder=" Введіть оптову ціну товару.">
                    </div>
                    <div class="el flex-1">
                        <h4>
                            Оптова ціна діє від ...
                        </h4>
                        <input type="text" placeholder="Введіть кількість від якої оптова ціна діє">
                        
                    </div>
                </div>
                <div class="option">
                    <h4 class="option-title">
                        Опції товару
                    </h4>
                    <div class="text-wrapper">
                        <div class="wrapper">
                            <span>
                                Вкажіть тип фасування товару
                            </span>
                            <select name="wholesaleType" id="wholesaleType">
                                <option value="Bag">Мішок</option>
                                <option value="Role">Рулон</option>
                                <option value="Package">Упаковка</option>
                            </select>
                        </div>
                        <div class="wrapper">
                            <span>
                                Відображати товар на сайті
                            </span>
                            <input type="checkbox">
                        </div>
                        <div class="wrapper">
                            <span>
                                Опції товару
                            </span>
                            <select name="wholesaleType" id="wholesaleType">
                                <option value="Bag">Мішок</option>
                                <option value="Role">Рулон</option>
                                <option value="Package">Упаковка</option>
                            </select>
                        </div>
                        
                        
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
                            <input class="" type="text" placeholder="Введіть примітку">

                        </div>
                        <div class="wrapper">
                            <span>
                                Англійська
                            </span>
                            <input class="" type="text" placeholder="Введіть примітку">

                        </div>
                        <div class="wrapper">
                            <span>
                                Російська
                            </span>
                            <input class="" type="text" placeholder="Введіть примітку">

                        </div>
                    </div>
                </div>
                <div class="button-group">
                    <button class="clearForm">
                        Очистити форму
                    </button>
                    <button 
                        class="addItem bg-[var(--dark-color)]"
                        @click="addNewItem"
                    >
                        Додати товар
                    </button>
                </div>
            </div>
          

        </div>
    </div>

</template>

<script setup>
    import {ref, defineEmits, onMounted} from 'vue';

    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import { useModalStore } from '#imports';
    // import { useTooltipStore } from '@/stores/tooltip-store.ts';


    const modalStore = useModalStore();
    // const tooltipStore = useTooltipStore();

    const emit = defineEmits(['addNewItem']);

    const fetchedCategories = ref([]);

    const cathegory = ref('');
    const productName = ref('');
    const productDescription = ref('');
    const quantityProduct = ref('');
    const retailPrice = ref('');
    const wholesalePrice = ref('');
    const wholesalePriceFrom = ref('');
    const wholesaleType = ref('');
    const noteForWholesale = ref('');


    const closeModal = () => {
        modalStore.closeModal();
    }

    const clearForm = () => {


    }

    const addNewItem = () => {
        emit('tooltip', {
            status: 'errbsdor',
            message: 'Товар успішно додано'
        });
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


    onMounted(async() => {
        // ( async () => {
            try{
                const getData = await $fetch('/api/category')
                console.log(getData.data);
                
                if (getData.data.length > 0) {
                    fetchedCategories.value = getData.data.map((item) => 
                    // {
                    //     console.log(item, 'item')
                    // })
                    
                    ({
                        ...item,
                        itemLanguage: item.translations.find(translation => translation.language === 'uk')

                    }))
                }
               
                // console.log(getData.data, 'getData');
    // console.log(fetchedCategories.value, 'fetchedCategories');

            } catch (error) {
                console.log(error.message, 'error from getData')
            }
        // })()

    })
    console.log(fetchedCategories.value, 'fetchedCategories');



</script>


<style scoped lang="scss">


    @use './/styles/mixins.scss' as mixins;
   

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
        button{
            margin: 50px 0 20px;
            @include mixins.defaultShadow;
            @include mixins.descriptionText(500, var(--dark-color));
            padding: 10px 20px;
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
    .button-group{
        padding-top: 10px;
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

    .text-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        .wrapper{
            flex: 1;
            display: flex;
            flex-direction: column;
            // align-items: ;
            justify-content: space-between;

        }
    }


</style>