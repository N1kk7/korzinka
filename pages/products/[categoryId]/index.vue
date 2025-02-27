<template>
  <div class="section page products-section">
    <main class="flex-grow p-1 mt-5" v-if="fetchedCategoriesById.length">
      <div
        v-for="(item, index) in fetchedCategoriesById"
        :key="index"
        class="group-title mb-10"
      >
        <h2
          class="text-2xl font-bold text-[var(--dark-color)] mb-4 z-10 relative"
        >
          {{ item.translations.find((t) => t.language === $i18n.locale).title }}
        </h2>

        <div v-if="!item.products.length">
          <h2>Нажаль в цій категорії поки що немає товарів</h2>
        </div>

        <div class="cards-content" v-else>
          <div
            v-for="(product, productIndex) in item.products"
            :key="productIndex"
            class="card-wrapper w-fit"
          >
            <NuxtLink
              :to="`/products/${item.group
                .replaceAll(' ', '-')
                .toLowerCase()}/${product.id}`"
              @click="selectProduct(product.product)"
            >
              <ItemCard :product="product" :group="item.group" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useIndexStore } from "#imports";
import { onMounted, ref } from "vue";
import ItemCard from "@/components/ItemCard.vue";

const indexStore = useIndexStore();

const route = useRoute();

const fetchedCategoriesById = ref([]);

onMounted(async () => {
  const groupName = route.path.replace("/products/", "");

  const fetchedCategories = computed(() => indexStore.fetchedCategories);

  const getCategoryId = fetchedCategories.value.find(
    (item) => item.group.replaceAll(" ", "-").toLowerCase() === groupName
  ).id;

  try {
    const fetchCategoryById = await $fetch(
      `/api/category?categoryId=${getCategoryId}`
    );
    console.log(fetchCategoryById, "fetchCategoryById");

    if (fetchCategoryById?.data) {
      fetchedCategoriesById.value.push(fetchCategoryById.data);
    }

    console.log(fetchedCategoriesById.value, "fetchedCategoriesById");
  } catch (error) {
    console.error(error.message, "error from getData");
  }
});

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
.cards-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;

  .card-wrapper {
    width: calc(50% - 5px);
    @media screen and (max-width: 1024px) {
      width: calc(33.3% - 7px);
    }
    @media screen and (max-width: 764px) {
      width: calc(50% - 5px);
    }
    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }
}
</style>
