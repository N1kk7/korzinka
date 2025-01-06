<template>

    <NuxtLink 
        class="flex bg-[#f0feff] rounded-xl w-auto justify-center items-center relative overflow-hidden "
        :to="`/products/${props.group}/:${props.product.id}`"

        >
    
        
        <div class="w-[100%] rounded-xl z-10  overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
            <div class="absolute left-0 top-0 h-16 w-16">
                <div
                class="absolute transform -rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-65px] top-[32px] w-[170px]">
                    Знижка 20%
                </div>
            </div>
            
            <div class="card z-20">
                <!-- <div class="grid grid-cols-5"> -->
                <div class="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 max-sm:grid-cols-5">

                    <div class="col-span-2 p-3 bg-[var(--primary-color)] flex items-center justify-center">
                        <img src="/public/img/bag.png" alt="demo" />
                    </div>
                    <div class="col-span-3 p-3 z-20 relative flex flex-col justify-between gap-2">
                        <div class="text-block">
                            <h3 class="font-bold text-[var(--dark-color)]">Назва товару</h3>
                            <span class="mb-3 text-[var(--primary-color)]">Опис товару</span>
                        </div>
                        <div class="content-block">
                            <div
                            class="card flex items-center text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2 border-[1px] border-[var(--secondary-color)] flex-wrap justify-around gap-[5px]">
                            <div class="text-center">
                                <p class="text-sm">Ціна</p>
                                <p class="font-bold text-gray-800">37</p>
                            </div>
                            <div class="text-center">
                                <p class="text-sm">Опт.</p>
                                <p class="font-bold text-gray-800">850</p>
                            </div>
                            <div class="text-center">
                                <p class="text-sm">Діє від</p>
                                <p class="font-bold text-gray-800 flex gap-1">
                                    <img src="https://svgshare.com/i/16Fg.svg" />
                                        9.5
                                </p>
                            </div>
                        </div>
                        <div class="flex mt-3 gap-2 flex-wrap justify-center items-stretch">
                            <div class="bg-white text-gray-500 p rounded-lg border-[1px] border-[var(--secondary-color)]  flex-1 flex justify-between items-center overflow-hidden min-w-16 w-fit">
                                <button 
                                    class="hover:bg-red-400 hover:text-white w-full h-full"
                                    @click="(e) => counterControl(e, '-', 5)"
                                >
                                    -
                                </button>
                                <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                                <span class="w-full h-full flex items-center justify-center">
                                    {{ counter }}
                                    <!-- y-2 px-4 -->
                                </span>
                                <div class="w-[1px] h-full bg-[var(--dark-color)]"/>
                                <button 
                                    class="hover:bg-green-500 hover:text-white w-full h-full"

                                    @click="(e) => counterControl(e, '+', 5)"
                                >
                                    +
                                </button>
                            </div>
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
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>


    import SvgIcon from './shared/SvgIcon.vue';

    let counter = ref(0);

    const props = defineProps({
        product: Object,
        group: String,
    })
    

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