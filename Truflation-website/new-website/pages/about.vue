<script setup lang="ts">
    import {staffData, CustomerData, blogData} from "../static/data/staffData"
</script>

<template>
            <div class="about-hero">
                <Banner :isLight="true" />
                <div class=" flex container mx-auto">
                        <div class="flex flex-col items-center py-20  lg:flex-row mt-4">
                            <div class="flex flex-col gap-4 h-full my-4  ">
                                <h1 class=" text-7xl text-white">About Truflation</h1>
                                <p class=" max-w-md  font-light text-white">Solving the measurement problems of the past, so you can grow the future</p>
                            </div>
                                <img src="../../assets/img/widget.svg" alt="">
                        </div>
                    </div>
            </div>
            <div class=" flex flex-col gap-4 container mx-auto mt-10">
             <h1 class=" text-xl font-semibold">Verifiable Truth is in Short Supply</h1>
             <div class="flex flex-row flex-wrap md:flex-nowrap gap-6">
                <p class="max-w-xl" >Verifiable truth sets are in short supply at a time governance and transparency are in high demand. As the world rebalances, trustworthy navigation beacons for confident decision-making will be at a premium.
                    <br>  However, traditional inflation and financial tracking measures are a barrier to the process. They rely on methodologies established decades ago, using data sets no longer representative of lived realities. They tend to be narrow in scope and only update monthly.</p>
                <p class="max-w-xl">
                    Sustainable growth can only come from a common and verifiable understanding of the facts used as a basis for business decisions. To meet this need, we built a first-of-its-kind infrastructure to provide unbiased and verifiable financial data on a secure blockchain to enable faster, more intelligent <br> decision-making.
                    Truflation delivers a new inflation truth-set: built on +10 million data points, updating indices daily, not monthly.
                </p>
             </div>
            </div> 
            <div class="container mx-auto flex flex-row flex-wrap md:flex-nowrap mt-8 gap-4">
                <div class="flex flex-col p-8 gap-4 bg-slate-100">
                    <h1 class=" text-xl">Why Now?</h1>
                    <p class="text-base font-light">We conducted a detailed examination of the challenges arising from imperfect inflation metrics and came up with a new perspective.</p>
                    <a href="" class=" text-sm text-blue-500">Whitepaper</a>
                </div>
                <div class="flex flex-col p-8 gap-4 bg-slate-100">
                    <h1 class="text-xl">Why Truflation?</h1>
                    <p class="text-base font-light">Our daily indexes highlight how decision-making is undermined by inflation measures of the past. Daily data beats monthly.</p>
                    <a href="" class=" text-sm text-blue-500">Go to Dashboard</a>
                </div>
            </div> 
            <div class="container mx-auto flex flex-col mt-8 p-8 gap-4 bg-slate-100">
                <h1 class="text-lg">Try risk free</h1>
                <div class="flex flex-row flex-wrap justify-between gap-4">
                    <div class="flex flex-col gap-4 bg-slate-100">
                    <a href="" class=" text-lg text-blue-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-slate-200"></div> Trial the corporate API</a>
                    <a href="" class=" text-lg text-blue-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-slate-200"></div> Sign up for the free dashboard</a>
                    </div>
                    <div class="flex flex-col gap-4 bg-slate-100">
                        <a href="" class=" text-lg text-blue-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-slate-200"></div> Embed our widget on your site</a>
                        <a href="" class=" text-lg text-blue-500 flex flex-row gap-2 items-center"> <div class="h-5 w-5 rounded-full bg-slate-200"></div> Join our developer community</a>
                    </div>
                </div>
            </div> 
            <div class="mx-auto flex gap-8 justify-center items-center flex-col p-8 container mt-8">
                <h1 class="text-3xl">Meet the team behind Truflation</h1>
                <div class="">
                    <ul class="grid xs:grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <li class="flex flex-col items-center gap-1">
                            <img class="" src="../assets/img/staff/Stefan-Rust.png" alt="">
                            <p class=" text-xl font-semibold">Stefan Rust</p>
                            <p>CEO</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img class="fk" src="../assets/img/staff/Oliver-rust.png" alt="">
                            <p class=" text-xl font-semibold">Oliver Rust</p>
                            <p>Head of Product</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img class="fk" src="../assets/img/staff/Ken-cenna.png" alt="">
                            <p class=" text-xl font-semibold">Ken Cenna</p>
                            <p>Business Development Manager</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img class="fk" src="../assets/img/staff/nat.png" alt="">
                            <p class=" text-xl font-semibold">Natalia Nowakowska</p>
                            <p>Product Marketing and Community</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img class="fk" src="../assets/img/staff/Joseph-wang.png" alt="">
                            <p class=" text-xl font-semibold">Joseph Wang</p>
                            <p>Architecture Lead</p>
                        </li>
                        <li class="flex flex-col items-center gap-1">
                            <img src="../assets/img/staff/Ivan-Jelic.png" alt="">
                            <p class=" text-xl font-semibold">Ivan Jelic</p>
                            <p>Head of Data</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto flex gap-4 justify-center items-center flex-col container mt-8">
                <h1 class="text-3xl">Our Customers</h1>
                <div class=" grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 w-full gap-5" >
                    <div v-for="customer in CustomerData.list" class="flex bg-[#002152] flex-col text-center max-w-xs rounded">
                        <div class="flex p-4 bg-white/10 flex-row text-white text-xl gap-2 items-center justify-center"><div class="h-4 w-4 rounded-full bg-slate-50"></div>{{ customer.name }}</div>
                        <p class=" text-white p-4 font-light">{{ customer.description }}</p>
                    </div>
                </div>
            </div>
            <BlogLinks :title="`Whats New at Truflation`" :data="blogData" />
            <Investors />
            <NewsLetter />
            <FooterComp />        

</template>
<style scoped>

</style>
    