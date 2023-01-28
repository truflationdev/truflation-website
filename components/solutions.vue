<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import { blogData} from "../../static/data/staffData"


const videos: VideoLinks[] = [
    {
        title: "truflation + Discourse",
        link: "https://www.youtube.com/embed/p07UF8aRmfQ"
    },
    {
        title: "Cracking the inflation code",
        link: "https://www.youtube.com/embed/QRTIV10Iw-I"
    },
    {
        title: "Truflation Highlighted on Crypto Banter",
        link: "https://www.youtube.com/embed/kvWBwVzKSac"
    }
]
</script>

<template>
    <head>
        <link href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap" rel="stylesheet">
    </head>
                <div class="bg-[url('assets/img/solutions-background.svg')] bg-cover w-full">
                    <Banner :isLight="true"/>
                    <div class=" flex container mx-auto items-center justify-center">
                        <div class="flex flex-row flex-wrap justify-center items-center">
                            <div class="flex flex-col gap-4 h-full  ">
                                <div class=" rounded-full font-light w-fit px-2 py-1 bg-[#ADCEFF]">Modern Metrics for Modern Needs</div>
                                <h1 class=" mt-4 text-5xl text-white">Open Marketplace
                                    <br> Services, Tools & Indexes</h1>
                                <p class=" font-light text-white">Solving the measurement problems of the past, so you can grow the future</p>
                                <div class="flex flex-row mt-10 items-center gap-2">
                                    <p class=" text-white/70">Featured on:</p>
                                    <img src="~/assets/img/featured-in.png" alt="">
                                </div>
                            </div>
                                <img src="~/assets/img/widget.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class=" flex flex-col container mt-8 mx-auto gap-8">
                        <h1 class="text-4xl">Finanical Indexes</h1>
                        <div class="flex flex-row gap-8 flex-wrap items-center">
                            <div class="flex items-baseline justify-end flex-col border w-2/5 gap-2">
                                <div class="bg-gradient-to-tr from-blue-100 to-blue-500 h-40 w-full " ></div>
                                <div class="p-3">
                                    <h1 class=" text-xl font-semibold">Updated Daily: Truflation indexes for some of the world’s leading economies</h1>
                                    <p>Country-level inflation tracking with deep dives into 12 categories, including energy, food, and real estate.</p>
                                    <a href="/" class=" text-sm text-blue-700">Learn More</a>
                                </div>
                            </div>
                            <div class="flex items-baseline justify-end flex-col border w-2/5 gap-2">
                                <div class="bg-gradient-to-tr from-blue-100 to-blue-500 h-40 w-full " ></div>
                                <div class="p-3">
                                    <h1 class=" text-xl font-semibold">Updated Daily: Truflation indexes for some of the world’s leading economies</h1>
                                    <p>Country-level inflation tracking with deep dives into 12 categories, including energy, food, and real estate.</p>
                                    <a href="/" class=" text-sm text-blue-700">Learn More</a>
                                </div>
                            </div>
                            <div class="flex items-baseline justify-end flex-col border w-2/5 gap-2">
                                <div class="bg-gradient-to-tr from-blue-100 to-blue-500 h-40 w-full " ></div>
                                <div class="p-3">
                                    <h1 class=" text-xl font-semibold">Updated Daily: Truflation indexes for some of the world’s leading economies</h1>
                                    <p>Country-level inflation tracking with deep dives into 12 categories, including energy, food, and real estate.</p>
                                    <a href="/" class=" text-sm text-blue-700">Learn More</a>
                                </div>
                            </div>
                            <div class="flex items-baseline justify-end flex-col border w-2/5 gap-2">
                                <div class="bg-gradient-to-tr from-blue-100 to-blue-500 h-40 w-full " ></div>
                                <div class="p-3">
                                    <h1 class=" text-xl font-semibold">Updated Daily: Truflation indexes for some of the world’s leading economies</h1>
                                    <p>Country-level inflation tracking with deep dives into 12 categories, including energy, food, and real estate.</p>
                                    <a href="/" class=" text-sm text-blue-700">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 mt-8 mx-auto container">
                        <h1 class="text-4xl">Tools</h1>
                        <div class="flex flex-wrap p-10 flex-row w-full items-center gap-8">
                            <img src="~/assets/img/calculator-blurred.svg" alt="">
                            <div class="flex flex-col   max-w-md gap-4">
                            <p class="px-3 py-2 text-yellow-600 rounded-full text-sm bg-yellow-300/70 w-fit">COMING SOON</p>
                            <h1 class="text-2xl font-semibold">Personal Calculator</h1>
                            <p>Use our personalised inflation calculator to see how increases in the cost of living have affected you in the past year. It even breaks down which items are contributing most to your cost-of-living increases.</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap p-8 flex-row w-full items-center gap-20">
                            <img src="~/assets/img/Frame.svg" alt="">
                            <div class="flex flex-col max-w-md gap-4">
                            <p class="px-3 py-2 text-yellow-600 rounded-full text-sm bg-yellow-300/70 w-fit">COMING SOON</p>
                            <h1 class="text-2xl font-semibold">Forecasting</h1>
                            <p>Build your market advantage. Using the latest data inputs, model the expected changes that will impact your industry</p>
                            </div>
                        </div>
                        <h1 class="text-4xl">Services</h1>
                        <div class="flex flex-wrap p-8 flex-row w-full items-center gap-20">
                            <img src="~/assets/img/ide.svg" alt="">
                            <div class="flex flex-col max-w-md gap-4">
                            <p class="px-3 py-2 text-yellow-600 rounded-full text-sm bg-yellow-300/70 w-fit">COMING SOON</p>
                            <h1 class="text-2xl font-semibold">TFI Marketplace</h1>
                            <p>Easy, affordable, and currency agnostic, the Truflation Financial Index (TFI) Marketplace is your one-stop shop for the latest in financial data to power your business.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto my-20">
                        <div class="flex flex-row flex-wrap lg:flex-nowrap gap-8 items-center justify-center px-8">
                            <div class="flex gap-4 flex-col px-6 max-w-2xl py-4 border rounded-lg">
                                <div class="flex justify-center w-full">
                                    <img src="~/assets/img/truflation-marketplace.svg" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h1 class=" text-xl font-semibold">Dashboard</h1>
                                    <p class="text-sm font-light">The Truflation dashboard is a data visualization tool connected to the Truflation index API that calculates the inflation rate and price indexes for 12 categories of products and services, including food and housing. The dashboard offers a view into daily, weekly, monthly and yearly changes.</p>
                                </div>
                                <button class="btn">View Dashboard <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
                                </svg></button>
                            </div>
                            <div class="flex gap-4 flex-col px-6 py-4 max-w-2xl border rounded-lg">
                                <div class="w-full flex items-center justify-center">
                                    <img src="~/assets/img/widget-blur.svg" alt="">
                                </div>
                                <div class="flex flex-col">
                                    <h1 class=" text-xl font-semibold">Widget</h1>
                                    <p class="text-sm font-light">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications. It can even be customised.</p>
                                </div>
                                <button class="btn">Get Widget <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <div>
                <BlogLinks :title="`News & media`" :data="blogData" :videos="videos"/>
                <Investors/>
                <NewsLetter />
                <FooterComp />
            </div>  
</template>

<style scoped>

</style>