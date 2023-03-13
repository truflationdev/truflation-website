<script setup lang="ts">
import { useDataStore } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
import { categoryIcon } from "../static/data/categoryData";
import { CategoryType } from "~~/components/categoryTypes";

const main = useDataStore();
const { selectedCategory } = storeToRefs(main);
</script>

<template>
  <div
    class="flex flex-col text-center md:text-start container md:max-w-[90%] md:mx-auto mt-12 gap-3"
  >
    <h1 class="text-2xl font-semibold">Categories</h1>
    <ul
      class="hidden md:grid grid-cols-1 mt-6 md:grid-cols-3 2xl:grid-cols-4 gap-y-8 justify-center text-gray-600"
    >
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.FoodAndBev,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.FoodAndBev"
          @click="main.updateCategory(CategoryType.FoodAndBev)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.FoodAndBev,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.FoodAndBev,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M11.1917 -0.00725916C11.0504 -0.00505094 10.9158 0.0531144 10.8174 0.154471C10.7189 0.255828 10.6647 0.392095 10.6667 0.533366V2.13337C10.6657 2.20404 10.6787 2.27421 10.7051 2.33979C10.7314 2.40537 10.7706 2.46506 10.8202 2.51539C10.8698 2.56572 10.9289 2.60569 10.9941 2.63297C11.0593 2.66025 11.1293 2.6743 11.2 2.6743C11.2707 2.6743 11.3407 2.66025 11.4059 2.63297C11.4711 2.60569 11.5302 2.56572 11.5798 2.51539C11.6294 2.46506 11.6686 2.40537 11.6949 2.33979C11.7213 2.27421 11.7343 2.20404 11.7333 2.13337V0.533366C11.7343 0.462011 11.721 0.391187 11.6941 0.325085C11.6672 0.258984 11.6273 0.19895 11.5768 0.148538C11.5263 0.098127 11.4662 0.0583634 11.4 0.0316022C11.3339 0.00484102 11.263 -0.00837362 11.1917 -0.00725916ZM13.325 0.526074C13.1837 0.528282 13.0491 0.586448 12.9507 0.687805C12.8523 0.789161 12.7981 0.925429 12.8 1.0667V2.13337C12.799 2.20404 12.8121 2.27421 12.8384 2.33979C12.8648 2.40537 12.9039 2.46506 12.9535 2.51539C13.0031 2.56572 13.0623 2.60569 13.1275 2.63297C13.1927 2.66025 13.2627 2.6743 13.3333 2.6743C13.404 2.6743 13.474 2.66025 13.5392 2.63297C13.6044 2.60569 13.6635 2.56572 13.7132 2.51539C13.7628 2.46506 13.8019 2.40537 13.8283 2.33979C13.8546 2.27421 13.8677 2.20404 13.8667 2.13337V1.0667C13.8676 0.995345 13.8543 0.92452 13.8274 0.858418C13.8005 0.792317 13.7606 0.732283 13.7101 0.681872C13.6596 0.63146 13.5995 0.591697 13.5334 0.564936C13.4672 0.538174 13.3964 0.52496 13.325 0.526074ZM9.05833 1.05941C8.91707 1.06162 8.78245 1.11978 8.68402 1.22114C8.58559 1.32249 8.5314 1.45876 8.53333 1.60003V2.13337C8.53233 2.20404 8.54539 2.27421 8.57174 2.33979C8.5981 2.40537 8.63722 2.46506 8.68685 2.51539C8.73647 2.56572 8.7956 2.60569 8.86081 2.63297C8.92601 2.66025 8.99599 2.6743 9.06667 2.6743C9.13735 2.6743 9.20732 2.66025 9.27253 2.63297C9.33773 2.60569 9.39686 2.56572 9.44649 2.51539C9.49611 2.46506 9.53524 2.40537 9.56159 2.33979C9.58794 2.27421 9.601 2.20404 9.6 2.13337V1.60003C9.60098 1.52868 9.58763 1.45785 9.56074 1.39175C9.53385 1.32565 9.49397 1.26562 9.44346 1.21521C9.39295 1.16479 9.33284 1.12503 9.26669 1.09827C9.20054 1.07151 9.12969 1.05829 9.05833 1.05941ZM6.4 3.73337C5.824 3.73337 5.28529 3.96253 4.89063 4.36253C4.68796 4.29853 4.48 4.2667 4.26667 4.2667C3.41333 4.2667 2.66633 4.76237 2.325 5.52503C1.56233 5.86637 1.06667 6.61337 1.06667 7.4667H0.533333C0.24 7.4667 0 7.7067 0 8.00003C0 8.29337 0.24 8.53337 0.533333 8.53337H0.564583C0.827308 10.6382 2.61845 12.2667 4.79479 12.2667H0C0 12.856 0.477333 13.3334 1.06667 13.3334H14.9333C15.5227 13.3334 16 12.856 16 12.2667H12.8865C13.4193 12.2667 13.8707 11.8733 13.9438 11.3459L14.8969 4.44066C14.9411 4.12012 14.6925 3.83441 14.3698 3.83441H8.03125C7.70592 3.83441 7.45619 4.12322 7.50313 4.44482L8.50833 11.3542C8.58513 11.8827 9.03658 12.2667 9.56458 12.2667H7.73854C7.59454 12.0267 7.49371 11.7549 7.45104 11.4563L6.94896 8.00003H6.94688L6.86979 7.4667H2.13333C2.13333 6.99737 2.43717 6.58649 2.89583 6.45316C3.0665 6.39982 3.19979 6.26653 3.25313 6.09587C3.38646 5.6372 3.79733 5.33337 4.26667 5.33337C4.44267 5.33337 4.61892 5.38112 4.78958 5.47712C5.03492 5.61578 5.3495 5.54107 5.50417 5.30107C5.7015 4.98641 6.032 4.80003 6.4 4.80003C6.42667 4.80003 6.45354 4.79991 6.48021 4.80524L6.44792 4.59691C6.40525 4.30357 6.44308 4.01045 6.56042 3.74378C6.50708 3.73312 6.45333 3.73337 6.4 3.73337Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.FoodAndBev.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Housing,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Housing"
          @click="main.updateCategory(CategoryType.Housing)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Housing,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Housing,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M7.99998 1.06665C7.86057 1.06666 7.72671 1.12125 7.62706 1.21873L1.80935 5.97707C1.80263 5.98212 1.79603 5.98733 1.78956 5.99269L1.76977 6.00936V6.0104C1.71628 6.06023 1.6736 6.12053 1.64439 6.18755C1.61518 6.25457 1.60006 6.32688 1.59998 6.39998C1.59998 6.54143 1.65617 6.67709 1.75619 6.77711C1.8562 6.87713 1.99186 6.93332 2.13331 6.93332H2.66664V12.8C2.66664 13.3893 3.14398 13.8667 3.73331 13.8667H12.2666C12.856 13.8667 13.3333 13.3893 13.3333 12.8V6.93332H13.8666C14.0081 6.93332 14.1437 6.87713 14.2438 6.77711C14.3438 6.67709 14.4 6.54143 14.4 6.39998C14.4 6.3267 14.385 6.25419 14.3558 6.18699C14.3266 6.11978 14.2838 6.05931 14.2302 6.00936L14.2219 6.00311C14.2102 5.99251 14.198 5.98243 14.1854 5.9729L12.2666 4.40311V2.13332C12.2666 1.83892 12.0277 1.59998 11.7333 1.59998H11.2C10.9056 1.59998 10.6666 1.83892 10.6666 2.13332V3.09478L8.36143 1.20936C8.26318 1.11802 8.13412 1.06707 7.99998 1.06665ZM6.39998 8.53332H9.59998V12.8H6.39998V8.53332Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Housing.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Transportation,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Transportation"
          @click="main.updateCategory(CategoryType.Transportation)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Transportation,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Transportation,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M3.19998 1.6001C2.31624 1.6001 1.59998 2.31636 1.59998 3.2001V11.2001V12.0001C1.59998 12.4417 1.95838 12.8001 2.39998 12.8001C2.84158 12.8001 3.19998 12.4417 3.19998 12.0001V11.5199C3.86974 11.6118 4.75239 11.6942 5.86664 11.722V11.3636C5.86664 10.7007 6.17555 10.0875 6.68435 9.69176L7.1406 8.37093C7.187 8.23706 7.24886 8.11278 7.31873 7.99385C7.11073 7.99758 6.89384 8.0001 6.66664 8.0001C4.80424 8.0001 3.59178 7.83781 3.03018 7.73968C2.81792 7.70288 2.66664 7.51765 2.66664 7.30218V4.8001H10.6666V6.93343H11.7333V3.2001C11.7333 2.31636 11.017 1.6001 10.1333 1.6001H3.19998ZM4.79998 2.66676H8.53331C8.82771 2.66676 9.06664 2.9057 9.06664 3.2001C9.06664 3.4945 8.82771 3.73343 8.53331 3.73343H4.79998C4.50558 3.73343 4.26664 3.4945 4.26664 3.2001C4.26664 2.9057 4.50558 2.66676 4.79998 2.66676ZM9.15727 8.0001C8.70233 8.0001 8.29773 8.28845 8.14893 8.71885L7.56977 10.397C7.1863 10.5634 6.93331 10.9396 6.93331 11.3636V12.8001V13.498V13.8668C6.93331 14.1612 7.17224 14.4001 7.46664 14.4001C7.76104 14.4001 7.99998 14.1612 7.99998 13.8668V13.6636C8.72744 13.7618 9.72371 13.8668 10.6666 13.8668C11.6096 13.8668 12.6058 13.7618 13.3333 13.6636V13.8668C13.3333 14.1612 13.5722 14.4001 13.8666 14.4001C14.161 14.4001 14.4 14.1612 14.4 13.8668V13.498V12.8001V11.3636C14.4 10.9396 14.147 10.5629 13.7635 10.3959L13.1844 8.71885C13.0361 8.28898 12.631 8.0001 12.176 8.0001H9.15727ZM3.46664 9.06676C3.90824 9.06676 4.26664 9.42516 4.26664 9.86677C4.26664 10.3084 3.90824 10.6668 3.46664 10.6668C3.02504 10.6668 2.66664 10.3084 2.66664 9.86677C2.66664 9.42516 3.02504 9.06676 3.46664 9.06676ZM8.53331 11.2001C8.82771 11.2001 9.06664 11.439 9.06664 11.7334C9.06664 12.0278 8.82771 12.2668 8.53331 12.2668C8.23891 12.2668 7.99998 12.0278 7.99998 11.7334C7.99998 11.439 8.23891 11.2001 8.53331 11.2001ZM12.8 11.2001C13.0944 11.2001 13.3333 11.439 13.3333 11.7334C13.3333 12.0278 13.0944 12.2668 12.8 12.2668C12.5056 12.2668 12.2666 12.0278 12.2666 11.7334C12.2666 11.439 12.5056 11.2001 12.8 11.2001ZM10.2479 11.7334H11.0958C11.3251 11.7334 11.5295 11.8799 11.6021 12.098L11.826 12.7699C11.001 12.788 10.9578 12.8001 10.6666 12.8001C10.3754 12.8001 10.3443 12.7875 9.51873 12.7688L9.74164 12.098C9.81418 11.8799 10.018 11.7334 10.2479 11.7334Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Transportation.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Utilities,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Utilities"
          @click="main.updateCategory(CategoryType.Utilities)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Utilities,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Utilities,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M2.13332 1.6001L1.06665 2.66676L2.13332 4.8001L3.73332 5.33343L5.59998 7.2001L6.66665 6.13343L4.79998 4.26676L4.26665 2.66676L2.13332 1.6001ZM11.7687 1.60531C10.8842 1.57033 9.98913 1.88948 9.31353 2.56468C8.44096 3.43725 8.36283 4.48672 8.79686 5.47406L2.60207 11.6688C1.977 12.2939 1.977 13.3063 2.60207 13.9313C3.22713 14.5564 4.2395 14.5564 4.86457 13.9313L11.0594 7.73656C12.0466 8.17042 13.0962 8.09171 13.9687 7.21885C14.8695 6.31805 15.1366 5.0267 14.775 3.89176L12.7989 5.86885L11.0917 5.44176L10.6646 3.73447L12.6417 1.75843C12.3578 1.66816 12.0636 1.61696 11.7687 1.60531ZM10.9448 9.40635L8.93748 11.4136L11.5073 13.9845C12.0619 14.5391 12.9615 14.5391 13.5156 13.9845C14.0703 13.4298 14.0703 12.5308 13.5156 11.9761L10.9448 9.40635ZM3.73332 12.2668C4.02772 12.2668 4.26665 12.5057 4.26665 12.8001C4.26665 13.0945 4.02772 13.3334 3.73332 13.3334C3.43892 13.3334 3.19998 13.0945 3.19998 12.8001C3.19998 12.5057 3.43892 12.2668 3.73332 12.2668Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Utilities.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Health,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Health"
          @click="main.updateCategory(CategoryType.Health)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Health,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Health,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M5.0906 2.1333C3.1626 2.1333 1.59998 3.69593 1.59998 5.62393C1.59998 5.88366 1.63071 6.14237 1.67498 6.39997H2.75518C3.17172 6.39997 3.56439 6.56136 3.86039 6.85309L4.11768 7.10518L5.38956 4.56143C5.48609 4.36836 5.68014 4.25218 5.90414 4.26872C6.11908 4.28365 6.30358 4.42642 6.37185 4.63122L7.51248 8.04997L7.77393 7.39476C8.01607 6.78996 8.59253 6.39997 9.24373 6.39997H10.2812C10.4658 6.08263 10.8058 5.86663 11.2 5.86663C11.7893 5.86663 12.2666 6.34397 12.2666 6.9333C12.2666 7.52263 11.7893 7.99997 11.2 7.99997C10.8064 7.99997 10.4663 7.78397 10.2812 7.46663H9.24373C9.03146 7.46663 8.84296 7.59379 8.76456 7.79059L7.96248 9.79788C7.88088 10.0011 7.68424 10.1333 7.46664 10.1333H7.45102C7.22702 10.1264 7.03183 9.98098 6.96143 9.76872L5.76768 6.18955L4.74373 8.23851C4.66693 8.39104 4.52214 8.49774 4.35414 8.52601C4.18614 8.55268 4.01479 8.49964 3.89373 8.38018L3.11352 7.61351C3.01698 7.51911 2.89012 7.46663 2.75518 7.46663H1.96664C2.97648 10.1076 5.8222 12.4441 7.30414 13.6083C7.31203 13.615 7.32002 13.6216 7.3281 13.6281C7.3365 13.6347 7.35 13.6455 7.35831 13.6521L7.35935 13.651C7.54387 13.7904 7.76871 13.8661 7.99998 13.8666C8.2316 13.8663 8.45684 13.7906 8.64164 13.651V13.6521C8.64523 13.6492 8.65054 13.6455 8.65414 13.6427C8.65689 13.6405 8.66077 13.6375 8.66352 13.6354C8.66701 13.6323 8.67048 13.6292 8.67393 13.626C10.487 12.2031 14.4 8.98788 14.4 5.62393C14.4 3.69593 12.8374 2.1333 10.9094 2.1333C9.06668 2.1333 7.99998 3.7333 7.99998 3.7333C7.99998 3.7333 6.93327 2.1333 5.0906 2.1333Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Health.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected':
            selectedCategory === CategoryType.HouseDailyItems,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.HouseDailyItems"
          @click="main.updateCategory(CategoryType.HouseDailyItems)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.HouseDailyItems,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.HouseDailyItems,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M3.19997 2.1333C2.61063 2.1333 2.1333 2.61063 2.1333 3.19997V12.8C2.1333 13.3893 2.61063 13.8666 3.19997 13.8666C3.19997 14.161 3.4389 14.4 3.7333 14.4C4.0277 14.4 4.26663 14.161 4.26663 13.8666H11.7333C11.7333 14.161 11.9722 14.4 12.2666 14.4C12.561 14.4 12.8 14.161 12.8 13.8666C13.3893 13.8666 13.8666 13.3893 13.8666 12.8V3.19997C13.8666 2.61063 13.3893 2.1333 12.8 2.1333H3.19997ZM3.19997 3.19997H12.8V5.3333H3.19997V3.19997ZM4.79997 3.7333C4.65852 3.7333 4.52286 3.78949 4.42284 3.88951C4.32282 3.98953 4.26663 4.12519 4.26663 4.26663C4.26663 4.40808 4.32282 4.54374 4.42284 4.64376C4.52286 4.74378 4.65852 4.79997 4.79997 4.79997C4.94142 4.79997 5.07707 4.74378 5.17709 4.64376C5.27711 4.54374 5.3333 4.40808 5.3333 4.26663C5.3333 4.12519 5.27711 3.98953 5.17709 3.88951C5.07707 3.78949 4.94142 3.7333 4.79997 3.7333ZM6.39997 3.7333C6.25852 3.7333 6.12286 3.78949 6.02284 3.88951C5.92282 3.98953 5.86663 4.12519 5.86663 4.26663C5.86663 4.40808 5.92282 4.54374 6.02284 4.64376C6.12286 4.74378 6.25852 4.79997 6.39997 4.79997C6.54142 4.79997 6.67707 4.74378 6.77709 4.64376C6.87711 4.54374 6.9333 4.40808 6.9333 4.26663C6.9333 4.12519 6.87711 3.98953 6.77709 3.88951C6.67707 3.78949 6.54142 3.7333 6.39997 3.7333ZM7.99997 3.7333C7.85852 3.7333 7.72286 3.78949 7.62284 3.88951C7.52282 3.98953 7.46663 4.12519 7.46663 4.26663C7.46663 4.40808 7.52282 4.54374 7.62284 4.64376C7.72286 4.74378 7.85852 4.79997 7.99997 4.79997C8.14142 4.79997 8.27707 4.74378 8.37709 4.64376C8.47711 4.54374 8.5333 4.40808 8.5333 4.26663C8.5333 4.12519 8.47711 3.98953 8.37709 3.88951C8.27707 3.78949 8.14142 3.7333 7.99997 3.7333ZM8.5333 6.39997C9.12263 6.39997 9.59997 6.8773 9.59997 7.46663V11.7333C9.59997 12.3226 9.12263 12.8 8.5333 12.8V6.39997ZM10.6666 6.39997C11.5504 6.39997 12.2666 7.11623 12.2666 7.99997V11.2C12.2666 12.0837 11.5504 12.8 10.6666 12.8V6.39997ZM3.19997 8.5333H7.46663V9.59997C7.46663 10.4837 6.75037 11.2 5.86663 11.2V11.8812C6.18397 12.0658 6.39997 12.4058 6.39997 12.8H4.26663C4.26663 12.4064 4.48263 12.0663 4.79997 11.8812V11.2C3.91623 11.2 3.19997 10.4837 3.19997 9.59997V8.5333Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.HouseDailyItems.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.AlchTobac,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.AlchTobac"
          @click="main.updateCategory(CategoryType.AlchTobac)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.AlchTobac,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.AlchTobac,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M11.3573 1.97823C11.2773 1.71636 11.0138 1.57023 10.752 1.61716C10.7226 1.61236 10.6965 1.6001 10.6666 1.6001H5.3333C5.3237 1.6001 5.3157 1.6049 5.30664 1.60543C5.2677 1.60756 5.23304 1.6177 5.19624 1.62783C5.1653 1.63636 5.13384 1.6417 5.10557 1.65556C5.0741 1.6705 5.0485 1.69236 5.02024 1.71263C4.99304 1.7329 4.96584 1.75103 4.9429 1.7761C4.92104 1.79956 4.90664 1.82836 4.88904 1.8561C4.86877 1.8881 4.84904 1.9185 4.83624 1.95423C4.83304 1.96276 4.82557 1.96916 4.8229 1.97823L4.07037 4.45236C3.69917 5.93716 4.00264 7.49343 4.88317 8.61556C5.5509 9.46516 6.4373 9.96863 7.4661 10.0977V13.8668H5.33277C5.03837 13.8668 4.79944 14.1052 4.79944 14.4001C4.79944 14.695 5.03837 14.9334 5.33277 14.9334H10.6661C10.9605 14.9334 11.1994 14.695 11.1994 14.4001C11.1994 14.1052 10.9605 13.8668 10.6661 13.8668H8.53277V10.1148C9.6389 10.0246 10.5898 9.5137 11.2965 8.6145C12.1765 7.49343 12.481 5.93716 12.1024 4.4257L11.3573 1.97823ZM5.0981 4.73663L5.72797 2.66676H10.4517L11.0746 4.7105C11.1269 4.91743 11.1562 5.12596 11.1754 5.33343H5.00157C5.02024 5.13396 5.0485 4.93396 5.0981 4.73663Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.AlchTobac.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Clothing,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Clothing"
          @click="main.updateCategory(CategoryType.Clothing)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Clothing,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Clothing,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M5.05835 2.1333C4.20982 2.1333 3.39585 2.4708 2.79585 3.0708L0.689603 5.17705C0.48107 5.38558 0.48107 5.72322 0.689603 5.93122L2.06877 7.31038C2.2773 7.51892 2.61494 7.51892 2.82294 7.31038L3.73335 6.39997V12.8C3.73335 13.3893 4.21069 13.8666 4.80002 13.8666H8.00002H11.2C11.7894 13.8666 12.2667 13.3893 12.2667 12.8V6.39997L13.1771 7.31038C13.3856 7.51892 13.7233 7.51892 13.9313 7.31038L15.3104 5.93122C15.519 5.72322 15.519 5.38558 15.3104 5.17705L13.2042 3.0708C12.6042 2.4708 11.7902 2.1333 10.9417 2.1333H10.6667H10.1334H5.86669H5.33335H5.05835ZM6.26773 3.19997H9.73231C9.42091 3.7333 8.88775 4.26663 8.00002 4.26663C7.11229 4.26663 6.57913 3.7333 6.26773 3.19997Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Clothing.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Communications,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Communications"
          @click="main.updateCategory(CategoryType.Communications)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Communications,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Communications,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M6.93332 1.6001C3.69332 1.6001 1.06665 3.98783 1.06665 6.93343C1.06665 8.44629 1.76432 9.80691 2.87811 10.7761C2.71835 11.2993 2.3851 11.8197 1.7729 12.2834C1.77255 12.2838 1.77221 12.2841 1.77186 12.2845C1.72136 12.3037 1.67789 12.3378 1.6472 12.3822C1.61651 12.4267 1.60004 12.4794 1.59998 12.5334C1.59998 12.6042 1.62808 12.672 1.67809 12.722C1.7281 12.772 1.79593 12.8001 1.86665 12.8001C1.88487 12.7999 1.90302 12.7978 1.92082 12.7938C2.95552 12.7908 3.83835 12.3489 4.54061 11.7949C4.87386 11.9304 5.22173 12.0422 5.58436 12.1199C5.42222 11.6612 5.33332 11.1729 5.33332 10.6668C5.33332 8.01983 7.72585 5.86676 10.6666 5.86676C11.4037 5.86676 12.1063 6.00217 12.7458 6.24697C12.3746 3.62617 9.91678 1.6001 6.93332 1.6001ZM10.6666 6.93343C9.53506 6.93343 8.44982 7.32676 7.64966 8.0269C6.84951 8.72703 6.39998 9.67662 6.39998 10.6668C6.39998 11.6569 6.84951 12.6065 7.64966 13.3066C8.44982 14.0068 9.53506 14.4001 10.6666 14.4001C11.2122 14.3993 11.7525 14.3071 12.2583 14.1282C12.9124 14.5851 13.7039 14.924 14.6104 14.9272C14.6289 14.9313 14.6477 14.9333 14.6666 14.9334C14.7374 14.9334 14.8052 14.9053 14.8552 14.8553C14.9052 14.8053 14.9333 14.7375 14.9333 14.6668C14.9332 14.6122 14.9164 14.559 14.8851 14.5143C14.8538 14.4696 14.8096 14.4355 14.7583 14.4168C14.2702 14.0462 13.9574 13.6383 13.7698 13.223C14.5154 12.5316 14.9316 11.6174 14.9333 10.6668C14.9333 9.67662 14.4838 8.72703 13.6836 8.0269C12.8835 7.32676 11.7982 6.93343 10.6666 6.93343Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Communications.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Education,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Education"
          @click="main.updateCategory(CategoryType.Education)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Education,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Education,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M8 1.6001C7.91202 1.60016 7.82542 1.62199 7.74792 1.66364L0.286458 5.39385V5.39489C0.200208 5.43993 0.127923 5.50771 0.0774299 5.59088C0.026937 5.67406 0.00016056 5.76946 0 5.86676C0.00016056 5.96407 0.026937 6.05947 0.0774299 6.14265C0.127923 6.22582 0.200208 6.2936 0.286458 6.33864V6.33968L7.74479 10.0678C7.82303 10.1107 7.91078 10.1332 8 10.1334C8.08798 10.1334 8.17458 10.1115 8.25208 10.0699L15.7083 6.34176C15.7101 6.34108 15.7118 6.34038 15.7135 6.33968V6.33864C15.7998 6.2936 15.8721 6.22582 15.9226 6.14265C15.9731 6.05947 15.9998 5.96407 16 5.86676C15.9998 5.76946 15.9731 5.67406 15.9226 5.59088C15.8721 5.50771 15.7998 5.43993 15.7135 5.39489V5.39385L8.25521 1.66572C8.17697 1.62285 8.08922 1.60028 8 1.6001ZM15.4667 7.65531L14.4 8.18864V12.948C14.0823 13.1327 13.8667 13.4727 13.8667 13.8668C13.8667 14.4561 14.9333 16.0001 14.9333 16.0001C14.9333 16.0001 16 14.4561 16 13.8668C16 13.4727 15.7843 13.1327 15.4667 12.948V7.65531ZM3.2 8.9876V11.2001C3.2 12.6726 5.3488 13.8668 8 13.8668C10.6512 13.8668 12.8 12.6726 12.8 11.2001V8.9876L8.72813 11.0241C8.68333 11.0465 8.63858 11.0648 8.59271 11.0803C8.39964 11.1598 8.20107 11.2001 8 11.2001C7.79947 11.2001 7.60138 11.1598 7.40938 11.0803C7.36298 11.0648 7.31721 11.0459 7.27188 11.023L3.2 8.9876Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Education.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Recreation,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Recreation"
          @click="main.updateCategory(CategoryType.Recreation)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Recreation,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Recreation,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M5.3344 3.73438C5.11733 3.73471 4.90047 3.83341 4.7594 4.03021L0.158359 10.4458C-0.227774 10.984 0.157417 11.7333 0.819817 11.7333H9.81357C10.5037 11.7333 10.9038 10.9517 10.5 10.3917L5.9094 4.02917C5.7678 3.83263 5.55147 3.73404 5.3344 3.73438ZM11.7417 3.73854C11.5508 3.74208 11.3607 3.83287 11.2396 4.00833L9.26982 6.86354L11.3646 9.76771C11.4478 9.88291 11.5128 10.0064 11.5677 10.1333H15.1438C15.8414 10.1333 16.2405 9.3381 15.824 8.77917L12.2521 3.98958C12.1246 3.81865 11.9326 3.73501 11.7417 3.73854Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Recreation.slice(0, 30) }}
        </button>
      </li>
      <li
        class="border-b-2 flex flex-row gap-2 pb-3 items-center"
        :class="{
          'category-selected': selectedCategory === CategoryType.Others,
        }"
      >
        <button
          class="flex items-center flex-row gap-2"
          :id="CategoryType.Others"
          @click="main.updateCategory(CategoryType.Others)"
        >
          <div
            :class="{
              'bg-truflation-600 text-white':
                selectedCategory === CategoryType.Others,
              'bg-truflation-200 text-truflation-600':
                selectedCategory !== CategoryType.Others,
            }"
            class="w-8 h-8 rounded-full flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1840_10244)">
                <path
                  d="M4.80004 8.00015C4.80004 8.8838 4.08369 9.60015 3.20004 9.60015C2.31638 9.60015 1.60004 8.8838 1.60004 8.00015C1.60004 7.11649 2.31638 6.40015 3.20004 6.40015C4.08369 6.40015 4.80004 7.11649 4.80004 8.00015Z"
                />
                <path
                  d="M9.60004 8.00015C9.60004 8.8838 8.88369 9.60015 8.00004 9.60015C7.11638 9.60015 6.40004 8.8838 6.40004 8.00015C6.40004 7.11649 7.11638 6.40015 8.00004 6.40015C8.88369 6.40015 9.60004 7.11649 9.60004 8.00015Z"
                />
                <path
                  d="M12.8 9.60015C13.6837 9.60015 14.4 8.8838 14.4 8.00015C14.4 7.11649 13.6837 6.40015 12.8 6.40015C11.9164 6.40015 11.2 7.11649 11.2 8.00015C11.2 8.8838 11.9164 9.60015 12.8 9.60015Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1840_10244">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {{ CategoryType.Others.slice(0, 30) }}
        </button>
      </li>
    </ul>
    <select
      v-on:change="main.updateCategory(selectedCategory)"
      v-model="selectedCategory"
      class="md:hidden p-4 rounded text-truflation-500 font-semibold self-center w-3/4 text-center mx-5 shadow-xl"
    >
      <option v-for="cat in CategoryType" :value="cat">{{ cat }}</option>
    </select>
  </div>
</template>
<style scoped></style>
