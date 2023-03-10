<script setup lang="ts"></script>

<template>
  <div
    class="flex self-center flex-col px-10 lg:px-[120px] lg:flex-row gap-5 w-full sm:justify-center md:items-center py-20 bg-gradient-to-r from-[#1A2B6B] to-[#6F8BEF]"
  >
    <div class="flex gap-3 flex-col">
      <p class="text-4xl max-w-xs md:max-w-lg text-white font-semibold">
        Stay updated on the latest Truflation news
      </p>
      <a href="https://t.me/truflation" target="_blank"
        ><p class="text-white underline">Our Join the Community</p></a
      >
    </div>
    <div class="flex text-center sm:text-left flex-col sm:flex-row lg:ml-auto">
      <form
        name="Subscribe Newsletter"
        class="flex flex-col sm:flex-row gap-3"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-filter"
      >
        <input
          class="md:ml-auto w-auto md:w-80 max-w-[300px] rounded-lg px-4 mr-3 py-3 border-gray-10 border"
          type="email"
          placeholder="John@gmail.com"
          name="email"
        />
        <button class="btn">
          Sign up
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
