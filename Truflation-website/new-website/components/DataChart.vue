
<script setup>
const { locationOptions } = defineProps(['locationOptions'])

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
import * as chartConfig from '../assets/chartConfig.ts'

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
    return chartConfig
  }
}

</script>

<template>
    <div class="flex flex-row container mx-auto mt-5">
        <div class="flex flex-col bg-gradient-to-r from-[#3573E7] to-[#2463DB] p-8 content-center rounded-lg items-center gap-5">
            <div class="flex flex-row gap-3 items-center">
               <div class="flex items-center rounded-lg px-3 py-3 w-fit h-fit bg-[#FFFFFF14]">
                🇺🇸
               </div> 
               <p class=" text-white text-xl font-semibold">{{locationOptions.country}} Truflation <br>
                <span class=" text-sm font-light">15 nov 2022</span></p>
                <select class=" bg-[#FFFFFF14] text-white px-3 py-3 rounded-lg w-fit h-fit" name="" id="">
                    <option value="1y">1Y</option>
                </select>
            </div>
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-white text-3xl font-semibold">{{locationOptions.rate}}%</p>
                <p class=" p-2 rounded-lg bg-[#E6F4EE] text-[#005E46]">{{locationOptions.change}}%</p>
            </div>
            <div class="text-white w-fit text-sm px-2 py-1 font-semibold bg-[#F59E0B] rounded-lg">US govt reported rate: 8.6%</div>
        </div>
        <div class="flex flex-col w-4/5 ml-3 bg-slate-100 p-5 gap-4 rounded-sm">
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
          <Line id="my-chart-id" :options="chartOptions " :data="data"/>
        </div>
    </div>

</template>

<style scoped>

</style>