<template>
  <header>
    <nav class="border-gray-200 px-4 lg:px-6 py-2.5 z-10">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <NuxtLink class="flex items-center" to="/">
          <span class="self-center pb-5 text-xl font-semibold whitespace-nowrap dark:text-white text-white"
            >Woow <br />
            Space</span
          >
        </NuxtLink>
        <div class="flex items-center justify-between lg:order-2 pb-5">
          <div class="flex justify-center items-center w-fit pl-8 pr-8">
            <div>
              <div class="relative ml-3">
                <div>
                  <button
                    id="point-details"
                    aria-expanded="false"
                    aria-haspopup="false"
                    @click="(dropdownOpen.pointCard = !dropdownOpen.pointCard), (dropdownOpen.profileCard = false)"
                  >
                    <img alt="Flowbite Logo" class="mr-3 h-6 sm:h-9" src="../../../assets/images/points-icon.png" />
                    <h5 class="text-white">56473</h5>
                  </button>
                </div>

                <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div
                  :class="dropdownOpen.pointCard ? 'block' : 'hidden'"
                  aria-labelledby="point-details"
                  aria-orientation="vertical"
                  class="absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  tabindex="-1"
                >
                  <!--                 point details dev-->
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative ml-3">
              <div>
                <button
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="false"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  type="button"
                  @click="(dropdownOpen.profileCard = !dropdownOpen.profileCard), (dropdownOpen.pointCard = false)"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    alt=""
                    class="h-8 w-8 rounded-full"
                    src="https://avatars.githubusercontent.com/u/50085447?s=96&v=4"
                  />
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                :class="dropdownOpen.profileCard ? 'block' : 'hidden'"
                aria-labelledby="user-menu-button"
                aria-orientation="vertical"
                class="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <NuxtLink
                  id="user-menu-item-0"
                  class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  to="/profile"
                >
                  <span>Your Profile</span><br />
                  <span class="block pb-2 text-sm text-gray-700 font-bold">Madhusha Prasad</span>
                </NuxtLink>
                <a
                  id="user-menu-item-0"
                  class="block px-4 pb-2 text-sm text-gray-700"
                  href="#"
                  role="menuitem"
                  tabindex="-1"
                  >Generate CV</a
                >
                <a
                  id="user-menu-item-1"
                  class="block px-4 py-2 text-sm text-gray-700"
                  href="#"
                  role="menuitem"
                  tabindex="-1"
                  >Settings</a
                >
                <NuxtLink
                  id="user-menu-item-2"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  to="/"
                  >Sign out
                </NuxtLink>
              </div>
            </div>
          </div>
          <button
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            data-collapse-toggle="mobile-menu-2"
            type="button"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu-2" class="pb-5 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white">
            <li>
              <NuxtLink
                aria-current="page"
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                to="/"
                >Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                to="/course"
                >Course
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >Code Playground</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                to="/leaderboard"
                >Top Learners
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >FAQ</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >Contact</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >Terms of Use</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white hover:text-gray-300"
                href="#"
                >Privacy Policy</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const dropdownOpen = reactive({
  profileCard: false,
  pointCard: false,
})
</script>

<style scoped>
header {
  background-image: url(../../../assets/images/HeaderBackgroung.svg);
  background-repeat: no-repeat;
  background-position: 80% 90%;
  background-size: cover;
}
</style>
