<template>

    <NuxtLink 
        class="overflow-hidden bg-[#f0feff] flex items-center justify-center w-auto h-full z-20 rounded-xl shadow-[0_0_1rem_rgba(0,0,0,0.2)] relative"
        :to="`/products/${props.group.replaceAll(' ', '-').toLowerCase()}/${props.product.id}`"
        @click="selectProduct(props.product)"
        >
        <!-- flex  rounded-xl w-auto justify-center items-center relative   -->
     
        
        <!-- <div class="absolute left-0 top-0 h-16 w-16">
            <div
            class="absolute transform -rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-65px] top-[32px] w-[170px]">
                Знижка 20%
            </div>
        </div> -->
        
        <!-- <div class="grid grid-cols-5"> -->
        <div class="grid-card grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-1  h-full">
            <!--  -->

            <div class="card-img col-span-2 p-1 bg-[var(--primary-color)] flex items-center justify-center">
                <img :src="props.product.img[0].path" alt="demo" class="w-[90%]"/>
            </div>
            <div class="text-content col-span-3 p-3 z-20 relative flex flex-col justify-between gap-2">
                <div class="text-block">
                    <h3 class="font-bold text-[var(--dark-color)]">
                        {{ props.product.translations.find(translation => translation.language === 'uk').title }}
                    </h3>
                    <!-- <span class="mb-3 text-[var(--primary-color)]">
                        {{ props.product.translations.find(translation => translation.language === 'uk').productDescription }}
                    </span> -->
                </div>
                <div class="content-block">
                    <div
                    class="card flex items-center text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2 border-[1px] border-[var(--secondary-color)] max-sm:p-0 max-sm:py-2 max-sm:gap-1 justify-around gap-[5px]">
                    <div class="text-center">
                        <p class="text-sm">Ціна</p>
                        <p class="font-bold text-gray-800">
                            {{ props.product.price }} грн.
                        </p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm">Опт. ціна</p>
                        <p class="font-bold text-gray-800">
                            {{ props.product.wholesalePrice }} грн.
                        </p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm">Діє від</p>
                        <p class="font-bold text-gray-800 flex gap-1">
                            <!-- <img src="https://svgshare.com/i/16Fg.svg" /> -->
                            {{ props.product.counterQuantity }} шт
                        </p>
                    </div>
                </div>
                <div class="flex mt-3 gap-2 flex-wrap justify-center items-stretch">
                    <!-- <div class="bg-white text-gray-500 p rounded-lg border-[1px] border-[var(--secondary-color)]  flex-1 flex justify-between items-center overflow-hidden min-w-16 w-fit">
                        <button 
                            class="hover:bg-red-400 hover:text-white w-full h-full"
                            @click="(e) => counterControl(e, '-', props.product.counterQuantity)"
                        >
                            -
                        </button>
                        <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                        <span class="w-full h-full flex items-center justify-center">
                            {{ counter }}
                        </span>
                        <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                        <button 
                            class="hover:bg-green-500 hover:text-white w-full h-full"

                            @click="(e) => counterControl(e, '+', props.product.counterQuantity)"
                        >
                            +
                        </button>
                    </div> -->
                    <button 
                        class="bg-blue-500 text-white text-[clamp(8px, 0.8vw, 12px)] py-1 px-2 rounded-lg hover:bg-blue-700 flex-1 flex justify-center items-center gap-1 whitespace-nowrap"
                        @click="(e) => addToCart(e)">
                        <SvgIcon name="cart-icon" fill="white" size="micro"/>
                        <div class="w-[1px] h-full bg-white"/>
                        В кошик
                    </button>
                </div>
                </div>
                



                
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>

    import { useProductStore } from '#imports';

    import SvgIcon from './shared/SvgIcon.vue';

    const productStore = useProductStore();

    let counter = ref(0);

    const props = defineProps({
        product: Object,
        group: String,
    })

    // console.log(props.product.img[0].path);

    const selectProduct = (product) => {
        productStore.setSelectedProducts(product);
        console.log(productStore.selectedProducts)
    }
    

    const counterControl = (event, operator, quantity) => {
        event.preventDefault();
        if (operator === '+') {
            counter.value = counter.value + quantity
        } else if (operator === '-' && counter.value > 0) {
            counter.value = counter.value - quantity
        }

    }

    const addToCart = (event) => {
        event.preventDefault();

    }


</script>

<style scoped lang="scss">


.card-img{
    img{
        @media screen and (max-width: 1024px) {
            max-width: 70%;
            transform: translateY(10%)
        }
    }
   
}

.text-block{
    h3{
       font-size: clamp(16px, 1.5vw, 20px)
    }
  
}
.grid-card{
    @media screen and (max-width: 1024px) {

        display: flex;
        flex-direction: column;
        min-height: 350px;
        .card-img{
            // position: absolute;
            flex: 1;
            position: absolute;
            height: 80%;
            width: 100%;
        }
        .text-content{
            flex: 1;
            h3{
                color: white;
            }
            p{
                font-size: clamp(12px, 1.5vw, 18px)

                }
            // padding-top: 150px;
        }
    }
}

// .card {
//     box-shadow:  20px 20px 60px #bebebe,
//     -20px -20px 60px #ffffff;
// }

// .cards-content{
//     display: flex;
// }


</style>