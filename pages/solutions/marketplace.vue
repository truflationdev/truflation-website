<script setup lang="ts">
</script>

<template>
          <div class="bg-gradient-to-l from-blue-100 to-blue-700 w-full">
                    <Banner :isLight="true"/>
                    <div class=" flex container mx-auto items-center justify-center">
                        <div class="flex flex-row flex-wrap mt-4 justify-center items-center">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <div class=" w-fit px-2 text-white">TRUFLATION MARKETPLACE</div>
                                <h1 class=" text-6xl text-white">A Global Marketplace
                                    <br>For the Data Economy</h1>
                                <p class=" max-w-lg font-light text-white">Easy, affordable, and currency agnostic, the Truflation Financial Index (TFI) Marketplace is your one-stop shop for the latest in financial data to power your business.</p>
                                <div class=" rounded-full font-light w-fit px-4 py-3 bg-green-300">Coming Soon!</div>
                            </div>
                                <img src="../../assets/img/coin-globe.svg" alt="">
                        </div>
                    </div>
            </div>
            <Investors />
            <NewsLetter />
            <FooterComp />
</template>
<style scoped>

</style>
    