<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { options } from "../assets/chartConfig.ts";
import { useDataStore, SelectedCountry } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
import { TimePeriod } from "./categoryTypes";

const { locationOptions } = defineProps(["locationOptions"]);
const name = "lineChart";

const main = useDataStore();
const { MainData, chartLables, selectedCountry, currentTime } =
  storeToRefs(main);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  TimeScale,
  Legend
);
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 justify-center items-start container max-w-[90%] lg:mx-auto"
  >
    <div
      class="flex flex-col rounded-lg justify-evenly bg-gradient-to-r w-[90%] sm:w-[400px] h-full lg:w-full justify-self-center min-w-[340px] from-[#3573E7] to-[#2463DB] gap-3 p-8 items-center"
    >
      <div class="flex flex-row w-full items-center justify-center gap-8">
        <div class="items-center flex p-4 rounded-lg bg-[#FFFFFF14]">
          <img
            v-if="selectedCountry === SelectedCountry.USA"
            src="~/assets/img/usa-flag.svg"
            alt=""
          />
          <img
            v-if="selectedCountry === SelectedCountry.GBR"
            src="~/assets/img/UK-icon.svg"
            alt=""
          />
        </div>
        <div class="flex flex-col">
          <p class="text-white text-sm md:text-lg font-bold">
            {{ selectedCountry }} Truflation
          </p>
          <p class="text-xs md:text-sm text-white/60">
            {{ main?.getDateToday() }}
          </p>
        </div>
        <!-- <select
          class="bg-[#FFFFFF14] text-white px-3 py-3 rounded-lg w-fit h-fit"
          name=""
          id=""
        >
          <option value="1y">1D</option>
        </select> -->
        <div
          class="bg-[#FFFFFF14] ml-auto text-white px-4 py-3 md:px-5 md:py-4 text-sm md:text-lg rounded-lg w-fit h-fit"
        >
          1D
        </div>
      </div>
      <div class="flex flex-row mt-12 gap-3 items-center">
        <p class="text-white text-6xl font-semibold">
          {{ main?.getHighAndLow().Inflation }}%
        </p>
        <div
          class="flex flex-row p-2 rotate-180 rounded-lg items-center gap-1"
          :class="{
            'bg-red-100 text-red-700': main.getInflationDayChange() > 0,
            'bg-[#E6F4EE] text-[#005E46]': main.getInflationDayChange() <= 0,
          }"
        >
          <svg
            v-if="main.getInflationDayChange() <= 0"
            width="11"
            height="7"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.734315 0.43451C1.04673 0.12209 1.55327 0.12209 1.86569 0.43451L4.5 3.06882L7.13431 0.43451C7.44673 0.12209 7.95327 0.12209 8.26569 0.43451C8.57811 0.746929 8.57811 1.25346 8.26569 1.56588L5.06569 4.76588C4.75327 5.0783 4.24673 5.0783 3.93431 4.76588L0.734315 1.56588C0.421895 1.25346 0.421895 0.746929 0.734315 0.43451Z"
              fill="#005E46"
            />
          </svg>
          <svg
            v-if="main.getInflationDayChange() > 0"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33329 10L7.99996 5.33333L12.6666 10"
              stroke="rgb(190 31 31)"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ Math.abs(main.getInflationDayChange()).toFixed(2) }}%</p>
        </div>
      </div>
      <div
        v-if="selectedCountry === SelectedCountry.GBR"
        class="text-white w-full px-2 py-1 mt-2 text-center bg-[#F59E0B] rounded-lg"
      >
        UK govt reported rate: 10.52%
      </div>
      <div
        v-if="selectedCountry === SelectedCountry.USA"
        class="text-white w-full px-2 py-1 mt-2 text-center bg-[#F59E0B] rounded-lg"
      >
        US govt reported rate: 6.45%
      </div>
      <div class="flex flex-col w-full">
        <div
          class="bg-slate-100 w-full bg-opacity-50 mt-[60px] rounded-full relative h-3"
        >
          <div
            class="h-full absolute bottom-2"
            :style="{ width: main.getMarkerWidth() + '%' }"
            :class="`width-[50%]`"
          >
            <svg
              class="ml-auto"
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19091 4.29093C4.47208 4.57211 4.92796 4.57211 5.20914 4.29093L8.27091 1.22917C8.72448 0.775591 8.40324 4.86374e-05 7.76179 4.86374e-05H1.63826C0.996806 4.86374e-05 0.675567 0.77559 1.12914 1.22917L4.19091 4.29093Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            class="rounded bg-white h-full absolute"
            :style="{ width: main.getMarkerWidth() + '%' }"
            :class="`width-[50%]`"
          ></div>
        </div>
        <div class="flex flex-row justify-between opacity-70 mt-3 text-center">
          <p class="text-white text-base text-center">
            {{ main.getHighAndLow().low }}% <br />YTD Low
          </p>
          <p class="text-white text-base">
            {{ main.getHighAndLow().high }}% <br />YTD High
          </p>
        </div>
      </div>
    </div>
    <div
      class="md:col-span-2 max-h-[425px] lg:max-h-[500px] ml-3 bg-truflation-100 p-5 gap-4 rounded-sm"
    >
      <div class="flex flex-row items-center">
        <!-- <h2 class="font-semibold">Today's Truflation Rate</h2> -->
        <ul
          class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-black/5 align-middle items-center"
        >
          <li class="p-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.mainSelection === TimePeriod.OneWeek,
              }"
              @click="main?.updateMainLabel(7, TimePeriod.OneWeek)"
            >
              1W
            </button>
          </li>
          <li class="p-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.mainSelection === TimePeriod.OneMonth,
              }"
              @click="main?.updateMainLabel(30, TimePeriod.OneMonth)"
            >
              1M
            </button>
          </li>
          <li class="p-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.mainSelection === TimePeriod.SixMonths,
              }"
              @click="main?.updateMainLabel(150, TimePeriod.SixMonths)"
            >
              6M
            </button>
          </li>
          <li class="p-0.5">
            <button
              :class="{
                'active-period': chartLables.mainSelection === TimePeriod.YTD,
              }"
              @click="main?.updateMainLabelYTD(TimePeriod.YTD)"
            >
              YTD
            </button>
          </li>
          <li class="p-0.5">
            <button
              :class="{
                'active-period':
                  chartLables.mainSelection === TimePeriod.OneYear,
              }"
              @click="main?.updateMainLabel(365, TimePeriod.OneYear)"
            >
              1Y
            </button>
          </li>
        </ul>
      </div>
      <Line
        id="my-chart-id"
        :options="options"
        :data="main?.getMainChart(main?.MainData)"
      />
    </div>
  </div>
</template>

<style scoped></style>
