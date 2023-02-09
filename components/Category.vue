<script setup lang="ts">
import { useDataStore } from "~~/store/stateStore";
import { CategoryData } from "./categoryTypes";
import { storeToRefs } from "pinia";

const main = useDataStore();
const { selectedCategory } = storeToRefs(main);
</script>

<template>
  <div class="flex flex-col container mx-auto mt-10">
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 text-center md:text-left px-4 sm:px-0 items-center justify-center flex-wrap mt-2 gap-3 lg:flex-nowrap mx-auto w-full"
    >
      <div
        :class="{
          'bg-red-100 text-red-700':
            main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday >=
            0,
          'bg-[#E6F4EE] text-[#005E46]':
            main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday <=
            0,
        }"
        class="flex flex-col py-3 md:px-3 xl:px-6 align-middle justify-center items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">Vs Yesterday</div>
        <h2 class="text-[24px] px-4 p-2 rounded font-semibold">
          {{
            main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday
          }}%
        </h2>
      </div>
      <div
        :class="{
          'bg-red-100 text-red-700':
            main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo >=
            0,
          'bg-[#E6F4EE] text-[#005E46]':
            main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo <=
            0,
        }"
        class="flex flex-col py-3 md:px-6 align-middle justify-center items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">Vs Week Ago</div>
        <h2 class="text-[24px] p-2 px-4 rounded font-semibold">
          {{ main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo }}%
        </h2>
      </div>
      <div
        :class="{
          'bg-red-100 text-red-700':
            main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo >=
            0,
          'bg-[#E6F4EE] text-[#005E46]':
            main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo <=
            0,
        }"
        class="flex flex-col py-3 md:px-3 xl:px-6 align-middle justify-center items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">vs Last Month</div>
        <h2 class="text-[24px] px-4 p-2 rounded font-semibold">
          {{
            main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo
          }}%
        </h2>
      </div>
      <div
        :class="{
          'bg-red-100 text-red-700':
            main?.getByCategoryType(selectedCategory)?.categoryRate.quarter >=
            0,
          'bg-[#E6F4EE] text-[#005E46]':
            main?.getByCategoryType(selectedCategory)?.categoryRate.quarter <=
            0,
        }"
        class="flex flex-col py-3 md:px-3 xl:px-6 align-middle justify-center items-center rounded"
      >
        <div class="text-sm md:text-md text-black/60">vs Last Year</div>
        <h2 class="text-[24px] p-2 rounded font-semibold">
          {{ main?.getByCategoryType(selectedCategory)?.categoryRate.quarter }}%
        </h2>
      </div>

      <div
        class="lg:col-span-3 col-span-full sm:col-span-2 bg-truflation-100 items-center w-full ml-auto justify-center rounded p-4"
      >
        <div
          class="md:flex-row flex-col items-center justify-center text gap-2 flex"
        >
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
              Relative Importance refers to the percentage of influence that a
              specific factor has on the overall inflation data.
            </p>
            <a class="text-xs underline text-black/60" href="/methodology"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center mt-4 w-full">
      <CategoryChart :title="`Rate Trend`" />
    </div>
  </div>
</template>

<style scoped></style>
``
