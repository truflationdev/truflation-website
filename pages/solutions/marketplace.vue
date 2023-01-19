<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col justify-center">
          <div class="bg-gradient-to-l from-blue-300 to-blue-700 w-full">
                    <Banner :isLight="true"/>
                        <div class="flex flex-row flex-wrap my-32 mx-auto justify-center items-center">
                            <div class="flex flex-col ">
                                <div class=" w-fit text-sm font-semibold text-white">TRUFLATION MARKETPLACE</div>
                                <h1 class=" mt-4 text-5xl text-white">A Global Marketplace </h1>
                                    <h1 class=" mt-4 text-5xl text-white"> For the Data Economy</h1>
                                <p class="mt-4 text-lg max-w-md text-white">Easy, affordable, and currency agnostic, the Truflation Financial Index (TFI) Marketplace is your one-stop shop for the latest in financial data to power your business.</p>
                                <div class="mt-4 rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                                <img src="../../assets/img/coin-globe.svg" alt="">
                        </div>
            </div>
            <div class=" mt-24 mb-20">
            <Investors />
            </div>
            <NewsLetter />
            <FooterComp />
        </div>
</template>
<style scoped>

</style>
    