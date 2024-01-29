<script lang="ts" setup></script>

<template>
  <div class="shadow-sm rounded pt-10 pb-10 pl-10 pr-10 recent-achievement-div">
    <!--    card title section-->
    <div class="grid grid-cols-1 justify-between items-center pb-3">
      <div>
        <h3 class="text-2xl">Recent Achievements</h3>
      </div>
    </div>
    <!--    next tasks section-->
    <div class="flex flex-row flex-wrap pb-3">
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
      <img alt="course logo" class="pr-3 pb-3 rounded-md" src="~/assets/images/js.png" />
    </div>
    <div class="pb-3">
      <div>
        <h3 class="text-lg pt-3 pb-6">Next task</h3>
      </div>
      <div class="flex flex-row items-center pt-1 pb-1">
        <img alt="course logo" class="pr-3 rounded-md" src="~/assets/images/js.png" />
        <div class="flex flex-col">
          <span class="font-medium"> Practice Makes Perfect </span>
          <span class="text-sm font-normal text-textGrayParent"> Win 200 challenges using one weapon </span>
        </div>
      </div>
      <div class="flex flex-row items-center pt-1 pb-1">
        <img alt="course logo" class="pr-3 rounded-md" src="~/assets/images/js.png" />
        <div class="flex flex-col">
          <span class="font-medium"> Practice Makes Perfect </span>
          <span class="text-sm font-normal text-textGrayParent"> Win 200 challenges using one weapon </span>
        </div>
      </div>
      <div class="flex flex-row items-center pt-1 pb-1">
        <img alt="course logo" class="pr-3 rounded-md" src="~/assets/images/js.png" />
        <div class="flex flex-col">
          <span class="font-medium"> Practice Makes Perfect </span>
          <span class="text-sm font-normal text-textGrayParent"> Win 200 challenges using one weapon </span>
        </div>
      </div>
      <div class="flex flex-row items-center pt-1 pb-1">
        <img alt="course logo" class="pr-3 rounded-md" src="~/assets/images/js.png" />
        <div class="flex flex-col">
          <span class="font-medium"> Practice Makes Perfect </span>
          <span class="text-sm font-normal text-textGrayParent"> Win 200 challenges using one weapon </span>
        </div>
      </div>
    </div>
    <!--    see more button section-->
    <div>
      <button class="border border-black rounded-md w-full pt-2 pb-2 pl-2 pr-2 text-center">See More</button>
    </div>
  </div>
</template>

<style scoped>
.recent-achievement-div {
  width: 500px;
}
</style>
