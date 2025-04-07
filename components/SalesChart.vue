
<template>
    <div ref="chartWrapper" class="chart-wrapper">
      <div class="top-chart flex items-center justify-between mb-2">
        <div class="chart-title">Продажі за {{ period }}</div>
        <div class="chart-btn flex justify-center items-center gap-2">
            <button 
                class="border border-solid border-[var(--primary-color)] py px-2 rounded-lg bg-[var(--bg-color)] text-[var(--dark-color)]"
                @click="period = 'рік'"
            >
                за рік 
            </button>
            <button 
                class="border border-solid border-[var(--primary-color)] py px-2 rounded-lg bg-[var(--bg-color)] text-[var(--dark-color)]"
                @click="period = 'місяць'"
            > 
                за місяць
            </button>
            <button 
                class="border border-solid border-[var(--primary-color)] py px-2 rounded-lg bg-[var(--bg-color)] text-[var(--dark-color)]"
                @click="period = 'тиждень'"
            >
                за тиждень
            </button>
        </div>


      </div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import gsap from 'gsap'
  
  Chart.register(...registerables)
  
  const canvas = ref<HTMLCanvasElement | null>(null)
  const chartWrapper = ref(null)

  const period = ref('рік')
  
  onMounted(() => {
    const ctx = canvas.value!.getContext('2d')!
  
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.4)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Sales',
            data: [50, 300, 200, 500, 250, 400, 150, 320, 500],
            fill: true,
            backgroundColor: gradient,
            borderColor: '#4F6DF5',
            tension: 0.4, // плавные линии
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: 'rgba(0,0,0,0.05)'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.05)'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }
    })
  
    gsap.from(chartWrapper.value, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    })
  })
  </script>
  
  <style scoped>
    .chart-wrapper {
      width: 98%;
      height: 350px;
      background: white;
      border-radius: 20px;
      border: 1px solid transparent;
      margin: 0 auto;
      padding: 1rem;
      padding-bottom: 3rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }

    .dark .chart-wrapper {
      background: var(--dark-color);
      border-color: var(--dark-border-color);
    }
  </style>
  