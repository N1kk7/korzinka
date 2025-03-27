<template>
  <div class="section page pay-delivery-section">
    <div class="container">
      <LinkBlock pageName="Оплата і доставка" />
      <div class="page-title border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] py-2">
        <h1 class="text-[var(--dark-color)] font-bold text-2xl mb-5">
          {{ $t("pay-delivery.title") }}
        </h1>
        <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2">
          {{ $t("pay-delivery.description") }}
        </p>
      </div>
    </div>
    <div class="mobile-bar">
      <ul>
        <li>
          <span>
            {{ $t("pay-delivery.payment.title") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("pay-delivery.delivery.title") }}
          </span>
        </li>
        <li>
          <span>
            {{ $t("pay-delivery.delivery-condition.title") }}
          </span>
        </li>
      </ul>
    </div>
    <div class="container">
      <div
        class="content-wrapper grid grid-cols-[2fr_1fr] mt-10 mb-14 w-full gap-7 max-md:block"
      >
        <div class="info-blocks">
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("pay-delivery.payment.title") }}
            </h2>
            <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3">
              {{ $t("pay-delivery.payment.text") }}
            </p>

            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.payment.content1.strong") }}
                </span>
                {{ $t("pay-delivery.payment.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.payment.content2.strong") }}
                </span>
                {{ $t("pay-delivery.payment.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.payment.content3.strong") }}
                </span>
                {{ $t("pay-delivery.payment.content3.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.payment.content4.strong") }}
                </span>
                {{ $t("pay-delivery.payment.content4.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] pb-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("pay-delivery.delivery.title") }}
            </h2>
            <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3">
              {{ $t("pay-delivery.delivery.text") }}
            </p>

            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery.content1.strong") }}
                </span>
                {{ $t("pay-delivery.delivery.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery.content2.strong") }}
                </span>
                {{ $t("pay-delivery.delivery.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery.content3.strong") }}
                </span>
                {{ $t("pay-delivery.delivery.content3.text") }}
              </p>
            </div>

            <div
              class="delivery-company flex justify-between items-stretch gap-5 bg-[var(--dark-color)] py-5 px-8 rounded-xl my-5"
            >
              <div
                class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center"
              >
                <img src="@/public/img/ukrpost.png" alt="delivery" />
              </div>
              <div
                class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center"
              >
                <img
                  src="@/public/img/delAuto-transparent.png"
                  alt="delivery"
                />
              </div>
              <div
                class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center"
              >
                <img src="@/public/img/nova-post.png" alt="delivery" />
              </div>
              <div
                class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center"
              >
                <img src="@/public/img/van-transparent.png" alt="delivery" />
              </div>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] p-2 font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)]"
            >
              {{ $t("pay-delivery.delivery-condition.title") }}
            </h2>
            <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-3">
              {{ $t("pay-delivery.delivery-condition.text") }}
            </p>
            <div
              class="block-paragraph text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery-condition.content1.strong") }}
                </span>
                {{ $t("pay-delivery.delivery-condition.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery-condition.content2.strong") }}
                </span>
                {{ $t("pay-delivery.delivery-condition.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery-condition.content3.strong") }}
                </span>
                {{ $t("pay-delivery.delivery-condition.content3.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  {{ $t("pay-delivery.delivery-condition.content4.strong") }}
                </span>
                {{ $t("pay-delivery.delivery-condition.content4.text") }}
              </p>
            </div>
          </div>
          <div
            class=" text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
          >
            <p>
              {{ $t("pay-delivery.summary") }}
              <span class="font-semibold">test@korzinka.in.ua</span>.
            </p>
          </div>
        </div>
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
                {{ $t("pay-delivery.payment.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)' "
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                {{ $t("pay-delivery.delivery.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)' "

              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-normal text-base leading-relaxed"
              >
                {{ $t("pay-delivery.delivery-condition.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                :fill="iconFill ? 'var(--dark-font-color)' : 'var(--dark-color)' "

              />
            </li>
          </ul>

          <div class="page-img bg-[var(--primary-color)] rounded-xl">
            <img src="/public/img/cash-delivery.png" alt="cash-delivery" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// components
  import LinkBlock from "@/components/shared/LinkBlock.vue";
  import SvgIcon from "@/components/shared/SvgIcon.vue";

  import { useThemeStore } from "#imports";
  import { onMounted, watch } from "vue";

  const themeStore = useThemeStore();
  const isClient = ref(false);

const iconFill = computed(() => {
  if (!isClient.value) return "";
  return themeStore.darkMode
});

  onMounted(() => {
  isClient.value = true;
});





</script>

<style scoped lang="scss">
  @use ".//styles/mixins.scss" as mixins;

  @include mixins.mobileBar(768px);

  .dark .links-block{
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3), -6px -6px 20px rgba(0, 0, 0, 0.4);

  }

  .block-paragraph{
    @include mixins.cardShadow;

  }

  .dark .block-paragraph{
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3), -6px -6px 20px rgba(0, 0, 0, 0.4);
    background: var(--dark-component-color);
  }

</style>
