<template>

    <div class="items-section">
        <div class="admin-container mx-2 my-1">
            <div class="top-block flex justify-between items-center mt-5">
            <div class="page-name">
                <h1 class="mb-0">
                    Товари
                </h1>
            </div>
            <div class="nav bg-[var(--light-color)] py-2 px-3 rounded-lg">
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
            <div class="settings-row">

                <div class="search-block">
                    <input type="text" placeholder="Пошук">
                    <button>
                        <SvgIcon name="search" size="micro" fill="var(--dark-color)" />
                    </button>
                </div>
                <div class="settings-block">

                </div>

            </div>

        <div class="items-window">

        </div>
        </div>
       
    </div>

   

</template>

<script setup >

    import SvgIcon from '@/components/shared/SvgIcon.vue';

    definePageMeta({
        layout: 'admin'
    })
   

</script>

<style scoped lang="scss">
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