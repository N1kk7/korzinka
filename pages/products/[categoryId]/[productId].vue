<template>
  <div class="section page products-section">
    <!-- <main v-if="activeCategory.length" class="flex-grow p-1 mt-5"> -->
    <main class="flex-grow p-1 mt-5">
      <div
        v-for="(item, index) in fetchedCategoryProducts"
        :key="index"
        class="group-title mb-10"
      >
        <h2
          class="text-2xl font-bold text-[var(--dark-color)] mb-4 z-10 relative"
        >
          {{ item.translations.find((t) => t.language === $i18n.locale).title }}
        </h2>

        <div class="cards-content">
          <!-- grid grid-cols-1  2xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 -->
          <div
            v-for="(product, productIndex) in item.products"
            :key="productIndex"
            class="card-wrapper w-fit"
          >
            <ItemCard :product="product" :group="item.group" />
            <!-- </NuxtLink> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const fetchedCategoryProducts = ref([]);

onMounted(async () => {
  const fetchCategoryProducts = await $fetch("/api/products");

  if (fetchCategoryProducts.data.length > 0) {
    fetchedCategoryProducts.value = fetchedCategoryProducts.data.map(
      (item) => item
    );
  }
});

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
