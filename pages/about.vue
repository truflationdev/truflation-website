<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import { staffData, CustomerData, blogData } from "../static/data/staffData";

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
    <title>About Us - Truflation</title>
    <Meta
      name="About Us | Truflation"
      content="Description: Our goal is to produce an equitable data feed that mirrors the real-life inflation values, creating an unbiased information source of true price changes in the market."
    />
    <Meta
      property="og:image"
      content="https://truflation.com/assets/_1200x630_crop_center-center_82_none/truflation-social.jpg?mtime=1655193444"
    />

    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@500,600,400&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="about-hero">
    <Banner :isLight="true" />
    <div class="flex container mx-auto">
      <div
        class="flex flex-col items-center text-center md:text-left py-28 lg:flex-row mt-4"
      >
        <div class="flex flex-col mx-5 md:mx-auto gap-5 h-full">
          <h1 class="text-5xl font-semibold text-white">About Truflation</h1>
          <p class="max-w-[420px] text-lg text-white">
            Solving the measurement problems of the past, so you can grow the
            future
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col gap-8 container justify-center items-center text-center md:text-left md:mx-auto mt-16"
  >
    <div class="gap-8 flex flex-col">
      <h1 class="text-3xl font-semibold">
        Verifiable Truth Is in Short Supply
      </h1>
      <div
        class="flex mx-4 justify-between md:mx-0 flex-row flex-wrap md:flex-nowrap gap-5 md:gap-16"
      >
        <p class="max-w-xl text-lg">
          Truflation offers a new inflation truth-set to provide reliable
          financial data for better decision-making. It uses 10 million data
          points and updates indices daily, offering more comprehensive and
          up-to-date information compared to traditional indexes updating
          monthly. Truflation's secure blockchain infrastructure provides
          unbiased, verifiable data for the growth and sustainability of
          business decisions.
        </p>
        <img class="md:flex hidden" src="../assets/img/globe.png" alt="" />
        <!-- <p class="max-w-xl text-lg">
          Sustainable growth can only come from a common and verifiable
          understanding of the facts used as a basis for business decisions. To
          meet this need, we built a first-of-its-kind infrastructure to provide
          unbiased and verifiable financial data on a secure blockchain to
          enable faster, more intelligent decision-making. Truflation delivers a
          new inflation truth-set: built on +10 million data points, updating
          indices daily, not monthly.
        </p> -->
      </div>
    </div>
  </div>
  <div
    class="container mx-auto items-center justify-center flex flex-row flex-wrap md:flex-nowrap mt-28 gap-7"
  >
    <div class="flex flex-col p-10 bg-truflation-100">
      <h1 class="text-2xl">Why Now?</h1>
      <p class="text-lg mt-6 mb-1 max-w-xl">
        We conducted a detailed examination of the challenges arising from
        imperfect inflation metrics and came up with a new perspective.
      </p>
      <!-- <a
        href="https://whitepaper.truflation.com/"
        target="_blank"
        class="text-truflation-500"
        >Whitepaper</a
      > -->
    </div>
    <div class="flex flex-col p-10 bg-truflation-100">
      <h1 class="text-2xl">Why Truflation?</h1>
      <p class="text-lg mt-6 mb-1 max-w-xl">
        Truflation's daily indexing outperforms monthly measures by providing
        real-time insight into how inflation affects decision-making.
      </p>
      <!-- <a href="/" class="text-truflation-500">Go to Dashboard</a> -->
    </div>
  </div>
  <!-- <div
    class="container mx-auto flex flex-col mt-12 p-10 gap-4 bg-truflation-100"
  >
    <h1 class="text-2xl">Try risk free</h1>
    <div class="flex flex-row flex-wrap justify-between gap-4">
      <div class="flex flex-col gap-4 bg-truflation-100">
        <a
          href=""
          class="text-xl text-truflation-500 flex flex-row gap-2 items-center"
        >
          <div class="h-5 w-5 rounded-full bg-truflation-200"></div>
          Trial the corporate API</a
        >
        <a
          href=""
          class="text-xl text-truflation-500 flex flex-row gap-2 items-center"
        >
          <div class="h-5 w-5 rounded-full bg-truflation-200"></div>
          Checkout our dashboard</a
        >
      </div>
      <div class="flex flex-col gap-4 bg-truflation-100">
        <a
          href=""
          class="text-xl text-truflation-500 flex flex-row gap-2 items-center"
        >
          <div class="h-5 w-5 rounded-full bg-truflation-200"></div>
          Embed our widget on your site</a
        >
        <a
          href=""
          class="text-xl text-truflation-500 flex flex-row gap-2 items-center"
        >
          <div class="h-5 w-5 rounded-full bg-truflation-200"></div>
          Join our developer community</a
        >
      </div>
    </div>
  </div> -->
  <div
    class="mx-auto flex text-center justify-center items-center flex-col container mt-32"
  >
    <h1 class="text-5xl">The Team Behind Truflation</h1>
    <p class="text-lg mt-3 mb-16">
      Decades of experience in blockchain, measurement, and finance
    </p>
    <div class="">
      <ul class="grid xs:grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <li class="flex flex-col items-center">
          <img class="" src="../assets/img/staff/Stefan-Rust.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Stefan Rust</p>
          <p class="mt-1 mb-10">CEO</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/Oliver-rust.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Oliver Rust</p>
          <p class="mt-1 mb-10">Head of Product</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/Ken-cenna.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Ken Cenna</p>
          <p class="mt-1 mb-10">Business Development Manager</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/nat.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Natalia Nowakowska</p>
          <p class="mt-1 mb-10">Product Marketing and Community</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/Joseph-wang.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Joseph Wang</p>
          <p class="mt-1">Architecture Lead</p>
        </li>
        <li class="flex flex-col items-center h-72 gap-1">
          <img src="../assets/img/staff/Ivan-Jelic.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Ivan Jelic</p>
          <p class="mt-1">Head of Data</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/jarryd.png" alt="" />
          <p class="mt-4 text-xl font-semibold">Jarryd Pretorius</p>
          <p class="mt-1">Front-end Developer</p>
        </li>
        <li class="flex flex-col items-center gap-1">
          <img src="../assets/img/staff/david.png" alt="" />
          <p class="mt-4 text-xl font-semibold">David Ring</p>
          <p class="mt-1">Back-end Developer</p>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="mx-auto flex gap-4 justify-center items-center flex-col container my-32"
  >
    <h1 class="text-5xl font-medium">Our Customers</h1>
    <div class="grid grid-cols-1 mt-12 px-5 md:grid-cols-3 w-full gap-5">
      <div
        v-for="customer in CustomerData.list"
        class="flex max-w-sm items-center bg-[#002152] flex-col text-center rounded-lg"
      >
        <div
          class="flex py-11 bg-white/10 w-full flex-row text-white text-xl gap-2 items-center justify-center"
        >
          <div class="h-5 w-5 text-2xl rounded-full bg-[#D9D9D9]"></div>
          {{ customer.name }}
        </div>
        <p class="text-left max-w-xs text-white px-6 py-6 text-lg">
          {{ customer.description }}
        </p>
      </div>
    </div>
  </div>
  <div></div>
  <BlogLinks :title="`News & Media`" :data="blogData" :videos="videos" />
  <div class="mt-24 mb-20">
    <Investors />
  </div>
  <NewsLetter />
  <FooterComp />
</template>
<style scoped></style>
