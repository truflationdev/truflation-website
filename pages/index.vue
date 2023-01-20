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
    <head>
        <link href="https://api.fontshare.com/v2/css?f[]=work-sans@500,400&display=swap" rel="stylesheet">    
    </head>
    <div class="main-background ">
            <Banner />
            <div class=" flex container mx-auto">
                        <div class="flex flex-col w-full relative bg-truflation-100 items-center mt-20 pt-20 pb-10 pl-10 lg:flex-row">
                            <div class="flex flex-col gap-5 h-full">
                                <div class="flex flex-col">
                            <h1 class="text-[40px] font-semibold">
                            Unbelievable Times Call for Believable Data 
                            </h1>
                            <p class="mt-4 max-w-md">Truflation offers independent and censorship-resistant inflation calculations based on census level price information.
                            </p>
                            <button class=" mt-4 btn"><a class="flex flex-row items-center gap-2" href="/solutions/marketplace">Visit Marketplace <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23441 0.634217C7.54683 0.321797 8.05336 0.321797 8.36578 0.634217L13.1658 5.43422C13.4782 5.74664 13.4782 6.25317 13.1658 6.56559L8.36578 11.3656C8.05336 11.678 7.54683 11.678 7.23441 11.3656C6.92199 11.0532 6.92199 10.5466 7.23441 10.2342L10.6687 6.7999L1.4001 6.7999C0.958271 6.7999 0.600098 6.44173 0.600098 5.9999C0.600098 5.55807 0.958271 5.1999 1.4001 5.1999H10.6687L7.23441 1.76559C6.92199 1.45317 6.92199 0.946636 7.23441 0.634217Z" fill="white"/>
                            </svg>
                            </a></button>
                            </div>
                            </div>
                            <img class="absolute z-0 bottom-0 -right-0 invisible md:visible" src="~/assets/img/globe.svg" alt="">
                        </div>
                    </div>
            <!-- <div class="container mx-auto h-60 flex flex-row flex-wrap-reverse w-full gap-8 lg:flex-nowrap mt-20">
                <div class="flex relative min-w-fit items-center flex-row mx-auto bg-truflation-100 pl-10 pb-9 pt-10 rounded-md">
                        <div class="flex flex-col mr-20">
                            <h1 class="text-[40px] font-semibold">
                            Unbelievable Times Call for Believable Data 
                            </h1>
                            <p class="mt-4 max-w-md">Truflation offers independent and censorship-resistant inflation calculations based on census level price information.
                            </p>
                            <button class=" mt-4 btn"><a class="flex flex-row items-center gap-2" href="/solutions/marketplace">Visit Marketplace <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23441 0.634217C7.54683 0.321797 8.05336 0.321797 8.36578 0.634217L13.1658 5.43422C13.4782 5.74664 13.4782 6.25317 13.1658 6.56559L8.36578 11.3656C8.05336 11.678 7.54683 11.678 7.23441 11.3656C6.92199 11.0532 6.92199 10.5466 7.23441 10.2342L10.6687 6.7999L1.4001 6.7999C0.958271 6.7999 0.600098 6.44173 0.600098 5.9999C0.600098 5.55807 0.958271 5.1999 1.4001 5.1999H10.6687L7.23441 1.76559C6.92199 1.45317 6.92199 0.946636 7.23441 0.634217Z" fill="white"/>
                            </svg>
                            </a></button>
                        </div>
                    <img class="absolute z-0 bottom-0 right-0" src="~/assets/img/globe.svg" alt="">
                </div> -->


                <!-- <div class="flex flex-col mx-auto bg-white p-8 rounded-md gap-6">
                    <div class="flex flex-row content-center gap-2 items-center">
                        <div class="w-3 h-3 rounded-full flex items-center justify-center bg-green-400/40">
                            <div class="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <h3 class="font-semibold">Latest News</h3>
                    </div>
                    <ul class="flex flex-col gap-3">
                        <li>
                            <p class="text-black/50 text-xs">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Rising Inflation Expectations Dent Sentiment as Equity Markets Fall</p>
                        </li>
                        <li>
                            <p class="text-black/50 text-xs">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Fed Housing Reset Sparks Biggest Post WWII Home Price Correction</p>
                        </li>
                        <li>
                            <p class="text-black/50 text-xs">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Truflation Announces New Global Marketplace Dashboard</p>
                        </li>
                    </ul>
                </div> -->
            <!-- </div> -->
            <div class="container mx-auto flex flex-col gap-5 mt-12">
                <div class="flex flex-row items-center mt-10 gap-3">
                    <h2 class="text-4xl font-semibold">
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
                <P class=" text-lg" >The US Inflation Rate by Truflation is <span class=" font-semibold">{{ main.keyMetrics.Inflation }}%</span>, <span class="text-green-600 font-semibold">{{main.getInflationDayChange()}}%</span> change over the last day. <a class=" underline text-black/60" href="/methodology">Read Methodology</a> </P>
            </div>
            <div class="flex flex-col mt-7">
            <DataChart :locationOptions="selectedCategory"  />
            </div>
            <div class="flex flex-col container mx-auto mt-12 gap-3">
                <h1 class="text-2xl font-semibold">Categories</h1>
                <ul class="grid grid-cols-2 mt-6 lg:grid-cols-4 gap-y-8 w-full justify-center text-gray-600">
                    <li class=" border-b-2 border-gray-100"  v-for="cat in CategoryType" ><button :id='cat' @click="main.updateCategory(cat)" :class="{'category-selected': selectedCategory === cat}">{{ cat }}</button></li>
                </ul>
            </div>
            <div class="flex flex-col mt-8">
            <Category  :category="selectedCategory" />
            </div>
            <!-- <SubDrivers :category="categoryData"/> -->
            <div class="flex flex-col mt-12">
           <DataPartners/>
             </div>
            <div class="container mx-auto flex flex-row flex-wrap gap-10 mt-20">
                <div class="flex flex-row mx-auto text-white bg-gradient-to-br from-truflation-600 to-truflation-300 rounded-md">
                        <div class="flex flex-col gap-3 p-8">
                            <h1 class="text-3xl font-bold">Personal Inflation Calculator</h1>
                            <p>Calculate how strong your hedge is
                            <br> against inflation.
                            </p>
                            <p class="px-3 py-2 text-yellow-600 rounded-full text-sm bg-yellow-300 w-fit">COMING SOON</p>
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
            <div class="flex flex-col mt-12">
                <NewsLetter />
            </div>
        <FooterComp />
    </div>
</template>

<style scoped>

</style>
    