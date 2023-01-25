<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

const { value, fill, percent } = defineProps(["value", "fill", "percent"]);
</script>

<template>
  <div class="flex items-center justify-center">
    <circle-progress
      :percent="value"
      :size="80"
      :border-bg-width="8"
      :show-percent="percent"
      :fill-color="fill"
      :border-width="8"
    />
    <p v-if="!percent" class="absolute flex">{{ value }}%</p>
  </div>
</template>
<style scoped></style>
