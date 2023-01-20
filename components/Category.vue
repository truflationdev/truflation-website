<script setup lang="ts">
import { useDataStore } from '~~/store/stateStore';
import { CategoryData } from './categoryTypes';
import { storeToRefs } from 'pinia'


const main = useDataStore();
const {selectedCategory} = storeToRefs(main)


</script>

<template>
    <div class="flex flex-col container mx-auto">
        <div class="flex flex-row mt-5 gap-[152px] flex-wrap lg:flex-nowrap items-center ">
            <div class=" gap-3 justify-center flex flex-col">
                <h2 class=" font-semibold text-lg">About {{ selectedCategory }}</h2>
              <p class=" max-w-md">{{main?.getByCategoryType(selectedCategory)?.about }}</p>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 ml-auto">
                <div class="flex flex-row items-center">
                    <img class="mr-2 max-h-16" src="../assets/img/Data-source-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-truflation-500">{{ selectedCategory}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row items-center">
                    <img class="mr-2 max-h-16" src="../assets/img/factsheet-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-truflation-500">Fact Sheet</span><br>Download key points of this category</p>
                </div>
                <div class="flex flex-row items-center">
                    <img class="mr-2 max-h-16" src="../assets/img/export-data-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-truflation-500">Export Data</span><br>Download data feed to spreadsheets</p>
                </div>
                <div class="flex flex-row items-center">
                    <a class="flex" href="/methodology">
                    <img class="mr-2 max-h-16" src="../assets/img/methadology-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-truflation-500">Methodology</span><br>Understand our advanced methods</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-wrap mt-11 gap-20 lg:flex-nowrap mx-auto w-full" >
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">
                    <div class="text-md text-black/60">vs Last Month</div>
                    <h2 class="text-[24px] font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo }}%</h2>
                </div>
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">
                    <div class="text-md text-black/60">Vs Yesterday</div>
                    <h2 class=" text-[24px] font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday }}%</h2>
                </div>
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">

                    <div class="text-md text-black/60">Vs Week Ago</div>
                    <h2 class="text-[24px] font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo }}%</h2>
                </div>

            <div class="flex flex-row bg-truflation-100 items-center ml-auto justify-center rounded p-4">
                <div class="lg:flex-row flex-col gap-2 flex">
                    <div class="flex items-center justify-center">
                        <RadialProgress :percent="true" :value=" main?.getByCategoryType(selectedCategory)?.relativeImportance" />
                    </div>
                    <div class="flex flex-col">
                    <p class=" text-black/80 font-semibold"> Relative Importance</p>
                    <p class=" text-xs max-w-xs">The Relative Importance is the percentage weight
                        influence on the overall inflation data. Learn more.</p>
                        <a class=" text-xs underline text-black/60" href="/methodology">Learn More</a>
                    </div>

                    </div>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center w-full mt-8">
            <CategoryChart :title="`Rate Trend`" />
        </div>
    </div>
</template>

<style scoped>
</style>``