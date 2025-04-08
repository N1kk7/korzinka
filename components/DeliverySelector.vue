<template>

<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <label
                class="rounded-lg border p-4 ps-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                :class="{
                  'border-[var(--dark-color)] dark:border-[var(--main-accent)]' : deliveryMethod === 'nova-post',
                  'border-gray-200 dark:border-gray-700':
                    deliveryMethod !== 'nova-post',
                }"
              >
                <input
                  type="radio"
                  name="delivery-method"
                  value="nova-post"
                  v-model="deliveryMethod"
                  class="hidden"
                />
                <div class="flex items-center h-full">
                  <div class="text-sm flex flex-col justify-between items-start gap-2 relative h-full">
                    <img src="@/public/img/nova-post.png" alt="new-post" class="dark:bg-white dark:rounded-lg p-2"/>
                    <span class="text-[var(--dark-color)] text-base dark:text-[var(--dark-font-color)]">
                      Оріентована дата доставки: <br />
                      <span class="dark:text-[var(--main-accent)]">
                        {{ day + 1 <= 9 ? "0" + (day + 1) : day + 1 }} -
                        {{ day + 3 <= 9 ? "0" + (day + 3) : day + 3 }} .
                        {{ month + 1 <= 9 ? "0" + (month + 1) : month + 1 }} .
                        {{ year }}
                      </span>
                    </span>
                  </div>
                </div>
              </label>

              <label
                class="rounded-lg border p-4 ps-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                :class="{
                  'border-[var(--dark-color)] dark:border-[var(--main-accent)]': deliveryMethod === 'ukrpost',
                  'border-gray-200 dark:border-gray-700':
                    deliveryMethod !== 'ukrpost',
                }"
              >
                <input
                  type="radio"
                  name="delivery-method"
                  value="ukrpost"
                  v-model="deliveryMethod"
                  class="hidden"
                />
                <div class="flex items-center h-full">
                  <div class="text-sm flex flex-col justify-between items-start gap-2 relative h-full">
                    <img src="@/public/img/ukrpost.png" alt="ukrpost" class="dark:bg-white dark:rounded-lg p-2"/>
                    <span class="text-[var(--dark-color)] text-base dark:text-[var(--dark-font-color)]">
                      Оріентована дата доставки: <br />
                      <span class="dark:text-[var(--main-accent)]">

                        {{ day + 3 <= 9 ? "0" + (day + 3) : day + 3 }} -
                        {{ day + 5 <= 9 ? "0" + (day + 5) : day + 5 }} .
                        {{ month + 1 <= 9 ? "0" + (month + 1) : month + 1 }} .
                        {{ year }}
                      </span>

                    </span>
                  </div>
                </div>
              </label>

              <label
                class="rounded-lg border p-4 ps-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                :class="{
                  'border-[var(--dark-color)] dark:border-[var(--main-accent)]': deliveryMethod === 'express',
                  'border-gray-200 dark:border-gray-700':
                    deliveryMethod !== 'express',
                }"
              >
                <input
                  type="radio"
                  name="delivery-method"
                  value="express"
                  v-model="deliveryMethod"
                  class="hidden"
                />
                <div class="flex items-start h-full">
                  <div class="text-sm flex flex-col justify-between items-start gap-2 relative h-full">
                    <span
                      class="font-medium text-2xl leading-none text-gray-900 dark:text-white"
                    >
                      Самовивіз (Харків)
                    </span>
                    <div class="info">
                      <p
                        class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400"
                      >
                        Час готовності замовлення
                      </p>
                      <p
                        class="mt-1 text-base font-normal text-gray-500 dark:text-[var(--main-accent)]"
                      >
                        {{ deliveryTime }}:00
                      </p>
                    </div>
                  
                  </div>
                </div>
              </label>
              <label
                class="rounded-lg border p-4 ps-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                :class="{
                  'border-[var(--dark-color)] dark:border-[var(--main-accent)]':
                    deliveryMethod === 'courier-delivery',
                  'border-gray-200 dark:border-gray-700':
                    deliveryMethod !== 'courier-delivery',
                }"
              >
                <input
                  type="radio"
                  name="delivery-method"
                  value="courier-delivery"
                  v-model="deliveryMethod"
                  class="hidden"
                />
                <div class="flex items-start h-full">
                  <div class="text-sm flex flex-col justify-between items-start gap-2 relative h-full">
                    <span
                      class="font-medium text-xl leading-none text-gray-900 dark:text-white"
                    >
                      Кур'єрська доставка по м. Харків.
                    </span>
                    <div class="info">
                      <p
                        class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400"
                      >
                        Час готовності замовлення
                      </p>
                      <p
                        class="mt-1 text-base font-normal text-gray-500 dark:text-[var(--main-accent)]"
                      >
                        {{ deliveryTime }}:00
                      </p>
                    </div>
                  
                  </div>
                </div>
              </label>
            </div>



</template>



<script setup>
    import { ref, watch } from 'vue'

    const props = defineProps({
    modelValue: String,
    })

    const emit = defineEmits(['update:modelValue'])

    const localValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
    })

    const options = [
    { value: 'nova-post', label: 'Нова Пошта' },
    { value: 'ukrpost', label: 'Укрпошта' },
    { value: 'express', label: 'Самовивіз (Харків)' },
    { value: 'courier-delivery', label: 'Кур\'єрська доставка' },
    ]
</script>

<style lang="scss" scoped>

</style>