<template>
    <div>
      <div
        v-for="(product, index) in paginatedProducts"
        :key="index"
        class="card-wrapper bg-gray-200 p-4 h-fit"
      >
        <ItemCard :product="product" />
      </div>
  
      <div class="pagination-buttons mt-4">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="mr-2"
        >
          Назад
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Вперед
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  import ItemCard from "@/components/ItemCard.vue";
  
  const props = defineProps({
    products: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 6,
    },
  });
  
  const currentPage = ref(1);
  
  const totalPages = computed(() =>
    Math.ceil(props.products.length / props.itemsPerPage)
  );
  
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * props.itemsPerPage;
    const end = start + props.itemsPerPage;
    return props.products.slice(start, end);
  });
  </script>
  