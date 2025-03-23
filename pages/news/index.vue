<template>
  <div class="section page">
    <div
      class="max-w-screen-xl mx-auto pb-5 pt-2 px-5 sm:pb-10 sm:px-10 md:px-16 md:pb-16 relative border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
    >
      <LinkBlock pageName="Новини" />
      <div class="page-title border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] py-2 mb-5">
        <h1 class="text-[var(--dark-color)] font-bold text-2xl mb-5">
          <!-- Новини -->
          {{ $t("news-page.title") }}
        </h1>
        <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2">
          <!-- Будьте в курсі останніх подій! Тут ви знайдете всю важливу інформацію про новинки, акції,
                    заходи та інші події, пов'язані з нашою компанією. -->
          {{ $t("news-page.description") }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <div class="sm:col-span-5">
          <swiper
            :autoplay="{
              delay: 4500,
            }"
            :pagination="{
              el: '.custom-pagination',
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(item, index) in news"
              :style="{
                background:
                  gradientColors[
                    Math.floor(Math.random() * gradientColors.length)
                  ],
              }"
              :key="index"
            >
              <a href="#">
                <div
                  class="text-center overflow-hidden bg-contain bg-no-repeat bg-center"
                  :style="{
                    minHeight: '300px',
                    backgroundImage: `url(${item.img})`,
                  }"
                  title="Woman holding a mug"
                ></div>
              </a>
              <div
                class="mt-3 bg-white dark:bg-[var(--dark-grey)] rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
              >
                <div class="px-4 py-2">
                  <a
                    href="#"
                    class="block text-gray-900 dark:text-[var(--dark-font-color)] font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    {{ item.title }}
                  </a>
                  <p class="text-gray-700 dark:text-gray-500 text-base mt-2">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="custom-pagination mt-5"></div>
        </div>

        <div
          class="cards-wrapper sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div
            class="news-card relative flex justify-between flex-col dark:border dark:border-[var(--dark-border-color)] dark:rounded-tl-[5px] dark:rounded-tr-[5px]"
            v-for="(item, index) in showedArr"
            :key="index"
          >
            <div
              class="img-wrapper flex-1 bg-cover text-center relative overflow-hidden bg-[var(--dark-color)] dark:bg-[#0d161f]  dark:border-b dark:border-[var(--dark-border-color)] w-full rounded-tl-[5px] rounded-tr-[5px] "
            >
              <img :src="item.img" class="w-full h-full" alt="img" />
            </div>
            <div
              class="content-block flex-1 px-2 pb-2 border-l-[1px] border-r-[1px] border-b-[1px] border-[var(--primary-color)] dark:border-hidden dark:bg-[var(--dark-grey)] flex flex-col justify-between h-full"
            >
              <h4
                class="text-gray-900 dark:text-[var(--dark-font-color)] inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {{ item.title }}
              </h4>
              <p
                class="card-description text-gray-700 dark:text-gray-500 text-sm line-clamp-2 text-ellipsis"
              >
                {{ item.description }}
              </p>
              <div class="bottom-group flex items-center justify-between mt-2">
                <div
                  class="time-posting items-baseline flex justify-between flex-col relative"
                >
                  <span class="text-[0.7rem] text-[var(--secondary-color)]">
                    17.12.2024
                  </span>
                  <div
                    class="separator w-[1px] h-[0.7rem] bg-[var(--primary-color)] hidden"
                  />

                  <span class="text-[0.7rem] text-[var(--secondary-color)]">
                    17:12
                  </span>
                </div>

                <button
                  class="read-more border-[1px] bg-[var(--dark-color)] text-[var(--light-color)] px-2 py-1 rounded-[5px]"
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="button-controls w-[100%] flex items-center justify-end mt-5 gap-10"
      >
        <button
          @click="controlShowedArr('prev')"
          class="border-[1px] border-[var(--primary-color)] rounded-lg"
        >
          Prev
        </button>
        <button
          class="border-[1px] border-[var(--primary-color)] rounded-lg"
          @click="controlShowedArr('next')"
        >
          Next
        </button>
      </div>
    </div>

    <div class="summary-block">
      <div class="container">
        <h2 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-2xl mb-5">
          <!-- Будьте з нами на хвилі новин! -->
          {{ $t("news-page.summary.title") }}
        </h2>
        <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2">
          <!-- Не пропустіть жодної важливої події — слідкуйте за нашими оновленнями, щоб завжди бути в курсі останніх новин, акцій та новинок.
                    Ми постійно працюємо, щоб запропонувати вам найактуальнішу інформацію про наші товари, послуги та соціальні ініціативи.
                    Долучайтеся до нашої спільноти, отримуйте вигідні пропозиції першими та будьте частиною важливих змін! -->
          {{ $t("news-page.summary.description") }}
        </p>

        <div
          class="newsletter-form relative bg-[var(--dark-color)] dark:bg-[#0d161f] dark:border dark:border-[var(--dark-border-color)] mx-auto p-5 rounded-lg flex items-center justify-center mt-10 mb-5 h-auto"
        >
          <div class="img-block relative w-32 h-auto bottom-10">
            <img class="dog" src="/public/img/only-dog.png" alt="dog" />
            <img
              class="png w-10 absolute bottom-2 -right-4"
              src="/public/icon-pack/transfer.png"
              alt="img"
            />
          </div>
          <div class="form-wrapper mt-8 lg:mt-0 lg:ml-8 z-10">
            <form aria-labelledby="newsletter-headline">
              <div class="flex flex-col items-center justify-between gap-4">
                <span class="text-[var(--light-color)] text-lg">
                  <!-- Залишайтесь з нами на звʼязку! -->
                  {{ $t("news-page.summary.mail.title") }}
                </span>
                <div class="input-wrapper sm:flex items-center">
                  <input
                    name="EMAIL"
                    type="email"
                    required="required"
                    :placeholder="$t('news-page.summary.mail.placeholder')"
                    aria-label="Email address"
                    class="px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
                  />
                  <div
                    class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0 max-sm:flex max-sm:justify-end"
                  >
                    <button
                      type="submit"
                      class="block px-5 py-3 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <!-- Підписатись -->
                      {{ $t("news-page.summary.mail.btn") }}
                    </button>
                  </div>
                </div>
                <span
                  class="form-text text-[var(--light-color)] text-lg whitespace-nowrap"
                >
                  <!-- Та будьте в курсі останніх знижок та новин korzinka.in.ua -->
                  {{ $t("news-page.summary.mail.text") }}
                </span>
              </div>
            </form>
            <!-- <p class="mt-3 text-sm leading-5 text-gray-500">
                            I will never spam or share your email under any circustance.
                        </p> -->
          </div>
        </div>

        <h2 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-2xl mt-16 mb-20">
          <!-- Дякуємо що обрали  -->
          {{ $t("news-page.summary.text") }}
          <strong> www.korzinka.in.ua ! </strong>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import LinkBlock from "@/components/shared/LinkBlock.vue";
import { newsData } from "@/data/News/NewsData.ts";
import { computed, reactive } from "vue";

// Данные для новостей
const news = newsData;

const modules = [Pagination, Autoplay];

const showedArr = ref([]);
const nextArrBtn = ref(false);
const prevArrBtn = ref(false);

const gradientColors = [
  "linear-gradient(to right, #ff7e5f, #feb47b)",
  "linear-gradient(to right, #6a11cb, #2575fc)",
  "linear-gradient(to right, #f953c6, #b91d73)",
  "linear-gradient(to right, #ff4e50, #f9d423)",
  "linear-gradient(to right, #00c6ff, #0072ff)",
  "linear-gradient(to right, #43cea2, #185a9d)",
  "linear-gradient(to right, #30cfd0, #330867)",
  "linear-gradient(to right, #fa709a, #fee140)",
  "linear-gradient(to right, #8e2de2, #4a00e0)",
  "linear-gradient(to right, #76b852, #8dc26f)",
];

onMounted(() => {
  news.forEach((element, index) => {
    index <= 5 ? showedArr.value.push(element) : null;
  });
});

const controlShowedArr = (method) => {
  if (method === "next") {
    const lastElem = showedArr.value[showedArr.value.length - 1];
    const lastNewsElem = news[news.length - 1];

    if (lastElem.id !== lastNewsElem.id) {
      showedArr.value.shift();

      news.forEach((element) => {
        element.id === lastElem.id + 1 ? showedArr.value.push(element) : null;
      });
      nextArrBtn.value = true;
    }
  } else if (method === "prev") {
    const firstElem = showedArr.value[0];
    if (firstElem.id === 1) {
      return;
    }
    showedArr.value.pop();

    news.forEach((element) => {
      element.id === firstElem.id - 1 ? showedArr.value.unshift(element) : null;
    });
    prevArrBtn.value = true;
  }
};
</script>

<style lang="scss">
.swiper-pagination {
  display: none;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.custom-pagination .swiper-pagination-bullet {
  width: 100%;
  height: 10px;
  background-color: var(--active-btn);
  // border-radius: 50%;
  border-radius: 2px;
  cursor: pointer;
}

.read-more {
  font-size: clamp(11px, 1.1vw, 16px);
}

.read-more:hover {
  background: var(--active-btn);
}

.newsletter-form {
  max-width: 800px;
  .img-block {
    .dog {
      position: relative;
      top: 10%;
      width: clamp(100px, 33vw, 150px);
      max-width: unset;
    }
    .png {
      position: absolute;
      bottom: 0%;
      left: 90%;
    }
    @media screen and (max-width: 420px) {
      & {
        position: absolute;
        height: fit-content;
        top: 25%;
        left: -40px;
        .png {
          left: 60%;
        }
      }
    }
    // @media screen and (max-width: 420px) {
    //     .png{
    //         position: absolute;
    //         bottom: 0;
    //         left: 20%;
    //     }
    // }
    // &{
    //     position: absolute;
    //     top: -20px;
    //     left: -40px;
    // }
  }
  .form-wrapper {
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 639px) {
      & {
        position: relative;
        top: 15px;
      }
      .form-text {
        position: relative;
        max-width: 80vw;
        white-space: normal;
        // top: 20px;
        // color: var(--dark-color);
      }
    }
  }
}

@media screen and (max-width: 390px) {
  .cards-wrapper {
    grid-template-columns: repeat(1, 1fr);
    .news-card {
      flex-direction: row;
    }
    .bottom-group {
      gap: 5px;
      flex-wrap: wrap;
    }
    .img-wrapper {
      border-top-right-radius: 0;
      border-bottom-left-radius: 5px;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 30vw;
      height: 100%;
      img {
        object-fit: contain;
      }
    }
    .time-posting {
      flex-direction: row;
      justify-content: space-between;
      .separator {
        display: block;
        // gap: 5px;
        // align-items: center;
      }
    }
    .content-block {
      border-left: unset;
      border-top: 1px solid var(--dark-color);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
// @media screen and (min-width: 640px) {
//     .follow-btn{
//         display: flex;
//         justify-content: flex-end;
//     }
// }
</style>
