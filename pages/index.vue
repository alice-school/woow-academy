<script lang="ts" setup></script>

<template>
  <div class="w-full h-screen">
    <div class="w-full h-full content-main-about-div">
      <div class="header-up-dev h-20" />
      <AboutHeroSection />
    </div>
    <div class="w-3/4 h-full content-main-div">
      <div class="header-up-dev h-20" />
      <AboutHeroSection />
    </div>
  </div>
</template>
<style scoped>
.content-main-div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.header-up-dev {
  width: 100%;
  background-color: #8dc9f6;
}
</style>
