<template>
    <div class="section page products-section">
      <div class="product-container">
        <LinkBlock pageName="Товари" />
        <div class="page-title border-b-[1px] border-[#d9dbe0] py-2">
          <h1
            class="
              text-[var(--dark-color)]
              font-bold
              text-2xl
              mb-5
            "
          >
            Товари
          </h1>
          <p class="text-[var(--dark-color)] font-medium text-lg mb-2">
            Ласкаво просимо до нашого магазину! У нас ви знайдете широкий асортимент товарів для
            пакування та господарських потреб: сміттєві пакети, пакувальні пакети, стрейч-плівку,
            зип-пакети та целофанові рукавички. Якість продукції та зручність використання гарантовані!
          </p>
        </div>


        
  
       
      </div>
      <div class="mobile-bar">
        <ul >
            <li @click="showCategory('showAll')">
              <span>
                Всі товари
              </span>
            </li>
            <li 
              @click="showMobileCategory('mobileBags'), showCategory('empty-bags')"
              class="flex justify-between items-center gap-4"
            >
              <span class="flex-1">
                Пакети майка
              </span>
              <div class="flex-1">
                <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)"  />
              </div>
            </li>
            <li>
              <span>
                Пакети для сміття
              </span>
            </li>
            <li 
              @click="showMobileCategory('mobilePackages')"
              class="flex justify-between items-center gap-4"
            >
              <span class="flex-1">
                Пакети фасувальні
              </span>
              <div class="flex-1">
                <SvgIcon name="arrow-down" size="micro" fill="var(--dark-color)"  />
              </div>
            </li>
            <li>
              <span>
                Пакети ZipLock
              </span>
            </li>
            <li>
              <span>
                Мішки 
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
            </li>

          </ul>
          <ul v-if="mobileBags">
            <li @click="showCategory('big-bag')">
              <span>
                Багажна серія
              </span>
            </li>
            <li @click="showCategory('bio-bag')">
              <span>
                Біопакети
              </span>
            </li>
            <li @click="showCategory('img-bag')">
              <span>
                З малюнком
              </span>
            </li>
            <li @click="showCategory('noImg-bag')">
              <span>
                Без малюнка
              </span>
            </li>
          </ul>
          <ul v-if="mobilePackages">
            <li @click="showCategory('packaging-block')">
              <span>
                Пакети фасувальні в блоці
              </span>
            </li>
            <li @click="showCategory('packaging-roll')">
              <span>
                Пакети фасувальні в рулоні
              </span>
            </li>
          </ul>
      </div>
      
     
      <section class="products-main grid grid-cols-[1fr_3fr] gap-5 w-[92vw] mx-auto">
          <div class="categories border-r-[1px] border-[#d9dbe0] pr-4 py-2">
            <ul class="mt-5 main-list">
              <li 
                class="border-b-[1px] border-t-[1px] border-[#d9dbe0] "
                @click="showCategory('showAll')"
                >
                <div class="icon">
                  <img src="/public/img/icons/products.png" alt="products" />
                </div>
                <span>Всі товари</span>
              </li>
              <li>
                <div class="icon">
                  <img src="/public/img/icons/product-category.png" alt="products" />
                </div>
                <span>Категорії товарів</span>
                <SvgIcon name="arrow-right" size="micro" fill="red" />
              </li>
              <ul class="sub-list ml-3 " v-show="categories">
                <li @click="showCategory('empty-bags')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/small-bag.png" alt="bag" />
                  </div>
                  <span>Пакети майка</span>
                </li>
                <ul class="third-list ml-3">
                  <li @click="showCategory('big-bag')">
                    <div class="icon">
                      <img src="@/public/icon-pack/bag-icons/big-bag.png" alt="bag" />
                    </div>
                    <span>Багажна серія</span>
                  </li>
                  <li @click="showCategory('bio-bag')">
                    <div class="icon">
                      <img src="@/public/icon-pack/bag-icons/bio-bag.png" alt="bag" />
                    </div>
                    <span>Біопакети</span>
                  </li>
                  <li @click="showCategory('img-bag')">
                    <div class="icon">
                      <img src="/public/icon-pack/bag-icons/img-bag.png" alt="bag" />
                    </div>
                    <span>З малюнком</span>
                  </li>
                  <li @click="showCategory('noImg-bag')">
                    <div class="icon">
                      <img src="/public/icon-pack/bag-icons/emptybag.png" alt="bag" />
                    </div>
                    <span>Без малюнка</span>
                  </li>
                </ul>
                <li @click="showCategory('trash-bags')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/trash-bag.png" alt="bag" />
                  </div>
                  <span>Пакети для сміття</span>
                </li>
                <li @click="showCategory('index-packaging')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/cute-bag.png" alt="bag" />
                  </div>
                  <span>Пакети фасувальні</span>
                </li>
                <ul class="third-list ml-3">
                  <li @click="showCategory('packaging-roll')">
                    <div class="icon">
                      <img src="/public/icon-pack/bag-icons/roll.png" alt="bag" />
                    </div>
                    <span>Пакети фасувальні в рулоні</span>
                  </li>
                  <li @click="showCategory('packaging-block')">
                    <div class="icon">
                      <img src="/public/icon-pack/bag-icons/block.png" alt="bag" />
                    </div>
                    <span>Пакети фасувальні в блоці</span>
                  </li>
                </ul>
                <li @click="showCategory('zip-bags')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/zip.png" style="padding: 2px;" alt="bag" />
                  </div>
                  <span>Пакети ZipLock</span>
                </li>
                <li @click="showCategory('large-bags')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/bag.png" alt="bag" />
                  </div>
                  <span>Мішки </span>
                </li>
                <li @click="showCategory('stratch-roll')">
                  <div class="icon">
                    <img
                      src="/public/icon-pack/bag-icons/stratch.png"
                      style="border-radius: 50%; border: none;"
                      alt="stratch"
                    />
                  </div>
                  <span>Стрейтч плівка</span>
                </li>
                <li @click="showCategory('gloves')">
                  <div class="icon">
                    <img src="/public/icon-pack/bag-icons/gloves.png" alt="stratch" />
                  </div>
                  <span>Рукавички</span>
                </li>
              </ul>
              <li @click="listControl(1)">
                <div class="icon">
                  <img src="/public/img/icons/filters.png" alt="filters" />
                </div>
                <span>Фільтри</span>
                <SvgIcon name="arrow-right" size="micro" fill="red" />
              </li>
              <ul class="sub-list ml-5" v-show="filters">
                <li>
                  <span>Фільтр</span>
                </li>
                <li>
                  <span>Фільтр</span>
                </li>
                <li>
                  <span>Фільтр</span>
                </li>
              </ul>
              <li @click="listControl(2)">
                <div class="icon">
                  <img src="/public/img/icons/search-color.png" alt="search" />
                </div>
                <span>Пошук</span>
                <SvgIcon name="arrow-right" size="micro" fill="red" />
              </li>
              <ul class="sub-list ml-5" v-show="search">
                <li>
                  <input type="text" placeholder="Пошук" />
                </li>
              </ul>
            </ul>
          </div>
        
  
          <div class="products-wrapper flex flex-col"
            
          >
       

            <!-- <main v-if="activeCategory.length" class="flex-grow p-1 mt-5"> -->
            <main  class="flex-grow p-1 mt-5">


              <div 
                v-for="(item, index) in fetchedAllCategories" 
                :key="index" 
                class="group-title mb-10"
              >

                <h2 class="text-2xl font-bold text-[var(--dark-color)] mb-4 z-10 relative">
                  {{ item.translations.find(t => t.language === $i18n.locale).title  }}
                </h2>

                <div class="grid grid-cols-1  2xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                  <div 
                    v-for="(product, productIndex) in item.products" 
                    :key="productIndex" 
                    class="card-wrapper bg-gray-200 h-fit rounded-xl border-1px border-[var(--dark-color)]"
                  >
                    {{console.log(product, 'product') }}
                    <ItemCard :product="product" :group="item.group"/>
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
            <KorzinkaBg/>
          </div>
        </section>
    </div>
  </template>
  
  
  <script setup >

    import { ref, computed, onMounted } from 'vue';
    import { useAsyncData } from 'nuxt/app'

    import { useFetch } from 'nuxt/app';

    // import ProductsSlider from "@/components/ProductsSlider.vue";
    // import PaginatedProducts from "@/components/PaginatedProducts.vue";

    import LinkBlock from '@/components/shared/LinkBlock.vue';
    import SvgIcon from '@/components/shared/SvgIcon.vue';
    // import ProductsSlider from "@/components/ProductSlider.vue";
    // import PaginatedProducts from "@/components/PaginatedProducts.vue";
    import KorzinkaBg from '@/components/KorzinkaBg.vue';
    import ItemCard from '@/components/ItemCard.vue';

    import products from '@/data/Products/products.ts';
    // const { data, error } = await useFetch('/api/products');

    // const fetchedProducts = data.value

    // console.log(fetchedProducts);

    const fetchedProducts = ref([]);

    const fetchedAllCategories = ref([])

onMounted(async () => {
  try {
    // const response = await $fetch('/api/products');
    const response = await $fetch('/api/category?category=all');
    fetchedAllCategories.value = response;

    console.log(response, 'response');

    // fetchedProducts.value = response;
    // console.log(fetchedProducts.value);
    
  } catch (error) {
    console.error('Error fetching data зкщв:', error);
  }
});

    // const { data, pending, error } = await useAsyncData('fetchProducts', async () => {
    //   const response = await $fetch('/api/products') // или вызов вашей функции Prisma
    //   return response
    // })

    // console.log(data.value) 
    


    // onMounted(() => {
    

    // const fetchedProducts = data.value.data[0].products;
    // fetchedProducts.value.forEach((product) => {
    //   console.log(product
    //   );
    // })
      
    // })


   
    // console.log(data.value.data[0].products);

    const productsArr = ref(products);

    // import { ref } from 'vue';


    const categories = ref(true);
    const filters = ref(true);
    const search = ref(true);

    const mobileBags = ref(false);
    const mobilePackages = ref(false);


    let activeCategory = ref([]);


    const showCategory = (category) => {
  const listProducts = productsArr.value.products;

  if (category === "showAll") {
    activeCategory.value = [];

    listProducts.forEach((list) => {
      if (list.groupProducts) {
        activeCategory.value.push({ title: list.title });
        activeCategory.value.push(...list.groupProducts);
      } else {
        activeCategory.value.push(list);
      }
    });
    // console.log(activeCategory);
    
  } else {
    
    activeCategory.value = listProducts.reduce((acc, item) => {
      if (item.group === category) {
        acc.push(item);
      }

      if (item.groupProducts) {
        const matchingGroups = item.groupProducts.filter((group) => group.group === category);
        matchingGroups.forEach((group) => acc.push(group));
      }

  return acc;
}, []);

    // console.log(activeCategory.value);
  }

 
};

const showMobileCategory = (category) => {
  switch (category) {
    case "mobileBags":
      if( mobileBags.value) {
        mobileBags.value = false;
        return;
      } else {
        mobilePackages.value = false;
        mobileBags.value = true;
      }
      break;    
    case "mobilePackages":
      if (mobilePackages.value) {
        mobilePackages.value = false;
        return;
      } else {
        mobileBags.value = false;
        mobilePackages.value = true;
      }
   
      break;
  }
}

onMounted(() => {
    showCategory("showAll");
  });
   
  
</script>
  
  <style lang="scss" scoped>

  @use './/styles/mixins.scss' as mixins;

  @include mixins.mobileBar(1024px);
    
  
    .products-section{
      font-family: 'Montserrat', sans-serif;
    }
    .product-container{
      width: 92vw;
      margin: 0 auto;
      padding-block: 20px;
    }
    .page-title{
      p{
        font-size: clamp(0.7rem, 2vw, 1.5rem);
      }
    }
    .icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--dark-color);
        border: 1px solid white;
        border-radius: 25%;
        position: relative;
        box-shadow: 
            5px 5px 10px rgba(0, 0, 0, 0.2), /* Темная тень */
            -5px -5px 10px rgba(255, 255, 255, 0.2); /* Светлая тень */

        img {
            width: 100%;
            height: 100%;
            margin: 10px;
            padding: 7px;
            border: 1px solid white;
            border-radius: 25%;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 5px;
        // align-items: stretch;
        li{
            display: flex;
            align-items: center;
            justify-content: flex-start;
 

            cursor: pointer;
            border-radius: 10px;
            padding: 5px 10px;
            transition: all ease 0.3s;
            position: relative;
            span{
                color: var(--dark-color);
                font-weight: 500;
                font-size: clamp(12px, 1vw, 16px);
                white-space: nowrap;
            }
            svg{
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(-50%, -50%);
            }
        }
        @media screen and (min-width: 1024px) {
          li:hover{
            background: var(--secondary-color);
            transition: all ease 0.3s;
            span{
                font-weight: 600;
            }
            

          }
        }
        
    }

    .card-wrapper{
      box-shadow:  20px 20px 60px #bebebe,
          -20px -20px 60px #ffffff;
    }

  </style>