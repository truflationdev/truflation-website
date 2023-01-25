<script setup lang="ts">
import { useDataStore } from "~~/store/stateStore";
import { CategoryData } from "./categoryTypes";
import { storeToRefs } from "pinia";

const main = useDataStore();
const { selectedCategory } = storeToRefs(main);
</script>

<template>
  <div class="flex flex-col container mx-auto">
    <div
      class="flex text-center mx-auto md:text-left flex-row mt-5 gap-10 md:gap-[152px] flex-wrap lg:flex-nowrap items-center"
    >
      <div class="gap-3 flex flex-col">
        <h2 class="font-semibold text-lg">About {{ selectedCategory }}</h2>
        <p class="max-w-md mx-5 sm:mx-0">
          {{ main?.getByCategoryType(selectedCategory)?.about }}
        </p>
      </div>
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 items-center mx-auto md:ml-auto"
      >
        <div class="flex flex-col md:flex-row items-center">
          <a class="flex flex-col md:flex-row" href="/methodology">
            <img
              class="mr-2 max-h-16"
              src="../assets/img/Data-source-icon.svg"
              alt=""
            />
            <p class="text-sm">
              <span class="text-base text-truflation-500"> Data Sources</span
              ><br />View the transparent data sources
            </p>
          </a>
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <a class="flex flex-col md:flex-row" href="/methodology">
            <img
              class="mr-2 max-h-16"
              src="../assets/img/factsheet-icon.svg"
              alt=""
            />
            <p class="text-sm">
              <span class="text-base text-truflation-500">Fact Sheet</span
              ><br />Download key points of this category
            </p>
          </a>
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <a class="flex flex-col md:flex-row" href="/methodology">
            <img
              class="mr-2 max-h-16"
              src="../assets/img/export-data-icon.svg"
              alt=""
            />
            <p class="text-sm">
              <span class="text-base text-truflation-500">Export Data</span
              ><br />Download data feed to spreadsheets
            </p>
          </a>
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <a class="flex flex-col md:flex-row" href="/methodology">
            <img
              class="mr-2 max-h-16"
              src="../assets/img/methadology-icon.svg"
              alt=""
            />
            <p class="text-sm">
              <span class="text-base text-truflation-500">Methodology</span
              ><br />Understand our advanced methods
            </p>
          </a>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:flex flex-row text-center md:text-left flex-wrap mt-11 gap-1 md:gap-10 lg:flex-nowrap mx-auto w-full"
    >
      <div
        class="flex gap-1 flex-col py-4 md:px-8 align-middle items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">vs Last Quarter</div>
        <h2
          class="text-[24px] px-4 p-2 rounded font-semibold"
          :class="{
            'bg-red-100 text-red-700':
              main?.getByCategoryType(selectedCategory)?.categoryRate.quarter >=
              0,
            'bg-[#E6F4EE] text-[#005E46]':
              main?.getByCategoryType(selectedCategory)?.categoryRate.quarter <=
              0,
          }"
        >
          {{ main?.getByCategoryType(selectedCategory)?.categoryRate.quarter }}%
        </h2>
      </div>
      <div
        class="flex gap-1 flex-col py-4 md:px-8 align-middle items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">vs Last Month</div>
        <h2
          class="text-[24px] px-4 p-2 rounded font-semibold"
          :class="{
            'bg-red-100 text-red-700':
              main?.getByCategoryType(selectedCategory)?.categoryRate
                .monthAgo >= 0,
            'bg-[#E6F4EE] text-[#005E46]':
              main?.getByCategoryType(selectedCategory)?.categoryRate
                .monthAgo <= 0,
          }"
        >
          {{
            main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo
          }}%
        </h2>
      </div>
      <div
        class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">Vs Week Ago</div>
        <h2
          class="text-[24px] p-2 px-4 rounded font-semibold"
          :class="{
            'bg-red-100 text-red-700':
              main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo >=
              0,
            'bg-[#E6F4EE] text-[#005E46]':
              main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo <=
              0,
          }"
        >
          {{ main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo }}%
        </h2>
      </div>
      <div
        class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">Vs Yesterday</div>
        <h2
          class="text-[24px] px-4 p-2 rounded font-semibold"
          :class="{
            'bg-red-100 text-red-700':
              main?.getByCategoryType(selectedCategory)?.categoryRate
                .yesterday >= 0,
            'bg-[#E6F4EE] text-[#005E46]':
              main?.getByCategoryType(selectedCategory)?.categoryRate
                .yesterday <= 0,
          }"
        >
          {{
            main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday
          }}%
        </h2>
      </div>

      <div
        class="flex flex-row bg-truflation-100 items-center w-full md:w-fit ml-auto justify-center rounded p-4"
      >
        <div class="lg:flex-row flex-col gap-2 flex">
          <div class="flex items-center justify-center">
            <RadialProgress
              :percent="true"
              :value="
                main?.getByCategoryType(selectedCategory)?.relativeImportance
              "
            />
          </div>
          <div class="flex flex-col">
            <p class="text-black/80 font-semibold">Relative Importance</p>
            <p class="text-xs max-w-xs">
              The Relative Importance is the percentage weight influence on the
              overall inflation data. Learn more.
            </p>
            <a class="text-xs underline text-black/60" href="/methodology"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center w-full mt-8">
      <CategoryChart :title="`Rate Trend`" />
    </div>
  </div>
</template>

<style scoped></style>
``
