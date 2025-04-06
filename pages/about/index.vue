<template>
  <section class="section page">
    <div class="container">
      <LinkBlock pageName="Про компанію" />
      <div
        class="page-title border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] py-2"
      >
        <h1 class="text-[var(--dark-color)] font-bold text-2xl mb-5">
          {{ $t("about-page.title") }}
        </h1>
        <p
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2"
        >
          {{ $t("about-page.description") }}
        </p>
      </div>
      <FadeSlider />
      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] py-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.about-us.title") }}
        </h2>
        <p
          class="about-text text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
        >
          {{ $t("about-page.about-us.text") }}
        </p>
      </div>

      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] py-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.our-mission.title") }}
        </h2>
        <p
          class="about-text text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
        >
          {{ $t("about-page.our-mission.text") }}
        </p>
      </div>

      <div class="values-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] py-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.our-values.title") }}
        </h2>
        <!-- disableOnInteraction: false, -->


        <swiper
          :slidesPerView="3"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 3000,
          }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1240: { slidesPerView: 3, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 25 },
          }"
          :modules="modules"
          class="aboutSwiper"
        >
          <swiper-slide
            class="rounded-2xl"
            v-for="card in advantagesData"
            :key="card.id"
          >
            <div class="slide-wrapper">
              <div class="card-img">
                <img class="card-img" :src="card.img" alt="img" />
              </div>
              <div class="description p-4">
                <strong
                  class="text-[var(--dark-font-color)] dark:text-[var(--dark-font-color)] font-bold text-lg"
                >
                  {{ $t(`${card.title}`) }}
                </strong>
                <p
                  class=" text-[var(--dark-font-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
                >
                  {{ $t(`${card.text}`) }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] pb-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.our-advantages.title") }}
        </h2>
        <ul
          class="about-list text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
        >
          <li>
            <strong>
              {{ $t("about-page.our-advantages.content1.strong") }}
            </strong>
            {{ $t("about-page.our-advantages.content1.text") }}
          </li>
          <li>
            <strong>
              {{ $t("about-page.our-advantages.content2.strong") }}
            </strong>
            {{ $t("about-page.our-advantages.content2.text") }}
          </li>
          <li>
            <strong>
              {{ $t("about-page.our-advantages.content3.strong") }}
            </strong>
            {{ $t("about-page.our-advantages.content3.text") }}
          </li>
          <li>
            <strong>
              {{ $t("about-page.our-advantages.content4.strong") }}
            </strong>
            {{ $t("about-page.our-advantages.content4.text") }}
          </li>
          <li>
            <strong>
              {{ $t("about-page.our-advantages.content5.strong") }}
            </strong>
            {{ $t("about-page.our-advantages.content5.text") }}
          </li>
        </ul>
      </div>

      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] pb-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.why-us.title") }}
        </h2>
        <p
          class="about-text text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
        >
          {{ $t("about-page.why-us.text") }}
        </p>
      </div>

      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] pb-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.our-clients.title") }}
        </h2>
        <p
          class="about-text text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
        >
          {{ $t("about-page.our-clients.text") }}
        </p>
      </div>

      <div class="text-block mb-5">
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] pb-2 dark:border-[var(--dark-border-color)]"
        >
          {{ $t("about-page.contact-us.title") }}
        </h2>
        <p
          class="about-text text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
        >
          {{ $t("about-page.contact-us.text") }}
        </p>
        <p
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
        >
          <strong>korzinka.in.ua</strong> —
          {{ $t("about-page.summary") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
//components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import LinkBlock from "@/components/shared/LinkBlock.vue";
import FadeSlider from "~/components/blocks/FadeSlider.vue";

// images

import image1 from "/public/img/about/quality.png";
import image2 from "/public/img/about/inovations.png";
import image3 from "/public/img/about/rb.png";
import image4 from "/public/img/about/creation.png";

const advantagesData = [
  {
    id: 1,
    img: image1,
    title: "about-page.our-values.content1.title",
    text: "about-page.our-values.content1.text",
  },
  {
    id: 2,
    img: image2,
    title: "about-page.our-values.content2.title",
    text: "about-page.our-values.content2.text",
  },
  {
    id: 3,
    img: image3,
    title: "about-page.our-values.content3.title",
    text: "about-page.our-values.content3.text",
  },
  {
    id: 4,
    img: image4,
    title: "about-page.our-values.content4.title",
    text: "about-page.our-values.content4.text",
  },
];

const aboutBreakpoints = {
  200: { slidesPerView: 1, spaceBetween: 0 },
  400: { slidesPerView: 2, spaceBetween: 0 },
  1024: { slidesPerView: 3, spaceBetween: 10 },
  1440: { slidesPerView: 4, spaceBetween: 10 },
};
//   const aboutBreakpoints = {
//   1024: {
//     slidesPerView: 3,
//   },
//   768: {
//     slidesPerView: 2,
//   },
//   420: {
//     slidesPerView: 1,
//   },
// };

const modules = [Pagination, Autoplay];
</script>

<style lang="scss" scoped>
.values-block {
  .aboutSwiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      position: relative;
    }
  }
}

.swiper-slide {
  padding: 30px 15px 50px;
  display: flex;
  align-items: stretch;
  position: relative;
  flex-grow: 1;
  height: auto;

  .slide-wrapper {

    height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: var(--dark-color);

    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
      .card-img{
        position: absolute;

        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        img{
          padding: 2%;
          object-fit: scale-down;
        }
      }
      .description{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: relative;
        z-index: 5;
        box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2),
        inset -4px -4px 6px rgba(255, 255, 255, 0.1);

        background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%);

     
        @media screen and (max-width: 1440px) {
          &{
            padding-top: 30%;

          }
        }
     

      }

  }

  @media screen and (max-width: 768px) {
    & {
      padding: 30px 7px 50px;
    }
  }
}

.about-text,
.about-list {
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  border-radius: 10px;
  padding: 20px;
}

.dark .swiper-slide {
  .slide-wrapper {
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
      inset 4px 4px 6px rgba(0, 0, 0, 0.6),
      -4px -4px 8px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.6);
    background: var(--dark-grey);
    .description{
      background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%);

    }
  }
}

.dark {
  .about-text,
  .about-list {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3),
      -6px -6px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--dark-border-color);
  }
}
</style>
