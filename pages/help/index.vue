<template>
  <div class="section page help-section">
    <div class="container">
      <LinkBlock pageName="Покупцю" />
      <div class="page-title border-b-[1px] border-[#d9dbe0] py-2">
        <h1 class="text-[var(--dark-color)] font-bold text-2xl mb-5">
          <!-- Допомога покупцю -->
          {{ $t("buyers-page.title") }}
        </h1>
        <p class="text-[var(--dark-color)] font-medium text-lg mb-2">
          <!-- Ми підготували відповіді на запитання та рекомендації, які часто задаються, які допоможуть вам у процесі оформлення та отримання Ваших замовлень.  -->
          {{ $t("buyers-page.description") }}
        </p>
      </div>
    </div>
    <div class="mobile-bar">
      <ul>
        <li>
          <span>
            <!-- Оформлення замовлення -->
            {{ $t("buyers-page.set-order.title") }}
          </span>
        </li>
        <li>
          <span>
            <!-- Зміна, скасування замовлення -->
            {{ $t("buyers-page.change-order.change-order.strong") }}
          </span>
        </li>
        <li>
          <span>
            <!-- Гарантії та повернення -->
            {{ $t("buyers-page.change-order.warranty.title") }}
          </span>
        </li>
        <li>
          <span>
            <!-- Часті питання -->
            {{ $t("buyers-page.faq.title") }}
          </span>
        </li>
        <li>
          <span>
            <!-- Відстеження замовлення -->
            {{ $t("buyers-page.order-tracking.title") }}
          </span>
        </li>
      </ul>
    </div>
    <div class="container">
      <div
        class="content-wrapper grid grid-cols-[1fr_2fr] mt-0 mb-14 w-full gap-5 max-md:block"
      >
        <div
          class="links sticky top-[75px] w-full h-fit pb-8 flex flex-col gap-5 max-md:hidden"
        >
          <ul
            class="links-block border-[1px] bg-white border-[var(--dark-color)] py-8 px-5 rounded-xl flex flex-col gap-5"
          >
            <li
              class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] font-normal text-base leading-relaxed"
              >
                <!-- Як оформити замовлення? -->
                {{ $t("buyers-page.set-order.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                fill="var(--dark-color)"
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] font-normal text-base leading-relaxed"
              >
                <!-- Як змінити чи скасувати замовлення? -->
                {{ $t("buyers-page.change-order.change-order.strong") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                fill="var(--dark-color)"
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] font-normal text-base leading-relaxed"
              >
                <!-- Гарантії та повернення -->
                {{ $t("buyers-page.change-order.warranty.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                fill="var(--dark-color)"
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] font-normal text-base leading-relaxed"
              >
                <!-- Часті питання -->
                {{ $t("buyers-page.faq.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                fill="var(--dark-color)"
              />
            </li>
            <li
              class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300"
            >
              <span
                class="text-[var(--dark-color)] font-normal text-base leading-relaxed"
              >
                <!-- Відстеження замовлення -->
                {{ $t("buyers-page.order-tracking.title") }}
              </span>
              <SvgIcon
                name="arrow-right"
                size="micro"
                fill="var(--dark-color)"
              />
            </li>
          </ul>

          <div class="page-img bg-[var(--primary-color)] rounded-xl">
            <img src="/public/img/cash-delivery.png" alt="cash-delivery" />
          </div>
        </div>
        <div class="info-blocks">
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Як оформити замовлення? -->
              {{ $t("buyers-page.set-order.title") }}
            </h2>
            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
              <!-- Ми пропонуємо кілька способів оплати для вашої зручності: -->
              {{ $t("buyers-page.set-order.text") }}
            </p>

            <div
              class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <!-- <span class="font-semibold">Банківська картка:</span>  -->
                <!-- Виберіть товар із каталогу та натисніть кнопку “Додати до кошика”. -->
                {{ $t("buyers-page.set-order.content1") }}
              </p>
              <!-- <p> -->
              <!-- <span class="font-semibold">Електронні гаманці:</span>  -->
              <!-- Перейдіть до кошика, перевірте список вибраних товарів та натисніть "Оформити замовлення". -->
              <!-- {{ $t("buyers-page.set-order.content2") }} -->

              <!-- </p> -->
              <p>
                <!-- <span class="font-semibold">Безготівковий розрахунок:</span>  -->
                <!-- Вкажіть свої контактні дані, адресу доставки та виберіть спосіб оплати. -->
                {{ $t("buyers-page.set-order.content2") }}
              </p>
              <!-- <p> -->
              <!-- <span class="font-semibold">Післяоплата:</span>  -->
              <!-- Підтвердьте замовлення. На вказаний email прийде підтвердження з деталями. -->

              <!-- </p> -->
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Як змінити чи скасувати замовлення? -->
              {{ $t("buyers-page.change-order.title") }}
            </h2>
            <!-- <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми співпрацюємо з надійними логістичними компаніями, щоб забезпечити швидку та якісну доставку.

                            </p> -->

            <div
              class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  <!-- Зміна замовлення:: -->
                  {{ $t("buyers-page.change-order.change-order.strong") }}
                </span>
                <!-- Якщо замовлення ще не надіслано, ви можете зв'язатися з нашою службою підтримки телефону [вставте номер телефону] або email [вставте email]. -->
                {{ $t("buyers-page.change-order.change-order.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Скасування замовлення: -->
                  {{ $t("buyers-page.change-order.cancel-order.strong") }}
                </span>
                <!-- Щоб скасувати замовлення, зв'яжіться з нами, вказавши номер замовлення. Якщо замовлення вже відправлено, скасування можливе лише після отримання та повернення товару. -->
                {{ $t("buyers-page.change-order.cancel-order.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Гарантії та повернення -->
              {{ $t("buyers-page.change-order.warranty.title") }}
            </h2>
            <!-- <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми пропонуємо кілька способів оплати для вашої зручності:
                            </p> -->
            <div
              class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  <!-- Гарантія на товари: -->
                  {{ $t("buyers-page.change-order.warranty.content1.strong") }}
                </span>
                <!-- Всі товари мають гарантію відповідно до законодавства. -->
                {{ $t("buyers-page.change-order.warranty.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Повернення товару:  -->
                  {{ $t("buyers-page.change-order.warranty.content2.strong") }}
                </span>
                <!-- Ви можете повернути товар протягом 14 днів з моменту отримання, якщо він зберіг товарний вигляд та упаковку. -->
                {{ $t("buyers-page.change-order.warranty.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Як оформити повернення:  -->
                  {{ $t("buyers-page.change-order.warranty.content3.strong") }}
                </span>
                <!-- Зв'яжіться з нашою службою підтримки, щоб отримати інструкцію щодо повернення. -->
                {{ $t("buyers-page..change-orderwarranty.content3.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Часті питання -->
              {{ $t("buyers-page.faq.title") }}
            </h2>
            <!-- <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми пропонуємо кілька способів оплати для вашої зручності:
                            </p> -->
            <div
              class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  <!-- Чи можу я замовити доставку до іншого міста?  -->
                  {{ $t("buyers-page.faq.content1.strong") }}
                </span>

                <!-- Так, ми доставляємо замовлення по всій країні. Вартість та термін доставки залежать від вашого регіону. -->
                {{ $t("buyers-page.faq.content1.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Що робити, якщо я отримав пошкоджений товар? -->
                  {{ $t("buyers-page.faq.content2.strong") }}
                </span>
                <!-- Якщо ви виявили пошкодження товару, одразу зв'яжіться з нашою службою підтримки та надайте фотографії пошкодження. -->
                {{ $t("buyers-page.faq.content2.text") }}
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Чи можна отримати знижку на перше замовлення?  -->
                  {{ $t("buyers-page.faq.content3.strong") }}
                </span>
                <!-- Так, при підписці на нашу розсилку ви отримаєте знижку на перше замовлення. Подробиці дивіться на сторінці "Новини". -->
                {{ $t("buyers-page.faq.content3.text") }}
              </p>
            </div>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Відстеження замовлення -->
              {{ $t("buyers-page.order-tracking.title") }}
            </h2>
            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
              <!-- Після відправки замовлення на вказаний email буде надіслано трек-номер, за допомогою якого ви зможете відстежити статус доставки на сайті транспортної компанії. -->
              {{ $t("buyers-page.order-tracking.text") }}
            </p>
          </div>
          <div class="text-block mb-5">
            <h2
              class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
            >
              <!-- Якщо у вас залишилися питання, ми завжди готові допомогти! -->
              {{ $t("buyers-page.rest-question.title") }}
            </h2>
            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
              <!-- Зв'яжіться з нашою службою підтримки будь-яким зручним способом: -->
              {{ $t("buyers-page.rest-question.text") }}
            </p>
            <div
              class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2"
            >
              <p>
                <span class="font-semibold">
                  <!-- Телефон:  -->
                  {{ $t("buyers-page.rest-question.tel") }}
                </span>

                +380 99 999 99 99
              </p>
              <p>
                <span class="font-semibold"> Email: </span>
                test@korzinka.in.com
              </p>
              <p>
                <span class="font-semibold">
                  <!-- Онлайн-чат на сайті. -->
                  {{ $t("buyers-page.rest-question.chat") }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed"
      >
        <h2
          class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]"
        >
          <!-- Ми завжди поруч, щоб допомогти! -->
          {{ $t("buyers-page.summary.title") }}
        </h2>

        <p>
          <!-- Дякуємо, що обрали нас. Якщо у вас виникли питання, потребуєте консультації чи допомоги, наша команда завжди готова підтримати вас. Звертайтеся через зручний для вас канал зв’язку, і ми обов’язково знайдемо рішення. -->
          {{ $t("buyers-page.summary.text") }}
          <!-- <span class="font-semibold">[вставте номер телефону]</span> або напишіть на email  -->
          <span class="font-semibold">test@korzinka.in.ua</span>.
        </p>
      </div>
      <div
        class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed mt-10 mb-14 text-center"
      >
        <p>
          <span class="font-semibold">
            <!-- Ваш комфорт — наш пріоритет! -->
            {{ $t("buyers-page.summary.description") }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkBlock from "@/components/shared/LinkBlock.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
</script>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;

@include mixins.mobileBar(768px);
</style>
