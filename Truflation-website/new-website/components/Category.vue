<script setup lang="ts">
import { useDataStore } from '~~/store/stateStore';
import { CategoryData } from './categoryTypes';
import { storeToRefs } from 'pinia'


const main = useDataStore();
const {selectedCategory} = storeToRefs(main)


</script>

<template>
    <div class="flex flex-col container mx-auto h-max mt-8 gap-5">
        <div class="flex flex-row gap-3 mt-5 flex-wrap md:flex-nowrap justify-between mx-20">
            <div class=" font-light">
                <h2 class=" font-semibold text-3xl">About {{ selectedCategory }}</h2>
                <!-- {{main?.getByCategoryType(selectedCategory)?.about }} -->
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/Data-source-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{ selectedCategory}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/factsheet-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{ selectedCategory}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/export-data-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{ selectedCategory}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/methadology-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{ selectedCategory}} Data Sources</span><br>View the transparent data sources</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row flex-wrap mt-6 justify-evenly lg:flex-nowrap mx-auto w-full" >
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">
                    <div class="text-md text-gray-600">vs Last Month</div>
                    <h2 class=" text-xl font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.monthAgo }}%</h2>
                </div>
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">
                    <div class="text-md text-gray-600">Vs Yesterday</div>
                    <h2 class=" text-xl font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.yesterday }}%</h2>
                </div>
                <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded">

                    <div class="text-md text-gray-600">Vs Week Ago</div>
                    <h2 class=" text-xl font-semibold text-gray-600">{{ main?.getByCategoryType(selectedCategory)?.categoryRate.weekAgo }}%</h2>
                </div>

            <div class="flex flex-row bg-gray-100 rounded p-4">
                <div class="lg:flex-row flex-col gap-2 flex">
                    <div class="flex items-center justify-center">
                        <RadialProgress :value=" main?.getByCategoryType(selectedCategory)?.relativeImportance" />
                    </div>
                    <div class="flex flex-col">
                    <p class=" font-semibold"> Relative Importance</p>
                    <p>The Relative Importance is the percentage weight <br>
                        influence on the overall inflation data. Learn more.</p>
                    </div>

                    </div>
            </div>
        </div>
        <div class="flex flex-row">
            <CategoryChart :title="`Rate Trend`" />
        </div>
    </div>
</template>

<style scoped>
</style>