<script setup lang="ts">
import { VideoLinks } from "~~/components/categoryTypes";
import { blogData } from "../static/data/staffData";

const videos: VideoLinks[] = [
  {
    title: "Truflation + Discourse",
    link: "https://www.youtube.com/embed/p07UF8aRmfQ",
  },
  {
    title: "Cracking the Inflation Code",
    link: "https://www.youtube.com/embed/QRTIV10Iw-I",
  },
  {
    title: "Truflation Highlighted on Crypto Banter",
    link: "https://www.youtube.com/embed/kvWBwVzKSac",
  },
];

useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-9RC5KEMBYY",
      async: true,
    },
    {
      innerHTML: ` window.dataLayer = window.dataLayer || []; function
    gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
    'G-9RC5KEMBYY', {page_path: window.location.pathname});`,
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Head>
    <title>Contact Us | Truflation</title>
    <link
      href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap"
      rel="stylesheet"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@truflation" />
    <Meta name="twitter:title" content="Contact Us | truflation" />

    <Meta
      name="twitter:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/djy27wpqd/image/upload/v1676338258/2023-02-14_09.00.20_cwqgmm.jpg"
    />
  </Head>
  <div class="bg-[url('assets/img/solutions-background.svg')] bg-cover w-full">
    <Banner :isLight="true" />
    <div
      class="flex flex-col container mx-auto p-8 gap-5 rounded shadow-md bg-white max-w-xl my-20"
    >
      <h1 class="text-3xl">Contact Us</h1>
      <form
        class="flex flex-col gap-4"
        name="Main Contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-filter"
      >
        <!-- <div class="contact-success"><strong>Success!</strong> We got your message and will reply shortly.</div> -->
        <div class="contact-block half">
          <input
            required
            class="p-3 border rounded-xl w-full bg-gray-50"
            type="text"
            placeholder="First name"
            name="first-name"
          />
        </div>
        <div class="contact-block half">
          <input
            required
            class="p-3 border rounded-xl w-full bg-gray-50"
            type="text"
            placeholder="Last name"
            name="last-name"
          />
        </div>
        <div class="contact-block">
          <input
            required
            class="p-3 border rounded-xl w-full bg-gray-50"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div class="contact-block">
          <input
            class="p-3 border rounded-xl w-full bg-gray-50"
            type="text"
            placeholder="Company or organization"
            name="company-name"
          />
        </div>
        <div class="contact-block">
          <textarea
            required
            class="p-3 border rounded-xl w-full bg-gray-50"
            rows="7"
            placeholder="Message."
            name="message"
          ></textarea>
        </div>
        <input class="btn" type="submit" value="Send" />
      </form>
    </div>
    <FooterComp />
  </div>
</template>

<style scoped></style>
