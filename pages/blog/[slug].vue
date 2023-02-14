<script setup lang="ts">
const { slug } = useRoute().params;

const { data } = await useFetch(`/api/${slug}`);
</script>

<template>
  <Head>
    <title>
      {{ `${data.title} | Truflation` }}
    </title>
    <Meta :name="`${data.title} | Truflation`" :content="data.title" />
    <Meta property="og:image" :content="data.feature_image" />

    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </Head>

  <Banner />
  <div class="lg:mx-auto mb-10 flex flex-col container">
    <img class="mt-10" :src="data.feature_image" alt="" />
    <h1 class="mt-10 font-bold px-10 text-4xl">{{ data.title }}</h1>
    <p class="font-semibold px-10 text-xl mt-2 mb-10">
      <!-- Reading Time: {{ data.reading_time }} mins -->
      {{ data.published_at.slice(0, 10) }}
    </p>
    <div class="blog container px-10 mb-10" v-html="data.html"></div>
  </div>
  <div class="flex">
    <NewsLetter />
  </div>
  <FooterComp />
</template>

<style scoped></style>
