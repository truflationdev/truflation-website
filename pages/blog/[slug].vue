<script setup lang="ts">
import { getSinglePost } from "../../server/api/ghostPosts";
const { slug } = useRoute().params;

const post = await getSinglePost(slug);
</script>

<template>
  <head>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
  </head>

  <Banner />
  <div class="mx-auto mb-10 flex flex-col max-w-6xl">
    <img class="mt-20" :src="post.feature_image" alt="" />
    <h1 class="my-10 font-bold text-4xl">{{ post.title }}</h1>
    <div class="blog" v-html="post.html"></div>
  </div>
  <div class="flex">
    <NewsLetter />
  </div>
  <FooterComp />
</template>

<style scoped></style>
