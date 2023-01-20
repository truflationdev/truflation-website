

<script setup lang="ts">
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
import {useDataStore} from "~~/store/stateStore"
import { storeToRefs } from 'pinia'
import { TimePeriod } from './categoryTypes'
const { title } = defineProps(['title'])


const main = useDataStore();
const {selectedCategory, chartLables} = storeToRefs(main)



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function ColourPicker(index: number) {
  switch(index) {
    case 0:
      return "bg-green-100 text-green-600"
      case 1: 
      return "bg-indigo-100 text-indigo-600"
      case 2: 
      return "bg-yellow-100 text-yellow-600"
      case 3:
      return "bg-green-100 text-green-600"
      case 4: 
      return "bg-indigo-100 text-indigo-600"
      case 5: 
      return "bg-yellow-100 text-yellow-600"
      default:
        return ""
  }
}

</script>


<template>
   <div class="flex flex-row flex-wrap xl:flex-nowrap gap-8 container justify-center">
        <div class="flex flex-col bg-truflation-100 w-full p-4 content-center xl:w-1/3 rounded-lg gap-5">
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-lg font-semibold">{{ main?.getByCategoryType(selectedCategory)?.categoryType }} sub-categories</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class=" w-fit" v-for=" (subCategory, index) in main?.getByCategoryType(selectedCategory).categoryDrivers">
                <p class="px-2 py-1 rounded-full" :class="ColourPicker(index)" >{{ subCategory }}</p>
              </div>
            </div>
        </div>
        <div class="flex flex-col w-full ml-3 bg-truflation-100 p-5 gap-4 rounded">
          <div class="flex flex-row items-center">
            <h2 class=" font-semibold">Rate Trend</h2>
            <ul class="flex ml-auto flex-row w-fit px-3 py-1 rounded-lg gap-3 bg-black/5 align-middle items-center">
              <li class="px-1 py-0.5"><button :class="{'active-period': chartLables.categorySelection === TimePeriod.OneWeek}" @click="main?.updateCatLabel(7, TimePeriod.OneWeek)" >1W</button></li>
              <li class="px-1 py-0.5"><button :class="{'active-period': chartLables.categorySelection === TimePeriod.OneMonth}" @click="main?.updateCatLabel(30, TimePeriod.OneMonth)" >1M</button></li>
              <li class="px-1 py-0.5"><button :class="{'active-period': chartLables.categorySelection === TimePeriod.SixMonths}" @click="main?.updateCatLabel(150, TimePeriod.SixMonths)" >6M</button></li>
              <li class="px-1 py-0.5"><button :class="{'active-period': chartLables.categorySelection === TimePeriod.YTD}" @click="main?.updateCatLabelYTD(TimePeriod.YTD)">YTD</button></li>
              <li class="px-1 py-0.5"><button :class="{'active-period': chartLables.categorySelection === TimePeriod.OneYear}" @click="main?.updateCatLabel(365, TimePeriod.OneYear)">1Y</button></li>
            </ul>
          </div>
          <Line id="category-chart-id" :options="options" :data="main?.getCatChart(main?.getByCategoryType(selectedCategory).data)"/>
          <div class="flex flex-row">
            <div></div>
          </div>
        </div>
    </div>
</template>

<style scoped>

</style>