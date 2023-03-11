<script setup>
import { blogData } from "../static/data/staffData";
import "chartjs-adapter-date-fns";
import { TimePeriod } from "../components/categoryTypes";
import { CalcOptions } from "../assets/chartConfig";
import { useDataStore } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { reactive } from "vue";

const main = useDataStore();
const { calculator, chartLables, MainData } = storeToRefs(main);

const videos = [
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

await useAsyncData("geocode", () =>
  $fetch(`https://api.truflation.io/dashboard-data`)
).then((res) => {
  main.hydrateState(res.data.value);
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  TimeScale,
  Legend
);

const fields = [
  "Alcohol & Tobacco",
  "Clothing & Footwear",
  "Communications",
  "Education",
  "Food & Non-alcoholic Beverages",
  "Health",
  "Household Durables & Daily Use Items",
  "Housing",
  "Other",
  "Recreation & Culture",
  "Transport",
  "Utilities",
];

const initialState = {
  "Alcohol & Tobacco": 0,
  "Clothing & Footwear": 0,
  Communications: 0,
  Education: 0,
  "Food & Non-alcoholic Beverages": 0,
  Health: 0,
  "Household Durables & Daily Use Items": 0,
  Housing: 0,
  Other: 0,
  "Recreation & Culture": 0,
  Transport: 0,
  Utilities: 0,
};

const wageInitialState = {
  netIncome: 0,
};

const inputFields = reactive({ ...initialState });
const wageFields = reactive({ ...wageInitialState });
const calculated = ref(false);

async function Calculate() {
  await useAsyncData("geocode", () =>
    $fetch(`https://api.truflation.io/category-data`)
  ).then((res) => {
    main.updatePersonalInflation(inputFields, res.data.value);
  });

  calculated.value = true;
  document
    .getElementById("monthlyValues")
    .scrollIntoView({ behavior: "smooth" });
}

function scrollToText() {
  document
    .getElementById("calculator-text")
    .scrollIntoView({ behavior: "smooth" });
}

function reset() {
  Object.assign(inputFields, initialState);
  main.resetCalculator();
  document
    .getElementById("monthlyValues")
    .scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <Head>
    <title>Personal inflation calculator | Truflation</title>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
    <Meta
      name="Personal inflation calculator | Truflation"
      content="Description: Personal inflation calculator."
    />
    <Meta
      property="og:image"
      content="https://truflation.com/assets/_1200x630_crop_center-center_82_none/truflation-social.jpg?mtime=1655193444"
    />
  </Head>

  <div
    class="absolute z-0 w-screen h-screen bg-gradient-to-t bg-[#3682F2/20] from-white to-[#2D8FEA]/20"
  ></div>
  <Banner />

  <div class="flex relative flex-col z-0 mx-auto container mt-[77px]">
    <div class="flex flex-col w-full items-center px-4 mb-48 lg:hidden">
      <h1 class="text-[32px] text-center font-semibold">
        Individual Personalized Inflation Calculator
      </h1>
      <div class="flex flex-col gap-5 mt-10">
        <p class="text-[18px] text-black/60">Household Annual Income</p>
        <div class="flex flex-row">
          <p class="h-10 flex bg-gray-50 items-center px-3">$</p>
          <input
            v-model.lazy="wageFields.netIncome"
            @input="$emit('wageFields:[index]', $event.target.value)"
            placeholder="0"
            type="number"
            min="0"
            max="1000000"
            class="p-2 font-semibold w-full"
          />
        </div>
        <div class="">
          <ul class="flex flex-col gap-[40px]">
            <li class="flex flex-col gap-4" v-for="(field, index) in fields">
              <p class="font-semibold">{{ field.slice(0, 30) }}</p>
              <div class="flex flex-row gap-5">
                <div class="flex flex-col gap-2">
                  <p class="text-sm"><strong>Monthly</strong> (USD)</p>

                  <div class="flex flex-row">
                    <p class="h-full flex bg-gray-50 items-center px-3">$</p>
                    <input
                      placeholder="0"
                      v-model.lazy="inputFields[field]"
                      @input="$emit('inputFields:[index]', $event.target.value)"
                      type="number"
                      class="p-2 font-semibold w-24"
                    />
                  </div>
                </div>
                <div class="flex flex-col items-baseline gap-2">
                  <p class="text-sm"><strong>Annually</strong> (USD)</p>

                  <p placeholder="0" class="p-2 bg-gray-100 font-semibold w-24">
                    {{ inputFields[field] * 12 }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-row my-8 gap-6 flex pr-4">
        <button @click="Calculate()" class="btn px-12">Calculate</button>
      </div>

      <div
        class="flex mb-36 flex-col max-h-[400px] md:ml-3 bg-truflation-100 p-5 gap-4 rounded-sm"
      >
        <div class="flex flex-col gap-4">
          <div
            class="flex flex-col h-fit text-center gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              {{ calculator.personalInflation.toFixed(2) }}%
            </h1>
            <p>Personal inflation rate for your household</p>
          </div>
          <div
            class="flex flex-col h-fit text-center gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              ${{ calculator.monthlyEffect.toFixed(2) }}
            </h1>
            <p>Estimated increase in your monthly spend</p>
          </div>
        </div>
        <div class="flex mt-8 gap-4 flex-col">
          <p class="font-semibold">
            individual and average inflation Comparison
          </p>
          <ul
            class="flex flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-black/5 align-middle items-center"
          >
            <li class="p-0.5">
              <button
                :class="{
                  'active-period':
                    chartLables.mainSelection === TimePeriod.OneWeek,
                }"
                @click="main?.updateMainLabel(7, TimePeriod.OneWeek)"
              >
                1W
              </button>
            </li>
            <li class="p-0.5">
              <button
                :class="{
                  'active-period':
                    chartLables.mainSelection === TimePeriod.OneMonth,
                }"
                @click="main?.updateMainLabel(30, TimePeriod.OneMonth)"
              >
                1M
              </button>
            </li>
            <li class="p-0.5">
              <button
                :class="{
                  'active-period':
                    chartLables.mainSelection === TimePeriod.SixMonths,
                }"
                @click="main?.updateMainLabel(150, TimePeriod.SixMonths)"
              >
                6M
              </button>
            </li>
            <li class="p-0.5">
              <button
                :class="{
                  'active-period': chartLables.mainSelection === TimePeriod.YTD,
                }"
                @click="main?.updateMainLabelYTD(TimePeriod.YTD)"
              >
                YTD
              </button>
            </li>
            <li class="p-0.5">
              <button
                :class="{
                  'active-period':
                    chartLables.mainSelection === TimePeriod.OneYear,
                }"
                @click="main?.updateMainLabel(365, TimePeriod.OneYear)"
              >
                1Y
              </button>
            </li>
          </ul>
        </div>
        <Line
          v-if="MainData"
          id="calculator-chart"
          :options="CalcOptions"
          :data="main?.getCalculatorChart(main?.MainData)"
        />
      </div>
    </div>
    <div id="monthlyValues" class="hidden lg:grid z-20 grid-cols-7 gap-5">
      <h1 class="col-span-7 px-8 md:col-span-4 text-3xl font-semibold">
        Individual Personalized Inflation Calculator
      </h1>
      <!-- <button
        @click="scrollToText()"
        class="grid col-span-3 ml-auto w-fit px-4 py-3 font-semibold bg-black/[8%]"
      >
        Personal inflation Guide
      </button> -->
      <div class="grid col-span-7 px-5 mt-6 md:grid-cols-4 gap-8">
        <div
          class="md:grid hidden col-span-7 px-5 md:col-span-4 xl:col-span-2 md:grid-cols-2 gap-10"
        >
          <p class="text-[18px] text-black/60">Household Annual Income</p>
          <div class="flex flex-row">
            <p class="h-full flex bg-gray-50 items-center px-3">$</p>
            <input
              v-model.lazy="wageFields.netIncome"
              @input="$emit('wageFields:[index]', $event.target.value)"
              placeholder="0"
              type="number"
              min="0"
              max="1000000"
              class="p-2 font-semibold w-full"
            />
            <!-- <button class="px-2 py-3 bg-black/5">
              Import your purchase history
            </button> -->
          </div>
          <!-- <p class="text-[18px] text-black/60">Period of time.</p>
          <select class="p-4 h-fit" placeholder="select" name="" id="">
            <option value="Select">Select</option>
          </select> -->
          <p class="font-semibold col-span-7 md:col-span-1">
            Household Expenses
          </p>
          <div class="justify-between hidden md:flex flex-row">
            <p><strong>Monthly</strong> (USD)</p>
            <p><strong>Annually</strong> (USD)</p>
          </div>

          <ul
            class="hidden md:flex justify-center flex-col font-semibold gap-8"
          >
            <li v-for="field in fields">{{ field.slice(0, 30) }}</li>
          </ul>
          <div class="hidden md:flex col-span-1 gap-9 flex-row">
            <ul class="flex flex-col gap-4">
              <li
                class="flex bg-white flex-row items-center"
                v-for="(field, index) in fields"
              >
                <p class="h-full flex bg-gray-50 items-center px-3">$</p>
                <input
                  placeholder="0"
                  v-model.lazy="inputFields[field]"
                  @input="$emit('inputFields:[index]', $event.target.value)"
                  type="number"
                  class="p-2 font-semibold w-24"
                />
              </li>
            </ul>
            <ul class="flex flex-col md:ml-auto xl:ml-0 gap-4">
              <!-- <input
                v-for="(field, index) in fields"
                placeholder="0"
                v-model="inputFields[field]"
                @input="$emit('inputFields:[index]', $event.target.value)"
                type="number"
                class="p-2 font-semibold w-32"
              /> -->
              <li
                v-for="field in fields"
                placeholder="0"
                class="p-2 bg-gray-100 font-semibold w-32"
              >
                {{ inputFields[field] * 12 }}
              </li>
            </ul>
          </div>
          <div
            class="flex-row col-span-1 md:col-span-2 gap-6 flex items-center justify-center pr-4"
          >
            <button @click="Calculate()" class="btn md:w-[75%]">
              Calculate
            </button>
            <!-- <button
              @click="reset()"
              class="grid col-span-3 ml-auto rounded-full h-fit px-11 py-3 font-semibold bg-black/[8%]"
            >
              Reset
            </button> -->
          </div>
        </div>
        <div class="grid col-span-7 xl:col-span-2 md:grid-cols-2 h-fit gap-8">
          <div
            v-if="calculated"
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              {{ calculator.personalInflation.toFixed(2) }}%
            </h1>
            <p>Personal inflation rate for your household</p>
          </div>
          <div
            v-if="calculated"
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              ${{ calculator.monthlyEffect.toFixed(2) }}
            </h1>
            <p>Estimated increase in your monthly spend</p>
          </div>
          <!-- <h1 class="col-span-2 text-lg font-semibold text-center">
            Is your income growing as fast as the national average
          </h1>
          <div
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 border border-black/10 rounded-[4px]"
          >
            <h1 class="font-semibold text-3xl">9.5%</h1>
            <p>Estimated increase in your income</p>
          </div>
          <div
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 border border-black/10 rounded-[4px]"
          >
            <h1 class="font-semibold text-3xl">$225</h1>
            <p>Average Wage inflation vs year ago</p>
          </div> -->
          <div
            class="grid col-span-4 xl:col-span-2 max-h-[500px] md:ml-3 bg-truflation-100 p-5 gap-4 rounded-sm"
          >
            <div class="flex flex-row items-center">
              <p class="ml-5 font-semibold">
                individual and average inflation Comparison
              </p>
              <ul
                class="flex ml-auto flex-row w-fit px-3 py-1 rounded-2xl gap-3 bg-black/5 align-middle items-center"
              >
                <li class="p-0.5">
                  <button
                    :class="{
                      'active-period':
                        chartLables.mainSelection === TimePeriod.OneWeek,
                    }"
                    @click="main?.updateMainLabel(7, TimePeriod.OneWeek)"
                  >
                    1W
                  </button>
                </li>
                <li class="p-0.5">
                  <button
                    :class="{
                      'active-period':
                        chartLables.mainSelection === TimePeriod.OneMonth,
                    }"
                    @click="main?.updateMainLabel(30, TimePeriod.OneMonth)"
                  >
                    1M
                  </button>
                </li>
                <li class="p-0.5">
                  <button
                    :class="{
                      'active-period':
                        chartLables.mainSelection === TimePeriod.SixMonths,
                    }"
                    @click="main?.updateMainLabel(150, TimePeriod.SixMonths)"
                  >
                    6M
                  </button>
                </li>
                <li class="p-0.5">
                  <button
                    :class="{
                      'active-period':
                        chartLables.mainSelection === TimePeriod.YTD,
                    }"
                    @click="main?.updateMainLabelYTD(TimePeriod.YTD)"
                  >
                    YTD
                  </button>
                </li>
                <li class="p-0.5">
                  <button
                    :class="{
                      'active-period':
                        chartLables.mainSelection === TimePeriod.OneYear,
                    }"
                    @click="main?.updateMainLabel(365, TimePeriod.OneYear)"
                  >
                    1Y
                  </button>
                </li>
              </ul>
            </div>
            <Line
              v-if="MainData"
              id="calculator-chart"
              :options="CalcOptions"
              :data="main?.getCalculatorChart(main?.MainData)"
            />
          </div>
        </div>
      </div>

      <!-- <h1
        id="calculator-text"
        class="grid col-span-4 mt-20 text-3xl font-semibold"
      >
        Individual Personalized Inflation Calculator
      </h1>
      <p class="grid col-span-4 text-[18px]">
        Use our personalized inflation calculator to see how increases in the
        cost of living have affected you in the past year.
      </p>
      <h1 class="grid col-span-5 font-semibold text-xl text-black">
        How is inflation affecting your household?
      </h1>

      <p class="grid col-span-3">
        Use our personalised inflation calculator to see how increases in the
        cost of living have affected you in the past year. Inflation is a
        measure of how prices of goods and services are changing, and it can
        have a big impact on people’s household finances. Every day, Truflation
        publishes the latest inflation rate which measures the change in the
        price of the goods and services that every household engages on,
        compared with the same time the previous year.
      </p>
      <p class="grid col-span-3">
        Some goods and services contribute more to the overall inflation rate
        than others and some of the products see a large increase in prices,
        while others stay more stable, then inflation would be driven by the
        changing prices in that spending category. So, how the inflation rate
        affects your household depends on which products you tend to spend your
        money on. This calculator estimates a personal inflation rate for your
        household.
      </p>
      <h1 class="grid col-span-5 font-semibold text-xl text-black">
        What are the major factors
      </h1>
      <p class="grid col-span-4 max-w-xl">
        This calculator estimates a personal inflation rate based on your
        household spending patterns and compares this to average household. You
        will be asked how much your household spends on a range of categories
        including:
      </p>
      <ul class="grid row-start-8 col-span-4 max-w-2xl">
        <li>1. Groceries (Food & Non Alcoholic Beverages)</li>
        <li>2. Out of home eating (Restaurants / Catering Services)</li>
        <li>
          3. Alcoholic beverages & Tobacco (Alcoholic Beverages & Tobacco)
        </li>
        <li>
          4. Apparel (Clothing for Men’s, Clothing for Women's, Clothing for
          Children & footwear)
        </li>
        <li>
          5. Housing (Rent, Owned – Mortgage, Owned Property Tax & Owned
          Maintenance)
        </li>
        <li>
          6. Household Durables (Household durables, House keeping supplies,
          Household Furnishings & Equipment’s)
        </li>
        <li>7. Utilities (Gas, Electricity, Fuel Oil & water)</li>
        <li>
          8. Health (Insurance, Medical Services, Drugs & Medical Supplies)
        </li>
        <li>
          9. Transport (Vehicle Purchases, Gasoline / Petrol, Other vehicle
          expenses, Public Transport, Air Transport)
        </li>
        <li>
          10. Communication (Postal services, Telecommunication equipment &
          Telecommunication services)
        </li>
        <li>
          11. Recreation & Culture (Fees & Admissions, Consumer Electronics/IT,
          Pets toys, Hobbies, Holidays & other recreational equipment)
        </li>
        <li>12. Education (Reading / Education)</li>
        <li>
          13. Other expenditure items (Personal care, Social protection,
          Financial Charges, Other fees & services)
        </li>
      </ul> -->
    </div>

    <div class="flex lg:grid lg:col-span-7 mt-48">
      <BlogLinks :title="`News & Media`" :data="blogData" :videos="videos" />
    </div>
    <div class="grid col-span-full mt-24 mb-20">
      <Investors />
    </div>
  </div>
  <NewsLetter />
  <FooterComp />
</template>

<style scoped></style>
