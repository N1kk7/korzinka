<template>
    <section class="modal product-to-cart">
        <div class="modal-wrapper">
            <div class="title flex justify-between items-end w-full bg-[var(--primary-color)] relative">
                <h2
                    class="text-white"
                >
                    Додати товар у кошик
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
            <div class="content text-[var(--dark-color)] pb-5 flex flex-col gap-5 p-5 pt-0 relative">
                    <div class="">
                        <h2 class="text-lg">
                            Товар:
                        </h2>
                        <div class="flex items-center justify-between gap-5">
                            <img 
                                class="w-10 h-10 object-cover"
                                :src="modalProps.img[0].path" 
                                alt="product"
                            >
                             <span>
                                {{ modalProps.translations.find((t) => t.language === $i18n.locale).title }}
                                <!-- {{ modalProps.value.translations.find((t) => t.lang === $i18n.locale).title }} -->
                             </span>
                        </div>
                    </div>
                    <div>
                        <h2 class="mb-2 z-10 relative">
                            Характеристики товару
                        </h2>
                        <div class="flex flex-wrap items-stretch justify-start gap-5">
                            <div class="option">
                                <h5>
                                    Розмір товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.productSize }}
                                </span>
                            </div>
                            <div class="option">
                                <h5>
                                    Щильність товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.productDensity }}
                                </span>
                                
                            </div>
                            <div class="option"> 
                                <h5>
                                    Вага товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.productWeight }}

                                </span>
                                
                            </div>
                            <div class="option">
                                <h5>
                                    Колір товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.translations.find((t) => t.language === $i18n.locale).productColor }}
                                </span>
                                
                            </div>

                        </div>

                    </div>
                    <div>
                        <h2 class="mb-2 z-10 relative">
                            Ціни на товар
                        </h2>
                        <div class="flex flex-wrap items-stretch justify-start gap-5">
                            <div class="option border-sky-500 border">
                                <h5>
                                    Ціна товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.price }} грн.
                                </span>
                            </div>
                            <div class="option border-lime-500 border">
                                <h5>
                                    Оптова ціна
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.wholesalePrice }} грн.
                                </span>
                                
                            </div>
                            <div class="option" v-if="modalProps.wholesaleFrom"> 
                                <h5>
                                    Опт. від:
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.productWeight }}

                                </span>
                                
                            </div>
                            <div class="option border-red-500 border">
                                <h5>
                                    Колір товару
                                </h5>
                                <hr>
                                <span>
                                    {{ modalProps.translations.find((t) => t.language === $i18n.locale).productColor }}
                                </span>
                                
                            </div>

                        </div>

                    </div>
                    <div>
                        <h2 class="mb-2 z-10 relative">
                            Оберіть кількість товару: 
                        </h2>
                        <div class="flex items-center justify-start gap-5">
                            <div class=" counter-buttons bg-white text-gray-500 p rounded-lg border-[1px] border-[var(--secondary-color)] flex justify-between items-center overflow-hidden min-w-16 w-fit">                            
                            <button 
                                class="hover:bg-red-400 hover:text-white w-full h-full"
                                @click="counterControl('-', modalProps.price, modalProps.wholesalePrice, modalProps.discountPercent, modalProps.counterQuantity)"
                            >
                            <!-- @click="(e) => counterControl(e, '-', props.product.counterQuantity)" -->

                                -
                            </button>
                            <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                            <span class="w-full h-full flex items-center justify-center">
                                {{ counter }}
                            </span>
                            <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                            <button 
                                class="hover:bg-green-500 hover:text-white w-full h-full"
                                @click="counterControl('+', modalProps.price, modalProps.wholesalePrice, modalProps.discountPercent, modalProps.counterQuantity)"

                            >
                            <!-- @click="(e) => counterControl(e, '+', props.product.counterQuantity)" -->

                                +
                            </button>
                        
                        </div>
                        <span>
                            {{ counter }} {{ modalProps.translations.find((t) => t.language === $i18n.locale).groupPackage }}
                        </span>

                        </div>
                        

                    </div>
                    <hr>
                    <div>
                        <h2>
                            Загальна сума: {{ totalPrice }} грн.
                        </h2>
                    </div>
                    <div class="flex gap-2 items-center justify-center">
                        <button 
                            class="bg-blue-500 text-white text-[clamp(8px, 0.8vw, 12px)] py-1 px-2 rounded-lg hover:bg-blue-700 flex-1 flex justify-center items-center gap-1 whitespace-nowrap"
                            @click="resetForm"
                            >
                            <!-- <SvgIcon name="cart-icon" fill="white" size="micro"/> -->
                            <!-- <div class="w-[1px] h-full bg-white"/> -->
                            <!-- @click="(e) => addToCart(e)" -->

                            Скинути
                        </button>
                        <button 
                            class="bg-blue-500 text-white text-[clamp(8px, 0.8vw, 12px)] py-1 px-2 rounded-lg hover:bg-blue-700 flex-1 flex justify-center items-center gap-1 whitespace-nowrap"
                            @click="addToCart"
                        >
                            <SvgIcon name="cart-icon" fill="white" size="micro"/>
                            <div class="w-[1px] h-full bg-white"/>
                            <!-- @click="(e) => addToCart(e, props.product)" -->

                            В кошик
                        </button>
                    </div>

                    <div 
                        class="overlay absolute w-full h-full top-0 left-0 flex flex-col gap-2 items-center justify-center z-10"
                        v-if="overlayStatus"
                    >
                        <img class="w-32 h-25 " src="/public/img/only-dog.png" alt="logo">
                        <h2>
                            Товар доданий у кошик!
                        </h2>
                        <span>
                            Дякуємо!
                        </span>
                    </div>

                           
                
            </div>

        </div>


    </section>

</template>



<script setup>
    import { ref, computed, toRaw } from 'vue';
    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import { useModalStore, useCartStore } from '#imports'

    const modalStore = useModalStore();
    const cartStore = useCartStore();
    const modalProps = computed(() => modalStore.modalProps);
    const overlayStatus = ref(false);



    const counter = ref(0);
    const totalPrice = ref(0);


    const resetForm = () => {
        counter.value = 0;
        totalPrice.value = 0
    }


    const counterControl = (operator, price, wholesalePrice, discountPercent, counterFrom) => {

        if (operator === '+') {
            counter.value = counter.value + counterFrom;
            
        } else if (operator === '-' && counter.value > 0) {
            counter.value = counter.value - counterFrom;
            
        }

        // totalPrice.value = computed(() => {
        //     return countTotalPrice({
        //         price: price,
        //         totalProduct: counter.value,
        //     })
        // })
        totalPrice.value = countTotalPrice({
            price: price,
            totalProduct: counter.value,
        });

    }

    const addToCart = () => {

        if (!counter.value  && !totalPrice.value) return;

        console.log(modalProps, 'modalProps')

        cartStore.addProduct({
            ...modalProps.value,
            quantityProducts: counter.value,
            totalPrice: toRaw(totalPrice.value)
        })

        console.log(totalPrice.value, 'totalPrice')

        overlayStatus.value = true;

        setTimeout(() => {
            modalStore.closeModal();
            resetForm();
        }, 2000);
    }




</script>



<style lang="scss" scoped>

@use ".//styles/mixins.scss" as mixins;

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
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 350px;
            justify-content: center;
            overflow: hidden;
            gap: 1em;
            .title{
                padding: 1.5em 1em;
                z-index: 10;
            }
            h2{
                font-size: 1.5em;
            }
            @media screen and (max-width: 1024px) {
                &{
                    width: 100vw;
                    height: 100vh;
                    border-radius: 0;
                    justify-content: flex-start;
                    overflow-y: scroll;

                }
            }
        }
        @media screen and (max-width: 1024px) {
            &{
                padding: 0;
            }
        }

      
    }

    .option{
        @include mixins.cardShadow;
        flex: 1 1 120px;
        height: auto;
        span{
            white-space: nowrap;

        }
        @media screen and (max-width: 1024px) {
            &{
                flex: 1 1 100px;
            }
        }
    }
    h5{
        white-space: nowrap;
    }
    .counter-buttons{
        flex: 0 1 300px;
    }
    .overlay{
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
    }

</style>