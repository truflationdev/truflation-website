

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import {options } from "../assets/chartConfig"
const { dataPoints } = defineProps(['dataPoints'])
const name = "LineChart"



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

</script>


<template>
        <div class="flex flex-col w-full ml-3 mx-8 bg-slate-100 p-5 gap-4 rounded">
          <div class="flex flex-row items-center">
            <h2 class=" font-semibold">Rate Trend</h2>
            <ul class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-gray-200 align-middle items-center">
              <li class="p-0.5"><button class="bg-white p-1 rounded">1W</button></li>
              <li class="p-0.5"><button>1M</button></li>
              <li class="p-0.5"><button>6M</button></li>
              <li class="p-0.5"><button>YTD</button></li>
              <li class="p-0.5"><button>1Y</button></li>
            </ul>
          </div>
          <Line id="category-chart-id" :options="options" :data="dataPoints"/>
        </div>
</template>

<style scoped>

</style>