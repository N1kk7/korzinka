<template>
  <section class="mt-8 mb-12">
    <div class="px-5 mt-5 mb-8">
      <h2 class="text-xl font-semibold text-[var(--dark-color)] sm:text-2xl">
        Придбати
        {{
          productData?.translations?.find((tr) => tr.language === $i18n.locale)
            .title
        }}
        за вигідною ціною korzinka.in.ua!
        <!-- {{console.log($i18n.locale, 'log locale')}} -->

        <!-- {{console.log(product?.translations, 'log product')}} -->
      </h2>
      <p class="text-xl font-sm text-[var(--dark-color)] sm:text-2xl">
        Детальний опис товару: характеристики, особливості та застосування.
        Дізнайтесь про все, що потрібно про наш продукт!
      </p>
    </div>
    <div class="font-sans tracking-wide max-md:mx-auto">
      <div
        class="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2"
      >
        <div class="lg:col-span-3 h-full p-8">
          <div
            class="relative h-full flex items-center justify-center lg:min-h-[580px]"
          >
            <img
              :src="productData.img[0].path"
              alt="Product"
              class="lg:w-3/5 w-3/4 h-full object-contain max-lg:p-8"
            />

            <div
              class="flex space-x-4 items-end absolute right-0 max-md:right-4 md:bottom-4 bottom-0"
            >
              <div
                class="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 fill-[#333] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div
                class="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">
              {{
                productData?.translations?.find(
                  (tr) => tr.language === $i18n.locale
                ).title
              }}
            </h2>

            <div class="flex space-x-1 mt-2">
              <svg
                class="w-4 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-800">Ціна</h3>
            <p class="text-gray-800 text-3xl font-bold mt-4">
              {{ productData.price }} грн
            </p>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-800">
              Оберіть опцію товару
            </h3>
            <div class="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
              ></button>
              <button
                type="button"
                class="w-10 h-10 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
              ></button>
              <button
                type="button"
                class="w-10 h-10 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
              ></button>
              <button
                type="button"
                class="w-10 h-10 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
              ></button>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-800">Кількість</h3>
            <div
              class="flex divide-x border w-max mt-4 rounded overflow-hidden"
            >
              <button
                type="button"
                class="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 fill-current inline"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg"
              >
                1
              </button>
              <button
                type="button"
                class="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 fill-current inline"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
            >
              Купити зараз
            </button>
            <button
              type="button"
              class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
            >
              Додати в кошик
            </button>
          </div>

          <div class="flex flex-wrap items-center text-sm text-gray-800 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current w-6 mr-3"
              viewBox="0 0 48 48"
            >
              <path d="M15.5 33.3h19.1v2H15.5z" data-original="#000000" />
              <path
                d="M45.2 35.3H43v-2h2.2c.4 0 .8-.4.8-.8v-9.1c0-.4-.3-.6-.5-.7l-3.2-1.3c-.3-.2-.8-.5-1.1-1l-6.5-10c-.1-.2-.4-.3-.7-.3H2.8c-.4 0-.8.4-.8.8v21.6c0 .4.4.8.8.8h3.9v2H2.8C1.3 35.3 0 34 0 32.5V10.9c0-1.5 1.3-2.8 2.8-2.8h31.3c1 0 1.9.5 2.4 1.3l6.5 10 .4.4 2.9 1.2c1.1.5 1.7 1.4 1.7 2.5v9.1c0 1.4-1.3 2.7-2.8 2.7z"
                data-original="#000000"
              />
              <path
                d="M26.5 21H3.9v-9.4h22.6zM5.9 19h18.6v-5.4H5.9zm32.9 2H27.9v-9.4h6.3zm-8.9-2h5.7L33 13.6h-3.1zm-19 20.9c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm27.9 9.2c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z"
                data-original="#000000"
              />
            </svg>
            Безкоштовна доставка при замовленні товару на суму від 2000грн
          </div>
        </div>
      </div>

      <div class="mt-8 max-w-2xl px-6">
        <h3 class="text-lg font-bold text-gray-800">Параметри товару</h3>

        <ul class="grid sm:grid-cols-2 gap-3 mt-4">
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Вага {{ productData.productWeight }}
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Розмір {{ productData.productSize }}
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Колір
            {{
              productData.translations.find(
                (tr) => tr.language === $i18n.locale
              ).productColor
            }}
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Щильність {{ productData.productDensity }}
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Об'єм {{ productData.productCapacity }}
          </li>
          <li class="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            Кількість в упаковці
          </li>
        </ul>

        <div class="mt-8">
          <h3 class="text-lg font-bold text-gray-800">Опис товару</h3>
          <p class="text-sm text-gray-600 mt-4">
            {{
              productData.translations.find(
                (tr) => tr.language === $i18n.locale
              ).productDescription
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useProductStore } from "#imports";

const productStore = useProductStore();

const product = productStore;
const productData = product.selectedProducts;

onUnmounted(() => {
  productStore.setSelectedProducts(null);
});
</script>
