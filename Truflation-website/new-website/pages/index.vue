<template>
    <div class="main-background ">
        <header class="flex justify-between text-gray-600 py-8 px-16">
            <a href="/"><img src="~/assets/img/logo.svg" alt=""></a>

            <ul class="flex flex-row gap-8">
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Methodology</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </header>
        <body>
            <div class="container mx-auto flex flex-row gap-10">
                <div class="flex flex-row w-2/3 mx-auto bg-white rounded-md">
                        <div class="flex flex-col gap-4 p-8">
                            <h1 class="text-3xl">
                            Unbelievable Times Call <br> for Believable Data 
                            </h1>
                        <p>Truflation offers independent and censorship-resistant inflation 
                        <br> calculations based on census level price information.
                        </p>
                        <button class="btn"> Visit Marketplace</button>
                    </div>
                    <img src="~/assets/img/globe.svg" alt="">
                </div>

                <div class="flex flex-col w-1/3 mx-auto bg-white p-8 rounded-md gap-6">
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
            <div class="container mx-auto">
                <div class="flex flex-row items-center content-center mt-10 gap-2">
                    <h2 class="text-2xl font-semibold">
                    Today's CPI Data by
                    </h2>
                    <img src="~/assets/img/logo.svg" alt="">
                    <p class="ml-auto font-medium">Highlights</p>
                    <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <P>The US Inflation Rate by Truflation is 15.90%, 0.59% increase over the last day. </P>
            </div>
        </body>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>
    
<style scoped>

.main-div {
    background: linear-gradient(180deg, #EDF2F9 0%, rgba(248, 250, 253, 0) 36.98%);
    position: absolute;
    width: 1440px;
    padding-left: 3rem;
    height: 3299px;
    left: 0px;

    
}

</style>