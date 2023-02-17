<script setup>
const { title } = defineProps(["title"]);
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
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { options } from "../assets/chartConfig";
import { useDataStore } from "../store/stateStore";
import { storeToRefs } from "pinia";

const main = useDataStore();
const chartData = main.list[0].categoryDrivers[0].data;
const { selectedCategory, selectedCategoryDriver } = storeToRefs(main);

const select = () => {
  const targetId = event.currentTarget.id;
  main.updateSelectedCategoryDriver(targetId);
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "LineChart",
  components: { Line },
  data() {
    return chartData;
  },
};
</script>

<template>
  <div
    class="flex flex-row justify-center flex-wrap lg:flex-nowrap gap-8 container mx-auto mt-5"
  >
    <div
      class="flex flex-col w-full bg-gray-100 py-4 rounded-lg items-center gap-5"
    >
      <div class="flex flex-row gap-3">
        <p class="text-lg font-semibold">
          {{ main?.getByCategoryType(selectedCategory)?.categoryType }} Drivers
        </p>
      </div>
      <div class="flex flex-col w-full gap-2">
        <div
          class="py-1 px-3 text-gray-600 text-sm font-light"
          v-for="driver in main?.getByCategoryType(selectedCategory)
            .categoryDrivers"
        >
          <div
            class="flex flex-row justify-between"
            :class="{
              'driver-selected': selectedCategoryDriver === driver.title,
            }"
          >
            <button v-on:click="select($event)" :id="driver.title">
              <p>{{ driver.title }}</p>
            </button>
            <p>{{ driver.latestValue }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-full mx-8 lg:h-full flex-col ml-3 bg-slate-100 p-5 gap-4 h-fit rounded"
    >
      <div class="flex flex-row items-center">
        <h2 class="font-semibold">
          {{ main.list[0].categoryDrivers[0].title }}
        </h2>
        <ul
          class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-gray-200 align-middle items-center"
        >
          <li class="p-0.5">
            <button class="bg-white p-1 rounded">1W</button>
          </li>
          <li class="p-0.5"><button>1M</button></li>
          <li class="p-0.5"><button>6M</button></li>
          <li class="p-0.5"><button>YTD</button></li>
          <li class="p-0.5"><button>1Y</button></li>
        </ul>
      </div>
      <Line
        v-if="
          selectedCategoryDriver !== 'unknown' &&
          main
            ?.getByCategoryType(selectedCategory)
            .categoryDrivers.find(
              (driver) => driver.title === selectedCategoryDriver
            )
        "
        id="category-chart-id"
        :options="options"
        :data="
          main?.getCategoryDrivers(selectedCategory, selectedCategoryDriver)
            .data
        "
      />
    </div>
    <div class="flex flex-col w-full bg-gray-100 p-4 rounded-lg gap-2 ml-3">
      <div class="flex flex-col gap-1 items-center">
        <p class="font-semibold">Basic Information</p>
        <p class="text-sm font-light">
          {{ main.list[0].categoryDrivers[0].title }}
        </p>
      </div>
      <div class="flex flex-col">
        <ul class="flex flex-col gap-2 mt-2 text-sm font-normal">
          <!-- <li class="flex c=flex-row">Report <div class="font-light ml-auto">{{ main?.getCategoryDrivers(selectedCategory, selectedCategoryDriver).about.report}}</div></li>
                <li class="flex flex-row">Source  <div class="font-light ml-auto">{{ main?.getCategoryDrivers(selectedCategory, selectedCategoryDriver).about.title}}</div></li>
                <li class="flex flex-row">Latest period  <div class="font-light ml-auto">{{main?.getCategoryDrivers(selectedCategory, selectedCategoryDriver).latestValue}}</div></li>
                <li class="flex flex-row">Latest Value  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.report}}</div></li>
                <li class="flex flex-row">Value from 1 month ago  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.report}}</div></li>
                <li class="flex flex-row">Change from Month ago  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.report}}</div></li>
                <li class="flex flex-row">Value from 1 Year ago  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.report}}</div></li>
                <li class="flex flex-row">Change from 1 Year ago  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.report}}</div></li>
                <li class="flex flex-row">Frequency  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.frequency}}</div></li>
                <li class="flex flex-row">Adjustment  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.adjustment}}</div></li>
                <li class="flex flex-row">New Release  <div class="font-light ml-auto">{{ main.list[0].categoryDrivers[0].about.newRelease}}</div></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
