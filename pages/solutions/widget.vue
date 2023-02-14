<script setup lang="ts"></script>

<template>
  <Head>
    <title>Embed Daily Inflation Daily Anywhere | Truflation</title>
    <Meta
      name="Embed Daily Inflation Daily Anywhere | Truflation"
      content=" Integrate the Truflation widget seamlessly into any platform with its customizability. Get real-time inflation data on your website, dashboard, or application."
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
    <Meta
      name="twitter:title"
      content="Embed Daily Inflation Daily Anywhere | Truflation"
    />
    <Meta
      name="twitter:description"
      content=" Integrate the Truflation widget seamlessly into any platform with its customizability. Get real-time inflation data on your website, dashboard, or application."
    />
    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
  </Head>
  <div class="flex flex-col w-full items-center">
    <div class="bg-[url('assets/img/widget-background.svg')] bg-cover w-full">
      <Banner :isLight="true" />
      <div
        class="flex flex-col justify-center md:text md:gap-36 md:mt-36 lg:flex-row"
      >
        <div class="flex flex-col gap-4 h-full my-4 mx-10">
          <div class="text-xs w-fit font-semibold text-white">
            TRUFLATION WIDGET
          </div>
          <h1 class="font-semibold text-5xl text-white">Embed Daily</h1>
          <h1 class="font-semibold text-5xl text-white">Inflation Anywhere</h1>
          <p class="max-w-[475px] mt-4 text-white">
            Integrate the Truflation widget seamlessly into any platform with
            its customizability. Get real-time inflation data on your website,
            dashboard, or application.
          </p>
          <div class="rounded-full font-light w-fit px-4 py-3 bg-green-300">
            Coming Soon!
          </div>
        </div>
        <img class="z-10" src="../../assets/img/widget.svg" alt="" />
        <svg
          class="invisible lg:visible absolute z-0 right-0 top-0"
          width="637"
          height="695"
          viewBox="0 0 637 740"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M473 0H762.5V740H0L473 0Z" fill="#0B2A51" />
        </svg>
      </div>
    </div>
    <div class="flex container mx-auto items-center justify-center">
      <div class="flex flex-row flex-wrap justify-center items-center mt-20">
        <div
          class="flex mx-10 md:mx-auto text-center flex-col gap-4 h-full w-full items-center"
        >
          <h1 class="text-5xl font-medium">Widget Features</h1>
          <p class="font-light text-center max-w-3xl">
            Below is an outline of how we approach the collection and indexing
            of the world's financial and economic data, using our first index
            Truflation US for illustrative purposes.
          </p>
          <div class="mt-11">
            <ul
              class="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-10 md:gap-20"
            >
              <li class="flex flex-col items-center text-center gap-2">
                <img
                  class="mr-2 mb-4"
                  src="../../assets/img/Data-source-icon.svg"
                  alt=""
                />
                <p class="text-lg font-semibold text-truflation-500">
                  Government CPI Comparison
                </p>
                <p class="max-w-xs">
                  Comparing our inflation data to official government figures
                  gives you the power to make informed decisions and stay ahead
                  of economic trends.
                </p>
              </li>
              <li class="flex flex-col items-center text-center gap-2">
                <img
                  class="mr-2 mb-4"
                  src="../../assets/img/Data-source-icon.svg"
                  alt=""
                />
                <p class="text-lg font-semibold text-truflation-500">
                  Updated Daily
                </p>
                <p class="max-w-xs">
                  Daily updates ensure you have the most recent inflation data
                  at your fingertips, every day.
                </p>
              </li>
              <li class="flex flex-col items-center text-center gap-2">
                <img
                  class="mr-2 mb-4"
                  src="../../assets/img/Data-source-icon.svg"
                  alt=""
                />
                <p class="text-lg font-semibold text-truflation-500">
                  Country Switcher
                </p>
                <p class="max-w-xs">
                  Switch between country-specific data, providing real-time
                  inflation metrics for multiple countries with a simple click.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row py-48 flex-wrap w-full max-w-10xl xl:flex-nowrap md:mt-4 relative items-center"
    >
      <div
        class="flex flex-col mx-5 md:ml-36 max-w-lg md:text-left text-center items-center lg:items-start"
      >
        <h1 class="text-5xl">Easy setup with one line of code</h1>
        <p class="mt-4 text-[18px] max-w-lg">
          The Truflation widget is available to incorporate into your website,
          data dashboards, and Web3 applications
        </p>
        <div
          class="mt-4 md:mt-10 rounded-full font-light w-fit px-4 py-3 bg-green-300"
        >
          Coming Soon!
        </div>
      </div>
      <div class="flex-row absolute right-0 hidden xl:flex flex-nowrap ml-auto">
        <img src="../../assets/img/widget-img.svg" alt="" />
        <img src="../../assets/img/wisp.svg" alt="" />
      </div>
    </div>
    <div class="flex mx-5 mb-10 md:mt-0">
      <Investors />
    </div>
    <NewsLetter />
  </div>
  <FooterComp />
</template>
<style scoped></style>
