<script setup lang="ts">
import { useDataStore } from "~~/store/stateStore";
import { storeToRefs } from "pinia";
const { isLight, dashboard } = defineProps(["isLight", "dashboard"]);

const main = useDataStore();
const { showBanner } = storeToRefs(main);
</script>

<template>
  <div
    v-if="showBanner"
    class="w-full text-[13px] flex gap-3 justify-center flex-row items-center text-white p-2 top-0 bg-truflation-500"
  >
    <p class="max-w-[200px] ml-auto md:max-w-none">
      Data forecasts and BLS CPI at 9AM EST on
      <a
        class="font-medium"
        target="_blank"
        href="https://twitter.com/i/spaces/1DXxyvVnodNKM"
      >
        Twitter Spaces</a
      >
    </p>
    <a
      target="_blank"
      class="mr-auto"
      href="https://twitter.com/i/spaces/1DXxyvVnodNKM"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
    <button class="flex mr-5" @click="main.setShowBanner(false)">
      <svg
        width="10"
        height="10"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L13 1M1 1L13 13"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  <header
    class="navbar z-20 relative"
    :class="{ 'header-light': isLight, 'header-dark': !isLight }"
  >
    <div class="navbar-end text-gray-800 w-full lg:mx-20">
      <div class="dropdown mr-auto">
        <label
          tabindex="0"
          class="btn btn-ghost focus:text-white focus:bg-truflation-500 bg-white text-truflation-500 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-36"
        >
          <li tabindex="0">
            <a class="justify-between">
              Solutions
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="z-20 bg-white">
              <li><a href="/">Truflation Dashboard</a></li>
              <li><a href="/calculator">Inflation Calculator</a></li>

              <li>
                <a href="https://marketplace.truflation.com/"
                  >Marketplace
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                      stroke="#0A3170"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li><a href="/solutions/widget">Widget</a></li>
            </ul>
          </li>
          <li><a href="/methodology">Methodology</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Developers
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="text-left text-gray-800 bg-white">
              <li class="">
                <a href="/developers">Developer Center</a>
              </li>
              <li>
                <a
                  href="https://whitepaper.truflation.com/dev-guides/quick-start"
                  >Get Started Guide
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                      stroke="#0A3170"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </li>
              <li>
                <a href="https://github.com/truflation/quickstart"
                  >GitHub
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                      stroke="#0A3170"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              Explore
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="text-left text-gray-800 bg-white">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li>
                <a href="https://whitepaper.truflation.com/" target="_blank"
                  >Whitepapers
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                      stroke="#0A3170"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCZJSvVppUtK7F22xjBcbV0A"
                  >Youtube
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                      stroke="#0A3170"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a href="/resources" class="justify-between"> Resources </a>
          </li>
        </ul>
      </div>
      <a class="lg:mx-0 w-full flex flex-row ml-10" href="/">
        <img v-if="isLight" src="~/assets/img/logo-light.svg" alt="" />
        <img v-if="!isLight" src="~/assets/img/logo.svg" alt="" />
      </a>
    </div>
    <div class="navbar-end w-[70%] xl:mr-10 hidden lg:flex flex-row">
      <ul class="menu menu-horizontal px-1">
        <li tabindex="0">
          <a>
            Solutions
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-white text-black">
            <li>
              <a href="/">
                <div class="flex flex-row items-center gap-2">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.07324 11.6667H3.66667C5.13943 11.6667 6.33333 12.8606 6.33333 14.3333V15.6667C6.33333 17.1394 7.52724 18.3333 9 18.3333C10.4728 18.3333 11.6667 19.5272 11.6667 21V24.9268M7.66667 2.24736V4.33333C7.66667 6.17428 9.15905 7.66667 11 7.66667H11.6667C13.1394 7.66667 14.3333 8.86057 14.3333 10.3333C14.3333 11.8061 15.5272 13 17 13C18.4728 13 19.6667 11.8061 19.6667 10.3333C19.6667 8.86057 20.8606 7.66667 22.3333 7.66667L23.7526 7.66666M17 24.3172V21C17 19.5272 18.1939 18.3333 19.6667 18.3333H23.7526M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    <p class="font-semibold">Truflation Dashboard</p>
                    <p class="font-light">The Global Inflation Dashboard</p>
                  </div>
                </div>
              </a>
              <a href="/calculator">
                <div class="flex flex-row items-center gap-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0872 12.3277C19.2682 12.5363 19.584 12.5586 19.7926 12.3777C20.0011 12.1967 20.0235 11.8809 19.8425 11.6723L19.0872 12.3277ZM12.9128 19.6723C12.7318 19.4637 12.416 19.4414 12.2075 19.6223C11.9989 19.8033 11.9765 20.1191 12.1575 20.3277L12.9128 19.6723ZM16.5 9.33333C16.5 9.05719 16.2761 8.83333 16 8.83333C15.7239 8.83333 15.5 9.05719 15.5 9.33333H16.5ZM15.5 22.6667C15.5 22.9428 15.7238 23.1667 16 23.1667C16.2761 23.1667 16.5 22.9428 16.5 22.6667L15.5 22.6667ZM27.5 16C27.5 22.3513 22.3513 27.5 16 27.5V28.5C22.9036 28.5 28.5 22.9036 28.5 16H27.5ZM16 27.5C9.64873 27.5 4.5 22.3513 4.5 16H3.5C3.5 22.9036 9.09644 28.5 16 28.5V27.5ZM4.5 16C4.5 9.64873 9.64873 4.5 16 4.5V3.5C9.09644 3.5 3.5 9.09644 3.5 16H4.5ZM16 4.5C22.3513 4.5 27.5 9.64873 27.5 16H28.5C28.5 9.09644 22.9036 3.5 16 3.5V4.5ZM16 15.5C14.9804 15.5 14.0799 15.2236 13.4489 14.8029C12.8145 14.3799 12.5 13.8505 12.5 13.3333H11.5C11.5 14.2889 12.081 15.0928 12.8942 15.635C13.711 16.1795 14.8105 16.5 16 16.5V15.5ZM12.5 13.3333C12.5 12.8161 12.8145 12.2867 13.4489 11.8637C14.0799 11.4431 14.9804 11.1667 16 11.1667V10.1667C14.8105 10.1667 13.711 10.4872 12.8942 11.0317C12.081 11.5739 11.5 12.3778 11.5 13.3333H12.5ZM16 11.1667C17.3772 11.1667 18.5148 11.668 19.0872 12.3277L19.8425 11.6723C19.0317 10.7379 17.5839 10.1667 16 10.1667V11.1667ZM16 16.5C17.0196 16.5 17.9201 16.7764 18.5511 17.1971C19.1856 17.6201 19.5 18.1495 19.5 18.6667H20.5C20.5 17.7111 19.919 16.9072 19.1058 16.365C18.289 15.8205 17.1895 15.5 16 15.5V16.5ZM15.5 9.33333V10.6667H16.5V9.33333H15.5ZM15.5 21.3333L15.5 22.6667L16.5 22.6667L16.5 21.3333L15.5 21.3333ZM16 20.8333C14.6228 20.8333 13.4852 20.332 12.9128 19.6723L12.1575 20.3277C12.9683 21.2621 14.4162 21.8333 16 21.8333L16 20.8333ZM19.5 18.6667C19.5 19.1839 19.1856 19.7133 18.5511 20.1363C17.9201 20.5569 17.0197 20.8333 16 20.8333V21.8333C17.1895 21.8333 18.2891 21.5128 19.1058 20.9683C19.9191 20.4261 20.5 19.6222 20.5 18.6667H19.5ZM15.5 10.6667L15.5 21.3333L16.5 21.3333L16.5 10.6667L15.5 10.6667Z"
                      fill="#181818"
                    />
                  </svg>

                  <div>
                    <p class="font-semibold">Inflation Calculator</p>
                    <p class="font-light">Track Personal Impact</p>
                  </div>
                </div>
              </a>
              <a target="”_blank”" href="https://marketplace.truflation.com/">
                <div class="flex flex-row items-center gap-2">
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6667 22.6668H27.3334V20.0002C27.3334 17.791 25.5426 16.0002 23.3334 16.0002C22.0593 16.0002 20.9243 16.5959 20.1918 17.524M20.6667 22.6668H7.33341M20.6667 22.6668V20.0002C20.6667 19.1252 20.4982 18.2896 20.1918 17.524M7.33341 22.6668H0.666748V20.0002C0.666748 17.791 2.45761 16.0002 4.66675 16.0002C5.94089 16.0002 7.07589 16.5959 7.80841 17.524M7.33341 22.6668V20.0002C7.33341 19.1252 7.50198 18.2896 7.80841 17.524M7.80841 17.524C8.79142 15.0682 11.1932 13.3335 14.0001 13.3335C16.807 13.3335 19.2087 15.0682 20.1918 17.524M18.0001 5.3335C18.0001 7.54263 16.2092 9.3335 14.0001 9.3335C11.7909 9.3335 10.0001 7.54263 10.0001 5.3335C10.0001 3.12436 11.7909 1.3335 14.0001 1.3335C16.2092 1.3335 18.0001 3.12436 18.0001 5.3335ZM26.0001 9.3335C26.0001 10.8063 24.8062 12.0002 23.3334 12.0002C21.8607 12.0002 20.6667 10.8063 20.6667 9.3335C20.6667 7.86074 21.8607 6.66683 23.3334 6.66683C24.8062 6.66683 26.0001 7.86074 26.0001 9.3335ZM7.33341 9.3335C7.33341 10.8063 6.13951 12.0002 4.66675 12.0002C3.19399 12.0002 2.00008 10.8063 2.00008 9.3335C2.00008 7.86074 3.19399 6.66683 4.66675 6.66683C6.13951 6.66683 7.33341 7.86074 7.33341 9.3335Z"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    <p class="font-semibold flex flex-row items-center gap-1">
                      Marketplace
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                          stroke="#0A3170"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                    <p class="text-gray-700 font-light">
                      Explore Community Powered Data
                    </p>
                  </div>
                </div>
              </a>
              <!-- <div class="flex flex-row items-center gap-2">
                <svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3333 1.3335H25M25 1.3335V12.0002M25 1.3335L14.3333 12.0002L9 6.66683L1 14.6668"
                    stroke="#181818"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <p class="font-semibold">Indexes</p>
                  <p class="text-gray-700 text-md font-light">
                    Premium Independent Data
                  </p>
                  <p
                    class="mt-1 text-white text-sm py-1 w-fit rounded-lg px-2 bg-truflation-500"
                  >
                    Coming Soon!
                  </p>
                </div>
              </div> -->
              <a href="/solutions/widget">
                <div class="flex flex-row items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66658 17.3335H3.99992C2.52716 17.3335 1.33325 16.1396 1.33325 14.6668V4.00016C1.33325 2.5274 2.52716 1.3335 3.99992 1.3335H14.6666C16.1393 1.3335 17.3333 2.5274 17.3333 4.00016V6.66683M9.33325 22.6668H19.9999C21.4727 22.6668 22.6666 21.4729 22.6666 20.0002V9.3335C22.6666 7.86074 21.4727 6.66683 19.9999 6.66683H9.33325C7.86049 6.66683 6.66658 7.86074 6.66658 9.3335V20.0002C6.66658 21.4729 7.86049 22.6668 9.33325 22.6668Z"
                      stroke="#181818"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    <p class="font-semibold">Widget</p>
                    <p class="text-gray-700 text-md font-light">
                      Host Real-time Metrics
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li><a href="/methodology">Methodology</a></li>
        <li class="" tabindex="0">
          <a>
            Developers
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-4 text-left text-gray-800 bg-white">
            <li class="font-light text">
              <a href="/developers">Developer Center</a>
            </li>
            <li class="font-light text">
              <a
                target="”_blank”"
                href="https://whitepaper.truflation.com/dev-guides/quick-start"
                >Get Started Guide
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                    stroke="#0A3170"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li class="font-light">
              <a
                target="”_blank”"
                href="https://github.com/truflation/quickstart"
                >GitHub
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                    stroke="#0A3170"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </li>
        <li tabindex="0">
          <a>
            Explore
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-4 text-left text-gray-800 bg-white">
            <li class="font-light text"><a href="/blog">Blog</a></li>
            <li class="font-light">
              <a href="https://whitepaper.truflation.com/" target="_blank"
                >Whitepaper
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64297 3.75736L12.2426 3.75736M12.2426 3.75736L12.2426 10.357M12.2426 3.75736L3.75735 12.2426"
                    stroke="#0A3170"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li class="font-light"><a href="/about">About Us</a></li>
            <li class="font-light"><a href="/contact">Contact Us</a></li>
          </ul>
        </li>
        <li><a href="/resources">Resources</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
