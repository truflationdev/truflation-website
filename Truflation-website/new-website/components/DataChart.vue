<template>
    <div class="flex flex-row container mx-auto mt-5">
        <div class="flex flex-col bg-gradient-to-r from-[#3573E7] to-[#2463DB] p-8">
            <div class="flex flex-row gap-3 items-center">
               <div class="flex items-center rounded-lg px-3 py-3 w-fit h-fit bg-[#FFFFFF14]">
                🇺🇸
               </div> 
               <p class=" text-white text-lg font-semibold">{{locationOptions.country}} Truflation <br>
                <span class=" text-sm font-light">15 nov 2022</span></p>
                <select class=" bg-[#FFFFFF14] text-white px-3 py-3 rounded-lg item w-fit h-fit" name="" id="">
                    <option value="1y">1Y</option>
                </select>
            </div>
            <div class="flex flex-row gap-3 items-center">
               <div class="flex items-center rounded-lg px-3 py-3 w-fit h-fit bg-[#FFFFFF14]">
                🇺🇸
               </div> 
               <p class=" text-white text-lg font-semibold">{{locationOptions.country}} Truflation <br>
                <span class=" text-sm font-light">15 nov 2022</span></p>
                <select class=" bg-[#FFFFFF14] text-white px-3 py-3 rounded-lg item w-fit h-fit" name="" id="">
                    <option value="1y">1Y</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { locationOptions } = defineProps(['locationOptions'])
</script>

<style scoped>

</style>