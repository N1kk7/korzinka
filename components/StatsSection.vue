


<template>
    <section class="Stats">
      <div class="container">
        <div class="title">
          <h3>Наша статистика</h3>
        </div>
        <div class="wrapper" ref="statsWrapper">
          <div class="item" ref="clients">
            <div class="num-wrapper flex items-center justify-center">
                <h4 class="num" id="clientsNum">
                    1000 
                </h4>
                <span>&nbsp;+</span>
            </div>
            

            <span>Постійних кліентів</span>
          </div>
          <div class="item" ref="years">
            <div class="num-wrapper flex items-center justify-center">
                <h4 class="num" id="yearsNum">
                    20
                </h4>
                <span>&nbsp;+</span>


            </div>
           
            <span>Років на ринку</span>
          </div>
          <div class="item" ref="products">
            <div class="num-wrapper flex items-center justify-center">
                <h4 class="num" id="productsNum">
                    100

                </h4>
                <span>&nbsp;+</span>

            </div>
           
            <span>Товарів в магазині</span>
          </div>
          <div class="item" ref="orders">
            <div class="num-wrapper flex items-center justify-center">
                <h4 class="num" id="ordersNum">
                    5326
                </h4>
                <span>&nbsp;+</span>

            </div>
           
            <span>Замовлень на сьогодні</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import gsap from "gsap";
  import { ref, onMounted } from "vue";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  

  // gsap.registerPlugin(ScrollTrigger);
  

  const statsWrapper = ref(null);
  

  onMounted(() => {

    gsap.fromTo(
      "#clientsNum", 
      { textContent: 0, },
      { 
        textContent: 1000, 
        duration: 2, 
        ease: "power2.out", 
        snap: { textContent: 1 }, 
        modifiers: {
          textContent: (value) => Math.round(value).toLocaleString() 
        },
        scrollTrigger: {
          trigger: statsWrapper.value,
          start: "top 80%",  
          once: false 
        }
      });
  
    gsap.fromTo(
      "#yearsNum", 
      { textContent: 0 }, 
      { 
        textContent: 20, 
        duration: 2.2, 
        ease: "power2.out", 
        snap: { textContent: 1 },
        modifiers: {
          textContent: (value) => Math.round(value).toLocaleString() 
        },
        scrollTrigger: {
          trigger: statsWrapper.value,
          start: "top 80%",  
          once: true
        }
      });
  
    gsap.fromTo(
      "#productsNum", 
      { textContent: 0 }, 
      { 
        textContent: 100, 
        duration: 2.4, 
        ease: "power2.out", 
        snap: { textContent: 1 },
        modifiers: {
          textContent: (value) => Math.round(value).toLocaleString()
        },
        scrollTrigger: {
          trigger: statsWrapper.value,
          start: "top 80%",  
          once: true
        }
      });
  
    gsap.fromTo(
      "#ordersNum", 
      { textContent: 0 }, 
      { 
        textContent: 5326, 
        duration: 2.6, 
        ease: "power2.out", 
        snap: { textContent: 1 },
        modifiers: {
          textContent: (value) => Math.round(value).toLocaleString() 
        },
        scrollTrigger: {
          trigger: statsWrapper.value,
          start: "top 80%",  
          once: true
        }
      });
  
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
          once: true
        }
      });
  });
  </script>


<style scoped lang="scss">

    .Stats{
        .title{
            border-bottom: 1px solid var(--border-color);
            h3{
                font-size: clamp(1.2rem, 2vw, 2.5rem);
                font-weight: 600;
                color: var(--dark-color);
            }
        }
        .wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 50px;
            gap: 2em;
            .item{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                border-radius: 10px;
                box-shadow:  20px 20px 60px #bebebe,
                        -20px -20px 60px #ffffff;
                padding: 20px;
                gap: 1em;
                .num{
                    display: flex;
                    align-items: center;
                    gap: 0.3em;
                    font-size: clamp(1.2rem, 2vw, 2.5rem);
                    color: var(--active-btn);
                    font-weight: 600;
                    span{
                        font-size: clamp(0.7rem, 2vw, 1.2rem);
                        font-weight: 500;
                        color: var(--dark-color);
                    }
                }
                span{
                    font-size: clamp(0.7rem, 2vw, 1.2rem);
                    font-weight: 500;
                    color: var(--primary-color);
                    white-space: nowrap;
                }
            }
        }
        @media screen and (max-width: 768px) {
          &{
            border-top-left-radius: 20px;

          }
          .title{
            padding: 10px 0 5px;
          }
        }
    }


</style>