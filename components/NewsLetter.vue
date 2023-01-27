<script setup lang="ts"></script>

<template>
  <div
    class="flex self-center flex-row gap-5 mx-32 flex-wrap mb-10 container sm:justify-center items-center py-10 px-20 rounded bg-neutral-100"
  >
    <div class="flex flex-col">
      <p class="text-base font-semibold">Subscribe to our newsletter</p>
      <p class="text-black/40">
        Get a summary of what we’ve shipped during the last <br />
        month, behind the scenes updates, and team picks.
      </p>
    </div>
    <div class="flex flex-col md:flex-row ml-auto">
      <form
        name="Subscribe Newsletter"
        class="flex flex-row flex-wrap"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-filter"
      >
        <input
          class="ml-auto w-auto md:w-80 px-4 mr-3 py-3 border-gray-10 border"
          type="text"
          placeholder="John@gmail.com"
        />
        <button class="btn">
          Subscribe
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
