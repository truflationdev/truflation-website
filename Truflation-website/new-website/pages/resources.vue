<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import {resourcePoints, blogData} from "../static/data/staffData"

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
        <div class="main-background">
            <Banner/>
            <body>
                <div class="container items-center justify-center mx-auto mt-10 flex flex-row flex-wrap">
                    <div class="flex flex-col gap-4 flex-wrap max-w-xl">
                        <h1 class="text-5xl">Resources</h1>
                        <p>Explore the leadership, whitepapers and news fuelling the evolution of Truflation.</p>
                        <p class="flex font-medium flex-row items-center gap-3">Watch Explainer Video <img src="../assets/img/icons/Play-button.svg" alt=""></p>
                    </div>
                    <div class="flex bg-[url('assets/img/presentation.png')] items-center justify-center w-full h-96 max-w-xl bg-cover ">
                        <div class=" flex items-center justify-center flex-col w-20 h-20 rounded-full bg-slate-200"><svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.3629 14.7115C31.8683 16.158 31.8683 19.7743 29.3629 21.2207L6.18793 34.6008C3.68254 36.0473 0.550795 34.2392 0.550795 31.3462L0.550796 4.58608C0.550796 1.6931 3.68254 -0.115007 6.18794 1.33148L29.3629 14.7115Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="container items-center justify-center mx-auto mt-10 flex flex-row flex-wrap">
                    <div class="flex flex-col flex-wrap max-w-2xl">
                        <h1 class="text-3xl">Whitepaper & Research</h1>
                        <p class=" font-light">Your two essential resources are our Discord, for getting live support, and also our Github quickstart for all the info you will need to get coding.</p>
                        <PointsWithIcon :data="resourcePoints.list"  />
                        <p class="mt-8 text-gray-600">View All</p>
                    </div>
                    <img src="../assets/img/globe.png" alt="">
                </div>
                <!-- <BlogLinks :title="`Get Started Guides`" :data="blogData" /> -->
                <BlogLinks :title="`News & media`" :data="blogData" :videos="videos"/>
                <NewsLetter />
                <FooterComp />  
            </body>
        </div>
</template>

<style scoped>

</style>
    