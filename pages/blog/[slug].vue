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
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />

    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@truflation" />
    <Meta name="twitter:title" :content="data.title" />
    <Meta name="twitter:description" :content="data.excerpt" />
    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
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
