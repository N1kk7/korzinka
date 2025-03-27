<template>
  <div class="section contact-section max-md:mt-12">
    <div class="container">
      <LinkBlock pageName="Контакти" />
      <div class="page-title border-b-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] py-2">
        <h1 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-2xl mb-5">
          <!-- Контакти -->
          {{ $t("contacts-page.title") }}
        </h1>
        <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-lg mb-2">
          <!-- Ми завжди раді допомогти вам! Зв'яжіться з нами зручним для вас
          способом. -->
          {{ $t("contacts-page.description") }}
        </p>
      </div>

      <section
        class="contact-section grid grid-cols-[1fr_3fr] gap-5 mt-10 max-md:flex max-md:flex-col-reverse"
      >
        <div
          class="info-section border-r-[1px] border-[#d9dbe0] dark:border-[var(--dark-border-color)] pr-4 py-2 max-md:flex max-md:flex-wrap max-md:gap-5"
        >
          <div class="contact-block payment">
            <div class="text-block">
              <div
                class="contact-title flex items-center justify-start gap-3 mb-2"
              >
                <SvgIcon name="location" size="small" fill="red" />
                <h2 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-lg">
                  <!-- Адреса: -->
                  {{ $t("contacts-page.address.title") }}
                </h2>
              </div>
              <div class="shadow-block">
                <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                  <!-- Наш головний магазин розташований за адресою: -->
                  {{ $t("contacts-page.address.description") }}
                </p>
                <ul class="block-list">
                  <li>
                    <span class="text-[#4b839f] font-semibold text-sm mb-2">
                      korzinka.in.ua
                    </span>
                  </li>
                  <li>
                    <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                      <!-- Місто: Харків, -->
                      {{ $t("contacts-page.address.city") }}
                      <br />
                      <!-- ринок Барабашово -->
                      {{ $t("contacts-page.address.market") }}
                    </p>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
          <div class="contact-block payment">
            <div class="text-block">
              <div
                class="contact-title flex items-center justify-start gap-3 mb-2"
              >
                <SvgIcon name="time-icon" size="micro" fill="green" />
                <h2 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-lg">
                  <!-- Час роботи магазину: -->
                  {{ $t("contacts-page.work-hours.title") }}
                </h2>
              </div>
              <div class="shadow-block">
                <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                  <!-- Наш магазин працює щодня з: -->
                  {{ $t("contacts-page.work-hours.description") }}
                </p>
                <ul class="block-list">
                  <li>
                    <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                      9:00 - 18:00
                    </p>
                  </li>
                  <li>
                    <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                      <strong>
                        <!-- Вихідні -->
                        {{ $t("contacts-page.days-off.title") }} </strong
                      ><br />
                      <!-- Неділя, Понеділок -->
                      {{ $t("contacts-page.days-off.days") }}
                    </p>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <div class="contact-block delivery">
            <div class="text-block">
              <div
                class="contact-title flex items-center justify-start gap-3 mb-2"
              >
                <SvgIcon name="phone-icon" size="small" fill="blue" />
                <h2 class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-bold text-lg">
                  <!-- Телефони: -->
                  {{ $t("contacts-page.phones.title") }}
                </h2>
              </div>
              <div class="shadow-block">
                <ul class="block-list">
                <li>
                  <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mb-2">
                    <!-- Відділ продажу:  -->
                    {{ $t("contacts-page.phones.sales-department") }}
                    ,<br />
                    +38 (068) 000-00-00
                  </p>
                </li>
              </ul>
              </div>
           
            </div>
          </div>

          <div class="contact-block condition-delivery">
            <div class="text-block">
              <p class="text-[var(--dark-color)] dark:text-[var(--dark-font-color)] font-medium text-sm mt-6">
                <strong>
                  <!-- Електронні замовлення: -->
                  {{ $t("contacts-page.online-service.title") }}
                </strong>
                <br />
                <!-- Приймаємо 24/7: -->
                {{ $t("contacts-page.online-service.description") }}
              </p>
            </div>
          </div>
        </div>
        <div class="map flex items-start justify-center">
          
          <div id="map" style="height: 500px; width: 100%"></div>
        </div>
      </section>

      <section class="mb-10 max-md:mb-8">
        <div class="flex justify-center mt-12">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2
              class="mb-12 max-md:mb-[3vw] px-6 text-3xl font-bold text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
            >
              <!-- Зв'яжіться з нами -->
              {{ $t("contacts-page.contact-us.title") }}
            </h2>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div
            class="w-full shrink-0 grow-0 basis-auto lg:w-7/12 mt-5 relative"
          >
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div
                class="shadow-block mb-12 max-md:mb-[2vw] px-2 py-1 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-[1vw] z-10"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <!-- padding: 1vw 0.5vw; -->
                    <div
                      class="inline-block rounded-md bg-teal-400-100 py-[1vw] px-[0.5vw] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-0.5 text-center grow">
                    <p class="mb-2 font-bold text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
                      <!-- Technical support -->
                      {{ $t("contacts-page.contact-us.content1") }}
                    </p>
                    <p class="text-neutral-500 text-[1.3vw]">
                      support@example.com
                    </p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div
                class="mb-12 max-md:mb-[2vw] px-2 py-1 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-[1vw] z-10 shadow-block"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-teal-400-100 py-[1vw] px-[0.5vw] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-0.5 text-center grow">
                    <p class="mb-2 font-bold text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
                      <!-- Technical support -->
                      {{ $t("contacts-page.contact-us.content2") }}
                    </p>
                    <p class="text-neutral-500 text-[1.5vw]">
                      support@example.com
                    </p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div
                class="mb-12 max-md:mb-[2vw] px-2 py-1 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-[1vw] z-10 shadow-block"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-teal-400-100 py-[1vw] px-[0.5vw] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-0.5 text-center grow">
                    <p class="mb-2 font-bold text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
                      <!-- Technical support -->
                      {{ $t("contacts-page.contact-us.content3") }}
                    </p>
                    <p class="text-neutral-500 text-[1.5vw]">
                      support@example.com
                    </p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div
                class="mb-12 max-md:mb-[2vw] px-2 py-1 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-[1vw] z-10 shadow-block"
              >
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div
                      class="inline-block rounded-md bg-teal-400-100 py-[1vw] px-[0.5vw] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-0.5 text-center grow">
                    <p class="mb-2 font-bold text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
                      <!-- Technical support -->
                      {{ $t("contacts-page.contact-us.content4") }}
                    </p>
                    <p class="text-neutral-500 text-[1.5vw]">
                      support@example.com
                    </p>
                    <p class="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div class="bg absolute bottom-[-50px] z-100">
                <img src="@/public/img/contacts.png" alt="contact" />
              </div>
            </div>
          </div>

          <form
            class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
          >
            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[5px] text-[var(--dark-color)] dark:text-[var(--dark-font-color)] "
                htmlFor="exampleInput90"
              >
                <!-- Ім'я -->
                {{ $t("contacts-page.contact-us.form.name") }}
              </label>
              <input
                type="text"
                class="px-2 py-2 border w-full outline-none rounded-md bg-white dark:bg-[var(--dark-grey)] text-[var(--dark-color)] dark:text-[var(--dark-font-color)] dark:border dark:border-[var(--dark-border-color)] dark:border-solid"
                id="exampleInput90"
                placeholder="Ім'я і прізвище"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[5px] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                class="px-2 py-2 border w-full outline-none rounded-md bg-white dark:bg-[var(--dark-grey)] text-[var(--dark-color)] dark:text-[var(--dark-font-color)] dark:border dark:border-[var(--dark-border-color)] dark:border-solid"
                id="exampleInput90"
                placeholder="Введіть вашу електронну пошту"
              />
            </div>

            <div class="mb-3 w-full">
              <label
                class="block font-medium mb-[5px] text-[var(--dark-color)] dark:text-[var(--dark-font-color)]"
                htmlFor="exampleInput90"
              >
                <!-- Повідомлення -->
                {{ $t("contacts-page.contact-us.form.message") }}
              </label>
              <textarea
                class="px-2 resize-none py-2 border rounded-[5px] w-full outline-none bg-white dark:bg-[var(--dark-grey)] text-[var(--dark-color)] dark:text-[var(--dark-font-color)] min-h-36 dark:border dark:border-[var(--dark-border-color)] dark:border-solid"
                name=""
                id=""
                
              ></textarea>
            </div>

            <button
              type="button"
              class="mb-6 inline-block w-full rounded bg-[var(--dark-color)] hover:bg-rose-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md dark:bg-[var(--dark-grey)] dark:text-[var(--dark-font-color)] dark:border dark:border-solid dark:border-[var(--main-accent)]"
            >
              <!-- Відправити -->
              {{ $t("contacts-page.contact-us.form.btn") }}
            </button>
          </form>
        </div>
      </section>

      <section class="summary mb-12">
        <div class="text-block font-bold text-center text-[var(--dark-color)] dark:text-[var(--dark-font-color)]">
          <p class="text-lg">
            <!-- Ми цінуємо вашу думку і завжди готові зробити Ваш досвід взаємодії з
            нами краще! -->
            {{ $t("contacts-page.contact-us.summary") }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LinkBlock from "@/components/shared/LinkBlock.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";

const center = { lat: 50.00321326656911, lng: 36.30118217658963 };
const markerOptions = {
  position: center,
  label: "Korzinka",
  title: "Korzinka",
  clickable: true,
};

onMounted(() => {
  if (window.google && window.google.maps) {
    initMap();
  } else {
    loadGoogleMapsApi()
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error("Ошибка при загрузке Google Maps API:", error);
      });
  }
});

const loadGoogleMapsApi = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAuzTR9g-8CFF-vieFvZ6akRU5CYhdLxo8&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: markerOptions.title,
    label: markerOptions.label,
    clickable: markerOptions.clickable,
  });

  const infowindow = new google.maps.InfoWindow({
    content: "<p>Information about Korzinka</p>",
  });

  marker.addListener("click", () => {
    infowindow.open({
      map: map,
      position: center,
    });
  });
};
</script>

<style lang="scss" scoped>

@use ".//styles/mixins.scss" as mixins;


  .contact-section {
    font-family: "Montserrat", sans-serif;
  }
  .contact-block {
    flex: 1;
    flex-basis: 250px;
  }
  .contact-title{
    position: relative;
    z-index: 1;
  }

  .shadow-block{
    @include mixins.cardShadow;
    margin-block: 10px;
    height: auto;
    background: rgba(224, 224, 224, 0.92);
    border: 1px solid var(--dark-color);
    backdrop-filter: blur(3px);


  }

  .dark .shadow-block{
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3), -6px -6px 20px rgba(0, 0, 0, 0.4);
    background: rgba(20, 20, 20, 0.92);
    border: 1px solid var(--dark-border-color);
  }
</style>
