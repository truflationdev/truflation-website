<script setup lang="ts">
    const {isLight} = defineProps(['isLight'])

</script>

<template>
        <!-- <header class="flex flex-row items-center justify-between  py-8 px-16" :class="{'header-light': isLight, 'header-dark': !isLight} ">
            <a href="/">
                <img v-if="isLight" src="~/assets/img/logo-light.svg" alt="">
                <img v-if="!isLight" src="~/assets/img/logo.svg" alt=""></a>

            <ul class="flex flex-row gap-8">
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Methodology</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <button class="btn">Dashboard <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
            </svg></button>
        </header> -->
<header class="navbar" :class="{'header-light': isLight, 'header-dark': !isLight}">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="ml-10" href="/">
                <img v-if="isLight" src="~/assets/img/logo-light.svg" alt="">
                <img v-if="!isLight" src="~/assets/img/logo.svg" alt=""></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li tabindex="0">
        <a>
          Solutions
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-white text-black">
          <li>
            <a href="/">
                <div class="flex flex-row items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07324 11.6667H3.66667C5.13943 11.6667 6.33333 12.8606 6.33333 14.3333V15.6667C6.33333 17.1394 7.52724 18.3333 9 18.3333C10.4728 18.3333 11.6667 19.5272 11.6667 21V24.9268M7.66667 2.24736V4.33333C7.66667 6.17428 9.15905 7.66667 11 7.66667H11.6667C13.1394 7.66667 14.3333 8.86057 14.3333 10.3333C14.3333 11.8061 15.5272 13 17 13C18.4728 13 19.6667 11.8061 19.6667 10.3333C19.6667 8.86057 20.8606 7.66667 22.3333 7.66667L23.7526 7.66666M17 24.3172V21C17 19.5272 18.1939 18.3333 19.6667 18.3333H23.7526M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                    <p class=" font-semibold">Truflation Dashboard</p>
                    <p class=" font-light">The Global Inflation Dashboard</p>
                    </div>
                </div>
            </a>
            <a href="/solutions/marketplace">
                <div class="flex flex-row items-center gap-2">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6667 22.6668H27.3334V20.0002C27.3334 17.791 25.5426 16.0002 23.3334 16.0002C22.0593 16.0002 20.9243 16.5959 20.1918 17.524M20.6667 22.6668H7.33341M20.6667 22.6668V20.0002C20.6667 19.1252 20.4982 18.2896 20.1918 17.524M7.33341 22.6668H0.666748V20.0002C0.666748 17.791 2.45761 16.0002 4.66675 16.0002C5.94089 16.0002 7.07589 16.5959 7.80841 17.524M7.33341 22.6668V20.0002C7.33341 19.1252 7.50198 18.2896 7.80841 17.524M7.80841 17.524C8.79142 15.0682 11.1932 13.3335 14.0001 13.3335C16.807 13.3335 19.2087 15.0682 20.1918 17.524M18.0001 5.3335C18.0001 7.54263 16.2092 9.3335 14.0001 9.3335C11.7909 9.3335 10.0001 7.54263 10.0001 5.3335C10.0001 3.12436 11.7909 1.3335 14.0001 1.3335C16.2092 1.3335 18.0001 3.12436 18.0001 5.3335ZM26.0001 9.3335C26.0001 10.8063 24.8062 12.0002 23.3334 12.0002C21.8607 12.0002 20.6667 10.8063 20.6667 9.3335C20.6667 7.86074 21.8607 6.66683 23.3334 6.66683C24.8062 6.66683 26.0001 7.86074 26.0001 9.3335ZM7.33341 9.3335C7.33341 10.8063 6.13951 12.0002 4.66675 12.0002C3.19399 12.0002 2.00008 10.8063 2.00008 9.3335C2.00008 7.86074 3.19399 6.66683 4.66675 6.66683C6.13951 6.66683 7.33341 7.86074 7.33341 9.3335Z" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                    <p class=" font-semibold">Marketplace</p>
                    <p class=" text-gray-700 font-light">Explore Community Powered Data </p>
                    </div>
                </div>
            </a>
            <a href="/solutions/indexes">
                <div class="flex flex-row items-center gap-2">
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3333 1.3335H25M25 1.3335V12.0002M25 1.3335L14.3333 12.0002L9 6.66683L1 14.6668" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                    <p class=" font-semibold">Indexes</p>
                    <p class=" text-gray-700 text-md font-light">Premium Independent Data </p>
                    </div>
                </div>
            </a>
            <a href="/solutions/widget">
                <div class="flex flex-row items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66658 17.3335H3.99992C2.52716 17.3335 1.33325 16.1396 1.33325 14.6668V4.00016C1.33325 2.5274 2.52716 1.3335 3.99992 1.3335H14.6666C16.1393 1.3335 17.3333 2.5274 17.3333 4.00016V6.66683M9.33325 22.6668H19.9999C21.4727 22.6668 22.6666 21.4729 22.6666 20.0002V9.3335C22.6666 7.86074 21.4727 6.66683 19.9999 6.66683H9.33325C7.86049 6.66683 6.66658 7.86074 6.66658 9.3335V20.0002C6.66658 21.4729 7.86049 22.6668 9.33325 22.6668Z" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                    <p class=" font-semibold">Widget</p>
                    <p class=" text-gray-700 text-md font-light">Host Real-time Metrics</p>
                    </div>
                </div>
            </a>
            </li>
        </ul>
      </li>
      <li><a href="/methodology">Methodology</a></li>
      <li class="" tabindex="0">
        <a>
          Developers
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-4 text-left text-gray-800 bg-white">
            <h1 class="font-semibold">Developers</h1>
          <li class=" font-light text" ><a>Get Started Guide</a></li>
          <li class=" font-light" ><a>Methodology</a></li>
          <li class=" font-light" ><a>Join Community</a></li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Resources
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-4 text-left text-gray-800 bg-white">
            <h1 class="font-semibold">Resources</h1>
          <li class=" font-light text" ><a>About Us</a></li>
          <li class=" font-light" ><a>Whitepapers</a></li>
          <li class=" font-light" ><a>News Coverage</a></li>
          <li class=" font-light" ><a>Youtube</a></li>
          <li class=" font-light" ><a>Blog</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/">
    <button class="btn">Dashboard <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73441 1.13275C7.04683 0.820333 7.55336 0.820333 7.86578 1.13275L12.6658 5.93275C12.9782 6.24517 12.9782 6.7517 12.6658 7.06412L7.86578 11.8641C7.55336 12.1765 7.04683 12.1765 6.73441 11.8641C6.42199 11.5517 6.42199 11.0452 6.73441 10.7328L10.1687 7.29844L0.900098 7.29844C0.458271 7.29844 0.100098 6.94026 0.100098 6.49844C0.100098 6.05661 0.458271 5.69844 0.900098 5.69844H10.1687L6.73441 2.26412C6.42199 1.9517 6.42199 1.44517 6.73441 1.13275Z" fill="white"/>
            </svg></button>
        </a>
  </div>
</header>
</template>

<style scoped>

</style>
    