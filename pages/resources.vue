<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import { resourcePoints, blogData } from "../static/data/staffData";

const videos: VideoLinks[] = [
  {
    title: "truflation + Discourse",
    link: "https://www.youtube.com/embed/p07UF8aRmfQ",
  },
  {
    title: "Cracking the inflation code",
    link: "https://www.youtube.com/embed/QRTIV10Iw-I",
  },
  {
    title: "Truflation Highlighted on Crypto Banter",
    link: "https://www.youtube.com/embed/kvWBwVzKSac",
  },
];
</script>

<template>
  <head>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="main-background">
    <Banner />
    <body>
      <WhitePapaerModal />
      <div
        class="container items-center justify-center mx-auto mt-24 pb-16 flex flex-row gap-32 flex-wrap"
      >
        <div class="flex flex-col gap-4 flex-wrap max-w-2xl">
          <h1 class="text-5xl font-semibold">Resources</h1>
          <p class="text-[18px] max-w-[402px]">
            Explore the leadership, whitepapers and news fuelling the evolution
            of Truflation.
          </p>
          <a href="https://www.youtube.com/watch?v=jo4ssuL78V0"
            ><p class="flex text-[18px] flex-row items-center mt-1 gap-3">
              Watch Explainer Video
              <img src="../assets/img/icons/Play-button.svg" alt="" /></p
          ></a>
        </div>
        <div
          class="flex bg-[url('assets/img/presentation.png')] items-center justify-center w-full h-96 max-w-2xl bg-cover"
        >
          <a
            href="https://www.youtube.com/watch?v=jo4ssuL78V0"
            class="flex items-center justify-center flex-col w-20 h-20 rounded-full bg-slate-200"
            ><svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3629 14.7115C31.8683 16.158 31.8683 19.7743 29.3629 21.2207L6.18793 34.6008C3.68254 36.0473 0.550795 34.2392 0.550795 31.3462L0.550796 4.58608C0.550796 1.6931 3.68254 -0.115007 6.18794 1.33148L29.3629 14.7115Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        class="container items-center justify-center mx-auto mt-7 flex flex-row gap-32 flex-wrap"
      >
        <div class="flex flex-col flex-wrap">
          <h1 class="text-3xl font-semibold">Whitepaper & Research</h1>
          <p class="max-w-xl mt-6 mb-11">
            Your two essential resources are our Discord, for getting live
            support, and also our Github quickstart for all the info you will
            need to get coding.
          </p>
          <PointsWithIcon :data="resourcePoints.list" />
          <p class="mt-8 text-gray-600">View All</p>
        </div>
        <img src="../assets/img/globe.png" alt="" />
      </div>
      <div class="my-36">
        <BlogLinks :title="`News & media`" :data="blogData" :videos="videos" />
      </div>
      <NewsLetter />
      <FooterComp />
    </body>
  </div>
</template>

<style scoped></style>
