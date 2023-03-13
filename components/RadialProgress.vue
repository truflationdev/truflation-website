<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { storeToRefs } from "pinia";
import { useDataStore } from "~~/store/stateStore";

const main = useDataStore();
const { value, fill, percent } = defineProps(["value", "fill", "percent"]);
const { selectedCategory } = storeToRefs(main);
</script>

<template>
  <div class="flex items-center justify-center">
    <circle-progress
      :percent="value"
      :size="80"
      :border-bg-width="4"
      :fill-color="fill"
      :border-width="4"
    />
    <p v-if="!percent" class="absolute flex">{{ value }}%</p>
  </div>

  <CenterRadial v-if="percent" />
</template>
<style scoped></style>
