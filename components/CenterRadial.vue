<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import { storeToRefs } from "pinia";
import { useDataStore } from "~~/store/stateStore";

const main = useDataStore();
const { value, fill, percent } = defineProps(["value", "fill", "percent"]);
const { selectedCategory } = storeToRefs(main);
</script>

<template>
  <div class="absolute">
    <p class="">
      {{ main?.getByCategoryType(selectedCategory)?.relativeImportance }}%
    </p>
  </div>
</template>
<style scoped></style>
