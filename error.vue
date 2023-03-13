<script setup lang="ts"></script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="flex flex-col justify-center">
    <div class="">
      <Banner :isLight="false" />
    </div>
    <div class="flex flex-col items-center justify-center h-[60vh]">
      <h1 class="text-[96px] font-medium">Page Not Found</h1>
      <p class="text-[18px]">
        It looks like this page doesn’t exist.
        <a class="text-truflation-500" href="/"> Go back home</a> or
        <a class="text-truflation-500" href="/contact"> contact us</a>
        to report and issue.
      </p>
    </div>
    <NewsLetter />
    <FooterComp />
  </div>
</template>
<style scoped></style>
