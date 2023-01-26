<script setup lang="ts"></script>
<template>
  <head>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </head>
  <div
    id="my-modal"
    class="modal w-full h-full bg-black/60 z-0 backdrop-blur-lg"
  >
    <div class="py-3 px-8 relative w-4/5">
      <a class="absolute z-20 -top-5 -right-2" href="#modal"
        ><svg
          class="ml-auto mb-3"
          width="30"
          height="30"
          viewBox="0 0 14 14"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L13 1M1 1L13 13"
            stroke="#C4D0D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <div class="">
        <iframe
          width="100%"
          height="615"
          src="https://www.youtube.com/embed/tCOBDr8rexQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
