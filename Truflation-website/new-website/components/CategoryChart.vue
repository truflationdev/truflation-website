

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import {options } from "../assets/chartConfig"
import {useDataStore} from "~~/store/stateStore"
import { storeToRefs } from 'pinia'
const { title } = defineProps(['title'])


const main = useDataStore();
const {selectedCategory, selectedSubCategory} = storeToRefs(main)



const select = () => {
  const targetId = event.currentTarget.id
  main.updateSubCategory(targetId)
  console.log(targetId)
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

</script>


<template>
   <div class="flex flex-row flex-wrap lg:flex-nowrap gap-8 container lg:mx-auto mt-5">
        <div class="flex flex-col bg-gray-100 p-8 content-center w-full rounded-lg items-center gap-5">
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-lg font-semibold">{{ main?.getByCategoryType(selectedCategory)?.categoryType }} sub-categories</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="py-1 px-3 rounded-full bg-gray-200" v-for="subCategory in main?.getByCategoryType(selectedCategory)?.subCategories">
                <p><button v-on:click="select($event)" :id="subCategory.title">{{ subCategory.title }}</button></p>
              </div>
            </div>
            <div class="flex flex-row gap-3 items-center">
               <p class=" text-lg font-semibold">Data Sources</p>
            </div>        
        </div>
        <div class="flex flex-col w-full ml-3 mx-8 bg-slate-100 p-5 gap-4 rounded">
          <div class="flex flex-row items-center">
            <h2 class=" font-semibold">Rate Trend</h2>
            <ul class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-gray-200 align-middle items-center">
              <li class="p-0.5"><button class="bg-white p-1 rounded">1W</button></li>
              <li class="p-0.5"><button>1M</button></li>
              <li class="p-0.5"><button>6M</button></li>
              <li class="p-0.5"><button>YTD</button></li>
              <li class="p-0.5"><button>1Y</button></li>
            </ul>
          </div>
          <Line v-if="main.getSubCategory() !== 'unknown'" id="category-chart-id" :options="options" :data="main?.getSubCategoryType(selectedCategory, selectedSubCategory).data"/>
        </div>
    </div>
</template>

<style scoped>

</style>