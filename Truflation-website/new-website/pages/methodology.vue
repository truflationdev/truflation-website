<script setup lang="ts">
import {methodologyTitle, methodologyRadials} from "../static/data/methadologyData"
import {resourcePoints, blogData} from "../static/data/staffData"

</script>

<template>
           <div class=" bg-[url('assets/img/methodology-hero.svg')] items-center bg-cover w-full">
                    <Banner :isLight="true"/>
                    <div class=" sm:items-center sm:mx-auto lg:items-start flex flex-col lg:px-40 xl:py-32 ">
                        <div class="flex flex-row flex-wrap mt-4 ">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <h1 class=" text-6xl text-white">Methodology Matters</h1>
                                <p class=" max-w-lg font-light text-white">Historically, government inflation metrics have produced biased outputs, built on outdated methodologies. They lacked modern measurement techniques, provided limited levels of transparency, and only updated monthly.
                                Truflation delivers a new inflation truth-set — built on +10 million data points, updating indices daily, not monthly. The methodology is transparent and dynamically adjusts to global market conditions</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class=" flex container justify-center mx-auto">
                        <div class="flex flex-col flex-wrap mt-16 justify-center items-center">
                            <div class="flex flex-col gap-4 h-full my-4 items-center ">
                                <h1 class=" text-xl text-blue-700">OVERVIEW</h1>
                                <div class="flex mt-4 flex-row flex-wrap gap-8">
                                    <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
                                        <li class="flex flex-col max-w-xs" v-for="item in methodologyTitle.list">
                                            <p>{{ item.title }}</p>
                                            <h1 class=" text-3xl font-semibold">{{ item.amount }}</h1>
                                            <p class="">{{ item.description }} </p>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
            </div>
            <div class="flex flex-col gap-4 h-full w-full items-center my-20  ">
                                <h1 class=" text-5xl">Our Methodology</h1>
                                <p class=" font-light text-center">Below is an outline of how we approach the collection and indexing of the world's financial and economic data, using our first index Truflation US for illustrative purposes.</p>
                                <div class="mt-10">
                                    <ul class="grid gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                                       <li class="flex flex-row gap-4 items-center" v-for="radial in methodologyRadials">
                                        <RadialProgress :value="radial.amount" :fill="radial.fill" />
                                        <p class="">{{ radial.title }}</p>
                                       </li>
                                    </ul>
                                </div>
                                <button class="btn mt-8">Download Complete Methodology <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
                                </svg></button>
                            </div>
            <DataPartners />
             <BlogLinks :title="`Whats New at Truflation`" :data="blogData" />
            <Investors />
            <NewsLetter />
            <FooterComp />
</template>
<style scoped>

</style>
    