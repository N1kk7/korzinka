<template>
  <section class="Stats">
    <div class="container">
      <div class="title relative z-10">
        <h3>{{ $t("index-page.stats.title") }}</h3>
      </div>
      <div class="wrapper" ref="statsWrapper">
        <div class="item" ref="clients">
          <div class="num-wrapper flex items-center justify-center">
            <h4 class="num" id="clientsNum">1000</h4>
            <span>&nbsp;+</span>
          </div>

          <span>{{ $t("index-page.stats.clients") }}</span>
        </div>
        <div class="item" ref="years">
          <div class="num-wrapper flex items-center justify-center">
            <h4 class="num" id="yearsNum">20</h4>
            <span>&nbsp;+</span>
          </div>

          <span>{{ $t("index-page.stats.years") }}</span>
        </div>
        <div class="item" ref="products">
          <div class="num-wrapper flex items-center justify-center">
            <h4 class="num" id="productsNum">100</h4>
            <span>&nbsp;+</span>
          </div>

          <span>{{ $t("index-page.stats.products") }}</span>
        </div>
        <div class="item" ref="orders">
          <div class="num-wrapper flex items-center justify-center">
            <h4 class="num" id="ordersNum">5326</h4>
            <span>&nbsp;+</span>
          </div>

          <span>{{ $t("index-page.stats.orders") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const statsWrapper = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#clientsNum",
    { textContent: 0 },
    {
      textContent: 1000,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      modifiers: {
        textContent: (value) => Math.round(value).toLocaleString(),
      },
      scrollTrigger: {
        trigger: statsWrapper.value,
        start: "top 80%",
        once: false,
      },
    }
  );

  gsap.fromTo(
    "#yearsNum",
    { textContent: 0 },
    {
      textContent: 20,
      duration: 2.2,
      ease: "power2.out",
      snap: { textContent: 1 },
      modifiers: {
        textContent: (value) => Math.round(value).toLocaleString(),
      },
      scrollTrigger: {
        trigger: statsWrapper.value,
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    "#productsNum",
    { textContent: 0 },
    {
      textContent: 100,
      duration: 2.4,
      ease: "power2.out",
      snap: { textContent: 1 },
      modifiers: {
        textContent: (value) => Math.round(value).toLocaleString(),
      },
      scrollTrigger: {
        trigger: statsWrapper.value,
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    "#ordersNum",
    { textContent: 0 },
    {
      textContent: 5326,
      duration: 2.6,
      ease: "power2.out",
      snap: { textContent: 1 },
      modifiers: {
        textContent: (value) => Math.round(value).toLocaleString(),
      },
      scrollTrigger: {
        trigger: statsWrapper.value,
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".item",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: statsWrapper.value,
        start: "top 80%",
        once: true,
      },
    }
  );
});
</script>

<style scoped lang="scss">

.dark .Stats {
  .title{
    border-bottom-color: var(--dark-border-color);
    h3{
      color: var(--dark-font-color);

    }
  }
  .wrapper .item{
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3), -6px -6px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--dark-border-color);
    span{
      color: var(--dark-font-color);
    }
    .num-wrapper{
      border-bottom-color: var(--dark-border-color);
    }
  }
}




.Stats {
  padding-bottom: 30px;
  .title {
    border-bottom: 1px solid var(--border-color);
    h3 {
      font-size: clamp(1.2rem, 2vw, 2.5rem);
      font-weight: 600;
      color: var(--dark-color);
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 2em;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      flex: 1;
      border-radius: 10px;
      box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      padding: 20px;
      gap: 1em;
      .num-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--border-color);

      }
      .num {
        display: flex;
        align-items: center;
        gap: 0.3em;
        font-size: clamp(1.2rem, 2vw, 2.5rem);
        color: var(--active-btn);
        font-weight: 600;
        span {
          font-size: clamp(0.7rem, 2vw, 1.2rem);
          font-weight: 500;
          color: var(--dark-color);
        }
      }
      span {
        font-size: clamp(0.7rem, 2vw, 1.2rem);
        font-weight: 500;
        color: var(--primary-color);
        white-space: nowrap;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      border-top-left-radius: 20px;
    }
    .title {
      padding: 10px 0 5px;
    }
  }
}
</style>
