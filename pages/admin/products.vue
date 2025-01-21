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

        <div class="items-window bg-white rounded-lg h-full flex-1">
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
                    
                    <!-- <div class="button-wrapper ">
                        <div class="button-tooltip">
                            <div class="tooltip-text">
                                <span>
                                    Додати вкладену категорію
                                </span>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div> -->
                    <button class="bg-[#d5ddeb] py-2 px-3 rounded-lg border-[0px]">
                        Додати вкладену категорію

                    </button>
                    <button class="bg-yellow-400">
                        <SvgIcon name="edit-btn" size="micro" fill="var(--dark-color)"/>
                    </button>
                    <button class="bg-green-500">
                        <SvgIcon name="save-btn" size="micro" fill="var(--dark-color)"/>
                    </button>
                    <button class="bg-red-500">
                        <SvgIcon name="close-btn" size="micro" fill="white"/>
                    </button>
                </li>

            </ul>
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
            // console.log(fetchedCategories.success, 'fetchedCategories from getCategories')

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