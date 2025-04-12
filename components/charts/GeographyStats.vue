<template>
    <div class="bg-white dark:bg-[var(--dark-alter-color)] dark:border dark:border-[var(--dark-border-color)] rounded-lg shadow p-6 space-y-6">
      <h2 class="text-xl font-semibold">📍 География</h2>
  
      <div class="flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/2">
          <canvas ref="regionChart" class="w-full h-64"></canvas>
        </div>
        <div class="w-full md:w-1/2">
          <ul class="space-y-2">
            <li
              v-for="(item, index) in regions"
              :key="item.name"
              class="flex justify-between bg-gray-100 dark:bg-[var(--dark-component-color)] p-3 rounded shadow-sm"
              ref="regionRefs"
            >
              <span class="text-sm font-medium">{{ index + 1 }}. {{ item.name }}</span>
              <span class="text-sm text-gray-700">{{ item.users }} пользователей</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import gsap from 'gsap'
  
  Chart.register(...registerables)
  
  const regionChart = ref(null)
  const regionRefs = ref([])
  
  const regions = [
    { name: 'Украина', users: 560 },
    { name: 'Польша', users: 130 },
    { name: 'Германия', users: 98 },
    { name: 'США', users: 82 },
    { name: 'Канада', users: 43 }
  ]
  
  onMounted(async () => {
    new Chart(regionChart.value, {
      type: 'doughnut',
      data: {
        labels: regions.map(r => r.name),
        datasets: [
          {
            data: regions.map(r => r.users),
            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    })
  
    await nextTick()
  
    gsap.from(regionChart.value, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'power2.out'
    })
  
    gsap.from(regionRefs.value, {
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
  