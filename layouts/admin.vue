<template>
    <div class="admin-layout">

  

      <div class="sidebar fixed left-0 top-0">
        <div class="sidebar-wrapper">
          <div class="title-section">
          <img src="@/public/img/only-dog.png" alt="admin-img">
          <h1>
            Адмін
            <strong>
              Панель
            </strong>
          </h1>
          <span>
            https://www.korzinka.in.ua
          </span>

          </div>
          <hr>
          <ul class="list-options">
            <li>

              <NuxtLink to="/admin/">
                <img src="@/public/img/icons/house.png" alt="option">
                <span>
                  Головна
                </span>
              </NuxtLink>
            
            </li>
            <!--<hr>-->
            <li>

              <NuxtLink to="/admin/analytics">

                <img src="@/public/img/icons/analysis.png" alt="option">
                <span>
                  Аналітика
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/buyers">
                <img src="@/public/img/icons/buying.png" alt="option">
                <span>
                  Покупці
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/notifications">
                <img src="@/public/img/icons/notification.png" alt="option">
                <span>
                  Повідомлення
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/orders">
                <img src="@/public/img/icons/order.png" alt="option">
                  <span>
                    Замовлення
                  </span>
                  <div class="label">
                  <strong>
                    10
                  </strong>
                  <!-- <span>10</span> -->
                </div>
              </NuxtLink>
          
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/payment">
                <img src="@/public/img/icons/cash-payment.png" alt="option">
                <span>
                  Оплата
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/products">
                <img src="@/public/img/icons/cubes.png" alt="option">
                <span>
                  Товари
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->

            <li>
              <NuxtLink to="/admin/settings">
                <img src="@/public/img/icons/setting.png" alt="option">
                <span>
                  Налаштування
                </span>
              </NuxtLink>
            </li>
            <!--<hr>-->


          </ul>
          <div class="exit-btn">
            <NuxtLink to="/">
              <img src="@/public/img/icons/exit.png" alt="exit">
              <span>
                Вихід
              </span>
            </NuxtLink>
          </div>

        </div>
       
      </div>
  
      <main class="page-layout">
        <!-- Страница будет рендериться здесь -->
        <slot />
        <!-- <Tooltips :props="tooltipProps"/> -->
        <Tooltips 
          v-if="showTooltip"
          :tooltipStatus="tooltipStatus"



        >
        {{ tooltipMessage }}
        </Tooltips>
        <!-- :tooltipProps="tooltipProps"  -->

      </main>
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
  // console.log(obj);
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
      height: 150vh;
      margin-left: 250px;
      flex-grow: 1;
      overflow: auto;
    }

  

</style>

