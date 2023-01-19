<script setup lang="ts">
    import { VideoLinks } from "~~/components/categoryTypes";
import {staffData, CustomerData, blogData} from "../static/data/staffData"

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
            <div class="about-hero">
                <Banner :isLight="true" />
                <div class=" flex container mx-auto">
                        <div class="flex flex-col items-center py-28 lg:flex-row mt-4">
                            <div class="flex flex-col gap-5 h-full">
                                <h1 class=" text-5xl font-semibold text-white">About Truflation</h1>
                                <p class=" max-w-[420px] text-lg text-white">Solving the measurement problems of the past, so you can grow the future</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div class=" flex flex-col gap-8 container mx-auto mt-16">
             <h1 class=" text-3xl font-semibold">Verifiable Truth is in Short Supply</h1>
             <div class="flex flex-row flex-wrap md:flex-nowrap gap-16">
                <p class="max-w-xl text-lg" >Verifiable truth sets are in short supply at a time governance and transparency are in high demand. As the world rebalances, trustworthy navigation beacons for confident decision-making will be at a premium.
                However, traditional inflation and financial tracking measures are a barrier to the process. They rely on methodologies established decades ago, using data sets no longer representative of lived realities. They tend to be narrow in scope and only update monthly.</p>
                <p class="max-w-xl text-lg">
                    Sustainable growth can only come from a common and verifiable understanding of the facts used as a basis for business decisions. To meet this need, we built a first-of-its-kind infrastructure to provide unbiased and verifiable financial data on a secure blockchain to enable faster, more intelligent decision-making.
                    Truflation delivers a new inflation truth-set: built on +10 million data points, updating indices daily, not monthly.
                </p>
             </div>
            </div> 
            <div class="container mx-auto items-center flex flex-row flex-wrap md:flex-nowrap mt-28 gap-7">
                <div class="flex flex-col p-10 bg-truflation-100">
                    <h1 class=" text-2xl">Why Now?</h1>
                    <p class="text-lg mt-6 mb-1 max-w-xl">We conducted a detailed examination of the challenges arising from imperfect inflation metrics and came up with a new perspective.</p>
                    <a href="" class=" text-truflation-500">Whitepaper</a>
                </div>
                <div  class="flex flex-col p-10 bg-truflation-100">
                    <h1 class="text-2xl">Why Truflation?</h1>
                    <p class="text-lg mt-6 mb-1  max-w-xl">Our daily indexes highlight how decision-making is undermined by inflation measures of the past. Daily data beats monthly.</p>
                    <a href="" class=" text-truflation-500">Go to Dashboard</a>
                </div>
            </div> 
            <div class="container mx-auto flex flex-col mt-12 p-10 gap-4 bg-truflation-100">
                <h1 class="text-2xl">Try risk free</h1>
                <div class="flex flex-row flex-wrap justify-between gap-4">
                    <div class="flex flex-col gap-4 bg-truflation-100">
                    <a href="" class=" text-xl text-truflation-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-truflation-200"></div> Trial the corporate API</a>
                    <a href="" class=" text-xl text-truflation-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-truflation-200"></div> Sign up for the free dashboard</a>
                    </div>
                    <div class="flex flex-col gap-4 bg-truflation-100">
                        <a href="" class=" text-xl text-truflation-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-truflation-200"></div> Embed our widget on your site</a>
                        <a href="" class=" text-xl text-truflation-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-truflation-200"></div> Join our developer community</a>
                    </div>
                </div>
            </div> 
            <div class="mx-auto flex justify-center items-center flex-col container mt-32">
                <h1 class=" text-5xl">Meet the team behind Truflation</h1>
                <p class=" text-lg mt-3 mb-16" >Decades of experience in blockchain, measurement, and finance</p>
                <div class="">
                    <ul class="grid xs:grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <li class="flex flex-col items-center">
                            <img class="" src="../assets/img/staff/Stefan-Rust.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Stefan Rust</p>
                            <p class="mt-1 mb-10">CEO</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/Oliver-rust.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Oliver Rust</p>
                            <p class="mt-1 mb-10">Head of Product</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/Ken-cenna.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Ken Cenna</p>
                            <p class="mt-1 mb-10">Business Development Manager</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/nat.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Natalia Nowakowska</p>
                            <p class="mt-1 mb-10">Product Marketing and Community</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/Joseph-wang.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Joseph Wang</p>
                            <p class="mt-1">Architecture Lead</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/Ivan-Jelic.png" alt="">
                            <p class="mt-4 text-xl font-semibold">Ivan Jelic</p>
                            <p class="mt-1">Head of Data</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto flex gap-4 justify-center items-center flex-col container my-32">
                <h1 class="text-5xl font-medium">Our Customers</h1>
                <div class="grid grid-cols-2 mt-12  lg:grid-cols-3 w-full gap-5" >
                    <div v-for="customer in CustomerData.list" class="flex max-w-sm items-center  bg-[#002152] flex-col text-center rounded-lg">
                        <div class="flex py-11 bg-white/10 w-full flex-row text-white text-xl gap-2 items-center justify-center">
                            <div class=" h-5 w-5 text-2xl rounded-full bg-[#D9D9D9]"></div>{{ customer.name }}</div>
                        <p class="text-left max-w-xs text-white px-6 py-6 text-lg">{{ customer.description }}</p>
                    </div>
                </div>
            </div>
            <div></div>
            <BlogLinks :title="`Whats New at Truflation`" :data="blogData" :videos="videos"/>
            <div class=" mt-24 mb-20">
                <Investors />
            </div>  
            <NewsLetter />
            <FooterComp />     

</template>
<style scoped>

</style>
    