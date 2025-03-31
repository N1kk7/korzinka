<template>
  <div class="main-header">
    <div class="main-buttons">
      <button class="items-btn catalog-btn">
        {{ $t("common-btns.catalog-btn") }}
        <div class="arrow-down">
          <div class="line line1"></div>
          <div class="line line2"></div>
        </div>
      </button>
      <div class="phone-btn">
        <img src="~/public/phone.png" alt="phone" />
        <a href="tel:+380994017669" class="call-button">+380994017669</a>
      </div>
      <div class="items-list item-list-hidden">
        <ul>
          <li
            v-for="(category, index) in fetchedCategories"
            :key="index"
            class="additional-menu"
          >
            <NuxtLink
              :to="`/products/${category.group
                .replaceAll(' ', '-')
                .toLowerCase()}`"
              class="flex justify-start gap-2 items-center"
            >
              <img :src="category.categoryImg" alt="icon" class="w-5 h-5" />
              <span>
                {{
                  category?.translations?.find(
                    (tr) => tr.language === $i18n.locale
                  ).title
                }}
              </span>
            </NuxtLink>
            <hr />
          </li>
        </ul>
      </div>
    </div>
    <div class="search-block">
      <input
        type="text"
        :placeholder="$t('search-block.placeholder')"
        class="search"
      />
      <div class="icon">
        <SvgIcon name="search-icon" size="micro" />
        <span>
          {{ $t("search-block.search-btn") }}
        </span>
      </div>
    </div>
    <div class="right-button-group">
      <ThemeSwitch />
      <NuxtLink to="/cart" class="cart">
        <div class="relative">
          <SvgIcon name="cart-icon" size="micro" fill="var(--dark-color)" />
          <client-only>
            <span
              class="cart-count absolute -top-3 -right-3 w-4 h-4 flex justify-center items-center text-xs font-semibold text-white bg-red-600 rounded-full dark:bg-red-600"
              v-if="cartCounter > 0"
            >
              {{ cartCounter }}
            </span>
          </client-only>
        </div>
        <div class="separator"></div>
        <span>
          {{ $t("common-btns.cart-btn") }}
        </span>
      </NuxtLink>
      <LangBtn @click="languageControl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useModalStore, useIndexStore, useCartStore } from "#imports";

import LangBtn from "@/components/shared/LangBtn.vue";
import SvgIcon from "./shared/SvgIcon.vue";
import ThemeSwitch from "./ThemeSwitch.vue";

const modalStore = useModalStore();
const indexStore = useIndexStore();
const cartStore = useCartStore();

const cartCounter = computed(() => cartStore.cart.length);

const fetchedCategories = computed(() => indexStore.fetchedCategories);

const languageControl = () => {
  modalStore.showModal("LangModal");
};

const themeControl = () => {
  modalStore.showModal("ThemeModal");
};

onMounted(() => {
  cartStore.loadProducts();
});
</script>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;

.dark .main-header {
  background-color: var(--dark-grey);
  // border-bottom: 1px solid var(--dark-border-color);
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  min-height: 55px;
  background-color: var(--primary-color);
  position: sticky;
  top: 0;
  z-index: 100;
  @include mixins.descriptionText(600, var(--light-color));
  @media screen and (max-width: 764px) {
    display: none;
  }

  .main-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    height: 55px;
    .items-btn {
      background: var(--dark-color);
      height: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .arrow-down {
        transform: rotate(270deg);
        width: 5px;
        .line {
          width: 10px;
          height: 1px;
          background: var(--light-color);
        }
        .line1 {
          transform: rotate(45deg) translateY(5px);
        }
        .line2 {
          transform: rotate(-45deg) translateY(-5px);
        }
      }
      @media screen and (max-width: 600px) {
        & {
          display: none;
        }
      }
    }
    .phone-btn {
      background: var(--dark-color);
      filter: brightness(1.4);

      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding-inline: 20px;
      gap: 10px;
      img {
        width: 30px;
        height: 30px;
        background: #000000;
        border-radius: 50%;
      }
      .call-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .items-list {
      background: var(--dark-color);
      padding: 10px 0 20px 0;
      position: absolute;
      border: 1px solid var(--bg-color);
      border-top: 0;
      top: 55px;
      left: 0;
      li {
        line-height: 2rem;
        // margin-left: 10px;
        padding: 0 20px;

        transition: all ease 0.3s;
        position: relative;
        span {
          padding-left: 5px;
        }
      }
      li:hover {
        background: #4f4f4c;
        transition: background-color 0.3s ease, filter 0.3s ease;
        cursor: pointer;
      }
      .additional-menu {
        .item-options-list {
          display: none;
          position: absolute;
          top: -10px;
          left: 100%;
          background: var(--dark-color);
          border: 1px solid var(--bg-color);
          border-top: 0;
          width: auto;
          white-space: nowrap;
          padding: 10px 0px 20px;
        }
      }
      .additional-menu:hover {
        .item-options-list {
          display: block;
        }
      }
    }

    .item-list-hidden {
      display: none;
    }
    .items-btn:hover ~ .item-list-hidden,
    .item-list-hidden:hover {
      display: block;
    }
  }

  .search-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    height: 30px;
    .search {
      background-color: var(--bg-color);
      @include mixins.descriptionText(600, var(--dark-color));
      padding: 10px 20px;
      width: 32vw;
    }
    .icon {
      width: fit-content;
      height: calc(100% + 10px);
      background: var(--dark-color);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;
      cursor: pointer;

      svg {
        fill: var(--bg-color);
        width: 80%;
        height: 80%;
      }
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .right-button-group {
    display: flex;
    justify-content: flex-end;
    margin-right: 2vw;
    align-items: stretch;
    position: relative;
    flex: 1;
    gap: 1.5vw;
    @media screen and (max-width: 374px) {
      .language-component {
        display: none;
      }
    }
  }

  .cart,
  .theme-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.3em 0.7em;
    border-radius: 0.5em;
    background: #e8e8e8;
    cursor: pointer;
    color: #666;
    font-size: 0.8em;
    border: 1px solid #e8e8e8;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
    position: relative;
    .separator {
      width: 1px;
      align-self: stretch;
      background: var(--dark-color);
    }
  }

  .cart,
  .theme-btn:active {
    color: #444;
    box-shadow: inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff;
    transform: scale(0.95);
    cursor: pointer;
  }
}

.dark .main-header .main-buttons  .catalog-btn{
  background: rgb(12 22 31);

}
.dark .main-header .main-buttons  .phone-btn{
  background: rgb(13, 24, 34);

}
</style>
