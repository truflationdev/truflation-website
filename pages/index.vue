<script setup lang="ts">
import { useDataStore, SelectedCountry } from "~~/store/stateStore";
import { onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import "chartjs-adapter-date-fns";

const main = useDataStore();
const route = useRoute();
const defaultHost = "https://api.truflation.io";
const { selectedCategory, selectedCountry } = storeToRefs(main);
const key = "truflationData";

const { data: res } = await useFetch("https://api.truflation.io/dashboard-data",  { initialCache: false });
main.hydrateState(res._value);

async function fetchState() {
  const tag = route.query.tag ?? "";
  const host = route.query.host ?? defaultHost;
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
      content="https://truflation.com/assets/_1200x630_crop_center-center_82_none/truflation-social.jpg?mtime=1655193444"
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
        <!-- <p class="ml-auto font-medium">Highlights</p>
                    <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-foc2us:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label> -->
      </div>
      <P class="text-lg text-center lg:text-left"
        >{{ testWarning }} The {{ selectedCountry }} Inflation Rate by
        Truflation is
        <span class="font-extrabold text-lg"
          >{{ main.keyMetrics.Inflation }}%</span
        >,
        <span
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
    <div class="flex items-center flex-col mt-7">
      <DataChart :locationOptions="selectedCategory" />
    </div>
    <CategoryList />
    <div class="flex flex-col mt-4">
      <Category :category="selectedCategory" />
    </div>
    <!-- <SubDrivers :category="categoryData"/> -->
    <div class="flex flex-col mt-24">
      <DataPartners />
    </div>
    <div
      class="container md:mx-auto lg:grid-cols-2 grid grid-cols-1 gap-10 px-5 mt-20"
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
          <p
            class="px-3 py-2 text-yellow-600 rounded-full text-sm bg-yellow-300 w-fit"
          >
            COMING SOON
          </p>
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
