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
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </Head>

  <Banner />
  <div class="mx-auto mb-10 flex flex-col max-w-6xl">
    <img class="mt-20" :src="data.feature_image" alt="" />
    <h1 class="mt-10 font-bold text-4xl">{{ data.title }}</h1>
    <p class="font-semibold text-lg mt-2 mb-10">
      Reading Time: {{ data.reading_time }} mins
      {{ data.published_at.slice(0, 10) }}
    </p>
    <div class="blog" v-html="data.html"></div>
  </div>
  <div class="flex">
    <NewsLetter />
  </div>
  <FooterComp />
</template>

<style scoped></style>
