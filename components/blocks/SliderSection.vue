<template>
  <section class="section slider-section">
    <div class="container">
      <div class="title">
        <h1
          class="border-b-[1px] dark:border-[var(--dark-border-color)] border-[var(--border-color)] pb-2 mb-0"
        >
          {{ $t("index-page.news") }}
        </h1>
      </div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="0"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 1555500,
          disableOnInteraction: false,
        }"
        :breakpoints="swiperBreakpoints"
        :modules="modules"
        class="mySwiper"
      >
        <!-- <swiper-slide
                v-for="(card, index) in news"
                :key="index"
                class="card overflow-hidden"
              >
                <div class="slide-wrapper">
                  <div class="card-content flex flex-col items-center justify-center gap-3 w-full h-full relative">
                  <div class="card-img flex-1 basis-1/2 w-full h-[40%]">
                    <img 
                      :src="card.img" 
                      alt="slider-img"
                      class="w-full h-full object-fill"
                    >

                  </div>
                  <div 
                    class="card-info flex-1 basis-1/2 h-[60%] px-5 pb-5 flex flex-col justify-between gap-3"
                  >
                    <h3
                      class="font-bold text-[var(--dark-color)] bg-[var(--bg-color)] px-2 py-1 rounded-md"
                    >{{ card.title }}</h3>
                    <p
                      class="text-base font-normal bg-[var(--dark-color)] px-2 py-1 rounded-md h-full"
                    >{{ card.description }}</p>
                    <div 
                      class="card-bottom flex justify-between items-center gap-3 mt-2"
                    >
                      <span
                        class="text-sm font-normal text-[var(--dark-color)] bg-[var(--main-accent)] px-2 py-1 rounded-md border-[1px] border-[var(--dark-color)]"
                      > 
                        {{ card.date }}
                      </span>
                      <button
                        class="text-sm font-normal bg-[var(--active-btn)] text-[var(--bg-color)] px-2 py-1 rounded-md border-[1px] border-[var(--dark-color)]"
                      >
                        Перейти
                      </button>
                    </div>

                  </div>
                </div>

                </div>

                
              </swiper-slide> -->

        <swiper-slide v-for="(card, index) in news" :key="index" class="card">
          <div class="slide-wrapper">
            <div class="card-content">
              <div class="content-wrapper dark:border dark:border-solid dark:border-[var(--dark-border-color)]">
                <div class="card-img flex-1">
                  <img
                    :src="card.img"
                    alt="slider-img"
                    class="w-full h-full object-fill dark:border-b dark:border-solid dark:border-b-[var(--dark-border-color)]"
                  />
                </div>
                <div class="info-content flex flex-1 flex-col justify-between h-full p-2">
                  <div class="info ">
                    <h3 
                      class="font-bold text-[var(--primary-color)] dark:text-[var(--dark-font-color)] pb-1"
                    >{{ card.title }}</h3>
                    <!-- <p class="text-base font-normal px-2 py-1 rounded-md h-full shadow-inset-neumorphism dark:shadow-inset-neumorphism-dark bg-[var(--dark-border-color)] text-[var(--light-color)] dark:text-[var(--bg-color)]">
                      {{ card.description }}
                    </p> -->
                    <p class="text-[13px] leading-4 font-normal px-2 py-2 rounded-md h-fit shadow-inset-neumorphism dark:shadow-inset-neumorphism-dark bg-[var(--border-color)] dark:bg-[var(--dark-border-color)] text-[var(--primary-color)] dark:text-[var(--bg-color)]">
                      {{ card.description }}
                    </p>
                    <!-- <p class="">{{ card.description }}</p> -->
                  </div>
               
                  <div class="bottom-content flex items-center justify-between">
                    <span class="date text-sm font-normal text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
                      {{ card.date }}
                    </span>
                    <ShadowBtn>
                      <span>Перейти</span>
                    </ShadowBtn>
                  </div>
              </div>

              </div>
              
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import ShadowBtn from "../shared/ShadowBtn.vue";

// Import Swiper styles
import "swiper/css";

// import 'swiper/css/navigation'; Navigation Mousewheel, Keyboard,
import "swiper/css/pagination";

import { newsData } from "@/data/News/NewsData.ts";

const news = newsData;

import { Pagination, Autoplay } from "swiper/modules";

const gradients = [
  "linear-gradient(135deg, rgb(238, 174, 202), rgb(148, 187, 233))",
  "linear-gradient(135deg, rgb(24, 90, 157), rgb(72, 187, 181))",
  "linear-gradient(135deg, rgb(255, 204, 112), rgb(255, 159, 67))",
  "linear-gradient(135deg, rgb(42, 47, 50), rgb(68, 88, 77))",
  // 'linear-gradient(135deg, rgb(175, 205, 255), rgb(185, 255, 214))',
  "linear-gradient(135deg, rgb(125, 155, 220), rgb(145, 215, 184))",
  "linear-gradient(135deg, rgb(255, 94, 98), rgb(255, 162, 165))",
  // 'linear-gradient(135deg, rgb(200, 225, 250), rgb(240, 248, 255))',
  "linear-gradient(135deg, rgb(150, 195, 230), rgb(200, 228, 245))",
  "linear-gradient(135deg, rgb(108, 47, 217), rgb(60, 14, 98))",
  "linear-gradient(135deg, rgb(0, 150, 136), rgb(178, 223, 219))",
  "linear-gradient(135deg, rgb(255, 144, 47), rgb(255, 200, 87))",
];

const cards = Array.from({ length: 10 });


const swiperBreakpoints = {
  200: { slidesPerView: 1, spaceBetween: 0 },
  400: { slidesPerView: 2, spaceBetween: 0 },
  1024: { slidesPerView: 3, spaceBetween: 10 },
};

const modules = [Pagination, Autoplay];
</script>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;

.title{
  h1{
    margin-bottom: 0;
  }
}

.dark .slider-section {
  .title {
    h1 {
      color: var(--dark-font-color);
    }
  }
  .swiper .swiper-slide {

    .slide-wrapper{
      
      box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                inset 4px 4px 6px rgba(0, 0, 0, 0.6),
                -4px -4px 8px rgba(255, 255, 255, 0.05),
                4px 4px 8px rgba(0, 0, 0, 0.6);

                .card-content{
                  background: var(--darkgrey);
                
                  @media screen and (max-width: 768px) {
          &{
            .content-wrapper{
              .info-content{
                h3{
                  font-size: clamp(12px, 1.5vw, 20px);
                }
                p{
                  background-color: rgba(0, 0, 0, 0.7);
                  backdrop-filter: blur(1px);

                }
              }
              .card-img{
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
              }
            }
            
          }

          
        }
                  // border: 1px solid var(--dark-border-color);


                }
    }

  }
}

.mySwiper {
  width: 100%;
  height: 100%;
 
  // overflow: visible !important;
}

.swiper-slide {
  padding: 30px 15px 50px;

  @media screen and (max-width: 768px) {
    &{
      padding: 30px 7px 50px;

    }
    
  }


    
  .slide-wrapper {
    border-radius: 10px;
    box-shadow: -8px -4px 8px 0px #ffffff,
        8px 4px 12px 0px #d1d9e6,
        4px 4px 4px 0px #d1d9e6 inset,
        -4px -4px 4px 0px #ffffff inset;

    // padding-bottom: 50px;

    .card-content {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      gap: 20px;
      width: 100%;
      height: 400px;
      padding: 8px;
      position: relative;
      border-radius: 10px;
      .content-wrapper{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
        position: relative;
        .card-img{
          height: 50%;

        }
        
      }
      @media screen and (max-width: 768px) {
          &{
            height: 270px;
            .content-wrapper{
              .info-content{
                padding: 10px;
                h3{
                  font-size: clamp(12px, 1.5vw, 20px);
                }
                p{
                  background-color: rgba(255, 255, 255, 0.8);
                  backdrop-filter: blur(1px);
                }
                .bottom-content{
                  .date{
                    font-size: clamp(10px, 1.5vw, 16px);
                  }
                }
              }
              .card-img{
                position: absolute;
                top: 0;
                left: 0;
                transform: translate(20%, 50%);
                height: 50%;
                width: 70%;
                z-index: -1;
                img{
                border-radius: 10px;

                }
              }
            }
            
          }

          
        }


    }
  }
}

.shadow-neumorphism {
    box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.6),
                8px 8px 12px rgba(0, 0, 0, 0.15),
                inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                inset 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .shadow-neumorphism-dark {
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                inset 4px 4px 6px rgba(0, 0, 0, 0.6),
                -8px -8px 12px rgba(255, 255, 255, 0.05),
                8px 8px 12px rgba(0, 0, 0, 0.6);
  }

  .shadow-neumorphism-button {
    box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.6),
                4px 4px 6px rgba(0, 0, 0, 0.15);
  }

  .shadow-neumorphism-button-dark {
    box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.1),
                4px 4px 6px rgba(0, 0, 0, 0.6);
  }

  .shadow-inset-neumorphism {
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }

  .shadow-inset-neumorphism-dark {
    box-shadow: inset 4px 4px 6px rgba(255, 255, 255, 0.1),
                inset -4px -4px 6px rgba(0, 0, 0, 0.6);
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    width: 30px;
    height: 12px;
    background: var(--border-color);
    border-radius: 10px;
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.6),
                2px 2px 4px rgba(0, 0, 0, 0.65);
    transition: background 0.3s, box-shadow 0.3s;
  }

  .dark .swiper-pagination-bullet {
    background: var(--dark-border-color);
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
                2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  .swiper-pagination-bullet-active {
    background: var(--active-btn) !important;
    box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.1),
                inset 2px 2px 4px rgba(0, 0, 0, 0.1);
  }


</style>
