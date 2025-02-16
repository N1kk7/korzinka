<template>
    <div class="section page products-section">
          <!-- <main v-if="activeCategory.length" class="flex-grow p-1 mt-5"> -->
        <main  class="flex-grow p-1 mt-5">

            <div 
            v-for="(item, index) in fetchedCategoryProducts" 
            :key="index" 
            class="group-title mb-10"
            >

            <h2 class="text-2xl font-bold text-[var(--dark-color)] mb-4 z-10 relative">
                {{ item.translations.find(t => t.language === $i18n.locale).title  }}
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
                <!-- <NuxtLink
                    :to="`/products/${item.group.replaceAll(' ', '-').toLowerCase()}/${product.id}`"
                    @click="selectProduct(product.product)"
                >
                {{ console.log(item.group, product.id) }} -->
                    <ItemCard :product="product" :group="item.group"/>
                <!-- </NuxtLink> -->
                </div>
            </div>


            <!-- <div v-if="item.groupProducts && item.groupProducts.length" class=" mt-4">

                <div 
                v-for="(groupProduct, groupIndex) in item.groupProducts" 
                class="card-wrapper bg-gray-200 h-fit "

                :key="groupIndex"
                >
                <h3 class="text-xl font-semibold text-[var(--dark-color)] mb-2">
                    {{ groupProduct.groupName || 'Unnamed Group' }}
                </h3>
                <div class="grid grid-cols-1  2xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                    <div 
                    v-for="(product, productIndex) in fetchedProducts.data" 
                    :key="productIndex" 
                    class="card-wrapper bg-gray-200 h-fit rounded-xl border-1px border-[var(--dark-color)]"
                    >
                    {{console.log(product, 'product') }}
                    <ItemCard :product="product" :group="item.group"/>
                    </div>
                </div>
                </div>
            </div>


            <div v-if="item.products && item.products.length" class="grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">



                <div 

                v-for="(product, productIndex) in fetchedProducts.data" 
                :key="productIndex" 
                class="card-wrapper bg-gray-200 h-fit"
                >
                <ItemCard :product="product" :group="item.group"/>
                </div>
            </div> -->

            
            </div>
        </main>

    </div>
  </template>
  
  
<script setup >
    import { onMounted, ref } from 'vue';


    const fetchedCategoryProducts = ref([]);

    onMounted( async () => {

        const fetchCategoryProducts = await $fetch('/api/products');

        if (fetchCategoryProducts.data.length > 0) {
            fetchedCategoryProducts.value = fetchedCategoryProducts.data.map((item) => item)
        }
        

    })

    definePageMeta({
    layout: 'products'
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
    // .cards-content{
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: flex-start;
    //   gap: 10px;

    //   .card-wrapper{
    //     width: calc(50% - 5px);
    //     @media screen and (max-width: 1024px) {
    //       width: calc(33.3% - 7px);
    //     }
    //     @media screen and (max-width: 764px) {
    //       width: calc(50% - 5px);
    //     }
    //     @media screen and (max-width: 375px) {
    //       width: 100%;
    //     }
    //   }
    // }

  </style>