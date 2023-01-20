<script setup lang="ts">
</script>

<template>
    <head>
        <title>Widget</title>
        <link href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap" rel="stylesheet">
    </head>
    <div class="flex flex-col w-full items-center">
          <div class="bg-[url('assets/img/widget-background.svg')] bg-cover w-full">
                    <Banner :isLight="true"/>
                        <div class="flex flex-col justify-center gap-36 mt-36 lg:flex-row">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <div class="text-xs w-fit font-semibold text-white">TRUFLATION WIDGET</div>
                                    <h1 class="font-semibold text-5xl text-white">Embed Daily </h1>
                                    <h1 class=" font-semibold text-5xl text-white"> Inflation Daily Anywhere</h1>
                                    <p class=" max-w-[420px] mt-4 text-white">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications. It can even be customised.</p>
                                <div class=" rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                                <img class="z-10" src="../../assets/img/widget.svg" alt="">
                                <svg class=" invisible lg:visible absolute z-0 right-0 top-0" width="637" height="695" viewBox="0 0 637 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M473 0H762.5V740H0L473 0Z" fill="#0B2A51"/>
                                </svg>

                        </div>
            </div>
            <div class=" flex container mx-auto items-center justify-center">
                        <div class="flex flex-row flex-wrap justify-center items-center mt-20">
                            <div class="flex flex-col gap-4 h-full w-full items-center ">
                                <div class=" text-sm text-truflation-700 font-semibold">TRUFLATION WIDGET</div>
                                <h1 class=" text-5xl font-medium">Widget Features</h1>
                                <p class=" font-light text-center max-w-3xl">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first index Truflation US for illustrative purposes.</p>
                                <div class="mt-11">
                                    <ul class="flex flex-row flex-wrap lg:flex-nowrap gap-20">
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" text-lg font-semibold text-truflation-500">Government CPI comparison</p>
                                            <p class=" max-w-xs">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" text-lg font-semibold text-truflation-500">Updated Daily</p>
                                            <p class=" max-w-xs">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" text-lg font-semibold text-truflation-500">Country Switcher</p>
                                            <p class=" max-w-xs">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>
                        <div class="flex flex-row flex-wrap w-full xl:flex-nowrap mt-4 justify-center items-center">
                            <div class="flex flex-col ml-32 max-w-xl items-center xl:items-start  ">
                                <h1 class="text-left text-5xl">Easy setup with one <br> line of code</h1>
                                <p class="mt-4 text-[18px] max-w-lg">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications</p>
                                <div class=" mt-10 rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                            <div class="flex flex-row flex-nowrap ml-auto">
                                <img src="../../assets/img/widget-img.svg" alt="">
                                <img src="../../assets/img/wisp.svg" alt="">
                            </div>
                        </div>
            <Investors/>
            <div class="flex flex-row w-full mt-20">
                <NewsLetter />
            </div>
        </div>
            <FooterComp />

</template>
<style scoped>

</style>
    