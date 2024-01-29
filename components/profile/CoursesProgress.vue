<script lang="ts" setup></script>

<template>
  <div class="shadow-sm rounded pt-10 pb-10 pl-10 pr-10 courses-progress-div">
    <!--    card title section-->
    <div class="grid grid-cols-2 justify-between items-center pb-3">
      <div>
        <h3 class="text-2xl">Courses Progress</h3>
      </div>
      <div class="text-right">
        <h6 class="text-lg text-textLink cursor-pointer">Manage</h6>
      </div>
    </div>
    <!--    course status section-->
    <div class="w-full flex flex-row justify-between items-center pb-3">
      <div>
        <img alt="course logo" src="~/assets/images/js.png" />
      </div>
      <div class="grid w-40 grid-rows-2 text-left mr-24">
        <span class="text-base">Javascript</span>
        <span class="text-base text-textGrayParent">Complete</span>
      </div>
      <div>
        <button>
          <img alt="" src="~/assets/icons/playButtonIcon.png" />
        </button>
      </div>
    </div>
    <div class="w-full flex flex-row justify-between items-center pb-3">
      <div>
        <img alt="course logo" src="~/assets/images/html.png" />
      </div>
      <div class="grid w-40 grid-rows-2 text-left mr-24">
        <span class="text-base">HTML</span>
        <span class="text-base text-textGrayParent">Complete</span>
      </div>
      <div>
        <button>
          <img alt="" src="~/assets/icons/playButtonIcon.png" />
        </button>
      </div>
    </div>
    <div class="w-full flex flex-row justify-between items-center pb-3">
      <div>
        <img alt="course logo" src="~/assets/images/cr-python.png" />
      </div>
      <div class="grid w-40 grid-rows-2 text-left mr-24">
        <span class="text-base">Python for Data Science</span>
        <span class="text-base text-textGrayParent">Complete</span>
      </div>
      <div>
        <button>
          <img alt="" src="~/assets/icons/playButtonIcon.png" />
        </button>
      </div>
    </div>
    <!--    Browse Courses button section-->
    <div>
      <button class="border border-black rounded-md w-full pt-2 pb-2 pl-2 pr-2 text-center">Browse Courses</button>
    </div>
  </div>
</template>

<style scoped>
.courses-progress-div {
  width: 500px;
}
</style>
