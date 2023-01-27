<script setup lang="ts">
</script>

<template>
    <head>
        <link href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap" rel="stylesheet">
    </head>
    <div class=" flex flex-col w-full items-center">
          <div class="bg-gradient-to-l from-truflation-300 to-truflation-500 w-full">
                    <Banner :isLight="true"/>
                    <div class=" flex text-center md:text-left container mx-auto items-center xl:mx-30 xl:justify-start">
                        <div class="flex flex-row mt-36 mb-44 flex-wrap ">
                            <div class="flex items-center md:items-start flex-col h-full ">
                                <div class=" w-fit text-white">INDEXES</div>
                                <h1 class="mt-4 text-5xl font-semibold text-white">Indexes for World </h1> 
                                    <h1 class="mt-4 text-5xl font-semibold text-white">Leading Economies</h1>
                                <p class="mt-4 mx-10 md:mx-0 max-w-md text-lg text-white">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications. It can even be customised.</p>
                                <div class=" mt-4 rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class=" flex container mx-auto">
                        <div class="flex flex-row text-center md:text-left flex-wrap mt-20 justify-center items-center">
                            <div class="flex flex-col gap-4 h-full w-full">
                                <h1 class=" text-2xl font-semibold">How is inflation affecting your household?</h1>
                                <div class="flex mt-4 w-full px-4 flex-row flex-wrap gap-16">
                                    <p class=" max-w-xl text-lg">Use our personalised inflation calculator to see how increases in the cost of living have affected you in the past year. Inflation is a measure of how prices of goods and services are changing, and it can have a big impact on people’s household finances. Every day, Truflation publishes the latest inflation rate which measures the change in the price of the goods and services that every household engages on, compared with the same time the previous year.</p>
                                    <p class="max-w-xl text-lg">Some goods and services contribute more to the overall inflation rate than others and some of the products see a large increase in prices, while others stay more stable, then inflation would be driven by the changing prices in that spending category. So, how the inflation rate affects your household depends on which products you tend to spend your money on. This calculator estimates a personal inflation rate for your household.</p>
                                </div>
                               
                            </div>
                        </div>
            </div>
            <div class="mt-20">
            <FinancialIdexes />
            </div>
            <div class=" mt-32 mb-20">
            <Investors />
            </div>
            <NewsLetter />
        </div>
            <FooterComp />
</template>
<style scoped>

</style>
    