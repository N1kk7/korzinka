<template>
    <div class="mobile-menu-section">
        
        
        <section class="mobile-menu">
            <div :class="{'search-section': true, 'active-searchSection': searchBlock}">
                <div class="search-wrapper">
                    <input type="text" placeholder="Пошук">
                    <div class="button-wrapper">
                        <button class="search-btn">
                            <SvgIcon name="mobile-search" size="micro" fill="var(--main-accent)"/>
                            
                        </button>
                        <button class="clear-btn" @click="searchControl()">
                            <SvgIcon name="close-btn" size="micro" fill="var(--main-accent)"/>
                        </button>
                    </div>
                </div>
               
               
            </div>
            <ul class="list-menu">
                
                <li @click="searchBlock ? searchBlock = false : null">
                    <NuxtLink :to="localePath('/') ">
                        <SvgIcon name="mobile-home" size="medium" fill="var(--light-color)"/>
                        <span>
                            Головна
                        </span>
                    </NuxtLink>
                       
                </li>
                <li @click="searchBlock ? searchBlock = false : null">
                    <NuxtLink :to="localePath('/products') ">

                        <SvgIcon name="mobile-category" size="medium" fill="var(--light-color)"/>
                        <span>
                            Товари
                        </span>
                    </NuxtLink>
                    
                </li>
                <li @click="searchControl()"> 

                        <SvgIcon name="mobile-search" size="medium" fill="var(--light-color)"/>
                        <span>
                            Пошук
                        </span>


                </li>
                <li @click="searchBlock ? searchBlock = false : null">
                    <NuxtLink :to="localePath('/cart') ">
                        <SvgIcon name="cart-icon" size="medium" fill="var(--light-color)"/>
                        <span>
                            Корзина
                        </span>
                    </NuxtLink>
                 
                </li>
                <li @click="
                        showMenu(true),
                        searchBlock ? searchBlock = false : null
            ">
                    <SvgIcon name="burger-menu" size="medium" fill="var(--light-color)"/>
                    <span>
                        Меню
                    </span>
                </li>
            </ul>


            </section>
            <!-- class="burger-menu " -->
            <!-- v-if="openMenu" -->


            <div 
                :class="{'burger-menu': true, 'active-burgerMenu': openMenu}"
                ref="mobileMenu"
            >
                <div class="top-section">
                    <div class="logo">

                        <div class="logo-wrapper">
                            <img src="/public/img/only-dog.png" alt="logo" />

                        </div>
                        <span>
                            korzinka.in.ua
                        </span>

                    </div>
                    <div class="btn lang-btn">
                        <SvgIcon name="lang-icon" size="micro" fill="var(--main-accent)"/>
                        <div class="separator"></div>
                        <span>
                            Українська
                        </span>
                    </div>

                </div>
                <ul class="middle-section">
                        <NuxtLink :to="localePath('/')" @click="showMenu(false)">
                            <li >
                                <span>
                                    Головна
                                </span>
                            </li>

                        </NuxtLink>

                       
                    <li @click="listControl('productList')">
                        <span>
                            Товари
                        </span>
                        <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)"/>
                    </li>
                    <ul class="sub-menu" v-if="productList">
                        <li @click="listControl('bagList')">
                            <span>
                                Пакети майка
                            </span>
                            <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)"/>
                        </li>
                        <ul v-if="bagList">
                            <li>
                                <span>
                                    Багажна серія
                                </span>
                            </li>
                            <li>
                                <span>
                                    Біопакети
                                </span>
                            </li>
                            <li>
                                <span>
                                    З малюнком
                                </span>
                            </li>
                            <li>
                                <span>
                                    Без малюнка
                                </span>
                            </li>
                        </ul>
                        <li>
                            <span>
                                Пакети для сміття
                            </span>
                        </li>
                        <li @click="listControl('packList')">
                            <span>
                                Пакети фасувальні
                            </span>
                            <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)"/>

                        </li>
                        <ul v-if="packList">
                            <li>
                                <span>
                                    Пакети фасувальні в рулоні
                                </span>
                            </li>
                            <li>
                                <span>
                                    Пакети фасувальні в блоці
                                </span>
                            </li>
                        </ul>
                        <li>
                            <span>              
                                Пакети ZipLock
                            </span>
                        </li>
                        <li>
                            <span>              
                                Мішки
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
                        <NuxtLink :to="localePath('/about')" @click="showMenu(false)">
                            <li >

                                <span>
                                    Про компанію
                                </span>
                            </li>

                        </NuxtLink>
                       
                        <NuxtLink :to="localePath('/pay-delivery') " @click="showMenu(false)">
                            <li >

                            <span>
                                Оплата та доставка
                            </span>
                            </li>

                        </NuxtLink>
                     
                        <NuxtLink :to="localePath('/help')" @click="showMenu(false)">
                            <li >
                                <span>
                                    Покупцю
                                </span>
                            </li>
                        </NuxtLink>
                     
                        <NuxtLink :to="localePath('/news')" @click="showMenu(false)">
                            <li >
                                <span>
                                    Новини
                                </span>
                            </li>

                        </NuxtLink>
                        <NuxtLink :to="localePath('/contact')" @click="showMenu(false)">
                            <li >
                                <span>
                                    Контакти
                                </span>
                            </li>
                        </NuxtLink>
                       
                </ul>
                <div class="bottom-section">
                  
                    <div class="btn profile-btn">
                        <SvgIcon name="default-user" size="micro" fill="var(--main-accent)"/>
                        <div class="separator"></div>
                        <span>
                            Профіль
                        </span>
                    </div>
                    <div class="btn cancel-btn" @click="showMenu(false)">
                        <span>
                            Закрити
                        </span>
                        <div class="separator"></div>
                        <SvgIcon name="close-btn" size="micro" fill="var(--main-accent)"/>

                       
                    </div>

                </div>

            </div>

    </div>

   



</template>




<script setup>

    // componenets
    //import { NuxtLink } from '@/.nuxt/components';
    // import { NuxtLink } from '@/.nuxt/components';
// import { useLocalePath } from '@/.nuxt/imports';
// import { NuxtLink } from '@/.nuxt/components';
import SvgIcon from '@/shared/SvgIcon.vue';
import gsap from 'gsap';
import { ref, watch } from 'vue';

    let openMenu = ref(false);


    const productList = ref(false);
    const bagList = ref(false);
    const packList = ref(false);
    const searchBlock = ref(false);

    const localePath = useLocalePath();


    const showMenu = (value) => {
        openMenu.value = value;
        openMenu.value ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }


    const listControl = (menu) => {
        switch (menu) {
            case 'productList':
                productList.value = !productList.value;
                break;
            case 'bagList':
                bagList.value = !bagList.value;
                break;
            case 'packList':
                packList.value = !packList.value;
                break;
        }
        

    }

    const searchControl = () => {
        searchBlock.value = !searchBlock.value
    }

</script>




<style lang="scss">

    @use './/styles/mixins.scss' as mixins;



    .mobile-menu, .burger-menu{
        display: none;
    }

    @media screen and (max-width: 768px) {
       
        .mobile-menu{
            display:block;
            width: -webkit-fill-available;
            position: fixed;
            bottom: 0;
            left: 0;
            background: var(--main-dark-color);
            transition: all ease 0.3s;
            z-index: 50;
            height: fit-content;
            .search-section{
                border-top: 1px solid var(--main-accent);
                transition: all ease 0.3s;
                padding-block: 1.2vh;
                height: -moz-fit-content;
                height: fit-content;
                position: absolute;
                width: 100%;
                background: var(--main-dark-color);
                left: 0;
                bottom: 0;
                height: fit-content;
                z-index: -1;

                .search-wrapper{
                    justify-content: space-between;
                    background: var(--light-color);
                    align-items: center;
                    display: flex;
                    width: 80%;
                    height: 35px;
                    margin: 0 auto;

                    input{
                        padding: 5px 10px;
                        @include mixins.descriptionText(500, var(--base-dark-color));
                        &::placeholder{
                            @include mixins.descriptionText(500, var(--base-dark-color));
                        }
                        
                    }
                    .button-wrapper{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            height: inherit;
                            button{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: var(--dark-color);
                                height: inherit;
                                padding-inline: 10px;
                                border: 1px solid var(--light-color)

                            }
                        }
                    }
              
            }
            .active-searchSection{
                bottom: 100%;
                transition: all ease 0.3s;
            }
            .list-menu{
                display: flex;
                justify-content: space-around;
            border-top: 1px solid var(--main-accent);
            background: var(--main-dark-color);

            padding-top: 10px;

                // border-top: 1px solid var(--main-accent);
                // padding-top: 1.2vh;

                align-items: center;
                a, li{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                      
                        svg{
                            background: var(--base-dark-color);
                            padding: 5px;
                            border: 1px solid var(--main-accent);
                            border-radius: 8px;
                        }
                        span{
                            @include mixins.descriptionText(500, var(--light-color));
                            padding-top: 5px;
                        }
                }

            }
        }
        .burger-menu{
            display: block;
            position: fixed;
            top: 0;
            left: 100%;
            width: 100%;
            height: 100%;
            background: var(--main-dark-color);
            transition: all ease 0.3s;

            opacity: 0.97;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            .btn{
                    display: flex;
                    justify-content: flex-start;
                    border: 1px solid var(--light-color);
                    padding: 5px 10px;
                    border-radius: 10px;
                    align-items: center;
                    gap: 10px;
                    width: fit-content;
                    .separator{
                        width: 1px;
                        height: 15px;
                        background: var(--light-color);

                    }
                    span{
                        @include mixins.descriptionText(500, var(--light-color));
                    }
                }
            .top-section{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                align-items: center;
                padding: 15px 20px;
                border-bottom: 1px solid #d9dbe0;

                .logo{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 10px;
                    .logo-wrapper{
                        width: 40px;
                        height: 40px;
                        border: 1px solid var(--main-accent);
                        background: var(--light-color);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    span{
                        @include mixins.descriptionText(700, var(--light-color));
                    }
                }
            }
            .middle-section{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                height: -webkit-fill-available;
                overflow: scroll;
                padding: 4vw 3vw;
                gap: 10px;
                li{
                    background: var(--light-color);
                    border: 1px solid var(--main-accent);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 5px;
                    padding: 5px 10px;
                    span{
                        @include mixins.descriptionText(700, var(--dark-color));
                    }
                }
                .sub-menu{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 10px;
                    padding-left: 10px;
                    ul{
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        gap: 10px;
                        li{
                            margin-left: 10px;
                        }
                    }
                   
                }
               
            }
            .bottom-section{
                border-top: 1px solid #d9dbe0;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                align-items: center;
                padding: 15px 20px;
            }
        }
        .active-burgerMenu{
            left: 0;
            transition: all ease 0.3s;
        }
    }

    


</style>