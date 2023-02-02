<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import { blogData } from "../../static/data/staffData";
import { TimePeriod } from "../../components/categoryTypes";
import { CategoryType } from "../../components/categoryTypes";
import { options } from "../../assets/chartConfig";
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
import { ref, reactive } from "vue";

const main = useDataStore();
const { calculator } = storeToRefs(main);

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
  "Food & Non Alcoholic Beverages",
  "Alcoholic beverages & Tobacco",
  "Apparel",
  "Housing",
  "Utilities",
  "Household Durables",
  "Health",
  "Transport",
  "Communication",
  "Recreation & Culture",
  "Education",
  "Other expenditure items",
];

const initialState = {
  "Food & Non Alcoholic Beverages": 0,
  "Alcoholic beverages & Tobacco": 0,
  Apparel: 0,
  Housing: 0,
  Utilities: 0,
  "Household Durables": 0,
  Health: 0,
  Transport: 0,
  Communication: 0,
  "Recreation & Culture": 0,
  Education: 0,
  "Other expenditure items": 0,
};

const inputFields = reactive({ ...initialState });

function Calculate() {
  main.updatePersonalInflation(inputFields);
  document
    .getElementById("monthlyValues")
    .scrollIntoView({ behavior: "smooth" });
}

function reset() {
  Object.assign(inputFields, initialState);
}
</script>

<template>
  <Head>
    <title>Personal inflation calculator - Truflation</title>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </Head>

  <div
    class="absolute z-0 w-screen h-screen bg-gradient-to-t bg-[#3682F2/20] from-white to-[#2D8FEA]/20"
  ></div>
  <Banner />

  <div class="flex relative flex-col z-0 mx-auto container mt-[77px]">
    <div id="monthlyValues" class="grid z-20 grid-cols-7 gap-5">
      <h1 class="grid col-span-4 text-3xl font-semibold">
        Individual Personalized Inflation Calculator
      </h1>
      <button
        class="grid col-span-3 ml-auto w-fit px-4 py-3 font-semibold bg-black/[8%]"
      >
        Personal inflation Guide
      </button>
      <div class="grid col-span-7 mt-6 grid-cols-4 gap-8">
        <div class="grid grid-cols-2 col-span-2 gap-10">
          <p class="text-[18px] text-black/60">HouseHold net income.</p>
          <div class="flex flex-col gap-4">
            <select class="p-4 h-fit" placeholder="select" name="" id="">
              <option value="Select">Select</option>
            </select>
            <button class="px-2 py-3 bg-black/5">
              Import your purchase history
            </button>
          </div>
          <p class="text-[18px] text-black/60">Period of time.</p>
          <select class="p-4 h-fit" placeholder="select" name="" id="">
            <option value="Select">Select</option>
          </select>
          <p class="font-semibold">Household expenses.</p>
          <div class="justify-between flex flex-row">
            <p><strong>Monthly</strong> (USD)</p>
            <p><strong>Annually</strong> (USD)</p>
          </div>
          <ul class="flex justify-center flex-col font-semibold gap-8">
            <li v-for="field in fields">{{ field }}</li>
          </ul>
          <div class="flex col-span-1 gap-9 flex-row">
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
            <ul class="flex flex-col gap-4">
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
          <div class="flex-row col-span-2 gap-6 flex pr-4">
            <button @click="Calculate()" class="btn w-[75%]">Calculate</button>
            <button
              @click="reset()"
              class="grid col-span-3 ml-auto rounded-full h-fit px-11 py-3 font-semibold bg-black/[8%]"
            >
              Reset
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 col-span-2 h-fit gap-8">
          <div
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              {{ calculator.personalInflation.toFixed(2) }}%
            </h1>
            <p>Personal inflation Rate for your Household</p>
          </div>
          <div
            class="grid col-span-1 h-fit text-center w-full gap-8 p-5 rounded-[4px] bg-truflation-500 text-white"
          >
            <h1 class="font-semibold text-3xl">
              ${{ calculator.monthlyEffect.toFixed(2) }}
            </h1>
            <p>Estimated increase in your monthly spend</p>
          </div>
          <h1 class="col-span-2 text-lg font-semibold text-center">
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
          </div>
          <div class="grid col-span-2 h-fit gap-5">
            <h1 class="grid font-semibold text-xl text-black">
              What are the major factors
            </h1>
            <p class="grid max-w-xl font-semibold">
              This calculator estimates a personal inflation rate based on your
              household spending patterns and compares this to average
              household. You will be asked how much your household spends on a
              range of categories including:
            </p>
            <ul class="grid row-start-8 items-center gap-1">
              <li>1. Groceries (Food & Non Alcoholic Beverages)</li>
              <li>2. Out of home eating (Restaurants / Catering Services)</li>
              <li>
                3. Alcoholic beverages & Tobacco (Alcoholic Beverages & Tobacco)
              </li>
              <li>
                4. Apparel (Clothing for Men’s, Clothing for Women's, Clothing
                for Children & footwear)
              </li>
              <li>
                5. Housing (Rent, Owned – Mortgage, Owned Property Tax & Owned
                Maintenance)
              </li>
              <li>
                6. Household Durables (Household durables, House keeping
                supplies, Household Furnishings & Equipment’s)
              </li>
              <li>7. Utilities (Gas, Electricity, Fuel Oil & water)</li>
              <li>
                8. Health (Insurance, Medical Services, Drugs & Medical
                Supplies)
              </li>
              <li>
                9. Transport (Vehicle Purchases, Gasoline / Petrol, Other
                vehicle expenses, Public Transport, Air Transport)
              </li>
              <li>
                10. Communication (Postal services, Telecommunication equipment
                & Telecommunication services)
              </li>
              <li>
                11. Recreation & Culture (Fees & Admissions, Consumer
                Electronics/IT, Pets toys, Hobbies, Holidays & other
                recreational equipment)
              </li>
              <li>12. Education (Reading / Education)</li>
              <li>
                13. Other expenditure items (Personal care, Social protection,
                Financial Charges, Other fees & services)
              </li>
            </ul>
          </div>
          <!-- <div
            class="md:col-span-2 max-h-[425px] ml-3 bg-truflation-100 p-5 gap-4 rounded-sm"
          >
            <div class="flex flex-row items-center">
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
              id="my-chart-id"
              :options="options"
              :data="main?.getMainChart(main?.MainData)"
            />
          </div> -->
        </div>
      </div>

      <h1 class="grid col-span-4 mt-20 text-3xl font-semibold">
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
      <!-- <h1 class="grid col-span-5 font-semibold text-xl text-black">
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

    <div class="grid col-span-7 mt-20">
      <BlogLinks :title="`News & Media`" :data="blogData" :videos="videos" />
    </div>
    <div class="grid col-span-full mt-24 mb-20">
      <Investors />
    </div>
    <div class="grid col-span-full">
      <NewsLetter />
    </div>
  </div>
  <FooterComp />
</template>

<style scoped></style>
