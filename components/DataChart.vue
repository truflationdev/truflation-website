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

const copyStatus = ref(false);

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

// function copyToClipBoard() {
//   navigator.clipboard.writeText("truflation.com").then(() => {
//     copyStatus.value = true;
//   });
// }

// function DisplayChart() {
//   htmlToImage
//     .toJpeg(document.getElementById("main-chart"), { quality: 0.95 })
//     .then(function (dataUrl) {
//       var link = document.createElement("a");
//       link.download = "my-image-name.jpeg";
//       link.href = dataUrl;
//       link.click();
//     });
// }
</script>

<template>
  <div
    id="main-chart"
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
        class="text-white w-full px-2 py-1 mt-2 text-center bg-truflation-700 rounded-lg"
      >
        UK govt reported rate: 10.1%
      </div>
      <div
        v-if="selectedCountry === SelectedCountry.USA"
        class="text-white w-full px-2 py-1 mt-2 text-center bg-truflation-700 rounded-lg"
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
      <div class="flex gap-2 flex-row items-center">
        <h2 class="font-medium text-xs">Truflation Timeframe</h2>

        <div class="w-3 h-3 ml-4 rounded-full bg-[#0D58C6]"></div>
        <p class="text-xs">Truflation Rate</p>
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
        <!-- <a @click="DisplayChart()">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a> -->
        <div class="dropdown dropdown-end">
          <!-- <label tabindex="0" class="hover:cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label> -->

          <!-- <ul
            tabindex="0"
            class="dropdown-content menu mt-4 bg-white gap-0 shadow rounded-box w-[180px]"
          >
            <li
              href="https://truflation.com/"
              id="copy"
              @click="copyToClipBoard(event)"
              class="text-sm hover:bg-black/5"
            >
              <a v-if="!copyStatus">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.21895 6.78105C8.17755 5.73965 6.48911 5.73965 5.44772 6.78105L2.78105 9.44772C1.73965 10.4891 1.73965 12.1776 2.78105 13.219C3.82245 14.2603 5.51089 14.2603 6.55228 13.219L7.28666 12.4846M6.78105 9.21895C7.82245 10.2603 9.51089 10.2604 10.5523 9.21895L13.219 6.55228C14.2603 5.51089 14.2603 3.82245 13.219 2.78105C12.1776 1.73965 10.4891 1.73965 9.44772 2.78105L8.71464 3.51412"
                    stroke="#11171D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Copy Link</a
              >
              <a v-if="copyStatus" class="text-green-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8L7.33333 9.33333L10 6.66667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                    stroke="#008060"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Copied!
              </a>
            </li>
            <li class="hover:bg-black/5 text-sm">
              <a>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2642_16434)">
                    <path
                      d="M5.16478 14.5679C3.38654 14.5679 1.65737 14.0615 0.163651 13.1026C0.0242267 13.013 -0.0348058 12.8394 0.0206712 12.683C0.0761481 12.5265 0.234762 12.4269 0.397663 12.4504C1.65026 12.5962 2.95763 12.3415 4.05446 11.7142C2.96973 11.3884 2.08772 10.5483 1.73136 9.43449C1.69295 9.31428 1.72069 9.18341 1.80461 9.08952C1.85583 9.03258 1.92338 8.9942 1.99666 8.97857C1.1495 8.3334 0.614604 7.31481 0.614604 6.19594C0.614604 6.07003 0.68148 5.93419 0.79029 5.87016C0.899126 5.80614 1.03356 5.78624 1.1431 5.84598C1.17439 5.86376 1.20639 5.88083 1.23842 5.89649C0.85361 5.32815 0.640225 4.64815 0.640225 3.93827C0.640225 3.32228 0.8031 2.71485 1.11324 2.1828C1.17157 2.08181 1.27612 2.01637 1.39277 2.00712C1.50872 1.99859 1.62182 2.04696 1.69578 2.13658C3.13473 3.90131 5.21741 5.02018 7.46371 5.24993C7.45374 5.14253 7.44878 5.03299 7.44878 4.92486C7.44878 2.99937 9.01575 1.43237 10.9412 1.43237C11.8353 1.43237 12.701 1.77878 13.3469 2.39049C13.9408 2.25462 14.5098 2.02631 15.0412 1.7112C15.1685 1.63721 15.3278 1.64788 15.4438 1.73893C15.559 1.8314 15.606 1.98505 15.5611 2.12589C15.448 2.4794 15.2802 2.81015 15.0646 3.10677C15.2126 3.05556 15.3577 2.99794 15.5007 2.93464C15.6437 2.8692 15.8151 2.90905 15.9168 3.03137C16.0185 3.15229 16.0278 3.32656 15.9403 3.45814C15.527 4.07414 15.0234 4.61116 14.4422 5.05715C14.4444 5.13396 14.4451 5.2115 14.4451 5.28831C14.4451 9.84916 10.9733 14.5679 5.16478 14.5679ZM1.80035 13.1681C2.85807 13.6211 3.99969 13.8566 5.16478 13.8566C10.5287 13.8566 13.7338 9.49988 13.7338 5.2876C13.7338 5.15743 13.7302 5.02656 13.7253 4.89639C13.7203 4.77689 13.7758 4.66308 13.8725 4.59338C14.1286 4.40844 14.369 4.20431 14.5917 3.98238C14.3598 4.03574 14.1243 4.07699 13.886 4.10544C13.721 4.12891 13.5617 4.02719 13.5069 3.86787C13.4529 3.70925 13.5169 3.53427 13.6606 3.44748C13.943 3.2782 14.1905 3.06196 14.3939 2.81229C14.039 2.94816 13.6734 3.05412 13.2999 3.12667C13.1804 3.15158 13.0559 3.11174 12.972 3.02141C12.4485 2.46374 11.708 2.14366 10.9413 2.14366C9.4077 2.14366 8.1601 3.39127 8.1601 4.92483C8.1601 5.13751 8.18428 5.3516 8.23262 5.55931C8.25751 5.66744 8.2305 5.78195 8.15866 5.86802C8.08752 5.95338 7.98012 6.01241 7.86844 5.99463C5.44078 5.87228 3.15394 4.79325 1.51084 3.00931C1.40558 3.30664 1.35152 3.62102 1.35152 3.93827C1.35152 4.8715 1.81387 5.73573 2.58775 6.25285C2.72006 6.34106 2.77766 6.50535 2.72929 6.65688C2.68092 6.80768 2.53083 6.89871 2.38006 6.90441C2.04077 6.89374 1.70359 6.83327 1.3821 6.72517C1.60189 7.82697 2.44906 8.70045 3.55585 8.92307C3.71802 8.9558 3.83608 9.09449 3.84108 9.25951C3.84678 9.42382 3.73867 9.57104 3.58003 9.61517C3.27347 9.69841 2.95125 9.74534 2.63614 9.73893C3.11271 10.5818 4.00753 11.1302 5.0062 11.1501C5.15629 11.153 5.28858 11.2511 5.33624 11.3934C5.3839 11.5357 5.33624 11.6936 5.21814 11.7861C4.21877 12.5692 3.04796 13.04 1.80035 13.1681Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2642_16434">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Share on Twitter</a
              >
            </li>
          </ul> -->
        </div>
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
