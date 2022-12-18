<template>
    <div class="main-background ">
        <header class="flex justify-between text-gray-600 py-8 px-16">
            <a href="/"><img src="~/assets/img/logo.svg" alt=""></a>

            <ul class="flex flex-row gap-8">
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Methodology</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </header>
        <body>
            <div class="container mx-auto flex flex-row gap-10">
                <div class="flex flex-row w-2/3 mx-auto bg-white rounded-md">
                        <div class="flex flex-col gap-4 p-8">
                            <h1 class="text-3xl font-bold">
                            Unbelievable Times Call <br> for Believable Data 
                            </h1>
                        <p>Truflation offers independent and censorship-resistant inflation 
                        <br> calculations based on census level price information.
                        </p>
                        <button class="btn"> Visit Marketplace</button>
                    </div>
                    <img src="~/assets/img/globe.svg" alt="">
                </div>

                <div class="flex flex-col w-1/3 mx-auto bg-white p-8 rounded-md gap-6">
                    <div class="flex flex-row content-center gap-2 items-center">
                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                        <h3 class="font-semibold">Latest News</h3>
                        <h3 class=" text-blue-500 ml-auto"> View All</h3>  
                    </div>
                    <ul class="flex flex-col gap-2">
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Rising Inflation Expectations Dent Sentiment as Equity Markets Fall</p>
                        </li>
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Fed Housing Reset Sparks Biggest Post WWII Home Price Correction</p>
                        </li>
                        <li>
                            <p class="text-black-500 font-light">Oct 1 - Fed Report</p>
                            <p class="font-semibold">Truflation Announces New Global Marketplace Dashboard</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container mx-auto">
                <div class="flex flex-row items-center content-center mt-10 gap-2">
                    <h2 class="text-2xl font-semibold">
                    Today's CPI Data by
                    </h2>
                    <img src="~/assets/img/logo.svg" alt="">
                    <img src="~/assets/img/usa-flag.svg" alt="">
                    <select :value="options.country" :placeholder="options.country" class="p-2" >
                        <option value="USA"> USA</option>
                        <option value="GBR">GBR</option>
                    </select>
                    <p class="ml-auto font-medium">Highlights</p>
                    <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <P>The US Inflation Rate by Truflation is 15.90%, <span class="text-green-600">0.59%</span> increase over the last day. </P>
            </div>
            <DataChart :locationOptions="options"  />
            <div class="flex flex-col container mx-auto items-center gap-2 mt-20">
                <h1 class="text-3xl font-semibold">Data Partners</h1>
                <div class="flex flex-row">
                <img src="~/assets/img/AAA.png" alt="">
                <img src="~/assets/img/carcurus.png" alt="">
                <img src="~/assets/img/eia.png" alt="">
                <img src="~/assets/img/JDpower.png" alt="">
                <img src="~/assets/img/mcdonalds.png" alt="">
                <img src="~/assets/img/nielsenIQ.png" alt="">
                <img src="~/assets/img/OPIS.png" alt="">
                <img src="~/assets/img/statista.png" alt="">
                <img src="~/assets/img/trulia.png" alt="">
                <img src="~/assets/img/yahoo.png" alt="">
                <img src="~/assets/img/zillow.png" alt="">
                </div>
            </div>
            <div class="container mx-auto flex flex-row gap-10 mt-20">
                <div class="flex flex-row w-1/2 mx-auto text-white bg-gradient-to-br from-blue-800 to-white rounded-md">
                        <div class="flex flex-col gap-3 p-8">
                            <h1 class="text-3xl font-bold">Personal Inflation Calculator</h1>
                            <p>Calculate how strong your hedge is
                            <br> against inflation.
                            </p>
                            <button class="btn">Calculate</button>
                        </div>
                    <img class=" w-1/5 ml-auto" src="~/assets/img/layout.svg" alt="">
                </div>
                <div class="flex flex-row w-1/2 mx-auto bg-[#F0F4FA] rounded-md">
                        <div class="flex flex-col gap-4 p-8">
                            <h1 class="text-3xl font-bold">Send us a Message</h1>
                            <p>Contact us if you have Queries</p>
                            <button class="btn">Contact Us</button>
                        </div>
                        <img class=" w-2/5 ml-auto" src="~/assets/img/mail.svg" alt="">
                </div>
            </div>
            <div class="flex flex-row mx-auto container mt-10 items-center">
                <div class="flex flex-col">
                    <p class=" font-semibold">Subscribe to our newsletter</p>
                    <p class=" text-gray-600">Get a summary of what we’ve shipped during the last <br>
                     month, behind the scenes updates, and team picks.</p>
                </div>
                <input class="ml-auto h-fit px-5 py-3 rounded-2xl border-gray-10 border" type="text" placeholder="John@gmail.com">
                <button class="btn">Subscribe</button>
            </div>
        </body>
        <footer class="flex flex-col bg-[#181818] py-8 px-16 mt-10 gap-5 text-light items-center">
            <div class="flex flex-row py-8 px-10 gap-12 w-full">
                <div class="flex flex-col">
                    <a href="/"><img src="~/assets/img/logo.svg" alt=""></a>
                    <p>Independent, economic & financial <br> data in real time on-chain.</p>
                </div>
                <div class="flex flex-col ml-auto">
                    <p class="text-white font-bold mb-3">Use Truflation</p>
                    <ul class="flex flex-col gap-2">
                        <li><a href="">Truflation Dapp</a></li>
                        <li><a href="">Marketplace</a></li>
                        <li><a href="">Ecosystem</a></li>
                        <li><a href="">TRU Token</a></li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <p class="text-white font-bold mb-3">Developers</p>
                    <ul class="flex flex-col gap-2">
                        <li><a href="">Get Started</a></li>
                        <li><a href="">Developer Guide</a></li>
                        <li><a href="">Github</a></li>
                        <li><a href="">Whitepaper</a></li>
                        <li><a href="">Forum</a></li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <p class="text-white font-bold mb-3">Resources</p>
                    <ul class="flex flex-col gap-2">
                        <li><a href=""></a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Media Kit</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div class="w-full h-1 bg-[#FFFFFF29]"></div>
            <p class=" font-light"><a href="">Privacy Policy</a>  |  © 2022. Truflation - All Rights Reserved.</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

    interface Options {
        country: string
    }

    const options: Options = reactive({
        country: "USA"
    });
</script>
    