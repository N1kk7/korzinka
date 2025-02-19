<template>
    <section class="section slider-section">
        <div class="container">
          <div class="title ">
            <h1
              class="border-b-[1px] border-[var(--border-color)] pb-5"
            >{{ $t('index-page.news')}}</h1>

          </div>
          <swiper
              :slidesPerView="3"
              :spaceBetween="10"
              :pagination="{
                clickable: true,
              }"
              :autoplay="{
                  delay: 5500,
                  disableOnInteraction: false,
              }"
              :breakpoints="swiperBreakpoints"
              :modules="modules"
              class="mySwiper"
              
              
          >
              <swiper-slide
                v-for="(card, index) in news"
                :key="index"
                :style="getGradientStyle(index)"
                class="card overflow-hidden"
              >
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
              </swiper-slide>
              
          </swiper>
        </div>
    </section>
</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  // import 'swiper/css/navigation'; Navigation Mousewheel, Keyboard,
  import 'swiper/css/pagination';

  import { newsData } from '@/data/News/NewsData.ts';

  const news = newsData;

//   import './style.css';

  // import required modules
  import { Pagination,  Autoplay } from 'swiper/modules';

  const gradients = [
    'linear-gradient(135deg, rgb(238, 174, 202), rgb(148, 187, 233))',
    'linear-gradient(135deg, rgb(24, 90, 157), rgb(72, 187, 181))',
    'linear-gradient(135deg, rgb(255, 204, 112), rgb(255, 159, 67))',
    'linear-gradient(135deg, rgb(42, 47, 50), rgb(68, 88, 77))',
    // 'linear-gradient(135deg, rgb(175, 205, 255), rgb(185, 255, 214))',
    'linear-gradient(135deg, rgb(125, 155, 220), rgb(145, 215, 184))',
    'linear-gradient(135deg, rgb(255, 94, 98), rgb(255, 162, 165))',
    // 'linear-gradient(135deg, rgb(200, 225, 250), rgb(240, 248, 255))',
    'linear-gradient(135deg, rgb(150, 195, 230), rgb(200, 228, 245))',
    'linear-gradient(135deg, rgb(108, 47, 217), rgb(60, 14, 98))',
    'linear-gradient(135deg, rgb(0, 150, 136), rgb(178, 223, 219))',
    'linear-gradient(135deg, rgb(255, 144, 47), rgb(255, 200, 87))'
  ]

  const cards = Array.from({ length: 10 });

  const getGradientStyle = (index) => {
    return {
      background: gradients[index % gradients.length],
      borderRadius: '12px',
      height: '550px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.5rem'
    }
  }

  const swiperBreakpoints = {
    200: { slidesPerView: 1, spaceBetween: 10 },
    600: { slidesPerView: 2, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 10 }
  }

  const modules = [Pagination, Autoplay]
</script>

<style lang="scss">

    .slider-section{
        .swiper{
            .swiper-slide{
                width: 100%;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .card{
              cursor: pointer;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: box-shadow 0.3s ease, transform 0.3s ease;
            }
            .card:hover {
              box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3),
                          inset 0 -4px 8px rgba(255, 255, 255, 0.1);
              transform: scale(0.99);
            }
            .card-info{
              h3{
                font-size: clamp(1rem, 2vw, 1rem);
                white-space: nowrap;
              }
              p{
                font-size: clamp(0.8rem, 1.7vw, 1rem);
              }
            }
        }
    }


</style>