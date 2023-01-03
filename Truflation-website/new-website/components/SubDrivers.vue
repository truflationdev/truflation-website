<script setup lang="ts">
import { CategoryData } from './categoryTypes';


const {category} = defineProps(['category'])
const data: CategoryData = category.list[0]

</script>

<template>
    <div class="flex flex-col container mx-auto h-max mt-8">
        <div class="flex flex-row">
            <div class=" font-light w-2/3">
                <h2 class=" font-semibold text-lg">{{ data.categoryType }} Category Drivers</h2>
                {{data.about }}
            </div>
        </div>
        <div class="flex flex-row">
            <DriversChart :title="`Rate Trend`" />
        </div>
    </div>
</template>

<style scoped>

</style>