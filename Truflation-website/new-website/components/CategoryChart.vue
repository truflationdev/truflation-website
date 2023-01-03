

<script setup>
const { title } = defineProps(['title'])

</script>

<script>
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
import {useDataStore} from "../store/stateStore"

const main = useDataStore();
const chartData = main.list[0].subCategories[0].data

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return chartData
  }
}
console.log(options)
</script>


<template>
   <div class="flex flex-row container mx-auto mt-5">
        <div class="flex flex-col bg-gray-100 p-8 content-center rounded-lg items-center gap-5">
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-lg font-semibold">{{ main.list[0].categoryType }} sub-categories</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="py-1 px-3 rounded-full bg-gray-200" v-for="subCategory in main.list[0].subCategories">
                <p>{{ subCategory.title }}</p>
              </div>
            </div>
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-lg font-semibold">Data Sources</p>
            </div>        
        </div>
        <div class="flex flex-col w-4/5 ml-3 bg-slate-100 p-5 gap-4 rounded">
          <div class="flex flex-row items-center">
            <h2 class=" font-semibold">Today's Truflation Rate TimeFrame</h2>
            <ul class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-gray-200 align-middle items-center">
              <li class="p-0.5"><button class="bg-white p-1 rounded">1W</button></li>
              <li class="p-0.5"><button>1M</button></li>
              <li class="p-0.5"><button>6M</button></li>
              <li class="p-0.5"><button>YTD</button></li>
              <li class="p-0.5"><button>1Y</button></li>
            </ul>
          </div>
          <Line id="category-chart-id" :options="options" :data="chartData"/>
        </div>
    </div>
</template>

<style scoped>

</style>