<template>
    <section>
        <swiper
          :spaceBetween="30"
          :effect="'fade'"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          :autoplay="{
            delay: 111500,
          }"
          class="mySwiper relative w-full mt-5"
        >
          <swiper-slide 
            class="card flex items-center justify-center gap-5 w-full"
            :class="{'flex-row-reverse': card.direction}"
            v-for="card in cards"
            :key="card.id"
            :style="{background: card.bg}"
          
          >

          <img 
            v-if="themeStore.darkMode"
            :src="card.imgDark" 
            alt="img"
class="flex-1 max-w-fit"
          >
          <img
              v-else
             :src="card.imgLight" 
             alt="img"
             class="flex-1 max-w-fit"
          >
          <div class="slide-content w-1/2 flex flex-col items-start justify-start gap-2 p-5">
            <h2 class="title  text-[var(--dark-font-color)] text-6xl font-bold border-b border-[var(--main-accent)] pb-3">
              {{ card.title }}
            </h2>
            <p class="description text-[var(--dark-font-color)] text-3xl">
              {{ card.description }}
            </p>
            <span class="value text-[var(--dark-font-color)] text-2xl">

              {{ card.value }}
            </span>
          </div>



            
          </swiper-slide>
        </swiper>

      
      
    </section>
  </template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, watch } from 'vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import vanImg from '~/public/img/van.png'
import darkMap from '@/public/darkMap.png';
import lightMap from '@/public/lightMap.png';
import productStore from "@/public/productStore.png";


// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

const modules = [EffectFade, Pagination, Autoplay];

import { useThemeStore } from "#imports";





const themeStore = useThemeStore();

// watch(themeStore.darkMode, () => {
//   if (themeStore.darkMode) {
//     mapElement.value.src = '@/public/darkMap.png';
//   } else {
//     mapElement.value.src = '@/public/lightMap.png';
//   }
// })


const cards = [
  {
    id: 1,
    title: 'Доставка',
    description: 'В кожний куточок України (за виключенням тимчасово окупованих територій)',
    value: 'Відправляємо кожен день',
    imgLight: lightMap,
    imgDark: darkMap,
    direction: true,
    bg: 'linear-gradient(135deg, rgb(20, 30, 48), rgb(36, 59, 85))',
  },
  {
    id: 2,
    title: 'Про нас',
    description: '20 Років успішної роботи',
    value: 'Тисячі задоволених клієнтів',
    imgUrl: vanImg,
    imgLight: vanImg,
    imgDark: vanImg,
    direction: false,
    bg: 'linear-gradient(135deg, rgb(30, 42, 34), rgb(58, 63, 50))',
  },
  {
    id: 3,
    title: 'Магазин',
    description: 'Більше 100 товарів в асортименті',
    value: 'Приємні ціни',
    imgLight: productStore,
    imgDark: productStore,
    direction: true,
    bg: 'linear-gradient(135deg, rgb(40, 32, 56), rgb(80, 55, 75))',
  },
]


</script>


<style lang="scss" scoped>

  .swiper{
    padding-bottom: 50px;
  }
    

    .swiper-pagination{
        top: 20px;
        position: relative;
    }
    .swiper-slide{
      display: flex;
    }

    .card{
        width: 100%;
        height: 400px;
        // background: linear-gradient(135deg, rgb(30, 42, 34), rgb(58, 63, 50));
        border-radius: 50px;
        overflow: hidden;
    }

    @media screen and (max-width: 950px) {
      .swiper-slide{
        align-items: center;
        justify-content: center;
        padding: 0;
        img{
          position: absolute;
          object-fit: scale-down;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .slide-content{
          width: 100%;
          height: 100%;
          gap: 10px;
          justify-content: flex-end;
          background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 100%);

          h2{
            font-size: clamp(2rem, 2.5vw, 3rem);
          }
          p{
            font-size: clamp(1rem, 2vw, 2rem);
          }
          span{
            font-size: clamp(1rem, 2vw, 2rem);
          }

        }
      }

      
    }


</style>