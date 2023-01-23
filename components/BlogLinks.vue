<script setup lang="ts">
    const { videos, title} = defineProps(['data', 'title', 'videos'])
</script>

<template>
   <div class="mx-auto flex gap-10 justify-center text-center items-center flex-col container">
                <h1 class="text-4xl font-medium text-slate-700">{{ title }}</h1>
                <div class="grid grid-cols-1 gap-3 xl:grid-cols-3 w-full" >
                    <div v-for="video in videos"  class="flex flex-col text-center">
                        <div class=" aspect-w-15 aspect-h-9">
                            <iframe :src="video.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <p class=" text-lg mt-1 font-semibold">{{ video.title }}</p>
                    </div>
                </div>
                <!-- <button class="btn">View all  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
                </svg></button> -->
    </div>
</template>

<style scoped>

</style>