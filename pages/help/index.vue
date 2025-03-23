<template>
  <div class="section page help-section">
    <div class="container">
      <LinkBlock pageName="Покупцю" />
      <div
        class="page-title border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] py-2"
      >
        <h1 class="text-[var(--dark-color)] font-bold text-2xl mb-5">
          {{ $t("buyers-page.title") }}
        </h1>
        <p
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2"
        >
          {{ $t("buyers-page.description") }}
        </p>
      </div>
    </div>
    <div class="mobile-bar">
      <ul>
        <li>
          <span>
            {{ $t("buyers-page.set-order.title") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("buyers-page.change-order.change-order.strong") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("buyers-page.change-order.warranty.title") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("buyers-page.faq.title") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("buyers-page.order-tracking.title") }}
          </span>
        </li>
      </ul>
    </div>
    <div class="container">
      <div
        class="content-wrapper grid grid-cols-[1fr_2fr] mt-0 mb-14 w-full gap-5 max-md:block"
      >
        <div
          class="links sticky top-[75px] w-full h-fit pb-8 flex flex-col gap-5 max-md:hidden"
        >
          <ul
            class="links-block border-[1px] bg-white dark:bg-[var(--dark-grey)] border-[var(--dark-color)] dark:border-[var(--dark-border-color)] py-8 px-5 rounded-xl flex flex-col gap-5"
          >
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                <!-- Як оформити замовлення? -->
                {{ $t("buyers-page.set-order.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="
                  iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)'
                "
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                <!-- Як змінити чи скасувати замовлення? -->
                {{ $t("buyers-page.change-order.change-order.strong") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="
                  iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)'
                "
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                <!-- Гарантії та повернення -->
                {{ $t("buyers-page.change-order.warranty.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="
                  iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)'
                "
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                <!-- Часті питання -->
                {{ $t("buyers-page.faq.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="
                  iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)'
                "
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                <!-- Відстеження замовлення -->
                {{ $t("buyers-page.order-tracking.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="
                  iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)'
                "
              />
            </li>
          </ul>

          <div class="page-img bg-[var(--primary-color)] rounded-xl">
            <img src="/public/img/cash-delivery.png" alt="cash-delivery" />
          </div>
        </div>
        <div class="info-blocks">
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.set-order.title") }}
            </h2>
            <p
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
            >
              {{ $t("buyers-page.set-order.text") }}
            </p>

            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                {{ $t("buyers-page.set-order.content1") }}
              </p>
              <p>
                {{ $t("buyers-page.set-order.content2") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.change-order.title") }}
            </h2>
            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.change-order.change-order.strong") }}
                </span>
                {{ $t("buyers-page.change-order.change-order.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.change-order.cancel-order.strong") }}
                </span>
                {{ $t("buyers-page.change-order.cancel-order.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.change-order.warranty.title") }}
            </h2>

            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.change-order.warranty.content1.strong") }}
                </span>
                {{ $t("buyers-page.change-order.warranty.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.change-order.warranty.content2.strong") }}
                </span>
                {{ $t("buyers-page.change-order.warranty.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.change-order.warranty.content3.strong") }}
                </span>
                {{ $t("buyers-page..change-orderwarranty.content3.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.faq.title") }}
            </h2>
            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.faq.content1.strong") }}
                </span>
                {{ $t("buyers-page.faq.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.faq.content2.strong") }}
                </span>
                {{ $t("buyers-page.faq.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.faq.content3.strong") }}
                </span>
                {{ $t("buyers-page.faq.content3.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0 dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.order-tracking.title") }}
            </h2>
            <p
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
            >
              {{ $t("buyers-page.order-tracking.text") }}
            </p>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("buyers-page.rest-question.title") }}
            </h2>
            <p
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
            >
              {{ $t("buyers-page.rest-question.text") }}
            </p>
            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.rest-question.tel") }}
                </span>

                +380 99 999 99 99
              </p>
              <p>
                <span class="font-semibold"> Email: </span>
                test@korzinka.in.com
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("buyers-page.rest-question.chat") }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed"
      >
        <h2
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
        >
          {{ $t("buyers-page.summary.title") }}
        </h2>

        <p
          class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3"
        >
          {{ $t("buyers-page.summary.text") }}
          <span class="font-semibold">test@korzinka.in.ua</span>.
        </p>
      </div>
      <div
        class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed mt-10 mb-14 text-center"
      >
        <p>
          <span class="font-semibold">
            {{ $t("buyers-page.summary.description") }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkBlock from "@/components/shared/LinkBlock.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";

import { useThemeStore } from "#imports";
import { onMounted, watch } from "vue";

const themeStore = useThemeStore();
const isClient = ref(false);

const iconFill = computed(() => {
  if (!isClient.value) return "";
  return themeStore.darkMode;
});

onMounted(() => {
  isClient.value = true;
});
</script>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;

@include mixins.mobileBar(768px);
</style>
