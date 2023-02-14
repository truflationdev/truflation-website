<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import {
  methodologyTitle,
  methodologyRadials,
} from "../static/data/methadologyData";
import { resourcePoints, blogData } from "../static/data/staffData";

const videos: VideoLinks[] = [
  {
    title: "Truflation + Discourse",
    link: "https://www.youtube.com/embed/p07UF8aRmfQ",
  },
  {
    title: "Cracking the Inflation Code",
    link: "https://www.youtube.com/embed/QRTIV10Iw-I",
  },
  {
    title: "Truflation Highlighted on Crypto Banter",
    link: "https://www.youtube.com/embed/kvWBwVzKSac",
  },
];
</script>

<template>
  <Head>
    <title>Methodology Matters | Truflation</title>
    <Meta
      name="Methodology Matters | Truflation"
      content="Our methodology relies on multiple data sources and the prices of millions of items across the economy. The result is an aggregated data feed that portrays real-world inflation values."
    />
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@500,600,400&display=swap"
      rel="stylesheet"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@truflation" />
    <Meta name="twitter:title" content="Methodology Matters | truflation" />
    <Meta
      name="twitter:description"
      content="Our methodology relies on multiple data sources and the prices of millions of items across the economy. The result is an aggregated data feed that portrays real-world inflation values."
    />
    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
  </Head>
  <div
    class="bg-gradient-to-r from-blue-700 to-blue-300 items-center bg-cover w-full"
  >
    <Banner :isLight="true" />
    <div
      class="items-center container py-20 mx-auto lg:items-start flex flex-col xl:py-32"
    >
      <div class="flex flex-row text-center md:text-left flex-wrap">
        <div
          class="flex flex-col items-center md:items-start gap-5 md:mx-0 h-full"
        >
          <h1 class="text-5xl md:text-6xl font-semibold text-white capitalize">
            Methodology Matters
          </h1>
          <p class="md:max-w-xl max-w-xs text-lg text-white">
            Truflation offers a more reliable view of inflation, contrasting
            with government metrics that have outdated methodologies and limited
            transparency. With over 10 million data points, it updates daily and
            has a dynamic and transparent methodology that responds to global
            market conditions.
          </p>
          <a href="https://whitepaper.truflation.com/" target="_blank">
            <button class="btn">
              Read whitepaper
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>
        <img
          class="xl:flex hidden right-0 absolute top-[100px]"
          src="../assets/img/coin-globe.svg"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="flex container flex-col md:mx-auto">
    <div class="flex flex-col flex-wrap">
      <div class="flex text-center md:text-left flex-col gap-4 h-full my-4">
        <div class="flex mt-4 jus flex-row flex-wrap gap-8">
          <ul
            class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[105px] w-full justify-center"
          >
            <li
              class="flex flex-col gap-2 max-w-[200px]"
              v-for="item in methodologyTitle.list"
            >
              <p class="text-lg">{{ item.title }}</p>
              <h1 class="text-5xl font-semibold">{{ item.amount }}</h1>
              <p class="text-sm">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex relative flex-col items-center text-center px-5 md:px-0 container gap-8 justify-center md:text-left mt-40 mx-auto"
  >
    <h1 class="text-5xl font-semibold mb-4">
      Verifiable Truth is in Short Supply
    </h1>
    <div class="flex flex-col gap-4 md:flex-row max-w-4xl">
      <p class="font-light text-lg text-center md:text-left">
        Historically, government inflation metrics have produced biased outputs,
        built on outdated methodologies. They lacked modern measurement
        techniques, provided limited levels of transparency, and only updated
        monthly.
      </p>
      <p class="font-light text-lg">
        Truflation delivers a new inflation truth-set — built on +10 million
        data points, updating indices daily, not monthly. The methodology is
        transparent and dynamically adjusts to global market conditions
      </p>
    </div>
    <a href="https://whitepaper.truflation.com/dashboard">
      <button class="btn mt-12">
        Read whitepaper
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z"
            fill="white"
          />
        </svg>
      </button>
    </a>
  </div>
  <div
    class="flex relative flex-col container items-center h-full justify-center md:text-left mb-20 mt-20 mx-auto"
  >
    <svg
      class="absolute -top-[800px] hidden lg:box -right-[80px]"
      width="614"
      height="1376"
      viewBox="0 0 614 1376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2076_10939)">
        <path
          d="M1044.06 975.5C966.367 1173.66 843.271 977.99 647.05 849.799C450.829 721.606 255.786 709.439 333.483 511.276C411.18 313.114 633.233 256.391 829.451 384.583C1025.67 512.775 1121.76 777.338 1044.06 975.5Z"
          fill="url(#paint0_linear_2076_10939)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2076_10939"
          x="0.72818"
          y="0.72818"
          width="1385.54"
          height="1374.54"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="157.636"
            result="effect1_foregroundBlur_2076_10939"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2076_10939"
          x1="983.7"
          y1="894.863"
          x2="329.001"
          y2="467.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A7CAFF" />
          <stop offset="1" stop-color="#5B58FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h1 class="text-5xl font-semibold mb-4">Our Methodology</h1>
    <p class="font-light text-center md:text-left max-w-2xl">
      This outlines our process for collecting and indexing global financial and
      economic data, using Truflation US as an example.
    </p>
    <ul
      class="grid gap-x-20 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10"
    >
      <li
        class="flex flex-row w-3xl gap-4 items-center"
        v-for="radial in methodologyRadials"
      >
        <RadialProgress
          :percent="false"
          :value="radial.amount"
          :fill="radial.fill"
        />
        <p class="w-32 font-normal">{{ radial.title }}</p>
      </li>
    </ul>
  </div>
  <div class="text-left">
    <DataPartners :left="false" />
  </div>
  <div class="mt-24 flex flex-col gap-24">
    <BlogLinks :title="`News & Media`" :data="blogData" :videos="videos" />
    <!-- <Investors /> -->
    <NewsLetter />
  </div>
  <FooterComp />
</template>
<style scoped></style>
