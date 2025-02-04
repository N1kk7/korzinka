<template>

    <div class="items-section h-[100vh]">
        <div class="admin-container mx-2 pb-2 flex flex-col ">
            <div class="top-block flex justify-between items-center mt-5">
                <div class="page-name">
                    <h1 class="mb-0">
                        Товари
                    </h1>
                </div>
                <div class="nav bg-[#d5ddeb] py-2 px-3 rounded-lg">
                    <ul class="flex items center gap-1">
                        <li :class="activeGroup === 'products' ? 'el-active' : ''" 
                            @click="showGroup('products')"
                        >
                            <span>
                                Товари
                            </span>
                        </li>
                        <li 
                            :class="activeGroup === 'categories' ? 'el-active' : ''"
                            @click="showGroup('categories')"
                        >
                            <span>
                                Категорії
                            </span>
                        </li>
                        <!-- <li>
                            <span>
                                Пакети для сміття
                            </span>
                        </li>
                        <li>
                            <span>
                                Пакети фасувальні
                            </span>
                        </li>
                        <li>
                            <span>
                                Стрейтч плівка
                            </span>
                        </li>
                        <li>
                            <span>
                                Рукавички 
                            </span>
                        </li> -->

                    </ul>
                </div>
            </div>
            <div class="settings-row grid grid-cols-[2fr_1fr] items-center gap-5 my-5">

                <div class="search-block flex justify-start items-stretch gap-5">
                    <div class="search-wrapper border-[1px] border-[var(--dark-color)] rounded-lg flex items-center gap-2 pl-2">
                        <input type="text" class="text-[var(--dark-color)]" placeholder="Пошук">
                        <button class="search-btn">
                            <SvgIcon name="search-icon" size="micro" fill="var(--dark-color)" />
                        </button>
                    </div>
                
                </div>
                <div class="settings-block flex justify-end items-stretch gap-5">
                    <button
                        class="text-nowrap"
                        @click="openPopup('AddCategory')"
                    >
                        Додати категорію
                    </button>
                    <button
                        class="text-nowrap"
                        @click="openPopup('AddProduct')"
                    >
                        Додати товар
                    </button>
                    <button>
                        <SvgIcon name="burger-menu" size="micro" fill="var(--dark-color)" />
                    </button>

                </div>

            </div>

        <!-- <div class="items-window bg-white rounded-lg h-full flex-1">
            <ul     
                v-if="activeGroup === 'categories'"
                class="item-wrapper px-2 py-3 flex flex-col justify-center gap-2 items-center"
            >
                <li class="grid grid-cols-[50px_150px_1fr_1fr_50px_50px_50px] items-center gap-2 border-[1px] border-[var(--dark-color)] p-2 rounded-lg w-full"
                    v-for="(item, index) in fetchedCategories" :key="index">
                    <div class="img-content ">
                        <div class="img-wrapper bg-[var(--bg-color)] w-10 h-10 flex justify-center items-center rounded-sm">
                            <img :src="item.categoryImg" class="data-img w-8 h-8"/>

                        </div>

                    </div>
                    <div v-if="item.language">
                        <span>
                            {{ item.language.title }}
                        </span>
                    </div>
                    <div class="checkbox-wrapper flex flex-col gap-2 items-center justify-center">
                        <input type="checkbox" :checked="item.visible">
                        <span>
                            Показувати категорію
                        </span>
                    </div>
                    
                    <div class="button-wrapper ">
                        <div class="button-tooltip">
                            <div class="tooltip-text">
                                <span>
                                    Додати вкладену категорію
                                </span>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>
                    <button class="bg-[#d5ddeb] py-2 px-3 rounded-lg border-[0px]">
                        Додати вкладену категорію

                    </button>
                    <button class="bg-yellow-400">
                        <SvgIcon name="edit-btn" size="micro" fill="var(--dark-color)"/>
                    </button>
                    <button class="bg-green-500">
                        <SvgIcon name="save-btn" size="micro" fill="var(--dark-color)"/>
                    </button>
                    <button 
                        class="bg-red-500" 
                        @click="deleteCategory(item)"
                    >
                        <SvgIcon name="close-btn" size="micro" fill="white"/>
                    </button>
                </li>

            </ul>
            <ul
                v-else-if="activeGroup === 'products'"
                class="item-wrapper px-2 py-3 flex flex-col justify-center gap-2 items-center"
            >
                <li 
                    v-for="(item, index) in fetchedProducts" :key="index"
                    class="border-[1px] border-[var(--dark-color)] p-2 rounded-lg w-full"
                >   
                    <img :src="item.img[0].path" alt="product-img" width="30" height="30">

                    <span>
                        {{ item.translations.find(translation => translation.language === 'uk').title }}
                    </span>

                </li>

            </ul>
        </div> -->


        <div class="w-full px-6 py-6 mx-auto">

            <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                    <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6 class="dark:text-white">Категорії товарів</h6>
                    </div>
                    <div class="flex-auto px-0 pt-0 pb-2">
                        <div class="p-0 overflow-x-auto">
                        <table class="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                            <thead class="align-bottom">
                            <tr>
                                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                                <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                                <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="category in fetchedCategories"
                                :key="category.id"
                            >
                                <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <div class="flex px-2 py-1">
                                    <div>
                                    <img :src="category.categoryImg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                    </div>
                                    <div class="flex flex-col justify-center">
                                    <h6 class="mb-0 text-sm leading-normal dark:text-white">John Michael</h6>
                                    <p class="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                                    </div>
                                </div>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <p class="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Manager</p>
                                <p class="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Organization</p>
                                </td>
                                <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                </td>
                                <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <span class="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">23/04/18</span>
                                </td>
                                <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                <a href="javascript:;" class="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        <!-- card 2 -->

        <div class="flex flex-wrap -mx-3">
          <div class="flex-none w-full max-w-full px-3">
            <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 class="dark:text-white">Товари</h6>
              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table class="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                    <thead class="align-bottom">
                      <tr>
                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Товар</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Ціна</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Статус товару</th>
                        <th class="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Категорія</th>
                        <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap"></th>
                      </tr>
                    </thead>
                    <tbody class="border-t">
                      <tr
                        v-for="product in fetchedProducts" :key="product.id"
                      >
                        <td 
                            class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                            
                        >
                          <div class="flex px-2">
                            <div>
                              <img :src="product.img[0].path" class="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="spotify" />
                            </div>
                            <div class="my-auto">
                              <h6 class="mb-0 text-sm leading-normal dark:text-white">{{ product.translations.find(translation => translation.language === 'uk').title }}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p class="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">{{ `${product.price} UAH` }}</p>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span v-if="product.visible" class="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Активний</span>

                          <span v-else class="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Не активний </span>
                        </td>
                        <td class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div class="flex items-center justify-center">
                            <span class="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{{ product.category.group }}</span>
                            <div>
                              <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                <div class="flex flex-col justify-center w-3/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <button class="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
                            <i class="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>



        </div>





        </div>
       
    </div>

   

</template>

<script setup >

    import { onMounted, ref } from 'vue';
    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import { useModalStore } from '#imports';

    const modalStore = useModalStore();

    const fetchedCategories = ref([]);

    const fetchedProducts = ref([]);

    const activeGroup = ref('products');


    const openPopup = (modal) => {
        switch (modal) {
            case 'AddProduct':
                modalStore.showModal('AddProduct');
                break;
            case 'AddCategory':
                modalStore.showModal('AddCategory');
                break;
        }

        // modalStore.showModal('AddProduct');
    }

    definePageMeta({
        layout: 'admin'
    })

    const showGroup = (group) => {
        if (group !== activeGroup.value) {
            activeGroup.value = group;
        }
    }

    const deleteCategory = (category) => {
        // console.log(category.language.title)
        modalStore.showModal(
            'DeleteCategory',
            {
                categoryId: category.id,
                categoryName: category.language.title
            },
        );
    };

    onMounted( async () => {
        try {
            const getCategories = await $fetch('/api/category');
            // console.log('log fetch');
            
            if (getCategories.data.length > 0) {
                fetchedCategories.value = getCategories.data.map((item) => ({
                    ...item,
                    language: item.translations.find(translation => translation.language === 'uk')
                }))
            }

            const getProducts = await $fetch('/api/products');

            if (getProducts.data.length > 0) {
                fetchedProducts.value = getProducts.data.map((item) => item)
            }

            console.log(fetchedProducts.value, 'get products')

        } catch (error) {

            console.log(error, 'error from getCategories')
        }
    })

    // console.log(fetchedCategories.value, 'fetchedCategories')
   

</script>

<style scoped lang="scss">

    .admin-container{
        height: -webkit-fill-available;
    }
    button{
        color: var(--dark-color);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border: 1px solid var(--dark-color);
        border-radius: 5px;
    }
    .search-btn{
        border: none;
        border-left: 1px solid var(--dark-color);
        border-radius: unset;
    }
     .nav{
        ul{
            li{
                padding: 2px 5px;
                border-radius: 5px;
                span{
                    cursor: pointer;
                    color: var(--dark-color);
                }
            }
            li:hover{
                background: var(--secondary-color);
                span{
                    color: var(--bg-color);
                }

            }
            .el-active, .el-active:hover{
                background: var(--dark-color);
                cursor: default;
                span{
                    color: var(--bg-color);
                }
            }

        }
    }


</style>