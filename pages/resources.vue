<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
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

const config = useRuntimeConfig();

useHead({
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${config.gtagId}`,
      async: true,
    },
    {
      innerHTML: ` window.dataLayer = window.dataLayer || []; function
    gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
    '${config.gtagId}', {page_path: window.location.pathname});`,
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Head>
    <title>Resources - Truflation</title>
    <Meta
      name="Resources | Truflation"
      content="Discover the vision, research, and updates behind the Truflation project."
    />
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@500,600,400&display=swap"
      rel="stylesheet"
    />
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@truflation" />
    <Meta name="twitter:title" content="Resources | truflation" />
    <Meta
      name="twitter:description"
      content="Discover the vision, research, and updates behind the Truflation project."
    />
    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
  </Head>
  <div>
    <div class="resource-bg flex flex-col mb-[88px] px-5">
      <Banner :isLight="true" />
      <WhitePapaerModal />

      <div
        class="mx-auto px-10 container mt-24 pb-16 justify-between flex flex-row flex-wrap-reverse"
      >
        <div
          class="flex flex-row text-white flex-wrap md:text-left text-center lg:items-baseline items-center lg:flex-col gap-6 justify-center md:max-w-2xl"
        >
          <h1 class="text-5xl md:text-[62px] font-semibold">Resources</h1>
          <p class="text-[18px] max-w-[402px]">
            Discover the vision, research, and updates behind the Truflation2
            project.
          </p>
          <a href="#my-modal"
            ><p
              class="text-base md:text-[18px] btn flex-row items-center gap-3"
            >
              Watch Explainer Video
              <img src="../assets/img/icons/Play-button.svg" alt="" /></p
          ></a>
        </div>
        <div
          class="mx-5 bg-[url('assets/img/presentation.png')] rounded-lg items-center justify-center hidden lg:flex w-[400px] xl:w-[670px] lg:h-[400px] bg-cover"
        >
          <a
            href="#my-modal"
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
    </div>
    <div
      class="container items-center px-5 md:mx-auto mt-7 flex justify-center md:justify-between flex-row flex-wrap"
    >
      <div class="flex flex-col flex-wrap gap-6 px-5 md:px-0">
        <h1 class="text-[32px] font-semibold">Whitepaper & Research</h1>
        <p class="md:max-w-xl max-w-xs text-black/60">
          Your two essential resources are our Discord, for getting live2
          support, and also our Github quickstart for all the info you will need
          to get coding.
        </p>
        <div class="">
          <ul class="flex flex-col gap-[18px]">
            <li>
              <a href="https://whitepaper.truflation.com/" target="_blank">
                <div
                  class="flex flex-col md:flex-row items-center text-center md:text-left py-7 gap-2 md:gap-0 shadow-md px-12"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.40002 8.39922C8.40002 6.07962 10.2804 4.19922 12.6 4.19922H22.2302C23.3441 4.19922 24.4124 4.64172 25.2 5.42937L32.3699 12.5992C33.1575 13.3869 33.6 14.4552 33.6 15.5691V33.5992C33.6 35.9188 31.7196 37.7992 29.4 37.7992H12.6C10.2804 37.7992 8.40002 35.9188 8.40002 33.5992V8.39922ZM12.6 20.9992C12.6 19.8394 13.5402 18.8992 14.7 18.8992H27.3C28.4598 18.8992 29.4 19.8394 29.4 20.9992C29.4 22.159 28.4598 23.0992 27.3 23.0992H14.7C13.5402 23.0992 12.6 22.159 12.6 20.9992ZM14.7 27.2992C13.5402 27.2992 12.6 28.2394 12.6 29.3992C12.6 30.559 13.5402 31.4992 14.7 31.4992H27.3C28.4598 31.4992 29.4 30.559 29.4 29.3992C29.4 28.2394 28.4598 27.2992 27.3 27.2992H14.7Z"
                      fill="#0D58C6"
                    />
                  </svg>
                  <h1 class="text-lg font-medium md:ml-[18px]">WhitePaper</h1>
                  <p class="text-xs text-black/80 md:mx-[64px] sm:max-w-xs">
                    The best place to start your Truflation journey, our
                    whitepaper lays out the vision for the protocol
                  </p>
                  <svg
                    class="ml-auto hidden md:flex"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23429 2.63471C8.54671 2.32229 9.05324 2.32229 9.36566 2.63471L14.1657 7.43471C14.4781 7.74712 14.4781 8.25366 14.1657 8.56608L9.36566 13.3661C9.05324 13.6785 8.54671 13.6785 8.23429 13.3661C7.92187 13.0537 7.92187 12.5471 8.23429 12.2347L11.6686 8.80039L2.39998 8.80039C1.95815 8.80039 1.59998 8.44222 1.59998 8.00039C1.59998 7.55856 1.95815 7.20039 2.39998 7.20039H11.6686L8.23429 3.76608C7.92187 3.45366 7.92187 2.94712 8.23429 2.63471Z"
                      fill="#0D58C6"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="/methodology">
                <div
                  class="flex flex-col md:flex-row items-center text-center md:text-left py-7 gap-2 md:gap-0 shadow-md px-12"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.1273 6.6582C23.3314 3.37956 18.6685 3.37956 17.8726 6.6582C17.3584 8.77615 14.9319 9.78125 13.0707 8.6472C10.1895 6.89168 6.89241 10.1888 8.64794 13.07C9.78198 14.9312 8.77689 17.3577 6.65893 17.8719C3.38029 18.6678 3.38029 23.3306 6.65893 24.1266C8.77689 24.6408 9.78199 27.0673 8.64794 28.9285C6.89241 31.8096 10.1895 35.1068 13.0707 33.3512C14.9319 32.2172 17.3584 33.2223 17.8726 35.3402C18.6685 38.6189 23.3314 38.6189 24.1273 35.3402C24.6415 33.2223 27.068 32.2172 28.9292 33.3512C31.8104 35.1068 35.1075 31.8096 33.352 28.9285C32.2179 27.0673 33.223 24.6408 35.341 24.1266C38.6196 23.3306 38.6196 18.6678 35.341 17.8719C33.223 17.3577 32.2179 14.9312 33.352 13.07C35.1075 10.1888 31.8104 6.89168 28.9292 8.64721C27.068 9.78125 24.6415 8.77615 24.1273 6.6582ZM21 27.2992C24.4793 27.2992 27.2999 24.4786 27.2999 20.9992C27.2999 17.5198 24.4793 14.6992 21 14.6992C17.5206 14.6992 14.7 17.5198 14.7 20.9992C14.7 24.4786 17.5206 27.2992 21 27.2992Z"
                      fill="#0D58C6"
                    />
                  </svg>

                  <h1 class="text-lg font-medium ml-[18px]">Methodology</h1>
                  <p class="text-xs text-black/80 md:mx-[64px] sm:max-w-xs">
                    Review the core methodology that underlies the Truflation
                    oracle and provides transparent, verifiable calculations.
                  </p>
                  <svg
                    class="ml-auto hidden md:flex"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23429 2.63471C8.54671 2.32229 9.05324 2.32229 9.36566 2.63471L14.1657 7.43471C14.4781 7.74712 14.4781 8.25366 14.1657 8.56608L9.36566 13.3661C9.05324 13.6785 8.54671 13.6785 8.23429 13.3661C7.92187 13.0537 7.92187 12.5471 8.23429 12.2347L11.6686 8.80039L2.39998 8.80039C1.95815 8.80039 1.59998 8.44222 1.59998 8.00039C1.59998 7.55856 1.95815 7.20039 2.39998 7.20039H11.6686L8.23429 3.76608C7.92187 3.45366 7.92187 2.94712 8.23429 2.63471Z"
                      fill="#0D58C6"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="https://token.truflation.com/" target="_blank">
                <div
                  class="flex flex-col md:flex-row items-center text-center md:text-left py-7 gap-2 md:gap-0 shadow-md px-12"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2356_12499)">
                      <path
                        d="M20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2Z"
                        fill="url(#paint0_linear_2356_12499)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9719 25.5705C23.033 25.5705 25.5146 23.0889 25.5146 20.0278C25.5146 16.9666 23.033 14.4851 19.9719 14.4851C16.9107 14.4851 14.4292 16.9666 14.4292 20.0278C14.4292 23.0889 16.9107 25.5705 19.9719 25.5705ZM29.2097 20.0278C29.2097 25.1297 25.0738 29.2656 19.9719 29.2656C14.87 29.2656 10.7341 25.1297 10.7341 20.0278C10.7341 14.9259 14.87 10.79 19.9719 10.79C25.0738 10.79 29.2097 14.9259 29.2097 20.0278Z"
                        fill="white"
                      />
                      <path
                        d="M9.22185 26.8851C8.21929 27.0749 7.56047 28.0416 7.75034 29.0442C7.94021 30.0467 8.90687 30.7055 9.90943 30.5157C10.912 30.3258 11.5708 29.3591 11.3809 28.3566C11.1911 27.354 10.2244 26.6952 9.22185 26.8851Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2356_12499"
                        x1="-6.73391"
                        y1="47.5173"
                        x2="20.6742"
                        y2="-36.3682"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#1A2B6B" />
                        <stop offset="0.265625" stop-color="#0D58C6" />
                        <stop offset="0.473958" stop-color="#6F8BEF" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                      <clipPath id="clip0_2356_12499">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h1 class="text-lg font-medium ml-[18px]">TFI Token</h1>
                  <p class="text-xs text-black/80 md:mx-[64px] sm:max-w-xs">
                    Explore the token that governs the Truflation ecosystem and
                    solves the centralisation issue of previous oracles.
                  </p>
                  <svg
                    class="ml-auto hidden md:flex"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23429 2.63471C8.54671 2.32229 9.05324 2.32229 9.36566 2.63471L14.1657 7.43471C14.4781 7.74712 14.4781 8.25366 14.1657 8.56608L9.36566 13.3661C9.05324 13.6785 8.54671 13.6785 8.23429 13.3661C7.92187 13.0537 7.92187 12.5471 8.23429 12.2347L11.6686 8.80039L2.39998 8.80039C1.95815 8.80039 1.59998 8.44222 1.59998 8.00039C1.59998 7.55856 1.95815 7.20039 2.39998 7.20039H11.6686L8.23429 3.76608C7.92187 3.45366 7.92187 2.94712 8.23429 2.63471Z"
                      fill="#0D58C6"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img class="mt-10 hidden lg:flex" src="../assets/img/globe.png" alt="" />
    </div>
    <div class="my-10 md:my-36">
      <BlogLinks :title="`News & Media`" :data="blogData" :videos="videos" />
    </div>
    <div class="flex">
      <NewsLetter />
    </div>
    <FooterComp />
  </div>
</template>

<style scoped></style>
