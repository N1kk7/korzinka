<template>
    <section>
      <div class="container">
        <LinkBlock pageName="Про компанію"/>
        <div class="page-title border-b-[1px] border-[#d9dbe0] py-2">
            <h1
                class="
                text-[var(--dark-color)]
                font-bold
                text-2xl
                mb-5
                "
            >
                 {{ $t("about-page.title") }}
            </h1>
            <p class="text-[var(--dark-color)] font-medium text-lg mb-2">
                {{ $t("about-page.description") }}

            </p>
            
        </div>
        <FadeSlider/>
        <div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.about-us.title") }}
    </h2>
    <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
         {{ $t("about-page.about-us.text") }}
    </p>
</div>

<div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.our-mission.title") }}
    </h2>
    <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
         {{ $t("about-page.our-mission.text") }}
    </p>
</div>

<div class="values-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.our-values.title") }}
    </h2>
    <ul class="text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2 my-0 mx-auto flex-wrap">
        <li class="rounded-2xl">
          <div class="card-img">
            <img src="/public/img/about/quality.png" alt="quality-img">
          </div>
          <div class="description">
            <strong>
               {{ $t("about-page.our-values.content1.title") }}
            </strong> 
            <p>
               {{ $t("about-page.our-values.content1.text") }}
            </p>
          </div>
         
        </li>
        <li class="rounded-2xl">
          <div class="card-img">
            <img src="/public/img/about/inovations.png" alt="inovations-img">
          </div>
          <div class="description">
            <strong>
               {{ $t("about-page.our-values.content2.title") }}
            </strong>
            <p>
               {{ $t("about-page.our-values.content2.text") }}
            </p>
          </div>
          
        </li>
        <li class="rounded-2xl">
          <div class="card-img">
            <img src="/public/img/about/rb.png" alt="rb-img">
          </div>
          <div class="description">
            <strong>
               {{ $t("about-page.our-values.content3.title") }}
            </strong>
            <p>
               {{ $t("about-page.our-values.content3.text") }}
            </p>
          </div>
          
        </li>
        <li class="rounded-2xl">
          <div class="card-img">
            <img src="/public/img/about/creation.png" alt="creation-img">
          </div>
          <div class="description">
            <strong>
               {{ $t("about-page.our-values.content4.title") }}
            </strong>
            <p>
               {{ $t("about-page.our-values.content4.text") }}
            </p>
          </div>
          
        </li>
    </ul>
</div>

<div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.our-advantages.title") }}
    </h2>
    <ul class="text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
        <li>
          <strong>
             {{ $t("about-page.our-advantages.content1.strong") }}
          </strong> 
           {{ $t("about-page.our-advantages.content1.text") }}
        </li>
        <li>
          <strong>
             {{ $t("about-page.our-advantages.content2.strong") }}
          </strong> 
           {{ $t("about-page.our-advantages.content2.text") }}
        </li>
        <li>
          <strong>
             {{ $t("about-page.our-advantages.content3.strong") }}
          </strong> 
           {{ $t("about-page.our-advantages.content3.text") }}
        </li>
        <li>
          <strong>
             {{ $t("about-page.our-advantages.content4.strong") }}
          </strong> 
           {{ $t("about-page.our-advantages.content4.text") }}
        </li>
        <li>
          <strong>
             {{ $t("about-page.our-advantages.content5.strong") }}
          </strong> 
           {{ $t("about-page.our-advantages.content5.text") }}
        </li>
    </ul>
</div>

<div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.why-us.title") }}
    </h2>
    <p class="text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
         {{ $t("about-page.why-us.text") }}
    </p>
</div>

<div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.our-clients.title") }}
    </h2>
    <p class="text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
         {{ $t("about-page.our-clients.text") }}
    </p>
</div>

<div class="text-block mb-5">
    <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
         {{ $t("about-page.contact-us.title") }}
    </h2>
    <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
         {{ $t("about-page.contact-us.text") }}
    </p>
    <p class="text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
        <strong>korzinka.in.ua</strong> — {{ $t("about-page.contact-us.summary") }}
    </p>
</div>

      </div>
    </section>
  </template>
  
<script setup>

  //components
  import LinkBlock from "@/components/shared/LinkBlock.vue";
  import FadeSlider from "~/components/blocks/FadeSlider.vue";


</script>


<style lang="scss" scoped>
  .values-block{
    ul{
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      gap: 2vw;;
      margin-top: 2vw;
      li{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: white;
        border: 1px solid var(--dark-color);
        position: relative;
        overflow: hidden;
        flex: 1;

        .card-img{
          background: var(--dark-color);
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          img{
            width: 10vw;

          }
          
        }
        .description{
            padding:0.5vw  1vw; 
            p{
              padding-top: 20px;
            }
        }
      
      }
    }
  }




</style>

  