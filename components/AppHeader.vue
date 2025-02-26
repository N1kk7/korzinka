<template>
    <header class="header">

      <div class="sub-header">
        <!-- to="/" -->

        <NuxtLink 
          :to="localePath('/')"
        >
          <img class="logo" src="~/public/logos-korzinka.png" width="200" alt="logo"/>
        </NuxtLink>
        <div class="links">
          <nav>
            <!-- :to="{ name: 'products'}" -->

            <NuxtLink
              :to="localePath('/products')"
            >
              
              {{ $t('header.products') }}

            
            </NuxtLink>
            <NuxtLink :to="localePath('/about')">

              {{ $t('header.about') }}
            
            
            </NuxtLink>
            <NuxtLink :to="localePath('/pay-delivery')">
              {{ $t('header.pay-delivery') }}

            </NuxtLink>
            <NuxtLink :to="localePath('/help')">
              
              {{ $t('header.buyers') }}
            
            </NuxtLink>
            <NuxtLink :to="localePath('/news')">
              
              {{ $t('header.news') }}
            
            </NuxtLink>
            <NuxtLink :to="localePath('/contact')">
              
              {{ $t('header.contacts') }}
            
            </NuxtLink>
          </nav>
        </div>
        <div class="buttons">
          <div class="log-btn">
            <SvgIcon name="login-btn" size="micro" fill="var(--dark-color)"/>

            

            <div class="separator">

            </div>
            <span>
              {{ $t('common-btns.enter-btn') }}
            </span>
          </div>
          <div class="mobile-phone">
            <img src="~/public/phone.png" alt="phone">

          </div>
        </div>
      </div>
    </header>

  </template>
  
  <script setup>

    import SvgIcon from './shared/SvgIcon.vue'
    import { useI18n } from 'vue-i18n';
    


    

const localePath = useLocalePath();




   



  </script>
  
  <style lang="scss" scoped>
  @use './/styles/mixins.scss' as mixins;

  .header {
    height: 100% ;
    overflow: visible;
    @include mixins.descriptionText(600, var(--dark-color));
    .sub-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // padding-inline: 150px;
      background-color: var(--bg-color);
      color: #fff;
      padding: 1rem;
      color: var(--dark-color);
      @media screen and (max-width: 768px){
        background-color: transparent;
        position: fixed;
        width: 100%;
        z-index: 50;
      }
      .logo {
        margin-right: 1rem;
        width: clamp(100px, 9.5vw, 170px);
        @media screen and (max-width: 768px){
          background: var(--bg-color);
          padding: 1vw;
          border-radius: 30px;
          border: 1px solid var(--dark-color);
        }

      }
      .links {
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1vw;
          a {
            color: var(--dark-color);
            margin-right: 1rem;
            text-decoration: none;
            text-transform: uppercase;
            font-size: clamp(10px, 1.2vw, 14px);
            border-bottom: 1px solid transparent;
            transition: all ease 0.2s;
            flex: 1;
            white-space: nowrap;

          }
          a:hover{
            transform: scale(1.1);
            border-bottom: 1px solid var(--base-dark-color);
            transition: all ease 0.2s;

          }
        }
        @media screen and (max-width: 768px) {
          &{
            display: none
          }
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1vw;
        .log-btn {
          display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 0.5em 0.7em;
            border-radius: 0.5em;
            background: #e8e8e8;
            cursor: pointer;
            color: #666;
            font-size: 0.8em;
            border: 1px solid #e8e8e8;
            box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
            @media screen and (max-width: 768px){
              display: none;
              
            }

            .separator{
                width: 1px;
                align-self: stretch;
                background: var(--dark-color);
            }

            &:active {
                color: #444;
                box-shadow: inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff;
                transform: scale(0.95);
                cursor: pointer;
            }
        }
        .mobile-phone{
          display: none;
          @media screen and (max-width: 768px){
            &{
              display: block;
              background: black;
              border-radius: 50%;
              width: clamp(40px, 4vw, 80px);
            }
          }
        }
      }
      
    }
  }

  </style>