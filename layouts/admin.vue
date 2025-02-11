<template>
    <!-- <div class="admin-layout"> -->

      <div class="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500">
        <div class="absolute w-full bg-[var(--primary-color)] min-h-72"></div>

      <aside class="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0" aria-expanded="false">
      <div class="h-19">
        <!-- <i class="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden" sidenav-close></i> -->
        <div class="px-2 py-6 m-0 text-sm whitespace-nowrap  text-slate-700 flex justify-center items-center gap-2" href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html" target="_blank">
          <img src="../public/img/only-dog.png" class="hidden h-auto w-[40px] transition-all duration-200 dark:inline ease-nav-brand bg-[var(--light-color)] p-1  rounded-lg" alt="main_logo" />
          <div class="title-wrapper ml-1 flex items-baseline flex-col">
            <span class=" font-semibold transition-all duration-200 ease-nav-brand">
              Панель керування
            </span>
            <span > 
              https://www.korzinka.in.ua
            </span>
          </div>
        </div>
      </div>
      <!-- dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent -->
      <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />

      <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul class="flex flex-col pl-0 mb-0">
          <li class="mt-[0.125rem] w-full">
            <NuxtLink to="/admin/">

              <div class="py-[0.675rem] bg-blue-500/13 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors">
                <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <img src="@/public/img/icons/house.png" alt="option">

                </div>
                    <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                      Головна
                    </span>
              </div>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/analytics"
              class="py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
            >
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <img src="@/public/img/icons/analysis.png" alt="option">

              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Аналітика
              </span>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/buyers" class=" py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                <img src="@/public/img/icons/buying.png" alt="option">
              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Покупці
              </span>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/notifications" class=" py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <!-- <i class="relative top-0 text-sm leading-normal text-cyan-500 ni ni-app"></i> -->
                <img src="@/public/img/icons/notification.png" alt="option">
              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Повідомлення
              </span>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/orders" class=" py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <!-- <i class="relative top-0 text-sm leading-normal text-red-600 ni ni-world-2"></i> -->
                <img src="@/public/img/icons/order.png" alt="option">

              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Замовлення
              </span>
            </NuxtLink>
          </li>

          <li class="w-full mt-4">
            <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase">Account pages</h6>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/payment" class=" py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <!-- <i class="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02"></i> -->
                <img src="@/public/img/icons/cash-payment.png" alt="option">
              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Оплата
              </span>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/products" class= "py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <!-- <i class="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i> -->
                <img src="@/public/img/icons/cubes.png" alt="option">

              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Товари
              </span>
            </NuxtLink>
          </li>

          <li class="mt-0.5 w-full">
            <NuxtLink to="/admin/settings" class=" py-[0.675rem] text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <!-- <i class="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i> -->
                <img src="@/public/img/icons/setting.png" alt="option">

              </div>
              <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Налаштування
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="mx-4">
        <!-- load phantom colors for card after: -->
        <p class="invisible hidden text-blue-500 bg-gray-500/30  after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 "></p>
        <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" sidenav-card>
          <!-- <img class="w-1/2 mx-auto" src="./assets/img/illustrations/icon-documentation.svg" alt="sidebar illustrations" /> -->
          <div class="flex-auto w-full p-4 pt-0 text-center">
            <div class="transition-all duration-200 ease-nav-brand">
              <h6 class="mb-0 dark:text-white text-slate-700">Need help?</h6>
              <p class="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Please check our docs</p>
            </div>
          </div>
        </div>
        <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/" target="_blank" class="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px">Documentation</a>
        <!-- pro btn  -->
        <a class="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px" href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree" target="_blank">Upgrade to pro</a>
      </div>
    </aside>





      <!-- <main class="page-layout"> -->
      <main class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-72 rounded-xl">

        <slot />
        <!-- <Tooltips :props="tooltipProps"/> -->
       
        <!-- :tooltipProps="tooltipProps"  -->

      </main>
      <Tooltips 
          v-if="showTooltip"

          :tooltipStatus="tooltipStatus"



        >
        {{ tooltipMessage }}

        </Tooltips>
      <Modal @tooltip="tooltip">
          <template #default="{ openModal, closeModal}">
            <component
              :is="currentModal"
              v-bind="modalProps"
              :openModal="openModal"
              :closeModal="closeModal"
            />
          </template>
        </Modal>
    </div>
</template>

<script setup>
    import { computed, toRefs, watch, ref} from 'vue';
    import Modal from '~/components/Modals/Modal.vue';
    import Tooltips from '~/components/shared/Tooltips.vue';  
    import { useModalStore } from "#imports";


    const showTooltip = ref(false);
    const tooltipStatus = ref('');
    const tooltipMessage = ref('');




    const modalStore = useModalStore();
    // const tooltipStore = useTooltipStore();
    const currentModal = computed(() => modalStore.currentModal);
    const modalProps = computed(() => modalStore.modalProps);
    // const tooltipProps = computed(() => tooltipStore.tooltipProps);
    // const tooltipProps = computed(() => tooltipStore.tooltipProps);
//     watch(tooltipStore, (newVal, oldVal) => {
//     console.log('tooltipProps изменился:', newVal.tooltipProps);
// });
    // const { tooltipProps } = toRefs(tooltipStore);

    // console.log('tooltipProps-admin', tooltipStore.tooltipProps);

    // Следим за изменениями tooltipProps, чтобы логировать изменения
// watch(tooltipProps, (newVal, oldVal) => {
//   console.log('tooltipProps изменился: from admin', newVal);
// });

const tooltip = (obj) => {
  console.log(obj);
  const {status, message} = obj;
  
  tooltipStatus.value = status;
  tooltipMessage.value = message;
  showTooltip.value = true;
  setTimeout(() => {
    showTooltip.value = false;


  }, 3000)
    
  
}
    



</script>

<style lang="scss">

  .admin-layout {
    // display: grid;
    // grid-template-columns: minmax(200px, 1fr) 4fr;
    display: flex;

    height: 100vh;
    position: relative;
    overflow: hidden;

    .sidebar{
      background: var(--dark-color);
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 250px;
      z-index: 100;
    }
    .sidebar-wrapper{
      width: 100%;
      height: 100%;
      position: sticky;
      overflow-y: auto;

      .title-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        color: var(--light-color);

        img{
          width: 5vw;
          margin: 1em;
          background: var(--light-color);
          border-radius: 30%
        }
        h1{
          font-size: 1.5rem;
        }
        span{
          margin-top: 10px;
          font-size: 0.8rem;
        }
      }
      .list-options{
        // padding: 1em;
        position: relative;
        img{
          width: 2vw;
        }
        li{
         
          position: relative;
          padding: 0.8em 0.7em 0.8em;
          margin-left: 10px;
          margin-right: 5px;
          margin-block: 5px;
          border-radius: 20px;
          cursor: pointer;
          transition: all ease 0.3s;
          color: var(--light-color);
          font-size: 1rem;
          a{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1em;

          }
          .label{
            background: #FF1744;
            position: absolute ;
            transform: translateY(-50%);
            top: 50%;
            right: 2%;
            padding: 2px 5px;
            border-radius: 30%;
            font-weight: 600;
            font-size: 1.1rem;
          }

        }
        li:hover{
          background: rgba(255, 255, 255, 0.1);
          transition: all ease 0.3s;
          // border-left: 5px solid white;

        }
        li:hover:before{
          content: '';
          position: absolute;
          top: 0;
          left: -3%;
          width: 5px;
          height: 100%;
          // transform: translate(-50%, -50%);
          // border-radius: 50%;
          background: var(--secondary-color);
          pointer-events: none;
        }
      }
      .exit-btn{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        position: absolute;
        bottom: 0;
        width: -webkit-fill-available;
        gap: 1em;
        padding: 0.8em 0.7em 0.8em;
        margin-left: 10px;
        margin-right: 15px;
        margin-block: 5px;
        border-radius: 20px;
        cursor: pointer;
        transition: all ease 0.3s;
        color: var(--light-color);
        font-size: 1rem;
        img{
          width: 2vw;
        }
      }
      .exit-btn:hover{
        background: rgba(255, 255, 255, 0.1);
        transition: all ease 0.3s;
        // border-left: 5px solid white;
      }
    }

      

    }
    .page-layout{
      background: var(--bg-color);
      height: 100vh;
      margin-left: 250px;
      flex-grow: 1;
      overflow: auto;
    }

  

</style>

