<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";
import { options } from "../assets/chartConfig";
import { useDataStore } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
import { TimePeriod } from "./categoryTypes";
const { title } = defineProps(["title"]);

const main = useDataStore();
const { selectedCategory, chartLables } = storeToRefs(main);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ColourPicker(index: number) {
  switch (index) {
    case 0:
      return "bg-green-100 text-green-600";
    case 1:
      return "bg-indigo-100 text-indigo-600";
    case 2:
      return "bg-yellow-100 text-yellow-600";
    case 3:
      return "bg-green-100 text-green-600";
    case 4:
      return "bg-indigo-100 text-indigo-600";
    case 5:
      return "bg-yellow-100 text-yellow-600";
    default:
      return "";
  }
}
</script>

<template>
  <div
    class="grid-col-1 grid md:grid-cols-3 xl:flex-nowrap gap-8 container justify-center"
  >
    <div
      class="flex flex-col items-center text-center md:text-left md:items-start bg-truflation-100 p-4 content-center rounded-lg gap-5"
    >
      <div class="gap-3 mt-auto mb-4 flex flex-col">
        <h2 class="font-semibold text-lg">About {{ selectedCategory }}</h2>
        <p class="max-w-md sm:mx-0">
          {{ main?.getByCategoryType(selectedCategory)?.about }}
        </p>
      </div>
      <div class="flex flex-row gap-3 items-center">
        <p class="text-lg font-semibold">sub-categories</p>
      </div>
      <div
        class="flex flex-col text-center items-center md:items-start md:text-left h-full gap-5"
      >
        <div
          class="w-fit"
          v-for="(subCategory, index) in main?.getByCategoryType(
            selectedCategory
          ).categoryDrivers"
        >
          <p class="px-2 py-1 rounded-full" :class="ColourPicker(index)">
            {{ subCategory }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="max-h-[500px] md:col-span-2 flex-col ml-3 bg-truflation-100 p-5 gap-4 rounded"
    >
      <div class="flex flex-row items-center">
        <h2 class="font-semibold">Rate Trend</h2>
        <ul
          class="flex ml-auto flex-row w-fit px-3 py-1 rounded-lg gap-3 bg-black/5 align-middle items-center"
        >
          <li class="px-1 py-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.categorySelection === TimePeriod.OneWeek,
              }"
              @click="main?.updateCatLabel(7, TimePeriod.OneWeek)"
            >
              1W
            </button>
          </li>
          <li class="px-1 py-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.categorySelection === TimePeriod.OneMonth,
              }"
              @click="main?.updateCatLabel(30, TimePeriod.OneMonth)"
            >
              1M
            </button>
          </li>
          <li class="px-1 py-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.categorySelection === TimePeriod.SixMonths,
              }"
              @click="main?.updateCatLabel(150, TimePeriod.SixMonths)"
            >
              6M
            </button>
          </li>
          <li class="px-1 py-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.categorySelection === TimePeriod.YTD,
              }"
              @click="main?.updateCatLabelYTD(TimePeriod.YTD)"
            >
              YTD
            </button>
          </li>
          <li class="px-1 py-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.categorySelection === TimePeriod.OneYear,
              }"
              @click="main?.updateCatLabel(365, TimePeriod.OneYear)"
            >
              1Y
            </button>
          </li>
        </ul>
      </div>
      <Line
        id="category-chart-id"
        :options="options"
        :data="
          main?.getCatChart(main?.getByCategoryType(selectedCategory).data)
        "
      />
      <div class="flex flex-row">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
