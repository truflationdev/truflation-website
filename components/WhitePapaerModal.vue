<script setup lang="ts">

</script>
<template>
     <head>
        <link href="https://api.fontshare.com/v2/css?f[]=work-sans@400&display=swap" rel="stylesheet">
    </head>
  <div id="my-modal" class="modal w-full h-full backdrop-blur-sm">
  <div class="modal-box bg-white px-8">
        <a href="#modal"><svg class="ml-auto mb-3" width="18" height="18" viewBox="0 0 14 14" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M1 1L13 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
    <img src="../assets/img/logo.svg" alt="">
    <div class="flex flex-row mt-4">
        <p class=" font-semibold text-black/80 text-xl">Reach out to us today to get the full Whitepaper</p> 
    </div>
    <div class="flex flex-row mt-6 ml-auto mb-6">
                    <form name="Subscribe Newsletter" class="flex flex-row" method="post" data-netlify="true" netlify-honeypot="bot-filter">
                    <input class="ml-auto w-80 px-4 py-3 border-gray-10 border" type="text" placeholder="John@gmail.com">
                    <a href="../assets/files/TF 2022 - Methodology Whitepaper - US - 2022-12.pdf" download><button class="btn bg-truflation-600 hover:bg-truflation-700">Submit <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
                    </svg></button></a>
                    </form>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
    