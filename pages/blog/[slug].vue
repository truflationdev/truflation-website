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
  <div class="mx-auto mb-10 max-w-[85%] flex flex-col items-center container">
    <img
      class="mt-20 max-w-2xl lg:max-w-5xl"
      :src="data.feature_image"
      alt=""
    />
    <div class="flex flex-col items-start max-w-4xl">
      <h1 class="mt-10 text-6xl">{{ data.title }}</h1>
      <p class="font-semibold text-xl mt-6 mb-10">
        <!-- Reading Time: {{ data.reading_time }} mins -->
        {{ data.published_at.slice(0, 10) }}
      </p>

      <div class="blog flex flex-col container mb-10" v-html="data.html"></div>
    </div>
  </div>
  <div class="flex">
    <NewsLetter />
  </div>
  <FooterComp />
</template>

<style scoped></style>
