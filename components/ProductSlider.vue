<template>
  <swiper :slides-per-view="3" :space-between="20" navigation pagination>
    <swiper-slide v-for="(product, index) in products" :key="index">
      <ItemCard :product="product" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import ItemCard from "@/components/ItemCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
