<template>
  <div class="items-section h-[100vh]">
    <div class="admin-container mx-2 pb-2 flex flex-col">
      <div class="top-block flex justify-between items-center mt-5">
        <div class="page-name">
          <h1 class="mb-0">Товари</h1>
        </div>
        <div class="flex items-center justify-center gap-5 px-5">
          <div class="nav bg-[#d5ddeb] py-2 px-3 rounded-lg">
            <ul class="flex items center gap-1">
              <li
                :class="activeGroup === 'products' ? 'el-active' : ''"
                @click="showGroup('products')"
              >
                <span> Товари </span>
              </li>
              <li
                :class="activeGroup === 'categories' ? 'el-active' : ''"
                @click="showGroup('categories')"
              >
                <span> Категорії </span>
              </li>
              <!-- <li>
                            <span>
                                Пакети для сміття
                            </span>
                        </li>
                        <li>
                            <span>
                                Пакети фасувальні
                            </span>
                        </li>
                        <li>
                            <span>
                                Стрейтч плівка
                            </span>
                        </li>
                        <li>
                            <span>
                                Рукавички 
                            </span>
                        </li> -->
            </ul>
          </div>
          <DashBurger />
        </div>
      </div>
      <div
        class="settings-row grid grid-cols-[2fr_1fr] items-center gap-5 my-5"
      >
        <div class="search-block flex justify-start items-stretch gap-5">
          <div
            class="search-wrapper border-[1px] border-[var(--dark-color)] rounded-lg flex items-center gap-2 pl-2"
          >
            <input
              type="text"
              class="text-[var(--dark-color)]"
              placeholder="Пошук"
            />
            <button class="search-btn">
              <SvgIcon
                name="search-icon"
                size="micro"
                fill="var(--dark-color)"
              />
            </button>
          </div>
        </div>
        <div class="settings-block flex justify-end items-stretch gap-5 px-5">
          <button class="text-nowrap" @click="openPopup('AddCategory')">
            Додати категорію
          </button>
          <button class="text-nowrap" @click="openPopup('AddProduct')">
            Додати товар
          </button>
          <!-- <button>
                        <SvgIcon name="burger-menu" size="micro" fill="var(--dark-color)" />
                    </button> -->
        </div>
      </div>

      <div class="w-full px-6 py-6 mx-auto">
        <div v-if="activeGroup === 'categories'" class="flex flex-wrap -mx-3">
          <div class="flex-none w-full max-w-full px-3">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
              ref="categoryElem"
            >
              <div
                class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
              >
                <h6 class="dark:text-white">Категорії товарів</h6>
              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table
                    class="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500"
                  >
                    <thead class="align-bottom">
                      <tr>
                        <th
                          class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Author
                        </th>
                        <th
                          class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Function
                        </th>
                        <th
                          class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Status
                        </th>
                        <th
                          class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Employed
                        </th>
                        <th
                          class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Skeleton -->
                      <template v-if="loadingCategoryState">
                        <tr v-for="i in 5" :key="'skeleton-' + i">
                          <!-- Author -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="flex items-center">
                              <div class="skeleton w-9 h-9 rounded-xl"></div>
                              <div class="flex flex-col ml-4">
                                <div class="skeleton w-32 h-4 mb-1"></div>
                                <div class="skeleton w-24 h-3"></div>
                              </div>
                            </div>
                          </td>
                          <!-- Function -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-28 h-4 mb-1"></div>
                            <div class="skeleton w-20 h-3"></div>
                          </td>
                          <!-- Status -->
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div
                              class="skeleton w-16 h-6 rounded-lg mx-auto"
                            ></div>
                          </td>
                          <!-- Employed -->
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-16 h-3 mx-auto"></div>
                          </td>
                          <!-- Edit -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-12 h-3 mx-auto"></div>
                          </td>
                        </tr>
                      </template>

                      <!-- Data -->
                      <template v-else>
                        <tr
                          v-for="category in fetchedCategories"
                          :key="category.id"
                        >
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="flex items-center">
                              <img
                                :src="category.categoryImg"
                                class="w-9 h-9 rounded-xl"
                                alt="user1"
                              />
                              <div class="flex flex-col ml-4">
                                <h6
                                  class="mb-0 text-sm leading-normal dark:text-white"
                                >
                                  John Michael
                                </h6>
                                <p
                                  class="mb-0 text-xs text-slate-400 dark:text-white"
                                >
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <p
                              class="mb-0 text-xs font-semibold text-slate-400 dark:text-white"
                            >
                              Manager
                            </p>
                            <p
                              class="mb-0 text-xs text-slate-400 dark:text-white"
                            >
                              Organization
                            </p>
                          </td>
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <span
                              class="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 py-1.4 text-xs rounded-xl text-white"
                              >Online</span
                            >
                          </td>
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <span class="text-xs text-slate-400 dark:text-white"
                              >23/04/18</span
                            >
                          </td>
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <a
                              href="javascript:;"
                              class="text-xs text-slate-400 dark:text-white"
                              >Edit</a
                            >
                          </td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- card 2 -->

        <div v-else class="flex flex-wrap -mx-3">
          <div class="flex-none w-full max-w-full px-3">
            <div
              class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border overflow-hidden"
              ref="productElem"
            >
              <div
                class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
              >
                <h6 class="dark:text-white">Товари</h6>
              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table
                    class="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500"
                  >
                    <thead class="align-bottom">
                      <tr>
                        <th
                          class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Товар
                        </th>
                        <th
                          class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Ціна
                        </th>
                        <th
                          class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Статус товару
                        </th>
                        <th
                          class="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-normal whitespace-nowrap text-slate-400 opacity-70"
                        >
                          Категорія
                        </th>
                        <th
                          class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-solid shadow-none dark:border-white/40 dark:text-white tracking-normal whitespace-nowrap"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="border-t">
                      <template v-if="loadingProductState">
                        <tr v-for="i in 5" :key="'skeleton-' + i">
                          <!-- Author -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="flex items-center">
                              <div class="skeleton w-9 h-9 rounded-xl"></div>
                              <div class="flex flex-col ml-4">
                                <div class="skeleton w-32 h-4 mb-1"></div>
                                <div class="skeleton w-24 h-3"></div>
                              </div>
                            </div>
                          </td>
                          <!-- Function -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-28 h-4 mb-1"></div>
                            <div class="skeleton w-20 h-3"></div>
                          </td>
                          <!-- Status -->
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div
                              class="skeleton w-16 h-6 rounded-lg mx-auto"
                            ></div>
                          </td>
                          <!-- Employed -->
                          <td
                            class="px-6 py-3 text-center align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-16 h-3 mx-auto"></div>
                          </td>
                          <!-- Edit -->
                          <td
                            class="px-6 py-3 align-middle bg-transparent border-b dark:border-white/40"
                          >
                            <div class="skeleton w-12 h-3 mx-auto"></div>
                          </td>
                        </tr>
                      </template>
                      <template v-else>
                        <tr
                          v-for="product in fetchedProducts"
                          :key="product.id"
                        >
                          <td
                            class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                          >
                            <div class="flex px-2">
                              <div>
                                <img
                                  :src="product.img[0].path"
                                  class="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9"
                                  alt="spotify"
                                />
                              </div>
                              <div class="my-auto">
                                <h6
                                  class="mb-0 text-sm leading-normal dark:text-white"
                                >
                                  {{
                                    product.translations.find(
                                      (translation) =>
                                        translation.language === "uk"
                                    ).title
                                  }}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td
                            class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                          >
                            <p
                              class="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60"
                            >
                              {{ `${product.price} UAH` }}
                            </p>
                          </td>
                          <td
                            class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                          >
                            <span
                              v-if="product.visible"
                              class="text-xs font-semibold leading-tight dark:text-white dark:opacity-60"
                              >Активний</span
                            >

                            <span
                              v-else
                              class="text-xs font-semibold leading-tight dark:text-white dark:opacity-60"
                              >Не активний
                            </span>
                          </td>
                          <td
                            class="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                          >
                            <div class="flex items-center justify-center">
                              <span
                                class="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60"
                                >{{ product.category.group }}</span
                              >
                              <div>
                                <div
                                  class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200"
                                >
                                  <div
                                    class="flex flex-col justify-center w-3/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap"
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                          >
                            <button
                              class="inline-block px-5 py-2.5 mb-0 font-bold text-[var(-dark-color)] text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25"
                            >
                              <!-- <i class="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60"></i> -->
                              Edit
                            </button>
                          </td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
import { useModalStore } from "#imports";
import DashBurger from "@/components/shared/DashBurger.vue";
import gsap from "gsap";

const modalStore = useModalStore();

const loadingCategoryState = ref(false);
const fetchedCategories = ref([]);
const categoryElem = ref(null);
const loadingProductState = ref(false);
const fetchedProducts = ref([]);
const productElem = ref(null);
const productCategoryElem = ref(null);

const activeGroup = ref("products");

const openPopup = (modal) => {
  switch (modal) {
    case "AddProduct":
      modalStore.showModal("AddProduct");
      break;
    case "AddCategory":
      modalStore.showModal("AddCategory");
      break;
  }
};

watch(fetchedCategories, async () => {
  console.log("watch fetchedCategories");
  if (categoryElem.value) {
    const prevHeight = categoryElem.value.clientHeight;
    await nextTick();
    const newHeight = categoryElem.value.clientHeight;

    gsap.fromTo(
      categoryElem.value,
      { height: prevHeight },
      { height: newHeight, duration: 0.5, ease: "power2.out" }
    );
  }
});
watch(fetchedProducts, async () => {
  console.log("watch fetchedproducts");
  if (productElem.value) {
    const prevHeight = productElem.value.clientHeight;
    await nextTick();
    const newHeight = productElem.value.clientHeight;

    gsap.fromTo(
      productElem.value,
      { height: prevHeight },
      { height: newHeight, duration: 0.5, ease: "power2.out" }
    );
  }
});

definePageMeta({
  layout: "admin",
});

const showGroup = (group) => {
  switch (group) {
    case "products":
      fetchProduct();
      activeGroup.value = "products";
      break;
    case "categories":
      fetchCategory();
      activeGroup.value = "categories";
      break;
  }
};

const deleteCategory = (category) => {
  // console.log(category.language.title)
  modalStore.showModal("DeleteCategory", {
    categoryId: category.id,
    categoryName: category.language.title,
  });
};

const fetchCategory = async () => {
  loadingCategoryState.value = true;
  try {
    const getCategories = await $fetch("/api/category");

    if (getCategories.data.length > 0) {
      fetchedCategories.value = getCategories.data.map((item) => ({
        ...item,
        language: item.translations.find(
          (translation) => translation.language === "uk"
        ),
      }));
    }
    loadingCategoryState.value = false;
  } catch (error) {
    console.log(error.message, "Something went wrong");
  }
};

const fetchProduct = async () => {
  loadingProductState.value = true;

  try {
    const getProducts = await $fetch("/api/products");

    if (getProducts.data.length > 0) {
      fetchedProducts.value = getProducts.data.map((item) => item);
    }

    loadingProductState.value = false;
  } catch (error) {
    console.log(error.message, "Something went wrong");
  }
};

onMounted(() => {
  fetchProduct();
});
</script>

<style scoped lang="scss">
.table-header {
  @apply px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b dark:border-white/40 text-xs tracking-normal text-slate-400 opacity-70;
}

.table-cell {
  @apply p-2 align-middle bg-transparent border-b dark:border-white/40 text-slate-400;
}

.skeleton-cell {
  @apply p-2 align-middle bg-transparent border-b dark:border-white/40 flex items-center;
}

.skeleton {
  @apply bg-gray-300 dark:bg-gray-600 animate-pulse;
}
// .table-header {
//   padding: 12px 24px; // px-6 py-3
//   font-weight: bold; // font-bold
//   text-align: left; // text-left
//   text-transform: uppercase; // uppercase
//   vertical-align: middle; // align-middle
//   background-color: transparent; // bg-transparent
//   border-bottom: 1px solid rgba(255, 255, 255, 0.4); // dark:border-white/40
//   font-size: 12px; // text-xs
//   letter-spacing: normal; // tracking-normal
//   color: rgb(148, 163, 184); // text-slate-400
//   opacity: 0.7; // opacity-70
// }

// .table-cell {
//   padding: 8px; // p-2
//   vertical-align: middle; // align-middle
//   background-color: transparent; // bg-transparent
//   border-bottom: 1px solid rgba(255, 255, 255, 0.4); // dark:border-white/40
//   color: rgb(148, 163, 184); // text-slate-400
// }

// .skeleton-cell {
//   padding: 8px; // p-2
//   vertical-align: middle; // align-middle
//   background-color: transparent; // bg-transparent
//   border-bottom: 1px solid rgba(255, 255, 255, 0.4); // dark:border-white/40
//   display: flex; // flex
//   align-items: center; // items-center
// }

// .skeleton {
//   background-color: rgb(226, 232, 240); // Светло-серый bg-gray-200
//   animation: pulse 1.5s infinite ease-in-out;
//   border-radius: 4px;
// }

// // Анимация скелетона
// @keyframes pulse {
//   0% {
//     opacity: 1;
//     background-color: rgb(226, 232, 240); // Светлее
//   }
//   50% {
//     opacity: 0.6;
//     background-color: rgb(203, 213, 225); // Чуть темнее
//   }
//   100% {
//     opacity: 1;
//     background-color: rgb(226, 232, 240);
//   }
// }

// // Для темной темы
// @media (prefers-color-scheme: dark) {
//   .skeleton {
//     background-color: rgb(107, 114, 128); // Светлый серый в темной теме
//   }

//   @keyframes pulse {
//     0% {
//       opacity: 1;
//       background-color: rgb(107, 114, 128);
//     }
//     50% {
//       opacity: 0.6;
//       background-color: rgb(75, 85, 99); // Чуть темнее
//     }
//     100% {
//       opacity: 1;
//       background-color: rgb(107, 114, 128);
//     }
//   }
// }

.admin-container {
  height: -webkit-fill-available;
}
button {
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid var(--light-color);
  border-radius: 5px;
}
.search-btn {
  border: none;
  border-left: 1px solid var(--dark-color);
  border-radius: unset;
}
.nav {
  ul {
    li {
      padding: 2px 5px;
      border-radius: 5px;
      span {
        cursor: pointer;
        color: var(--dark-color);
      }
    }
    li:hover {
      background: var(--secondary-color);
      span {
        color: var(--bg-color);
      }
    }
    .el-active,
    .el-active:hover {
      background: var(--dark-color);
      cursor: default;
      span {
        color: var(--bg-color);
      }
    }
  }
}
</style>
