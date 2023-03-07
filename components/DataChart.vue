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
const { MainData, chartLables, selectedCountry, currentTime, loading } =
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
      class="flex flex-col rounded-lg justify-evenly bg-gradient-to-r w-[90%] sm:w-[400px] max-h-[500px] h-full lg:w-full justify-self-center min-w-[340px] from-[#3573E7] to-[#2463DB] gap-3 p-8 items-center"
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
        <p v-if="!loading" class="text-white text-[64px] font-semibold">
          {{ main?.getHighAndLow().Inflation }}%
        </p>
        <div
          role="status"
          class="w-full flex flex-row justify-center items-center"
          v-if="loading"
        >
          <svg
            v-if="loading"
            aria-hidden="true"
            class="h-16 w-16 text-blue-400 animate-spin fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <div
          v-if="!loading"
          class="flex flex-row p-2 rounded-lg items-center font-semibold gap-1"
          :class="{
            'bg-gray-100': loading,
            'bg-red-100 text-red-700':
              main.getInflationDayChange() > 0 && !loading,
            'bg-green-300 text-green-700':
              main.getInflationDayChange() <= 0 && !loading,
          }"
        >
          <svg
            v-if="main.getInflationDayChange() <= 0 && !loading"
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
            v-if="main.getInflationDayChange() > 0 && !loading"
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
          <p v-if="!loading">
            {{ Math.abs(main.getInflationDayChange()).toFixed(2) }}%
          </p>
          <div
            class="flex flex-row items-center text-black/50"
            role="status"
            v-if="loading"
          >
            <svg
              v-if="loading"
              aria-hidden="true"
              class="w-4 h-4 mr-2 animate-spin fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            %
          </div>
        </div>
      </div>
      <div
        v-if="selectedCountry === SelectedCountry.GBR"
        class="text-white w-full px-2 py-1 mt-2 text-center bg-[#F59E0B] rounded-lg"
      >
        UK govt reported rate: 10.1%
      </div>
      <div
        v-if="selectedCountry === SelectedCountry.USA"
        class="text-white w-full px-2 py-1 mt-2 text-center bg-truflation-600 rounded-lg"
      >
        US govt reported rate: 6.4%
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
          class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-truflation-200 align-middle items-center"
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
              @click="main?.updateMainLabel(180, TimePeriod.SixMonths)"
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
        v-if="!loading"
        id="my-chart-id"
        :options="options"
        :data="main?.getMainChart(main?.MainData)"
      />
      <svg
        v-if="loading"
        aria-hidden="true"
        class="h-16 w-16 text-blue-400 animate-spin fill-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
