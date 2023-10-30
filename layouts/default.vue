<script lang="ts" setup></script>

<template>
  <div class="w-full h-auto bg-orange-400">
    <!--Header section start-->
    <div class="header-section w-full h-20 fixed top-0 z-20">
      <Header />
    </div>
    <!--  Header section end-->
    <!--  main section start-->
    <div class="content-section w-full bg-green-600 h-auto -z-20">
      <!--    body section-->
      <slot />
    </div>
    <!--  main section end-->
    <!--  footer section start-->
    <div class="footer-section w-full bg-green-600 max-h-6 absolute bottom-0">
      <Footer />
    </div>
    <!--  footer section end-->
  </div>
</template>

<style scoped></style>
