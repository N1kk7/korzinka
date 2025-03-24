<template>
  <div class="mobile-menu-section">
    <section class="mobile-menu overflow-x-clip">
      <div
        :class="{ 'search-section': true, 'active-searchSection': searchBlock }"
      >
        <div class="search-wrapper">
          <input type="text" :placeholder="$t('search-block.placeholder')" />
          <div class="button-wrapper">
            <button class="search-btn">
              <SvgIcon
                name="mobile-search"
                size="micro"
                fill="var(--main-accent)"
              />
            </button>
            <button class="clear-btn" @click="searchControl()">
              <SvgIcon
                name="close-btn"
                size="micro"
                fill="var(--main-accent)"
              />
            </button>
          </div>
        </div>
      </div>
      <ul class="list-menu">
        <li @click="searchBlock ? (searchBlock = false) : null">
          <NuxtLink :to="localePath('/')">
            <SvgIcon
              name="mobile-home"
              size="medium"
              fill="var(--light-color)"
            />
            <span>
              {{ $t("mobile-menu.main") }}
            </span>
          </NuxtLink>
        </li>
        <li @click="searchBlock ? (searchBlock = false) : null">
          <NuxtLink :to="localePath('/products')">
            <SvgIcon
              name="mobile-category"
              size="medium"
              fill="var(--light-color)"
            />
            <span>
              {{ $t("header.products") }}
            </span>
          </NuxtLink>
        </li>
        <li @click="searchControl()">
          <SvgIcon
            name="mobile-search"
            size="medium"
            fill="var(--light-color)"
          />
          <span>
            {{ $t("search-block.search-btn") }}
          </span>
        </li>
        <li @click="searchBlock ? (searchBlock = false) : null" class="relative">
          <NuxtLink :to="localePath('/cart')">
            <SvgIcon name="cart-icon" size="medium" fill="var(--light-color)" />
            <client-only>
              <span 
                class="cart-count absolute -top-3 right-1 w-6 h-6 flex justify-center items-center text-xs font-semibold text-white bg-red-600 rounded-full dark:bg-red-600 pt-[0!important]"
                v-if="cartCounter > 0"
              >
                {{ cartCounter }}
              </span> 
            </client-only>
            <span>
              {{ $t("common-btns.cart-btn") }}
            </span>
          </NuxtLink>
        </li>
        <li @click="showMenu(true), searchBlock ? (searchBlock = false) : null">
          <SvgIcon name="burger-menu" size="medium" fill="var(--light-color)" />
          <span>
            {{ $t("mobile-menu.menu") }}
          </span>
        </li>
      </ul>
    </section>

    <div
      :class="{ 'burger-menu': true, 'active-burgerMenu': openMenu }"
      ref="mobileMenu"
    >
      <div class="top-section">
        <div class="logo">
          <div class="logo-wrapper">
            <img src="/public/img/only-dog.png" alt="logo" />
          </div>
          <span> korzinka.in.ua </span>
        </div>
        <div class="btn lang-btn" @click="toggleToShowLangModal">
          <SvgIcon name="lang-icon" size="micro" fill="var(--main-accent)" />
          <div class="separator"></div>
          <span>
            {{ $t("mobile-menu.lang-btn") }}
          </span>
        </div>
      </div>
      <ul class="middle-section">
        <NuxtLink :to="localePath('/')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("mobile-menu.main") }}
            </span>
          </li>
        </NuxtLink>

        <li @click="listControl('productList')">
          <span>
            {{ $t("header.products") }}
          </span>
          <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)" />
        </li>
        <ul class="sub-menu" v-if="productList">
          <li v-for="(category, index) in fetchedAllCategories" :key="index" >
            <NuxtLink
              :to="`/products/${category.group
                .replaceAll(' ', '-')
                .toLowerCase()}`"
                class="w-full flex items-center justify-between"
            >
              <span>
                {{
                  category.translations.find(
                    (tr) => tr.language === $i18n.locale
                  ).title
                }}
              </span>
              <SvgIcon
                name="arrow-down"
                size="micro"
                fill="var(--dark-color)"
              />
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="localePath('/about')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("header.about") }}
            </span>
          </li>
        </NuxtLink>

        <NuxtLink :to="localePath('/pay-delivery')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("header.pay-delivery") }}
            </span>
          </li>
        </NuxtLink>

        <NuxtLink :to="localePath('/help')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("header.buyers") }}
            </span>
          </li>
        </NuxtLink>

        <NuxtLink :to="localePath('/news')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("header.news") }}
            </span>
          </li>
        </NuxtLink>
        <NuxtLink :to="localePath('/contact')" @click="showMenu(false)">
          <li>
            <span>
              {{ $t("header.contacts") }}
            </span>
          </li>
        </NuxtLink>
      </ul>
      <div class="bottom-section">
        <div class="btn profile-btn">
          <SvgIcon name="default-user" size="micro" fill="var(--main-accent)" />
          <div class="separator"></div>
          <span>
            {{ $t("mobile-menu.profile-btn") }}
          </span>
        </div>
        <div class="btn theme-btn" @click="toggleTheme()">
          <img class="w-5 h-5" src="/public/light-mode.png" alt="theme" v-if="themeStore.darkMode">
          <img class="w-5 h-5" src="/public/dark-mode.png" alt="theme" v-else>

        </div>
        <div class="btn cancel-btn" @click="showMenu(false)">
          <span>
            {{ $t("mobile-menu.close-btn") }}
          </span>
          <div class="separator"></div>
          <SvgIcon name="close-btn" size="micro" fill="var(--main-accent)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@/shared/SvgIcon.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";

import { useIndexStore, useModalStore, useCartStore, useThemeStore } from "#imports";
import { theme } from "#tailwind-config";

let openMenu = ref(false);

const productList = ref(false);
const bagList = ref(false);
const packList = ref(false);
const searchBlock = ref(false);
// const cartCounter = ref(0);

const localePath = useLocalePath();

const indexStore = useIndexStore();
const modalStore = useModalStore();
const cartStore = useCartStore();
const themeStore = useThemeStore();

const cartCounter = computed(() => cartStore.cart.length);

const fetchedAllCategories = ref([]);

const fetchCategories = computed(() => indexStore.fetchedCategories);
fetchedAllCategories.value = fetchCategories.value;

const showMenu = (value) => {
  openMenu.value = value;
  openMenu.value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
};

const toggleTheme = () => {
  themeStore.toggleTheme();
  showMenu(false);
}

const toggleToShowLangModal = () => {
  showMenu(false);
  setTimeout(() => {
    modalStore.showModal("LangModal");
  }, 300);
};

const listControl = (menu) => {
  switch (menu) {
    case "productList":
      productList.value = !productList.value;
      break;
    case "bagList":
      bagList.value = !bagList.value;
      break;
    case "packList":
      packList.value = !packList.value;
      break;
  }
};

const searchControl = () => {
  searchBlock.value = !searchBlock.value;
};

onMounted(() => {
  cartStore.loadProducts();
})
</script>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;

.mobile-menu,
.burger-menu {
  display: none;
}

@media screen and (max-width: 768px) {
  .mobile-menu {
    display: block;
    width: -webkit-fill-available;
    position: fixed;
    bottom: 0;
    left: 0;
    background: var(--main-dark-color);
    transition: all ease 0.3s;
    z-index: 50;
    height: fit-content;
    .search-section {
      border-top: 1px solid var(--main-accent);
      transition: all ease 0.3s;
      padding-block: 1.2vh;
      height: -moz-fit-content;
      height: fit-content;
      position: absolute;
      width: 100%;
      background: var(--main-dark-color);
      left: 0;
      bottom: 0;
      height: fit-content;
      z-index: -1;

      .search-wrapper {
        justify-content: space-between;
        background: var(--light-color);
        align-items: center;
        display: flex;
        width: 80%;
        height: 35px;
        margin: 0 auto;

        input {
          padding: 5px 10px;
          @include mixins.descriptionText(500, var(--base-dark-color));
          &::placeholder {
            @include mixins.descriptionText(500, var(--base-dark-color));
          }
        }
        .button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: inherit;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--dark-color);
            height: inherit;
            padding-inline: 10px;
            border: 1px solid var(--light-color);
          }
        }
      }
    }
    .active-searchSection {
      bottom: 100%;
      transition: all ease 0.3s;
    }
    .list-menu {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid var(--main-accent);
      background: var(--main-dark-color);

      padding-top: 10px;

      // border-top: 1px solid var(--main-accent);
      // padding-top: 1.2vh;

      align-items: center;
      a,
      li {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          background: var(--base-dark-color);
          padding: 5px;
          border: 1px solid var(--main-accent);
          border-radius: 8px;
        }
        span {
          @include mixins.descriptionText(500, var(--light-color));
          padding-top: 5px;
        }
      }
    }
  }
  .burger-menu {
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background: var(--main-dark-color);
    transition: all ease 0.3s;

    opacity: 0.97;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .btn {
      display: flex;
      justify-content: flex-start;
      border: 1px solid var(--light-color);
      padding: 5px 10px;
      border-radius: 10px;
      align-items: center;
      gap: 10px;
      width: fit-content;
      .separator {
        width: 1px;
        height: 15px;
        background: var(--light-color);
      }
      span {
        @include mixins.descriptionText(500, var(--light-color));
      }
    }
    .top-section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      padding: 15px 20px;
      border-bottom: 1px solid #d9dbe0;

      .logo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        .logo-wrapper {
          width: 40px;
          height: 40px;
          border: 1px solid var(--main-accent);
          background: var(--light-color);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        span {
          @include mixins.descriptionText(700, var(--light-color));
        }
      }
    }
    .middle-section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: -webkit-fill-available;
      overflow: scroll;
      padding: 4vw 3vw;
      gap: 10px;
      li {
        background: var(--light-color);
        border: 1px solid var(--main-accent);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        padding: 5px 10px;
        span {
          @include mixins.descriptionText(700, var(--dark-color));
        }
      }
      .sub-menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        padding-left: 10px;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 10px;
          li {
            margin-left: 10px;
          }
        }
      }
    }
    .bottom-section {
      border-top: 1px solid #d9dbe0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      padding: 15px 20px;
    }
  }
  .active-burgerMenu {
    left: 0;
    transition: all ease 0.3s;
  }


}
</style>
