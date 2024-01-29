<script lang="ts" setup>
import Header from '~/components/common/Header/Header.vue'
import Footer from '~/components/common/Footer/Footer.vue'
</script>

<template>
  <div class="w-full h-screen">
    <div class="fixed top-0 w-full h-[76px] z-20">
      <Header />
    </div>
    <div class="relative top-[74px] w-full h-screen">
      <!--      <div class="w-full h-full px-28 py-16">-->
      <div>
        <slot />
        <div class="footer-layout-div">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-layout-div {
  position: relative;
  top: calc(100vh - -80px);
}
</style>
