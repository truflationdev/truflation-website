<script setup lang="ts">
import { CategoryList, CategoryType } from "~~/components/categoryTypes";
import { SelectedCountry, useDataStore } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
import "chartjs-adapter-date-fns";

const main = useDataStore();
const { selectedCategory, selectedCountry } = storeToRefs(main);

async function fetchState() {
  if (selectedCountry.value === SelectedCountry.GBR) {
    await useAsyncData("geocode", () =>
      $fetch(`https://api.truflation.io/dashboard-data-uk`)
    ).then((res) => {
      main.hydrateState(res.data.value);
    });
    return;
  }

  await useAsyncData("geocode", () =>
    $fetch(`https://api.truflation.io/dashboard-data`)
  ).then((res) => {
    main.hydrateState(res.data.value);
  });
}
fetchState();
</script>

<template>
  <Head>
    <title>Dashboard - Truflation</title>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="main-background">
    <Banner :dashboard="true" />
    <div
      class="container mx-auto text-left flex w-full flex-col gap-2 md:mt-12"
    >
      <div
        class="flex flex-col md:w-full md:flex-row mx-2 md:mx-auto mt-3 gap-3"
      >
        <h2 class="text-4xl font-semibold text-center md:text-left">
          Today's CPI Data by Truflation
        </h2>
        <div class="flex items-center justify-center md:flex-row px-2">
          <img
            v-if="selectedCountry === SelectedCountry.USA"
            src="~/assets/img/usa-flag.svg"
            alt=""
          />
          <img
            v-if="selectedCountry === SelectedCountry.GBR"
            src="~/assets/img/UK-icon.svg"
            alt=""
          />
          <select
            v-on:change="fetchState()"
            v-model="selectedCountry"
            class="p-3 border-r-[10px] border-transparent bg-transparent text-center mx-2"
          >
            <option :value="SelectedCountry.USA">USA</option>
            <option :value="SelectedCountry.GBR">
              <img src="~/assets/img/UK-icon.svg" alt="" />UK
            </option>
          </select>
        </div>
        <!-- <p class="ml-auto font-medium">Highlights</p>
                    <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-foc2us:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label> -->
      </div>
      <P class="text-lg text-center md:text-left"
        >The {{ selectedCountry }} Inflation Rate by Truflation is
        <span class="font-semibold">{{ main.keyMetrics.Inflation }}%</span>,
        <span class="text-green-600 font-semibold"
          >{{ main.getInflationDayChange() }}%</span
        >
        change over the last day.
        <a class="underline text-black/60" href="/methodology"
          >Read Methodology</a
        >
      </P>
    </div>
    <div class="flex flex-col mt-7">
      <DataChart :locationOptions="selectedCategory" />
    </div>
    <div
      class="flex flex-col text-center md:text-start container md:mx-auto mt-12 gap-3"
    >
      <h1 class="text-2xl font-semibold">Categories</h1>
      <ul
        class="hidden md:grid grid-cols-1 mt-6 lg:grid-cols-4 gap-y-8 w-full justify-center text-gray-600"
      >
        <li
          class="border-b-2 flex flex-row gap-2 pb-3 items-center"
          :class="{ 'category-selected': selectedCategory === cat }"
          v-for="cat in CategoryType"
        >
          <div
            :class="{
              'bg-truflation-600 stroke-white': selectedCategory === cat,
              'bg-truflation-200 stroke-truflation-600':
                selectedCategory !== cat,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.63194 4.84033H13.6875M13.6875 4.84033V9.89589M13.6875 4.84033L8.63194 9.89589L6.10417 7.36811L2.3125 11.1598"
                stroke-width="0.947917"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button
            class="flex flex-row gap-2"
            :id="cat"
            @click="main.updateCategory(cat)"
          >
            {{ cat.slice(0, 30) }}
          </button>
        </li>
      </ul>
      <select
        v-on:change="main.updateCategory(selectedCategory)"
        v-model="selectedCategory"
        class="md:hidden p-4 rounded text-truflation-500 font-semibold text-center mx-5 shadow-xl"
      >
        <option v-for="cat in CategoryType" :value="cat">{{ cat }}</option>
      </select>
    </div>
    <div class="flex flex-col mt-8">
      <Category :category="selectedCategory" />
    </div>
    <!-- <SubDrivers :category="categoryData"/> -->
    <div class="flex flex-col mt-20">
      <DataPartners />
    </div>
    <div
      class="container md:mx-auto lg:grid-cols-2 grid grid-cols-1 lg:gap-10 mt-20"
    >
      <div
        class="flex flex-row text-white w-full bg-gradient-to-br from-truflation-600 to-truflation-300"
      >
        <div
          class="flex flex-col w-full gap-3 p-8 bg-no-repeat bg-right bg-[url('~/assets/img/layout.svg')]"
        >
          <h1 class="text-3xl font-bold">Personal Inflation Calculator</h1>
          <p>
            Calculate how strong your hedge is <br />
            against inflation.
          </p>
          <a href="/solutions/calculator"
            ><button class="btn">Use Now</button></a
          >
        </div>
      </div>
      <div
        class="flex flex-row w-full md:mx-auto bg-[#F0F4FA] bg-no-repeat bg-right bg-[url('~/assets/img/mail.svg')]"
      >
        <div class="flex flex-col gap-4 p-8">
          <h1 class="text-3xl font-bold">Send us a Message</h1>
          <p>Contact us if you have Queries</p>
          <button class="btn"><a href="/contact"> Contact Us</a></button>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-12">
      <NewsLetter />
    </div>
    <FooterComp />
  </div>
</template>

<style scoped></style>
