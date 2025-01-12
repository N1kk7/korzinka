<template>

    <div class="items-section h-[100vh]">
        <div class="admin-container mx-2 my-1 flex flex-col ">
            <div class="top-block flex justify-between items-center mt-5">
                <div class="page-name">
                    <h1 class="mb-0">
                        Товари
                    </h1>
                </div>
                <div class="nav bg-[#d5ddeb] py-2 px-3 rounded-lg">
                    <ul class="flex items center gap-1">
                        <li class="el-active">
                            <span>
                                Всі товари
                            </span>
                        </li>
                        <li>
                            <span>
                                Пакети майка
                            </span>
                        </li>
                        <li>
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
                        </li>

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
                    >
                        Додати категорію
                    </button>
                    <button
                        @click="addProductPopup"
                    >
                        Додати товар
                    </button>
                    <button>
                        <SvgIcon name="burger-menu" size="micro" fill="var(--dark-color)" />
                    </button>

                </div>

            </div>

        <div class="items-window bg-white rounded-lg h-full flex-1">
        </div>
        </div>
       
    </div>

   

</template>

<script setup >

    import SvgIcon from '@/components/shared/SvgIcon.vue';
    import { useModalStore } from '#imports';

    const modalStore = useModalStore();


    const addProductPopup = () => {
        console.log('call button')
        modalStore.showModal('AddProduct');
    }

    definePageMeta({
        layout: 'admin'
    })
   

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