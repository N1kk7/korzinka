<template>
    <div class="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 class="text-xl font-semibold">📦 Товары</h2>
  
      <div>
        <h3 class="text-lg font-medium mb-2">Топ продаваемых товаров</h3>
        <canvas ref="topProductsChart" class="w-full h-64"></canvas>
      </div>
  
      <div>
        <h3 class="text-lg font-medium mb-2">Товары с низким остатком</h3>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="item in lowStockItems" :key="item.name" class="text-red-600">
            {{ item.name }} — {{ item.stock }} шт.
          </li>
        </ul>
      </div>
  
      <div>
        <h3 class="text-lg font-medium mb-2">Товары в избранном</h3>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="item in favorites"
            :key="item.id"
            class="bg-gray-100 p-4 rounded shadow w-full sm:w-48 text-center"
            ref="favoriteRefs"
          >
            <p class="font-semibold text-sm">{{ item.name }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ item.count }} добавлений</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import gsap from 'gsap'
  
  Chart.register(...registerables)
  
  const topProductsChart = ref(null)
  const favoriteRefs = ref([])
  
  const topSelling = [
    { name: 'Товар A', sales: 120 },
    { name: 'Товар B', sales: 95 },
    { name: 'Товар C', sales: 88 },
    { name: 'Товар D', sales: 75 }
  ]
  
  const lowStockItems = [
    { name: 'Товар X', stock: 3 },
    { name: 'Товар Y', stock: 5 },
    { name: 'Товар Z', stock: 1 }
  ]
  
  const favorites = [
    { id: 1, name: 'Товар D', count: 52 },
    { id: 2, name: 'Товар B', count: 41 },
    { id: 3, name: 'Товар A', count: 33 }
  ]
  
  onMounted(async () => {
    new Chart(topProductsChart.value, {
      type: 'bar',
      data: {
        labels: topSelling.map(p => p.name),
        datasets: [
          {
            label: 'Продажи',
            data: topSelling.map(p => p.sales),
            backgroundColor: '#10b981',
            borderRadius: 6,
            barThickness: 32
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
  
    gsap.from(topProductsChart.value, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    })
  
    gsap.from(favoriteRefs.value, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    })
  })
  </script>
  
  <style scoped>
  canvas {
    max-height: 300px;
  }
  </style>
  