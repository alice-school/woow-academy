<script lang="ts" setup>
import CoursesProgress from '~/components/profile/CoursesProgress.vue'
import RecentAchievements from '~/components/profile/RecentAchievements.vue'
import Certificates from '~/components/profile/Certificates.vue'

definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div class="w-full h-screen">
    <!--    profile page header start-->
    <div class="flex lg:flex-row md:flex-col:flex-col sm:w-full h-[400px] bg-gradient-to-r from-blue-800 to-blue-950">
      <!--      image section end-->
      <div class="flex w-full lg:w-1/2 md:w-full sm:w-full h-full p-5 justify-end items-center lg:pr-0 md:p-5 sm:p-5">
        <img
          alt="Profile Image"
          class="object-cover rounded-md w-[175px] lg:w-[300px] md:w-[250px] sm:w-[100px] aspect-square"
          src="@/assets/images/profile-image.jpg"
        />
      </div>
      <!--      image section end-->
      <!--      profile details section start-->
      <div
        class="flex flex-col w-full lg:w-1/2 md:w-full sm:w-full h-full p-5 justify-center items-start lg:pl-10 md:p-5 sm:p-5 text-white font-normal"
      >
        <div
          class="flex flex-col justify-around rounded-md w-[175px] lg:w-[300px] md:w-[250px] sm:w-[100px] h-[175px] lg:h-[300px] md:h-[250px] sm:h-[100px]"
        >
          <h1 class="text-lg lg:text-2xl md:text-xl sm:text-lg font-400">Madhusha Prasad Silva</h1>
          <span class="tracking-wider">20 Following 20 Followers</span>
          <span>30,339 XP</span>
          <span>Software Developer & Public speaker</span>
          <span>Sri Lanks · Lvl 16</span>
          <ul class="list-none">
            <li class="inline-block pr-2">github</li>
            <li class="inline-block pl-2 pr-2">linkedin</li>
            <li class="inline-block pl-0 lg:pl-2 md:pl-2 sm:pl-0 pr-2">stackoverflow</li>
          </ul>
        </div>
      </div>
      <!--      profile details section end-->
    </div>
    <!--    profile page header end-->
    <!--    profile page course content start-->
    <div
      class="flex-wrap lg:flex-row md:flex-col:flex-col w-full h-full px-10 lg:px-28 md:px-16 sm:px-16 py-16 justify-center items-start"
    >
      <!--      content header start -->
      <div
        class="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center bg-black text-white rounded-xl"
      >
        <div class="lg:absolute lg:left-40 font-normal text-2xl pt-3 lg:pt-0">
          Woow <br />
          Space
        </div>
        <img class="vector" src="../../assets/images/profilebg-img.png" />
        <div class="lg:absolute lg:right-40 flex flex-row justify-between pb-3 lg:pb-0">
          <button class="px-4 py-4 rounded-[10px] bg-gradient-to-r from-blue-800 to-blue-950 mr-2" type="button">
            Start Today
          </button>
          <button class="px-4 py-4 rounded-[10px] bg-gradient-to-r from-blue-800 to-blue-950 ml-2" type="button">
            Generate CV
          </button>
        </div>
      </div>
      <!--      content header end-->
      <!--      content start -->
      <div class="flex justify-around items-start mt-12">
        <CoursesProgress />
        <RecentAchievements />
      </div>

      <div class="flex justify-left items-start mt-2 pl-10 pr-10">
        <Certificates />
      </div>
      <!--      content end-->
    </div>
    <!--    profile page course content end-->
  </div>
</template>
<style scoped></style>
