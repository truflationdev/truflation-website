<script setup lang="ts">
import { CategoryData } from './categoryTypes';


const {category} = defineProps(['category'])
const data: CategoryData = category.list[0]

</script>

<template>
    <div class="flex flex-col container mx-auto h-max mt-8">
        <div class="flex flex-row">
            <div class=" font-light w-2/3">
                <h2 class=" font-semibold text-lg">About {{ data.categoryType }}</h2>
                {{data.about }}
            </div>
            <div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/Data-source-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{data.categoryType}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/factsheet-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{data.categoryType}} Data Sources</span><br>View the transparent data sources</p>
                </div>
            </div>
            <div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/export-data-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{data.categoryType}} Data Sources</span><br>View the transparent data sources</p>
                </div>
                <div class="flex flex-row">
                    <img class="mr-2" src="../assets/img/methadology-icon.svg" alt="">
                    <p class=" text-sm"><span class="text-base text-[#0D58C6]">{{data.categoryType}} Data Sources</span><br>View the transparent data sources</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row mt-4 justify-evenly" >
            <div class="flex gap-1 flex-col py-4 px-8 align-middle items-center rounded" v-for="dataPoint in data.indicatorData">
                <div class="text-md text-[#0D58C6]">{{ dataPoint.title }}</div>
                <h2 class=" text-xl font-semibold text-[#0D58C6]">{{ dataPoint.value }}%</h2>
            </div>
            <div class="flex flex-row bg-gray-100 rounded p-4">
                <div>

                </div>
                <div class="flex-col flex">
                    <p class=" font-semibold"> Relative Importance</p>
                    <p>The Relative Importance is the percentage weight <br>
                        influence on the overall inflation data. Learn more.</p>
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