<template>
    <section>
      <div class="container">
        <swiper
          :spaceBetween="30"
          :effect="'fade'"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          :autoplay="{
            delay: 5500,
          }"
          class="mySwiper"
        >
          <swiper-slide 
            class="card"
            v-for="card in cards"
            :key="card.id"
            :style="{background: card.bg}"
          
          >
          <img :src="card.imgUrl" alt="img">


            
          </swiper-slide>
        </swiper>

      </div>
      
      
    </section>
  </template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import vanImg from '~/public/img/van.png'

// import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

const modules = [EffectFade, Pagination, Autoplay];

const cards = [
  {
    id: 1,
    title: 'Компанія',
    description: 'Замовлень на рік',
    value: 'Більше 1000',
    imgUrl: vanImg,
    bg: 'linear-gradient(135deg, rgb(20, 30, 48), rgb(36, 59, 85))',
  },
  {
    id: 2,
    title: 'Про компанію',
    description: '20 Років успішної роботи',
    value: 'Тисячі задоволених клієнтів',
    imgUrl: vanImg,
    bg: 'linear-gradient(135deg, rgb(30, 42, 34), rgb(58, 63, 50))',
  },
  {
    id: 3,
    title: 'Магазин',
    description: 'Більше 300 товарів в асортименті',
    value: 'Відправляємо кожен день',
    imgUrl: vanImg,
    bg: 'linear-gradient(135deg, rgb(40, 32, 56), rgb(80, 55, 75))',
  },
]


</script>


<style lang="scss" scoped>
    // .swiper{
        // overflow: visible
    // }

    .swiper-pagination{
        bottom: -20px !important;
    }

    .card{
        width: 100%;
        height: 400px;
        background: linear-gradient(135deg, rgb(30, 42, 34), rgb(58, 63, 50));
        border-radius: 50px;
    }


</style>