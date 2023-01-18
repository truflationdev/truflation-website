<script setup lang="ts">
import { CategoryList, CategoryType } from "~~/components/categoryTypes";
import {categoryData} from "../static/data/categoryData"
import { SelectedCountry, useDataStore } from "~~/store/stateStore";
import { storeToRefs } from 'pinia'


const main = useDataStore();
const {selectedCategory, selectedCountry} = storeToRefs(main)


async function fetchState () {
    if (selectedCountry.value === SelectedCountry.GBR) {
    await useAsyncData("geocode", () =>
     $fetch(`https://api.truflation.io/dashboard-data-uk`)
     ).then((res) => {
    main.hydrateState(res.data.value)
    })
    return
    }

    await useAsyncData("geocode", () =>
    $fetch(`https://api.truflation.io/dashboard-data`)
    ).then((res) => {
    main.hydrateState(res.data.value)
    })

}
fetchState()

</script>

<template>
    <div class="main-background ">
            <Banner />
            <div class="container mx-auto flex flex-row flex-wrap-reverse lg:flex-nowrap my-10 lg:my-20 gap-10">
                <div class="flex flex-row mx-auto bg-white rounded-md">
                        <div class="flex flex-col gap-4 p-8">
                            <h1 class="text-3xl font-bold">
                            Unbelievable Times Call <br> for Believable Data 
                            </h1>
                        <p>Truflation offers independent and censorship-resistant inflation 
                        <br> calculations based on census level price information.
                        </p>
                        <button class="btn"><a href="/solutions/marketplace">Visit Marketplace</a></button>
                    </div>
                    <img src="~/assets/img/globe.svg" alt="">
                </div>

                <div class="flex flex-col mx-auto bg-white p-8 rounded-md gap-6">
                    <div class="flex flex-row content-center gap-2 items-center">
                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                        <h3 class="font-semibold">Latest News</h3>
                        <h3 class=" text-blue-500 ml-auto"> View All</h3>  
                    </div>
                    <ul class="flex flex-col gap-2">
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Rising Inflation Expectations Dent Sentiment as Equity Markets Fall</p>
                        </li>
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Fed Housing Reset Sparks Biggest Post WWII Home Price Correction</p>
                        </li>
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Truflation Announces New Global Marketplace Dashboard</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container mx-auto flex flex-col gap-5 my-20">
                <div class="flex flex-row items-center content-center mt-10 gap-3">
                    <h2 class="text-2xl font-semibold">
                    Today's CPI Data by
                    </h2>
                    <img src="~/assets/img/logo.svg" alt="">
                    <img src="~/assets/img/usa-flag.svg" alt="">
                    <select v-on:change="fetchState()" v-model="selectedCountry" class="p-2" >
                        <option  :value="SelectedCountry.USA"> USA</option>
                        <option  :value="SelectedCountry.GBR">GBR</option>
                    </select>
                    <!-- <p class="ml-auto font-medium">Highlights</p>
                    <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-foc2us:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label> -->
                </div>
                <P class=" text-lg" >The US Inflation Rate by Truflation is {{ main.keyMetrics.Inflation }}%, <span class="text-green-600">{{main.getInflationDayChange()}}%</span> increase over the last day. </P>
            </div>
            <DataChart :locationOptions="selectedCategory"  />
            <div class="flex flex-col container mx-auto mt-5 gap-3">
                <h1 class="text-xl font-semibold">Categories</h1>
                <ul class="grid grid-cols-2 mx-5 lg:grid-cols-4 gap-y-8 w-full justify-center text-gray-600">
                    <li class=" border-b-2 border-gray-100"  v-for="cat in CategoryType" ><button :id='cat' @click="main.updateCategory(cat)" :class="{'category-selected': selectedCategory === cat}">{{ cat }}</button></li>
                </ul>
            </div>
            <Category  :category="selectedCategory" />
            <!-- <SubDrivers :category="categoryData"/> -->
           <DataPartners/>
            <div class="container mx-auto flex flex-row flex-wrap gap-10 mt-20">
                <div class="flex flex-row mx-auto text-white bg-gradient-to-br from-blue-800 to-white rounded-md">
                        <div class="flex flex-col gap-3 p-8">
                            <h1 class="text-3xl font-bold">Personal Inflation Calculator</h1>
                            <p>Calculate how strong your hedge is
                            <br> against inflation.
                            </p>
                            <p class="px-3 py-2 text-black rounded-full text-sm bg-yellow-300/70 w-fit">COMING SOON</p>
                        </div>
                    <img class=" w-1/5 ml-auto" src="~/assets/img/layout.svg" alt="">
                </div>
                <div class="flex flex-row mx-auto bg-[#F0F4FA] rounded-md">
                        <div class="flex flex-col gap-4 p-8">
                            <h1 class="text-3xl font-bold">Send us a Message</h1>
                            <p>Contact us if you have Queries</p>
                            <button class="btn"><a href="/contact"> Contact Us</a></button>
                        </div>
                        <img class=" w-2/5 ml-auto" src="~/assets/img/mail.svg" alt="">
                </div>
            </div>
        <NewsLetter />
        <FooterComp />
    </div>
</template>

<style scoped>

</style>
    