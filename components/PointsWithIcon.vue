<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>

<template>
  <div class="flex flex-row gap-3">
    <div class="flex flex-row max-w-2xl gap-5 flex-wrap">
      <a href="#my-modal">
        <div class="flex flex-row">
          <img class="mr-2" src="../assets/img/Data-source-icon.svg" alt="" />
          <p class="text-sm">
            <span class="text-base text-[#0D58C6]">{{ data[0].name }}</span
            ><br />{{ data[0].description }}
          </p>
        </div>
      </a>

      <div class="flex flex-row">
        <img class="mr-2" src="../assets/img/factsheet-icon.svg" alt="" />
        <p class="text-sm">
          <span class="text-base text-[#0D58C6]">{{ data[1].name }}</span
          ><br />{{ data[1].description }}
        </p>
      </div>
      <div class="flex flex-row">
        <img class="mr-2" src="../assets/img/export-data-icon.svg" alt="" />
        <p class="text-sm">
          <span class="text-base text-[#0D58C6]">{{ data[2].name }}</span
          ><br />{{ data[2].description }}
        </p>
      </div>
      <div class="flex flex-row">
        <img class="mr-2" src="../assets/img/methadology-icon.svg" alt="" />
        <p class="text-sm">
          <span class="text-base text-[#0D58C6]">{{ data[3].name }}</span
          ><br />{{ data[3].description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
