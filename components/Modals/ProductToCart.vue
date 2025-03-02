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
            <div class="content text-[var(--dark-color)] pb-5 flex flex-col gap-5">
                    <div>
                        <h2>
                            Товар:
                        </h2>
                        <div>
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
                        <h2>
                            Характеристики товару
                        </h2>

                    </div>
                    <div>
                        <h2>
                            Ціни на товар
                        </h2>

                    </div>
                    <div>
                        <h2 class="">
                            Оберіть кількість товару
                        </h2>
                        <div class="bg-white text-gray-500 p rounded-lg border-[1px] border-[var(--secondary-color)]  flex-1 flex justify-between items-center overflow-hidden min-w-16 w-fit">                            
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
                            >
                            <!-- <SvgIcon name="cart-icon" fill="white" size="micro"/> -->
                            <!-- <div class="w-[1px] h-full bg-white"/> -->
                            <!-- @click="(e) => addToCart(e)" -->

                            Скинути
                        </button>
                        <button 
                            class="bg-blue-500 text-white text-[clamp(8px, 0.8vw, 12px)] py-1 px-2 rounded-lg hover:bg-blue-700 flex-1 flex justify-center items-center gap-1 whitespace-nowrap"
                            >
                            <SvgIcon name="cart-icon" fill="white" size="micro"/>
                            <div class="w-[1px] h-full bg-white"/>
                            <!-- @click="(e) => addToCart(e, props.product)" -->

                            В кошик
                        </button>
                    </div>

                           
                
            </div>

        </div>


    </section>

</template>



<script setup>
    import { ref, computed } from 'vue';
    import SvgIcon from '@/components/shared/SvgIcon.vue';
    // import { countTotalPrice } from '@/helpers/countTotalPrice';
    import { useModalStore } from '#imports'

    const modalStore = useModalStore();
    const modalProps = computed(() => modalStore.modalProps);

    const counter = ref(0);
    const totalPrice = ref(0);

    console.log(modalProps.value, 'modal props');


    const counterControl = (operator, price, wholesalePrice, discountPercent, counterFrom) => {
        // console.log(counter, 'counter', operator, 'operator', price, 'price', wholesalePrice, 'wholesalePrice', discountPercent, 'discountPercent');

        if (operator === '+') {
            // counter.value = counter.value + counter
            counter.value = counter.value + counterFrom;
            // console.log(counter.value + counterFrom);
            
        } else if (operator === '-' && counter.value > 0) {
            counter.value = counter.value - counterFrom;
            // console.log('ne ok');
            
            // counter.value = counter.value - counter
        }

        totalPrice.value = computed(() => {
            return countTotalPrice({
                price: price,
                totalProduct: counter.value,
            })
        })

    }

    // console.log(modalProps.value, 'modal props');




</script>



<style lang="scss">
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
        }

      
    }

</style>