<script setup lang="ts">
</script>

<template>
          <div class="bg-gradient-to-l from-blue-100 to-blue-800 w-full">
                    <Banner :isLight="true"/>
                    <div class=" flex container mx-auto items-center py-10 xl:py-20 xl:mx-30 xl:justify-start">
                        <div class="flex flex-row  flex-wrap mt-4 ">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <div class=" w-fit px-2 text-white">TRUFLATION MARKETPLACE</div>
                                <h1 class=" text-6xl text-white">Indexes for World
                                    <br>Leading Economies</h1>
                                <p class=" max-w-lg font-light text-white">The Truflation widget is available to incorporate into your website, data dashboards, and Web3 applications. It can even be customised.</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class=" flex container mx-auto">
                        <div class="flex flex-row flex-wrap mt-16 justify-center items-center">
                            <div class="flex flex-col gap-4 h-full w-full my-4  ">
                                <h1 class=" text-2xl font-semibold">How is inflation affecting your household?</h1>
                                <div class="flex mt-4 flex-row flex-wrap max-w-5xl gap-8">
                                    <p class=" font-light">Use our personalised inflation calculator to see how increases in the cost of living have affected you in the past year. Inflation is a measure of how prices of goods and services are changing, and it can have a big impact on people’s household finances. Every day, Truflation publishes the latest inflation rate which measures the change in the price of the goods and services that every household engages on, compared with the same time the previous year.</p>
                                    <p class=" font-light">Some goods and services contribute more to the overall inflation rate than others and some of the products see a large increase in prices, while others stay more stable, then inflation would be driven by the changing prices in that spending category. So, how the inflation rate affects your household depends on which products you tend to spend your money on. This calculator estimates a personal inflation rate for your household.</p>

                                </div>
                               
                            </div>
                        </div>
            </div>
            <FinancialIdexes/>
            <Investors />
            <NewsLetter />
            <FooterComp />
</template>
<style scoped>

</style>
    