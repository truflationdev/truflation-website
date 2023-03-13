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
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
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
        <div
          class="flex items-center justify-center bg-truflation-200 md:flex-row px-2"
        >
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
            class="p-1 border-r-[10px] border-transparent bg-truflation-200 outline-none text-center"
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
      <DataPartners :left="true" />
    </div>
    <div
      class="container md:mx-auto lg:grid-cols-2 grid grid-cols-1 lg:gap-16 mt-20"
    >
      <div class="flex flex-row w-full bg-[#F8F9FB]">
        <div
          class="flex flex-col md:w-full gap-2 p-10 bg-no-repeat bg-right md:bg-[url('~/assets/img/cash-calculator.png')]"
        >
          <h1 class="text-2xl font-bold">Personal Inflation Calculator</h1>
          <p>
            Calculate how strong your hedge is <br />
            against inflation.
          </p>
          <a href="/calculator"> <button class="btn">Use Now</button></a>
        </div>
      </div>
      <div
        class="flex flex-row w-full md:mx-auto bg-[#F8F9FB] bg-no-repeat bg-right md:bg-[url('~/assets/img/mail-img.png')]"
      >
        <div class="flex flex-col gap-4 p-8">
          <h1 class="text-2xl font-bold">Send us a Message</h1>
          <p>Contact us if you have Queries</p>
          <button class="btn"><a href="/contact"> Contact Us</a></button>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:mt-12">
      <NewsLetter />
    </div>
    <FooterComp />
  </div>
</template>

<style scoped></style>
