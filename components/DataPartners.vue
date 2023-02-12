<script setup lang="ts">
const { left } = defineProps(["left"]);
</script>

<template>
  <div
    :class="{ 'items-center': !left }"
    class="flex flex-col container mx-auto"
  >
    <h1 class="text-3xl font-semibold mb-6">Data Partners</h1>
    <div :class="{ 'justify-center': !left }" class="flex flex-wrap gap-3">
      <img src="~/assets/img/AAA.png" alt="" />
      <img src="~/assets/img/carcurus.png" alt="" />
      <img src="~/assets/img/eia.png" alt="" />
      <img src="~/assets/img/JDpower.png" alt="" />
      <img src="~/assets/img/mcdonalds.png" alt="" />
      <img src="~/assets/img/nielsenIQ.png" alt="" />
      <img src="~/assets/img/OPIS.png" alt="" />
      <img src="~/assets/img/statista.png" alt="" />
      <img src="~/assets/img/trulia.png" alt="" />
      <img src="~/assets/img/yahoo.png" alt="" />
      <img src="~/assets/img/zillow.png" alt="" />
    </div>
  </div>
</template>
<style scoped></style>
