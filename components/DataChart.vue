
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
import { options} from '../assets/chartConfig.ts'
import {useDataStore} from "~~/store/stateStore"
import { storeToRefs } from 'pinia'
import { TimePeriod } from './categoryTypes'


const { locationOptions } = defineProps(['locationOptions'])
const name = "lineChart"

const main = useDataStore();
const { MainData, chartLables} = storeToRefs(main)


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
    <div class="flex flex-row flex-wrap lg:flex-nowrap container items-center justify-center mx-auto mt-5">
        <div class="flex flex-col bg-gradient-to-r justify-center  from-[#3573E7] to-[#2463DB] p-8 content-center rounded-lg items-center gap-8">
            <div class="flex flex-row justify-evenly items-center gap-8">
               <div class="flex items-center rounded-lg px-3 py-3 w-fit h-fit bg-[#FFFFFF14]">
                🇺🇸
               </div> 
               <p class=" text-white text-xl font-semibold">{{locationOptions.country}} Truflation <br>
                <span class=" text-sm font-light">{{ main?.getDateToday() }}</span></p>
                <select class=" bg-[#FFFFFF14] text-white px-3 py-3 rounded-lg w-fit h-fit" name="" id="">
                    <option value="1y">1Y</option>
                </select>
            </div>
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-white text-5xl font-semibold">{{main?.getHighAndLow().Inflation}}%</p>
                <div class="flex flex-row p-2 rounded-lg items-center gap-1" :class="{'bg-red-100 text-red-700': main.getHighAndLow().change > 0, 'bg-[#E6F4EE] text-[#005E46]': main.getHighAndLow().change < 0}">
                  <svg :class="{'rotate-180 text-red-700': main.getHighAndLow().change > 0}" width="11" height="7" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.734315 0.43451C1.04673 0.12209 1.55327 0.12209 1.86569 0.43451L4.5 3.06882L7.13431 0.43451C7.44673 0.12209 7.95327 0.12209 8.26569 0.43451C8.57811 0.746929 8.57811 1.25346 8.26569 1.56588L5.06569 4.76588C4.75327 5.0783 4.24673 5.0783 3.93431 4.76588L0.734315 1.56588C0.421895 1.25346 0.421895 0.746929 0.734315 0.43451Z" fill="#005E46"/>
                  </svg>
                <p> {{ Math.abs(main.getHighAndLow().change)}}%</p>
                </div>
              </div>
            <div class="text-white w-full text-sm px-2 py-1 text-center font-semibold bg-[#F59E0B] rounded-lg">US govt reported rate: 6.5%</div> 
            <div class="flex flex-col w-full">
              <div class=" bg-slate-100 w-full bg-opacity-50 rounded-full relative h-3" >
                <div class="h-full absolute bottom-2" :style="{ 'width': main.getMarkerWidth() + '%' }" :class="`width-[50%]`"> 
                  <svg class="ml-auto" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.19091 4.29093C4.47208 4.57211 4.92796 4.57211 5.20914 4.29093L8.27091 1.22917C8.72448 0.775591 8.40324 4.86374e-05 7.76179 4.86374e-05H1.63826C0.996806 4.86374e-05 0.675567 0.77559 1.12914 1.22917L4.19091 4.29093Z" fill="white"/>
                  </svg>
                </div>
                <div class="rounded bg-white h-full absolute" :style="{ 'width': main.getMarkerWidth() + '%' }" :class="`width-[50%]`"> </div>
              </div>
              <div class="flex flex-row justify-between opacity-70 mt-3 text-center">
                <p class="text-white text-base text-center"> {{ main.getHighAndLow().low }}% <br>Low</p>
                <p class="text-white text-base">{{ main.getHighAndLow().high }}% <br>High</p>
              </div>
            </div>
        </div>
        <div class="flex flex-col w-2/3 ml-3 bg-slate-100 p-5 gap-4 rounded-sm">
          <div class="flex flex-row items-center">
            <h2 class=" font-semibold">Today's Truflation Rate TimeFrame</h2>
            <ul class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-gray-200 align-middle items-center">
              <li class="p-0.5"><button :class="{'active-period': chartLables.mainSelection === TimePeriod.OneWeek}" @click="main?.updateMainLabel(7, TimePeriod.OneWeek)">1W</button></li>
              <li class="p-0.5"><button :class="{'active-period': chartLables.mainSelection === TimePeriod.OneMonth}" @click="main?.updateMainLabel(30, TimePeriod.OneMonth)">1M</button></li>
              <li class="p-0.5"><button :class="{'active-period': chartLables.mainSelection === TimePeriod.SixMonths}" @click="main?.updateMainLabel(150, TimePeriod.SixMonths)">6M</button></li>
              <li class="p-0.5"><button :class="{'active-period': chartLables.mainSelection === TimePeriod.YTD}" @click="main?.updateMainLabelYTD(TimePeriod.YTD)">YTD</button></li>
              <li class="p-0.5"><button :class="{'active-period': chartLables.mainSelection === TimePeriod.OneYear}" @click="main?.updateMainLabel(365, TimePeriod.OneYear)">1Y</button></li>
            </ul>
          </div>
          <Line id="my-chart-id" :options="options " :data="main?.getMainChart(main?.MainData)"/>
        </div>
    </div>

</template>

<style scoped>

</style>