<template>
    <div class="bg-white dark:bg-[var(--dark-alter-color)] dark:border dark:border-[var(--dark-border-color)] rounded-lg shadow p-6 space-y-6">
      <h2 class="text-xl font-semibold">🛒 Продажи и Заказы</h2>
  
      <canvas ref="salesChart" class="w-full h-64"></canvas>
  
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div v-for="stat in stats" :key="stat.label" class="bg-gray-100 dark:bg-[var(--dark-component-color)] p-4 rounded shadow-md">
          <div class="text-lg font-bold">{{ stat.value }}</div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import gsap from 'gsap'
  
  Chart.register(...registerables)
  
  const salesChart = ref(null)
  
  const stats = [
    { label: 'Общий доход', value: '₴124 000' },
    { label: 'Средний чек', value: '₴620' },
    { label: 'Кол-во заказов', value: '200' },
    { label: 'Конверсия', value: '3.5%' }
  ]
  
  onMounted(() => {
    const chart = new Chart(salesChart.value, {
      type: 'line',
      data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [
          {
            label: 'Доход',
            data: [12000, 19000, 3000, 5000, 20000, 30000, 40000],
            fill: false,
            borderColor: '#4f46e5',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  
    gsap.from(salesChart.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    })
  })
  </script>
  
  <style scoped>
  canvas {
    max-height: 300px;
  }
  </style>
  