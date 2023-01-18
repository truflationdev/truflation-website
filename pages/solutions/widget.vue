<script setup lang="ts">
</script>

<template>
          <div class="bg-[url('assets/img/widget-background.svg')] bg-cover w-full">
                    <Banner :isLight="true"/>
                    <div class=" flex container mx-auto">
                        <div class="flex flex-col items-center justify-center w-full  lg:flex-row mt-4">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <div class=" w-fit px-2 text-white">TRUFLATION WIDGET</div>
                                <h1 class=" text-5xl text-white">Embed Daily
                                    <br> Inflation Daily Anywhere</h1>
                                <p class=" max-w-xl font-light text-white">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications. It can even be customised.</p>
                                <div class=" rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                                <img src="../../assets/img/widget.svg" alt="">
                        </div>
                    </div>
            </div>
            <div class=" flex container mx-auto items-center justify-center">
                        <div class="flex flex-row flex-wrap mt-4 justify-center items-center">
                            <div class="flex flex-col gap-4 h-full w-full items-center my-4  ">
                                <div class=" w-fit px-2">TRUFLATION WIDGET</div>
                                <h1 class=" text-5xl">Widget Features</h1>
                                <p class=" font-light text-center">TBelow is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first index Truflation US for illustrative purposes.</p>
                                <div class="mt-10">
                                    <ul class="flex flex-row flex-wrap lg:flex-nowrap gap-4">
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" font-semibold text-blue-600">Government CPI comparison</p>
                                            <p class="font-light">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" font-semibold text-blue-600">Updated Daily</p>
                                            <p class="font-light">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                        <li class="flex flex-col items-center text-center gap-2">
                                            <img class="mr-2 mb-4" src="../../assets/img/Data-source-icon.svg" alt=""/>
                                            <p class=" font-semibold text-blue-600">Country Switcher</p>
                                            <p class="font-light">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>
            <div class=" flex container mx-auto items-center justify-center">
                        <div class="flex flex-row flex-wrap w-full xl:flex-nowrap mt-4 justify-center items-center">
                            <div class="flex flex-col gap-4 max-w-xl items-center xl:items-start  ">
                                <h1 class=" text-center xl:text-left text-5xl">Easy setup with one <br> line of code</h1>
                                <p class=" font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor sem, semper sit amet magna nec, gravida convallis ex. </p>
                                <div class=" rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                            <div class="flex flex-row flex-nowrap ml-auto">
                                <img src="../../assets/img/widget-img.svg" alt="">
                                <img src="../../assets/img/wisp.svg" alt="">
                            </div>
                        </div>
            </div>
            <Investors/>
            <NewsLetter />
            <FooterComp />

</template>
<style scoped>

</style>
    