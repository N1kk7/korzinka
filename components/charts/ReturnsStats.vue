<template>
    <div class="bg-white dark:bg-[var(--dark-alter-color)] dark:border dark:border-[var(--dark-border-color)] rounded-lg shadow p-6 space-y-6">
      <h2 class="text-xl font-semibold">📦 Возвраты / Отмены</h2>
  
      <canvas ref="returnsChart" class="w-full h-64"></canvas>
  
      <ul class="mt-6 space-y-2">
        <li
          v-for="reason in cancelReasons"
          :key="reason.label"
          class="flex justify-between bg-gray-100 dark:bg-[var(--dark-component-color)] rounded px-4 py-2 shadow-sm"
          ref="reasonRefs"
        >
          <span class="text-sm">{{ reason.label }}</span>
          <span class="text-sm font-semibold text-gray-800">{{ reason.count }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import gsap from 'gsap'
  
  Chart.register(...registerables)
  
  const returnsChart = ref(null)
  const reasonRefs = ref([])
  
  const cancelReasons = [
    { label: 'Ошибка при оформлении', count: 45 },
    { label: 'Передумали', count: 32 },
    { label: 'Нет нужного способа доставки', count: 20 },
    { label: 'Долгая доставка', count: 17 },
    { label: 'Нашли дешевле', count: 11 }
  ]
  
  onMounted(async () => {
    new Chart(returnsChart.value, {
      type: 'bar',
      data: {
        labels: cancelReasons.map(r => r.label),
        datasets: [
          {
            label: 'Кол-во возвратов',
            data: cancelReasons.map(r => r.count),
            backgroundColor: '#ef4444',
            borderRadius: 6,
            barThickness: 40
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  
    await nextTick()
  
    gsap.from(returnsChart.value, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    })
  
    gsap.from(reasonRefs.value, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    })
  })
  </script>
  
  <style scoped>
  canvas {
    max-height: 300px;
  }
  </style>
  