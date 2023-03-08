<script setup lang="ts">
import { useDataStore, SelectedCountry } from "~~/store/stateStore";
import { onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import "chartjs-adapter-date-fns";

const main = useDataStore();
const route = useRoute();
const defaultHost = "https://api.truflation.io";
const {
  selectedCategory,
  selectedCountry,
  currentTime,
  keyMetrics,
  MainData,
  loading,
} = storeToRefs(main);
main.setLoading(true);

const { data: inflation } = await useFetch(() => {
  const tag = route.query.tag ?? "";
  const host = route.query.host ?? defaultHost;
  console.log(`${host}/dashboard-data${tag}`);
  return `${host}/dashboard-data${tag}`;
});
main.hydrateState(inflation._value);

// const { data: time } = await useFetch(() => `http://worldtimeapi.org/api/ip`);
// main.updateCurrentTime(time._value.datetime);

async function fetchState() {
  const tag = route.query.tag ?? "";
  const host = route.query.host ?? defaultHost;
  main.setLoading(true);
  if (selectedCountry.value === SelectedCountry.GBR) {
    await useAsyncData("geocode", () =>
      $fetch(`${host}/dashboard-data-uk${tag}`)
    ).then((res) => {
      main.hydrateState(res.data.value);
    });
    return;
  }
  await useAsyncData("geocode", () =>
    $fetch(`${host}/dashboard-data${tag}`)
  ).then((res) => {
    main.hydrateState(res.data.value);
  });
}

const testWarning = computed(() => {
  const tag = route.query.tag ?? "";
  const host = route.query.host ?? "";
  if (tag !== "" || host !== "") {
    const myhost = route.query.host ?? defaultHost;
    return `TEST MODE host=${myhost} tag=${tag} - `;
  } else {
    return "";
  }
});

useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-9RC5KEMBYY",
      async: true,
    },
    {
      innerHTML: ` window.dataLayer = window.dataLayer || []; function
    gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
    'G-9RC5KEMBYY', {page_path: window.location.pathname});`,
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Head>
    <title>Independent, economic & financial data in real time on-chain</title>
    <Meta
      name="Independent, economic & financial data in real time on-chain"
      content="We've researched, deconstructed, and remastered the official CPI to create a metric that reflects the true price change in the market."
    />
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@truflation" />
    <Meta
      name="twitter:title"
      content="Independent, economic & financial data in real time on-chain"
    />
    <Meta
      name="twitter:description"
      content="We've researched, deconstructed, and remastered the official CPI to create a metric that reflects the true price change in the market."
    />
    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@500,600,400&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="main-background">
    <Banner :dashboard="true" />
    <div
      class="container mx-auto text-left flex flex-col max-w-[90%] gap-2 md:mt-12"
    >
      <div
        class="flex flex-col lg:w-full md:flex-row mx-2 md:mx-auto mt-3 gap-3"
      >
        <h2
          class="text-[32px] font-semibold text-[#181818] text-center md:text-left"
        >
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
      </div>
      <button v-if="currentTime">{{ currentTime }}</button>
      <P v-if="MainData" class="text-lg text-center lg:text-left"
        >{{ testWarning }} The {{ selectedCountry }} Inflation Rate by
        Truflation is
        <span v-if="MainData" class="font-extrabold text-lg"
          >{{ keyMetrics.Inflation }}%</span
        >,
        <span
          v-if="MainData"
          class="font-bold"
          :class="{
            ' text-red-700': main.getInflationDayChange() > 0,
            ' text-[#005E46]': main.getInflationDayChange() <= 0,
          }"
          >{{ main.getInflationDayChange().toFixed(2) }}%</span
        >
        change over the last day.
        <a class="underline text-black/60" href="/methodology"
          >Read Methodology</a
        >
      </P>
    </div>
    <div v-if="MainData" class="flex items-center flex-col mt-7">
      <DataChart :locationOptions="selectedCategory" />
    </div>
    <CategoryList v-if="MainData" />
    <div class="flex flex-col mt-4">
      <Category v-if="MainData" :category="selectedCategory" />
    </div>
    <div class="flex flex-col mt-24">
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
          <button class="btn">Coming Soon</button>
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
