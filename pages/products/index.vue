<template>
  <div class="section page products-section">
    <!-- <main v-if="activeCategory.length" class="flex-grow p-1 mt-5"> -->
    <main class="flex-grow p-1 mt-5" v-if="loader">
      <div
        v-for="(item, index) in fetchedAllProducts"
        :key="index"
        class="group-title mb-10"
      >
      {{ console.log(item, "item") }}

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
            <!-- bg-gray-200 h-fit rounded-xl border-1px border-[var(--dark-color)] -->

            <!-- {{console.log(product, 'product') }} -->
            <div
              class="h-full"
            >
            <!-- :to="`/products/${item.group
                .replaceAll(' ', '-')
                .toLowerCase()}/${product.id}`"
              @click="selectProduct(product.product)" -->
              <!-- {{ console.log(item.group, product.id) }} -->
              <ItemCard :product="product" />
            </div>
            
          </div>
        </div>
      </div>
    </main>
    <main class="flex-grow p-1 mt-5" v-else>
      <div class="group-title mb-10">
        <h2
          class="text-2xl font-bold text-[var(--dark-color)] mb-4 z-10 relative"
        >
          Завантаження
        </h2>
      </div>

      <div class="cards-content mb-10">
        <div 
          class="card-wrapper w-fit"
          v-for="i in 10"
          :key="i"
        >
          <div class="h-full">
            <SkeletonItemCard />
          </div>

        </div>

      </div>

      

    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ItemCard from "@/components/ItemCard.vue";
import SkeletonItemCard from "~/components/SkeletonItemCard.vue";

const fetchedAllProducts = ref([]);

const loader = ref(false);

onMounted(async () => {
  try {
    const fetchProducts = await $fetch("/api/category?category=all");


    fetchProducts.data.forEach((item) => {
      // return item.products.length > 0
      if (item.products.length > 0) {
        fetchedAllProducts.value.push(item);
      }
    });

    loader.value = true;

    // if (fetchProducts.data.products.length > 0) {
    //   fetchedAllProducts.value = fetchProducts.data.products;
    // }
  } catch (error) {
    console.error("Error fetching data зкщв:", error);
  }

  console.log(fetchedAllProducts.value, "fetchedAllProducts");

  // console.log(fetchedAllProducts.value, 'fetchedAllProducts')
});

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
// @use './/styles/mixins.scss' as mixins;

// @include mixins.mobileBar(1024px);

// .products-section{
//   font-family: 'Montserrat', sans-serif;
// }
// .products-main{
//   @media screen and (max-width: 600px) {
//     width: 98vw;
//   }
// }
// .product-container{
//   width: 92vw;
//   margin: 0 auto;
//   padding-block: 20px;
// }
// .page-title{
//   p{
//     font-size: clamp(0.7rem, 2vw, 1.5rem);
//     @media screen and (max-width: 550px) {
//       display: none;
//     }
//   }
// }
// .icon {
//     width: 40px;
//     height: 40px;
//     margin-right: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: var(--dark-color);
//     border: 1px solid white;
//     border-radius: 25%;
//     position: relative;
//     box-shadow:
//         5px 5px 10px rgba(0, 0, 0, 0.2), /* Темная тень */
//         -5px -5px 10px rgba(255, 255, 255, 0.2); /* Светлая тень */

//     img {
//         width: 100%;
//         height: 100%;
//         margin: 10px;
//         padding: 7px;
//         border: 1px solid white;
//         border-radius: 25%;
//     }
// }
// ul{
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//     // align-items: stretch;
//     li{
//         display: flex;
//         align-items: center;
//         justify-content: flex-start;

//         cursor: pointer;
//         border-radius: 10px;
//         padding: 5px 10px;
//         transition: all ease 0.3s;
//         position: relative;
//         span{
//             color: var(--dark-color);
//             font-weight: 500;
//             font-size: clamp(12px, 1vw, 16px);
//             white-space: nowrap;
//         }
//         svg{
//             position: absolute;
//             top: 50%;
//             right: 0;
//             transform: translate(-50%, -50%);
//         }
//     }
//     @media screen and (min-width: 1024px) {
//       li:hover{
//         background: var(--secondary-color);
//         transition: all ease 0.3s;
//         span{
//             font-weight: 600;
//         }

//       }
//     }

// }

// .card-wrapper{
//   box-shadow:  20px 20px 60px #bebebe,
//       -20px -20px 60px #ffffff;
// }
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
