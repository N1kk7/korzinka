<template>
  <section class="seo-section">
    <div class="container">
      <div class="title">
        <h1>
          {{ $t("index-page.main-seo.main-title") }}
        </h1>
      </div>
      <p class="seo-text">
        {{ $t("index-page.main-seo.main-text") }}
      </p>
      <div class="seo-block">
        <div class="seo-wrapper">
          <h2 class="title">
            {{ $t("index-page.why-us.title") }}
          </h2>
          <div
            class="info-block light-block flex flex-col justify-start gap-5 items-center"
          >
            <div class="top-row">
              <ul class="seo-list">
                <li>
                  <strong>
                    {{ $t("index-page.why-us.category.title") }}
                  </strong>
                  <ul class="sub-seo-list pt-5">
                    <li>
                      <span>
                        <strong>
                          {{ $t("index-page.why-us.category.content1.strong") }}
                        </strong>
                        {{ $t("index-page.why-us.category.content1.text") }}
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>
                          {{ $t("index-page.why-us.category.content2.strong") }}
                        </strong>
                        {{ $t("index-page.why-us.category.content2.text") }}
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>
                          {{ $t("index-page.why-us.category.content3.strong") }}
                        </strong>
                        {{ $t("index-page.why-us.category.content3.text") }}
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>
                          {{ $t("index-page.why-us.category.content4.strong") }}
                        </strong>
                        {{ $t("index-page.why-us.category.content4.text") }}
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>
                          {{ $t("index-page.why-us.category.content5.strong") }}
                        </strong>
                        {{ $t("index-page.why-us.category.content5.text") }}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              class="bottom-row list-wrapper flex justify-between items-start gap-5"
            >
              <ol start="2" class="seo-list">
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.why-us.quality.title") }}
                    </strong>
                    {{ $t("index-page.why-us.quality.text") }}
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.why-us.price.title") }}
                    </strong>
                    {{ $t("index-page.why-us.price.text") }}
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.why-us.delivery.title") }}
                    </strong>
                    {{ $t("index-page.why-us.delivery.text") }}
                  </span>
                </li>
              </ol>
              <div
                class="img-wrapper flex justify-center items-center relative"
              >
                <img
                  class="w-full h-full object-cover bg-[var(--dark-color)] rounded-lg"
                  src="~/public/seo-img/bags.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seo-block">
        <div class="seo-wrapper">
          <div class="title">
            <h1>
              {{ $t("index-page.our-products.title") }}
            </h1>
            <div class="info-block shadow-block">
              <ul class="seo-list pl-5">
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.our-products.content1.title") }}
                    </strong>
                    {{ $t("index-page.our-products.content1.text") }}
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.our-products.content2.title") }}
                    </strong>
                    {{ $t("index-page.our-products.content2.text") }}
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      {{ $t("index-page.our-products.content3.title") }}
                    </strong>
                    {{ $t("index-page.our-products.content3.text") }}
                  </span>
                </li>
              </ul>
              <div class="img-wrapper">
                <img
                  class="w-full h-full object-cover bg-[var(--dark-color)] rounded-lg"
                  src="~/public/seo-img/bag-character1.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seo-block">
        <div class="seo-wrapper">
          <div class="title">
            <h1>
              {{ $t("index-page.our-advantages.title") }}
            </h1>
          </div>
          <div class="info-block light-block shadow-block">
            <div class="img-wrapper">
              <img
                class="w-full h-full object-cover bg-[var(--dark-color)] rounded-lg"
                src="/public/seo-img/offer.png"
                alt="img"
              />
            </div>
            <ul class="seo-list">
              <li>
                <span>
                  {{ $t("index-page.our-advantages.content1") }}
                </span>
              </li>
              <li>
                <span>
                  {{ $t("index-page.our-advantages.content2") }}
                </span>
              </li>
              <li>
                <span>
                  {{ $t("index-page.our-advantages.content3") }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="seo-block">
        <div class="title mt-10">
          <h1>
            <!-- Як оформити замовлення? -->
            {{ $t("index-page.how-to-delivery.title") }}
          </h1>
        </div>
        <div class="seo-wrapper">
          <div class="description">
            <p>
              {{ $t("index-page.how-to-delivery.description") }}
            </p>
          </div>
          <div class="info-block dark-block bg-[var(--dark-color)]">
            <ul class="seo-list px-5">
              <li>
                <span>
                  {{ $t("index-page.how-to-delivery.content1") }}
                </span>
              </li>
              <li>
                <span>
                  {{ $t("index-page.how-to-delivery.content2") }}
                </span>
              </li>
              <li>
                <span>
                  {{ $t("index-page.how-to-delivery.content3") }}
                </span>
              </li>
            </ul>
            <div class="img-wrapper">
              <img
                src="/public/seo-img/delivery1.png"
                alt="img"
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="summary">
        <p>
          {{ $t("index-page.summary") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use ".//styles/mixins.scss" as mixins;
.seo-section {
  p {
    @include mixins.cardText;

    line-height: 2rem;
  }
  .seo-text {
    @include mixins.cardShadow;
    padding: 20px;
  }
  .seo-block {
    margin-top: 10px;
  }
  h2 {
    @include mixins.titleText;
    position: relative;
    z-index: 1;
    margin-block: 1vw;

    @media screen and (max-width: 768px) {
    }
  }
  h1 {
    position: relative;
    z-index: 1;
  }
  .seo-wrapper {
    margin-top: 4vw;
    .info-block {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 20px;
      position: relative;
      padding-inline: 1vw;
      gap: 1rem;
      @media screen and (max-width: 640px) {
        flex-direction: column;
      }

      .seo-list {
        list-style-type: decimal;
        color: var(--dark-color);
        flex: 1;
        @media screen and (max-width: 640px) {
          padding-left: 3vw;
        }
        li {
          padding-block: 1vw;
        }
        strong {
          @include mixins.descriptionText(700, var(--dark-color));
          position: relative;
          z-index: 1;
        }
        span {
          strong {
            @include mixins.descriptionText(700, var(--dark-color));
          }
          @include mixins.descriptionText(500, var(--dark-color));
        }
        .sub-seo-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          li {
            flex-basis: 250px;
            @include mixins.cardShadow;
            @media screen and (max-width: 639px) {
              flex-basis: 100%;
            }
          }
        }
      }
      .img-wrapper {
        flex: 1;
        img {
          width: 80%;
          margin: 0 auto;
        }
      }
      .bottom-row {
        @include mixins.cardShadow;
        ol {
          padding-left: 20px;
        }
      }
    }
    .shadow-block {
      @include mixins.cardShadow;
    }

    .dark-block {
      .seo-list {
        color: var(--light-color);
        span {
          color: var(--light-color);
          strong {
            color: var(--light-color);
          }
        }
      }
    }
  }

  .description {
    margin-bottom: 2rem;
  }
  .summary {
    margin: 4vw 0 2vw;
  }
}

@media screen and (max-width: 640px) {
  .sub-seo-list {
    padding-left: 0;
    padding-right: 0;
    gap: 0.5rem;
  }
  .bottom-row {
    flex-direction: column;
  }
}
</style>
